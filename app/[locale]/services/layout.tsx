import type { Metadata } from 'next'
import { localizedPageMetadata } from '@/lib/page-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return localizedPageMetadata(locale, '/services')
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
