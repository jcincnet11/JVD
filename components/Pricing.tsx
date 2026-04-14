import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const bundleKeys = ['localPresence', 'launch', 'shopify', 'identity', 'retainer'] as const;

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              {t('heading')}
            </h2>
            <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
              {t('subheading')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {bundleKeys.map((key) => {
            const covered = t.raw(`bundles.${key}.covered`) as string[];

            return (
              <ScrollReveal key={key}>
                <div className="bg-white border border-border rounded-xl p-10 h-full hover:border-accent hover:-translate-y-0.5 transition-all duration-300 relative">
                  {key === 'localPresence' && (
                    <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {t(`bundles.${key}.badge`)}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {t(`bundles.${key}.name`)}
                  </h3>
                  <p className="mt-4 text-warm-gray leading-relaxed">
                    {t(`bundles.${key}.outcome`)}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs font-medium text-accent uppercase tracking-wide mb-4">
                      {t('coveredLabel')}
                    </p>
                    <ul className="space-y-3">
                      {covered.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-warm-gray">
                          <svg
                            className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-14 rounded-xl bg-accent-dark text-white text-center py-10 px-6">
            <p className="text-lg font-medium">{t('ctaQuestion')}</p>
            <a
              href="#contact"
              className="inline-block mt-4 px-8 py-3 bg-white text-accent-dark font-medium rounded-lg hover:bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-dark"
            >
              {t('ctaButton')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
