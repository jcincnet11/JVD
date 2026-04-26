import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className='bg-cream px-4 pb-16 pt-20 sm:pb-24 sm:pt-28'>
      <div className='mx-auto max-w-3xl text-center'>
        <h1 className='font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl'>
          {t('headline')}
        </h1>
        <svg
          className='mx-auto mt-4 h-3 w-48'
          viewBox='0 0 200 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 9C40 3 80 1 100 5C120 9 160 3 199 7'
            stroke='#00A86B'
            strokeWidth='2.5'
            strokeLinecap='round'
          />
        </svg>
        <p className='mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-gray sm:text-xl'>
          {t('subhead')}
        </p>
        <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <a
            href='#services'
            className='inline-flex items-center rounded-lg bg-accent-dark px-8 py-3 font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
          >
            {t('cta_primary')}
          </a>
          <a
            href='#work'
            className='rounded font-medium text-charcoal underline underline-offset-4 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent'
          >
            {t('cta_secondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
