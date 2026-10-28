import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const pages = [
    { path: '', changeFrequency: 'daily' as const, priority: 1 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/services', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/gallery', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/training', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  return routing.locales.flatMap((locale) =>
    pages.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
  )
}
