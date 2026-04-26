import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const venueKeys = ['bar', 'barbershop', 'beauty', 'foodtruck', 'boutique'] as const;

export default function LocalBusiness() {
  const t = useTranslations('local');

  return (
    <section id='local' className='bg-white px-4 py-20'>
      <div className='mx-auto max-w-5xl'>
        <ScrollReveal>
          <div className='mb-14 text-center'>
            <p className='mb-4 text-xs font-medium uppercase tracking-widest text-accent'>
              {t('label')}
            </p>
            <h2 className='mx-auto max-w-3xl font-serif text-3xl font-bold text-charcoal sm:text-4xl'>
              {t('heading')}
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-lg text-warm-gray'>{t('subheading')}</p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {venueKeys.map((key) => (
            <ScrollReveal key={key}>
              <div className='h-full rounded-xl border border-border bg-cream p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent'>
                <span className='text-3xl' aria-hidden='true'>
                  {t(`venues.${key}.icon`)}
                </span>
                <h3 className='mt-3 font-serif text-xl font-bold text-charcoal'>
                  {t(`venues.${key}.name`)}
                </h3>
                <p className='mt-2 leading-relaxed text-warm-gray'>
                  {t(`venues.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className='mt-14 rounded-xl bg-accent-dark px-6 py-10 text-center text-white'>
            <p className='text-lg font-medium'>{t('cta')}</p>
            <a
              href='#contact'
              className='mt-4 inline-block rounded-lg bg-white px-8 py-3 font-medium text-accent-dark transition-colors hover:bg-cream focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-dark'
            >
              {t('ctaButton')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
