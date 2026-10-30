import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { SITE_URL } from '@/lib/site'

const defaultOpenGraphTitle = 'Kashish Beauty Parlour And Training Center - Premium Beauty Services in Pune'
const defaultOpenGraphDescription = 'Transform your look with expert beauty services. Bridal makeup, hair styling, facials, spa treatments and professional training courses.'

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return ''

  return `/${pathname.replace(/^\/+|\/+$/g, '')}`
}

function localizedPath(locale: string, pathname: string): string {
  return `/${locale}${normalizePathname(pathname)}`
}

export function localizedAlternates(locale: string, pathname: string): NonNullable<Metadata['alternates']> {
  const normalizedPathname = normalizePathname(pathname)
  const languages = Object.fromEntries(
    routing.locales.map((supportedLocale) => [
      supportedLocale,
      localizedPath(supportedLocale, normalizedPathname),
    ]),
  )

  return {
    canonical: localizedPath(locale, normalizedPathname),
    languages: {
      ...languages,
      'x-default': localizedPath(routing.defaultLocale, normalizedPathname),
    },
  }
}

export function localizedOpenGraph(locale: string, pathname: string) {
  return {
    title: defaultOpenGraphTitle,
    description: defaultOpenGraphDescription,
    url: localizedPath(locale, pathname),
    siteName: 'Kashish Beauty Parlour And Training Center',
    locale: locale === 'mr' ? 'mr_IN' : locale === 'hi' ? 'hi_IN' : 'en_IN',
    type: 'website' as const,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Kashish Beauty Parlour And Training Center - Premium Beauty Services',
      },
    ],
  }
}

export function localizedPageMetadata(locale: string, pathname: string): Metadata {
  return {
    alternates: localizedAlternates(locale, pathname),
    openGraph: localizedOpenGraph(locale, pathname),
  }
}
