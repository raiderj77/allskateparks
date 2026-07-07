import { MetadataRoute } from 'next';
import locations from '@/data/locations.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://allskateparks.com';
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Unique state pages
  const states = Array.from(new Set(locations.map(l => l.stateSlug))).sort();
  const statePages: MetadataRoute.Sitemap = states.map(state => ({
    url: `${baseUrl}/${state}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Park detail pages
  const parkPages: MetadataRoute.Sitemap = locations.map(location => ({
    url: `${baseUrl}/${location.stateSlug}/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...statePages, ...parkPages];
}
