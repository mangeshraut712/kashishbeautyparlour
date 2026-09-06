import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import HomeClient from '@/components/home/HomeClient'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'Hero' })

  return {
    title: `${t('title')} | Kashish Beauty Parlour & Training Center`,
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'mr': '/mr',
        'hi': '/hi',
      },
    },
    openGraph: {
      title: `${t('title')} | Kashish Beauty Parlour`,
      description: t('description'),
      url: `/${locale}`,
      siteName: 'Kashish Beauty Parlour',
      locale: locale === 'mr' ? 'mr_IN' : locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} | Kashish Beauty Parlour`,
      description: t('description'),
    },
  }
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <HomeClient />
}