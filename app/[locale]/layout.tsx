import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const locales = ['en', 'es'];

export const metadata: Metadata = {
  title: 'John Vincent Digital — Web Design & Brand Strategy',
  description:
    'AI-powered web design, e-commerce, and brand strategy for Puerto Rico businesses and growing brands.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-cream text-charcoal antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
