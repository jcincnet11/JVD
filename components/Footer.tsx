import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className='border-t border-white/10 bg-dark px-4 py-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <p className='text-sm text-cream/70'>{t('location')}</p>
          <a
            href='https://github.com/jvincentdigital'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded text-sm text-cream/50 transition-colors hover:text-cream focus:outline-none focus:ring-2 focus:ring-accent'
          >
            GitHub
          </a>
        </div>
        <p className='mt-6 text-center text-xs text-cream/70'>{t('copyright')}</p>
      </div>
    </footer>
  );
}
