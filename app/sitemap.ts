import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { blogPostsData } from '@/lib/data/blog'
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
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/bridal', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const staticPages = routing.locales.flatMap((locale) =>
    pages.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
  )

  const articles = routing.locales.flatMap((locale) =>
    blogPostsData.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  )

  return [...staticPages, ...articles]
}
