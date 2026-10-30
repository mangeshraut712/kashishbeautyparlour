import type { Metadata } from 'next'
import { localizedPageMetadata, localizedOpenGraph } from '@/lib/page-metadata'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const description = 'Premium bridal makeup services for your special day. Maharashtrian, South Indian, North Indian bridal looks. Book your bridal trial today!'

    return {
        ...localizedPageMetadata(locale, '/bridal'),
        title: 'Bridal Makeup Services | Kashish Beauty Parlour And Training Center Pune',
        description,
        keywords: 'bridal makeup pune, wedding makeup thergaon, maharashtrian bridal, bridal trial pune',
        openGraph: {
            ...localizedOpenGraph(locale, '/bridal'),
            title: 'Bridal Makeup Services | Kashish Beauty Parlour And Training Center Pune',
            description,
        },
    }
}

export default function BridalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
