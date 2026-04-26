import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const bundleKeys = ['localPresence', 'launch', 'shopify', 'identity', 'retainer'] as const;

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section id='pricing' className='bg-cream px-4 py-20'>
      <div className='mx-auto max-w-6xl'>
        <ScrollReveal>
          <div className='mb-16 text-center'>
            <h2 className='font-serif text-3xl font-bold text-charcoal sm:text-4xl'>
              {t('heading')}
            </h2>
            <p className='mx-auto mt-4 max-w-2xl text-lg text-warm-gray'>{t('subheading')}</p>
          </div>
        </ScrollReveal>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          {bundleKeys.map((key) => {
            const covered = t.raw(`bundles.${key}.covered`) as string[];

            return (
              <ScrollReveal key={key}>
                <div className='relative h-full rounded-xl border border-border bg-white p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent'>
                  {key === 'localPresence' && (
                    <span className='absolute right-4 top-4 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent'>
                      {t(`bundles.${key}.badge`)}
                    </span>
                  )}
                  <h3 className='font-serif text-xl font-bold text-charcoal'>
                    {t(`bundles.${key}.name`)}
                  </h3>
                  <p className='mt-4 leading-relaxed text-warm-gray'>
                    {t(`bundles.${key}.outcome`)}
                  </p>
                  <div className='mt-6 border-t border-border pt-6'>
                    <p className='mb-4 text-xs font-medium uppercase tracking-wide text-accent'>
                      {t('coveredLabel')}
                    </p>
                    <ul className='space-y-3'>
                      {covered.map((item, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-warm-gray'>
                          <svg
                            className='mt-0.5 h-4 w-4 flex-shrink-0 text-accent'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M5 13l4 4L19 7'
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
          <div className='mt-14 rounded-xl bg-accent-dark px-6 py-10 text-center text-white'>
            <p className='text-lg font-medium'>{t('ctaQuestion')}</p>
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
