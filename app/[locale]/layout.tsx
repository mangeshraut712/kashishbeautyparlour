import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FestivalOfferPopup from '@/components/marketing/FestivalOfferPopup'
import ShareButtons from '@/components/social/ShareButtons'
import PWAInstallPrompt from '@/components/pwa/PWAInstallPrompt'
import ScrollToTopLeft from '@/components/ui/ScrollToTopLeft'
import AIChatbot from '@/components/chat/AIChatbot'
import FloatingActions from '@/components/home/FloatingActions'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Optimized font loading with display swap
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

// Modern viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#D4AF37',
}

// Comprehensive metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://kashishbeautyparlour.com'),
  title: {
    default: 'Kashish Beauty Parlour And Training Center | Premium Beauty Salon in Thergaon, Pune',
    template: '%s | Kashish Beauty Parlour And Training Center',
  },
  description: 'Experience luxury beauty services at Kashish Beauty Parlour And Training Center. Professional bridal makeup, hair styling, facials, spa services & certified training courses in Pune. Book your transformation today!',
  keywords: [
    'beauty parlour pune',
    'bridal makeup thergaon',
    'beauty salon dange chowk',
    'beauty training pune',
    'kashish beauty parlour',
    'best makeup artist pune',
    'hair salon pune',
    'facial treatment pune',
    'spa pune',
    'beauty courses pune',
  ],
  authors: [{ name: 'Kashish Beauty Parlour And Training Center', url: 'https://kashishbeautyparlour.com' }],
  creator: 'Kashish Beauty Parlour And Training Center',
  publisher: 'Kashish Beauty Parlour And Training Center',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Kashish Beauty Parlour And Training Center - Premium Beauty Services in Pune',
    description: 'Transform your look with expert beauty services. Bridal makeup, hair styling, facials, spa treatments and professional training courses.',
    url: 'https://kashishbeautyparlour.com',
    siteName: 'Kashish Beauty Parlour And Training Center',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kashish Beauty Parlour And Training Center - Premium Beauty Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashish Beauty Parlour - Premium Beauty Services in Pune',
    description: 'Transform your look with expert beauty services.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'beauty',
}

// Structured Data (JSON-LD) for rich snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Kashish Beauty Parlour And Training Center',
  description: 'Professional beauty services and training center in Pune',
  url: 'https://kashishbeautyparlour.com',
  telephone: '+91-7276784825',
  email: 'kashishparlour15@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 5, Gera Imperium Rise, Near Devika Pure Veg, Behind Maharaja Hotel',
    addressLocality: 'Thergaon',
    addressRegion: 'Pune',
    postalCode: '411033',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.6142502,
    longitude: 73.7686004,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '10:00',
    closes: '22:00',
  },
  priceRange: '₹₹',
  image: 'https://kashishbeautyparlour.com/images/og-image.jpg',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '650',
  },
  sameAs: [
    'https://www.instagram.com/kashish_beauty_parlour_nisargr/',
    'https://www.facebook.com/profile.php?id=100064114598364',
  ],
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for third-party resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Razorpay Support */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900 transition-colors duration-300" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <Footer />
          <FestivalOfferPopup />
          <ScrollToTopLeft />
          <ShareButtons title="Kashish Beauty Parlour And Training Center" variant="floating" />
          <PWAInstallPrompt />
          <FloatingActions />
          <AIChatbot />

          {/* Analytics */}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
