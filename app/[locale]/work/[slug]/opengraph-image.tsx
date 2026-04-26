import { ImageResponse } from 'next/og';
import { caseStudies, getCaseStudy, type Locale } from '@/lib/case-studies';

export const runtime = 'edge';
export const alt = 'John Vincent Digital — Case Study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata({ params }: { params: { locale: Locale; slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return [];
  return [
    {
      contentType: 'image/png',
      size,
      alt: `${study.client} — ${alt}`,
      id: 'default',
    },
  ];
}

export function generateStaticParams() {
  return caseStudies.flatMap((cs) => [
    { locale: 'en' as const, slug: cs.slug },
    { locale: 'es' as const, slug: cs.slug },
  ]);
}

const labels: Record<Locale, string> = {
  en: 'CASE STUDY',
  es: 'CASO DE ESTUDIO',
};

export default async function Image({ params }: { params: { locale: Locale; slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) {
    return new ImageResponse(<div>Case study not found</div>, size);
  }

  const { locale } = params;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        backgroundColor: '#F5F0E8',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            backgroundColor: '#007A4D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#F5F0E8',
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: 'serif',
            marginRight: '16px',
          }}
        >
          JV
        </div>
        <span
          style={{
            fontSize: '22px',
            color: '#6B6560',
            fontFamily: 'sans-serif',
          }}
        >
          johnvincentdigital.com
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: '20px',
            color: '#007A4D',
            fontWeight: 600,
            letterSpacing: '0.16em',
            fontFamily: 'sans-serif',
            marginBottom: '16px',
          }}
        >
          {`${labels[locale]} · ${study.category[locale]}`}
        </span>
        <h1
          style={{
            fontSize: '88px',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1.05,
            margin: 0,
            fontFamily: 'serif',
          }}
        >
          {study.client}
        </h1>
        <p
          style={{
            fontSize: '26px',
            color: '#6B6560',
            marginTop: '24px',
            lineHeight: 1.4,
            maxWidth: '900px',
            fontFamily: 'sans-serif',
          }}
        >
          {study.brief[locale]}
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8px',
          backgroundColor: study.color,
        }}
      />
    </div>,
    { ...size },
  );
}
