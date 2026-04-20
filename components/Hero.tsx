import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="bg-cream pt-20 pb-16 sm:pt-28 sm:pb-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
          {t('headline')}
        </h1>
        <svg
          className="w-48 h-3 mx-auto mt-4"
          viewBox="0 0 200 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9C40 3 80 1 100 5C120 9 160 3 199 7"
            stroke="#00A86B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-6 text-lg sm:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
          {t('subhead')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {t('cta_primary')}
          </a>
          <a
            href="#work"
            className="text-charcoal font-medium underline underline-offset-4 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            {t('cta_secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
