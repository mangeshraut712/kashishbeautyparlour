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
      <head>
        <meta name="description" content="Professional beauty services and training center in Pune. Bridal makeup, hair styling, facials, spa services and more." />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23ff69b4' stroke='%23ff1493' stroke-width='5'/><circle cx='35' cy='35' r='5' fill='white'/><circle cx='65' cy='35' r='5' fill='white'/><path d='M 40 55 Q 50 65 60 55' stroke='white' stroke-width='3' fill='none'/></svg>" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
