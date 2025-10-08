import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Kashish Beauty Parlour | Best Beauty Salon in Thergaon, Pune',
  description: 'Professional beauty services and training center in Pune. Bridal makeup, hair styling, facials, spa services and more. Book your appointment today!',
  keywords: 'beauty parlour pune, bridal makeup thergaon, beauty salon dange chowk, beauty training pune, kashish beauty parlour',
  authors: [{ name: 'Kashish Beauty Parlour' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Kashish Beauty Parlour - Professional Beauty Services in Pune',
    description: 'Transform your look with our expert beauty services. Bridal makeup, hair styling, facials, and professional training courses.',
    url: 'https://kashishbeautyparlour.com',
    siteName: 'Kashish Beauty Parlour',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
