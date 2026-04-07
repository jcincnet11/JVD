import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

const projects = [
  { key: 'imperfect', color: '#C8E400' },
  { key: 'emmalina', color: '#C9A96E' },
  { key: 'magenta', color: '#C4587A' },
  { key: 'profumo', color: '#8B6F47' },
];

export default function Work() {
  const t = useTranslations('work');

  return (
    <section id="work" className="bg-cream py-20 px-4">
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
          {projects.map((project) => (
            <ScrollReveal key={project.key}>
              <div className="bg-white border border-border rounded-xl overflow-hidden hover:border-accent hover:-translate-y-0.5 transition-all duration-300">
                <div className="h-1.5" style={{ backgroundColor: project.color }} />
                <div className="p-8">
                  <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-border text-warm-gray mb-3">
                    {t(`projects.${project.key}.industry`)}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal">
                    {t(`projects.${project.key}.name`)}
                  </h3>
                  <p className="mt-2 text-warm-gray">
                    {t(`projects.${project.key}.description`)}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-medium text-accent/70 uppercase tracking-wide mb-1.5">
                      {t(`projects.${project.key}.challengeLabel`)}
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {t(`projects.${project.key}.challenge`)}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block mt-4 text-accent font-medium hover:text-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    {t('viewProject')}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
