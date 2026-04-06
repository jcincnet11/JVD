import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="bg-cream py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal text-center mb-10">
            {t('heading')}
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-6 text-warm-gray leading-relaxed text-lg">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(['stat1', 'stat2', 'stat3'] as const).map((key) => (
              <div key={key} className="text-center p-6 border border-border rounded-xl bg-white">
                <p className="font-serif font-bold text-charcoal">{t(key)}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
