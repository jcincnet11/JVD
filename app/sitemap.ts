import type { MetadataRoute } from 'next';

const siteUrl = 'https://john-vincent-digital.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-06');

  return [
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/es`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
