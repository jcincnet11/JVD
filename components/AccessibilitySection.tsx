import { useTranslations, useLocale } from 'next-intl';
import ScrollReveal from './ScrollReveal';
import PricingTierCard from './PricingTierCard';

const tierKeys = ['tier1', 'tier2', 'tier3'] as const;

export default function AccessibilitySection() {
  const t = useTranslations('accessibility');
  const locale = useLocale();
  const ctaHref = `/${locale}?service=accessibility#contact`;

  return (
    <section id="accessibility" className="bg-white py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
              {t('label')}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal max-w-3xl mx-auto">
              {t('heading')}
            </h2>
            <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
              {t('subheading')}
            </p>
            <p className="mt-4 text-warm-gray max-w-2xl mx-auto leading-relaxed">
              {t('intro')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-sm text-warm-gray text-center max-w-3xl mx-auto mb-12 italic">
            {t('trustSignal')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tierKeys.map((key, i) => (
            <ScrollReveal key={key}>
              <PricingTierCard
                name={t(`${key}.name`)}
                tagline={t(`${key}.tagline`)}
                features={t.raw(`${key}.features`) as string[]}
                ctaLabel={t(`${key}.cta`)}
                ctaHref={ctaHref}
                featured={i === 1}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14 rounded-xl bg-cream border border-border text-center py-10 px-6">
            <p className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              {t('bottomCtaHeading')}
            </p>
            <p className="mt-2 text-warm-gray">{t('bottomCtaSubheading')}</p>
            <a
              href={ctaHref}
              className="inline-block mt-6 px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {t('bottomCtaButton')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
