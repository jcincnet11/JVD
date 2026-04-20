import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CaseStudyHero from '@/components/CaseStudyHero';
import CaseStudySection from '@/components/CaseStudySection';
import {
  caseStudies,
  getCaseStudy,
  getOtherCaseStudies,
  type Locale,
} from '@/lib/case-studies';

const siteUrl = 'https://john-vincent-digital.vercel.app';

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return caseStudies.flatMap((cs) => [
    { locale: 'en', slug: cs.slug },
    { locale: 'es', slug: cs.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  const { locale, slug } = params;
  const suffix = locale === 'es' ? 'Caso de Estudio' : 'Case Study';
  const title = `${study.client} — ${suffix} | John Vincent Digital`;
  const description = study.brief[locale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url: `${siteUrl}/${locale}/work/${slug}`,
      siteName: 'John Vincent Digital',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/work/${slug}`,
      languages: {
        en: `${siteUrl}/en/work/${slug}`,
        es: `${siteUrl}/es/work/${slug}`,
      },
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'caseStudy' });
  const others = getOtherCaseStudies(study.slug);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <CaseStudyHero
          locale={locale}
          client={study.client}
          category={study.category[locale]}
          color={study.color}
          breadcrumbWork={t('breadcrumbWork')}
        />

        <div className="bg-cream">
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
            <CaseStudySection heading={t('sectionBrief')}>
              <p className="text-warm-gray text-lg leading-relaxed">
                {study.brief[locale]}
              </p>
            </CaseStudySection>

            <CaseStudySection heading={t('sectionChallenge')}>
              <p className="text-warm-gray leading-relaxed">
                {study.challenge[locale]}
              </p>
            </CaseStudySection>

            <CaseStudySection heading={t('sectionApproach')}>
              <ul className="space-y-3 text-warm-gray leading-relaxed list-disc pl-5 marker:text-accent">
                {study.approach[locale].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CaseStudySection>

            <CaseStudySection heading={t('sectionOutcome')}>
              <p className="text-warm-gray leading-relaxed">
                {study.outcome[locale]}
              </p>
            </CaseStudySection>

            <CaseStudySection heading={t('sectionStack')}>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 text-sm font-medium border border-border rounded-full text-warm-gray bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CaseStudySection>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                {t('ctaLive')}
              </a>
              <Link
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-charcoal font-medium rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                {t('ctaSimilar')}
              </Link>
            </div>
          </div>
        </div>

        <section className="bg-white py-16 px-4 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-8">
              {t('otherWork')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/${locale}/work/${cs.slug}`}
                  className="group block bg-cream border border-border rounded-xl overflow-hidden hover:border-accent hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  <div className="h-1.5" style={{ backgroundColor: cs.color }} />
                  <div className="p-6">
                    <p className="text-xs font-medium text-warm-gray mb-2">
                      {cs.category[locale]}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-accent transition-colors">
                      {cs.client}
                    </h3>
                    <p className="mt-2 text-sm text-warm-gray line-clamp-3">
                      {cs.brief[locale]}
                    </p>
                    <span className="inline-block mt-4 text-sm font-medium text-accent">
                      {t('readCaseStudy')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
