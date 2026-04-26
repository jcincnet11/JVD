import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const items = [t('delivery'), t('accessibility'), t('bilingual'), t('industries'), t('local')];

  return (
    <section className='border-y border-border bg-cream'>
      <div className='mx-auto max-w-4xl px-4 py-6'>
        <div className='flex flex-wrap items-center justify-center gap-4 divide-border sm:gap-0 sm:divide-x'>
          {items.map((item, i) => (
            <div key={i} className='px-6 text-center text-sm font-medium text-warm-gray'>
              <span className='mr-1.5 text-accent'>&#9679;</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
