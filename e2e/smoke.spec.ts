import { test, expect } from '@playwright/test';

test.describe('marketing site smoke', () => {
  test('root redirects to /en and renders nav', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.getByRole('navigation').first()).toBeVisible();
  });

  test('/es renders Spanish copy', async ({ page }) => {
    await page.goto('/es');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('case study page loads', async ({ page }) => {
    await page.goto('/en/work/imperfect-gaming');
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('no console errors on home page', async ({ page }) => {
    const errors: string[] = [];
    const ignored = ['/_vercel/insights', '/_vercel/speed-insights'];
    const isIgnored = (s: string) => ignored.some((sub) => s.includes(sub));

    page.on('console', (msg) => {
      if (msg.type() !== 'error') return;
      const url = msg.location()?.url ?? '';
      const text = msg.text();
      if (isIgnored(url) || isIgnored(text)) return;
      errors.push(`${text} (${url})`);
    });
    await page.goto('/en');
    await page.waitForLoadState('networkidle');
    expect(errors, errors.join('\n')).toEqual([]);
  });

  test('contact section anchor scrolls into view', async ({ page }) => {
    await page.goto('/en');
    await page.locator('a[href="#contact"]').first().click();
    await expect(page.locator('#contact')).toBeInViewport();
  });
});
