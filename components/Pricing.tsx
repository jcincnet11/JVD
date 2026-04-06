import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const bundleKeys = ['launch', 'brand', 'shopify', 'identity'] as const;
const retainerKeys = ['maintenance', 'growth', 'full'] as const;

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              {t('heading')}
            </h2>
            <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
              {t('subheading')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {bundleKeys.map((key) => {
            const features = t.raw(`bundles.${key}.features`) as string[];

            return (
              <ScrollReveal key={key}>
                <div
                  className={`bg-white border rounded-xl p-8 h-full relative ${
                    key === 'brand' ? 'border-accent ring-1 ring-accent/20' : 'border-border'
                  } hover:border-accent hover:-translate-y-0.5 transition-all duration-300`}
                >
                  {key === 'brand' && (
                    <span className="absolute top-4 right-4 bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                      {t('mostRequested')}
                    </span>
                  )}
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {t(`bundles.${key}.name`)}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-charcoal">
                      {t(`bundles.${key}.price`)}
                    </span>
                    <span className="text-warm-gray text-sm">
                      {t(`bundles.${key}.timeline`)}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {features.map((feature, i) => (
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-warm-gray">
                      <span className="font-medium">{t('addons')}:</span>{' '}
                      {t(`bundles.${key}.addons`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <h3 className="font-serif text-2xl font-bold text-charcoal text-center mb-8">
            {t('retainers.heading')}
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {retainerKeys.map((key) => (
            <ScrollReveal key={key}>
              <div className="bg-white border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 h-full">
                <h4 className="font-serif text-lg font-bold text-charcoal">
                  {t(`retainers.${key}.name`)}
                </h4>
                <p className="text-accent font-bold mt-1">
                  {t(`retainers.${key}.price`)}
                </p>
                <p className="mt-3 text-sm text-warm-gray leading-relaxed">
                  {t(`retainers.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
