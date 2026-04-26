import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../components/Contact';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams(),
}));

vi.mock('../components/ScrollReveal', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const fillField = async (label: RegExp | string, value: string) => {
  const input = screen.getByLabelText(label);
  await userEvent.clear(input);
  await userEvent.type(input, value);
};

describe('Contact form', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('shows validation errors for empty / short / invalid fields', async () => {
    render(<Contact />);
    await userEvent.click(screen.getByRole('button', { name: /form\.submit/i }));

    expect(await screen.findByText('form.name.error')).toBeInTheDocument();
    expect(screen.getByText('form.email.error')).toBeInTheDocument();
    expect(screen.getByText('form.message.error')).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('rejects malformed emails', async () => {
    render(<Contact />);
    await fillField(/form\.name\.label/, 'Jane');
    await fillField(/form\.email\.label/, 'not-an-email');
    await fillField(/form\.message\.label/, 'A long enough message.');
    await userEvent.click(screen.getByRole('button', { name: /form\.submit/i }));

    expect(await screen.findByText('form.email.error')).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('submits successfully and shows the success state', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: true });
    render(<Contact />);

    await fillField(/form\.name\.label/, 'Jane Doe');
    await fillField(/form\.email\.label/, 'jane@example.com');
    await fillField(/form\.message\.label/, 'Hello, I would like a website.');
    await userEvent.click(screen.getByRole('button', { name: /form\.submit/i }));

    expect(await screen.findByText('successHeading')).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
    const body = JSON.parse((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body);
    expect(body.name).toBe('Jane Doe');
    expect(body._replyto).toBe('jane@example.com');
    expect(body._gotcha).toBe('');
  });

  it('shows error state when the server rejects', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: false });
    render(<Contact />);

    await fillField(/form\.name\.label/, 'Jane Doe');
    await fillField(/form\.email\.label/, 'jane@example.com');
    await fillField(/form\.message\.label/, 'Hello, I would like a website.');
    await userEvent.click(screen.getByRole('button', { name: /form\.submit/i }));

    expect(await screen.findByText('form.generic_error')).toBeInTheDocument();
  });

  it('shows error state on network failure', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('offline'));
    render(<Contact />);

    await fillField(/form\.name\.label/, 'Jane Doe');
    await fillField(/form\.email\.label/, 'jane@example.com');
    await fillField(/form\.message\.label/, 'Hello, I would like a website.');
    await userEvent.click(screen.getByRole('button', { name: /form\.submit/i }));

    expect(await screen.findByText('form.generic_error')).toBeInTheDocument();
  });

  it('forwards the honeypot value when set (so spam can be filtered server-side)', async () => {
    (fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ ok: true });
    render(<Contact />);

    const gotcha = document.getElementById('contact-gotcha') as HTMLInputElement;
    await userEvent.type(gotcha, 'spammy');

    await fillField(/form\.name\.label/, 'Jane Doe');
    await fillField(/form\.email\.label/, 'jane@example.com');
    await fillField(/form\.message\.label/, 'Hello, I would like a website.');
    await userEvent.click(screen.getByRole('button', { name: /form\.submit/i }));

    await waitFor(() => expect(fetch).toHaveBeenCalled());
    const body = JSON.parse((fetch as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1].body);
    expect(body._gotcha).toBe('spammy');
  });
});
