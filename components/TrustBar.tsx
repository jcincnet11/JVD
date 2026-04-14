import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const items = [t('delivery'), t('industries'), t('bilingual'), t('ai'), t('local')];

  return (
    <section className="bg-cream border-y border-border">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0 sm:divide-x divide-border">
          {items.map((item, i) => (
            <div key={i} className="px-6 text-center text-sm text-warm-gray font-medium">
              <span className="text-accent mr-1.5">&#9679;</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
