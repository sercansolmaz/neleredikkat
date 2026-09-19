import { MetadataRoute } from 'next';
import { GUIDES } from '@/data/guides';
import { CATEGORIES } from '@/data/categories';
import { DECISION_JOURNEYS } from '@/data/journeys';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neleredikkat.com';

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/yolculuklar/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    // /arama/ dahili arama sayfası: noindex,follow — sitemap'e girmez.
    {
      url: `${baseUrl}/iletisim/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];

  // Categories routes
  CATEGORIES.forEach(cat => {
    routes.push({
      url: `${baseUrl}/${cat.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    });
  });

  // Guides routes
  GUIDES.forEach(guide => {
    routes.push({
      url: `${baseUrl}/${guide.categorySlug}/${guide.slug}/`,
      lastModified: new Date(guide.lastUpdated),
      changeFrequency: 'monthly',
      priority: 0.9
    });
  });

  // Decision Journeys routes
  DECISION_JOURNEYS.forEach(journey => {
    routes.push({
      url: `${baseUrl}/yolculuklar/${journey.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    });
  });

  return routes;
}
