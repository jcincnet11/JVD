import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-serif font-bold text-accent">404</p>
        <h1 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-charcoal">
          {t('heading')}
        </h1>
        <p className="mt-3 text-warm-gray text-lg">{t('description')}</p>
        <a
          href="/"
          className="inline-block mt-8 px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          {t('backHome')}
        </a>
      </div>
    </div>
  );
}
