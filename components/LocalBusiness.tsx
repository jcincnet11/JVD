import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const venueKeys = ['bar', 'barbershop', 'beauty', 'foodtruck', 'boutique'] as const;

export default function LocalBusiness() {
  const t = useTranslations('local');

  return (
    <section id="local" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent uppercase tracking-widest mb-4">
              {t('label')}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal max-w-3xl mx-auto">
              {t('heading')}
            </h2>
            <p className="mt-4 text-warm-gray text-lg max-w-2xl mx-auto">
              {t('subheading')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {venueKeys.map((key) => (
            <ScrollReveal key={key}>
              <div className="bg-cream border border-border rounded-xl p-8 hover:border-accent hover:-translate-y-0.5 transition-all duration-300 h-full">
                <span className="text-3xl" role="img" aria-label={t(`venues.${key}.name`)}>
                  {t(`venues.${key}.icon`)}
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal mt-3">
                  {t(`venues.${key}.name`)}
                </h3>
                <p className="mt-2 text-warm-gray leading-relaxed">
                  {t(`venues.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14 rounded-xl bg-accent-dark text-white text-center py-10 px-6">
            <p className="text-lg font-medium">{t('cta')}</p>
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
