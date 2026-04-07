import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const icons = [
  <svg key="web" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  <svg key="shop" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
  </svg>,
  <svg key="brand" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>,
  <svg key="retainer" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
];

export default function Services() {
  const t = useTranslations('services');

  const cards = [1, 2, 3, 4].map((i) => ({
    icon: icons[i - 1],
    title: t(`card${i}.title`),
    description: t(`card${i}.description`),
    link: t(`card${i}.link`),
  }));

  return (
    <section id="services" className="bg-cream py-20 px-4">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white border border-border rounded-xl p-8 hover:border-accent hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-serif text-xl font-bold text-charcoal">{card.title}</h3>
                <p className="mt-3 text-warm-gray leading-relaxed">{card.description}</p>
                <a
                  href="#pricing"
                  className="inline-block mt-4 text-accent font-medium hover:text-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  {card.link}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
