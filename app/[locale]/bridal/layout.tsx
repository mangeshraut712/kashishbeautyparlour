import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Bridal Makeup Services | Kashish Beauty Parlour And Training Center Pune',
    description: 'Premium bridal makeup services for your special day. Maharashtrian, South Indian, North Indian bridal looks. Book your bridal trial today!',
    keywords: 'bridal makeup pune, wedding makeup thergaon, maharashtrian bridal, bridal trial pune',
}

export default function BridalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
