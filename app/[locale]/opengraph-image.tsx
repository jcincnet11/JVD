import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'John Vincent Digital';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'John Vincent Digital',
    description: 'AI-powered web design & brand strategy for Puerto Rico businesses and growing brands.',
  },
  es: {
    title: 'John Vincent Digital',
    description: 'Diseño web impulsado por IA y estrategia de marca para negocios en Puerto Rico.',
  },
};

export default async function Image({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const t = meta[locale] ?? meta.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          backgroundColor: '#F5F0E8',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              backgroundColor: '#00A86B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F5F0E8',
              fontSize: '28px',
              fontWeight: 700,
              fontFamily: 'serif',
              marginRight: '20px',
            }}
          >
            JV
          </div>
          <span
            style={{
              fontSize: '24px',
              color: '#6B6560',
              fontFamily: 'sans-serif',
            }}
          >
            johnvincentdigital.com
          </span>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1.1,
            margin: 0,
            fontFamily: 'serif',
          }}
        >
          {t.title}
        </h1>
        <p
          style={{
            fontSize: '28px',
            color: '#6B6560',
            marginTop: '24px',
            lineHeight: 1.4,
            maxWidth: '800px',
            fontFamily: 'sans-serif',
          }}
        >
          {t.description}
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '6px',
            backgroundColor: '#00A86B',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
