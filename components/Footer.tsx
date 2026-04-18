import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark border-t border-white/10 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/70 text-sm">{t('location')}</p>
          <a
            href="https://github.com/jvincentdigital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-cream transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            GitHub
          </a>
        </div>
        <p className="text-center text-cream/40 text-xs mt-6">{t('copyright')}</p>
      </div>
    </footer>
  );
}
