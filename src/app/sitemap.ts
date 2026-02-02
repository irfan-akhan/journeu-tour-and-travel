import { MetadataRoute } from 'next';
import { tours } from '@/data/toursData';
import { getAllDestinationIds } from '@/data/destinationDetails';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://journeu.com';
  const lastModified = new Date();

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  // Regional destination pages
  const regionalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/destinations/kashmir`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations/jammu`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations/leh-ladakh`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic tour package routes
  const tourRoutes: MetadataRoute.Sitemap = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic destination detail routes
  const destinationIds = getAllDestinationIds();
  const destinationRoutes: MetadataRoute.Sitemap = destinationIds.map((id) => ({
    url: `${baseUrl}/destinations/${id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...regionalRoutes,
    ...tourRoutes,
    ...destinationRoutes,
  ];
}
