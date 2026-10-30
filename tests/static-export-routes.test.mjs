import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import test from 'node:test'

const siteUrl = process.env.EXPECTED_SITE_URL || 'https://mangeshraut712.github.io/kashishbeautyparlour'
const basePath = process.env.EXPECTED_BASE_PATH ?? '/kashishbeautyparlour'
const outputDir = process.env.EXPORT_DIR || 'out'

function outputFile(path) {
  return new URL(`../${outputDir}/${path}`, import.meta.url)
}

async function exportedHtmlFiles(relativePath = '') {
  const entries = await readdir(outputFile(relativePath), { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = `${relativePath}${relativePath ? '/' : ''}${entry.name}`
    if (entry.isDirectory()) {
      return exportedHtmlFiles(entryPath)
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      return [[entryPath, await readFile(outputFile(entryPath), 'utf8')]]
    }
    return []
  }))

  return files.flat()
}

test('the static export advertises locale-qualified pages and PWA shortcuts', async () => {
  const [sitemap, manifestSource] = await Promise.all([
    readFile(outputFile('sitemap.xml'), 'utf8'),
    readFile(outputFile('manifest.json'), 'utf8'),
  ])

  for (const locale of ['en', 'hi', 'mr']) {
    for (const route of ['', '/about', '/services', '/gallery', '/training', '/contact']) {
      assert.ok(sitemap.includes(`<loc>${siteUrl}/${locale}${route}</loc>`))
    }
  }

  assert.ok(!sitemap.includes(`<loc>${siteUrl}/about</loc>`))

  const manifest = JSON.parse(manifestSource)
  assert.deepEqual(
    manifest.shortcuts.map(({ url }) => url),
    [
      'en/contact/#booking',
      'en/services/',
    ],
  )
})

test('each supported locale provides every About-page journey paragraph', async () => {
  for (const locale of ['en', 'hi', 'mr']) {
    const messages = JSON.parse(
      await readFile(new URL(`../i18n/messages/${locale}.json`, import.meta.url), 'utf8'),
    )

    for (const key of ['journeyP1', 'journeyP2', 'journeyP3', 'journeyP4', 'journeyP5']) {
      assert.equal(typeof messages.About[key], 'string', `${locale} is missing About.${key}`)
    }
  }
})

test('the static export uses a reachable social-preview image URL', async () => {
  const [homepage, contactPage] = await Promise.all([
    readFile(outputFile('index.html'), 'utf8'),
    readFile(outputFile('en/contact/index.html'), 'utf8'),
  ])
  const imageUrl = `${siteUrl}/images/og-image.jpg`

  for (const [name, page] of [['homepage', homepage], ['contact page', contactPage]]) {
    assert.ok(
      page.includes(`property="og:image" content="${imageUrl}"`),
      `the ${name} should advertise the public social-preview image`,
    )
    assert.doesNotMatch(page, /kashishbeautyparlour\/kashishbeautyparlour\/images\/og-image\.jpg/)
  }
})

test('blog articles use the reusable functional sharing controls', async () => {
  const [articleSource, shareButtonsSource] = await Promise.all([
    readFile(new URL('../app/[locale]/blog/[id]/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/social/ShareButtons.tsx', import.meta.url), 'utf8'),
  ])

  assert.match(articleSource, /import ShareButtons from '@\/components\/social\/ShareButtons'/)
  assert.match(articleSource, /<ShareButtons[\s\S]*title=\{post\.title\}/)
  assert.doesNotMatch(articleSource, /📘 Facebook/)
  assert.match(shareButtonsSource, /aria-label="Share on WhatsApp"/)
  assert.match(shareButtonsSource, /aria-label="Copy link"/)
})

test('gallery videos retain the GitHub Pages base path', async () => {
  const gallery = await readFile(
    outputFile('en/gallery/index.html'),
    'utf8',
  )

  assert.ok(gallery.includes(`poster="${basePath}/images/`))
  assert.ok(gallery.includes(`src="${basePath}/videos/`))

  if (basePath) {
    assert.doesNotMatch(gallery, /poster="\/images\//)
    assert.doesNotMatch(gallery, /src="\/videos\//)
  }
})

test('static booking and gift-card flows hand off requests without fabricating completion', async () => {
  const [booking, bridalInquiry, giftCard, contactPage, whatsApp] = await Promise.all([
    readFile(new URL('../components/booking/BookingCalendar.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/booking/BridalInquiryForm.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/gift/GiftCardPurchase.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/[locale]/contact/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../lib/whatsapp.ts', import.meta.url), 'utf8'),
  ])

  for (const source of [booking, bridalInquiry, giftCard]) {
    assert.doesNotMatch(source, /Simulate API call/)
    assert.match(source, /buildWhatsAppLink/)
  }

  assert.match(whatsApp, /https:\/\/wa\.me\//)
  assert.doesNotMatch(booking, /setStep\(5\)/)
  assert.doesNotMatch(giftCard, /setIsComplete\(true\)/)
  assert.doesNotMatch(contactPage, /setSubmitStatus\('success'\)/)
  assert.match(contactPage, /setSubmitStatus\('ready'\)/)
})

test('appointment request controls preserve keyboard and localized accessibility state', async () => {
  const [booking, giftCard, ...messages] = await Promise.all([
    readFile(new URL('../components/booking/BookingCalendar.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/gift/GiftCardPurchase.tsx', import.meta.url), 'utf8'),
    ...['en', 'hi', 'mr'].map((locale) =>
      readFile(new URL(`../i18n/messages/${locale}.json`, import.meta.url), 'utf8'),
    ),
  ])

  assert.match(booking, /aria-label={t\('previousMonth'\)}/)
  assert.match(booking, /aria-label={t\('nextMonth'\)}/)
  assert.match(booking, /aria-pressed={selectedTime === time}/)
  assert.match(booking, /key={time}[\s\S]*type="button"/)
  assert.match(giftCard, /Number\.isFinite\(customAmountValue\)/)
  assert.match(giftCard, /min=\{500\}/)

  for (const message of messages) {
    const parsed = JSON.parse(message)
    assert.equal(typeof parsed.BookingCalendar.previousMonth, 'string')
    assert.equal(typeof parsed.BookingCalendar.nextMonth, 'string')
  }
})

test('the mobile navigation exposes a dialog and supports keyboard dismissal', async () => {
  const header = await readFile(new URL('../components/layout/Header.tsx', import.meta.url), 'utf8')

  assert.match(header, /aria-expanded=\{isMenuOpen\}/)
  assert.match(header, /aria-controls="mobile-navigation"/)
  assert.match(header, /id="mobile-navigation"/)
  assert.match(header, /role="dialog"/)
  assert.match(header, /aria-modal="true"/)
  assert.match(header, /event\.key === 'Escape'/)
  assert.match(header, /event\.key === 'Tab'/)
  assert.match(header, /menuPanelRef\.current\?\.querySelectorAll/)
  assert.match(header, /aria-label="Close menu"/)
})

test('the sitemap includes every exported visitor route and article', async () => {
  const [sitemap, blogEntries] = await Promise.all([
    readFile(outputFile('sitemap.xml'), 'utf8'),
    readdir(outputFile('en/blog/'), { withFileTypes: true }),
  ])
  const routes = ['/blog', '/bridal', '/privacy', '/terms']
  const articleIds = blogEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)

  for (const locale of ['en', 'hi', 'mr']) {
    for (const route of routes) {
      assert.ok(sitemap.includes(`<loc>${siteUrl}/${locale}${route}</loc>`))
    }

    for (const id of articleIds) {
      assert.ok(sitemap.includes(`<loc>${siteUrl}/${locale}/blog/${id}</loc>`))
    }
  }
})

test('localized static pages use self-referential canonical URLs', async () => {
  const articleIds = (await readdir(outputFile('en/blog/'), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
  const routes = [
    '',
    '/about',
    '/services',
    '/gallery',
    '/training',
    '/contact',
    '/blog',
    '/bridal',
    '/privacy',
    '/terms',
    ...articleIds.map((id) => `/blog/${id}`),
  ]

  for (const locale of ['en', 'hi', 'mr']) {
    for (const route of routes) {
      const indexPath = `${locale}${route}/index.html`
      const page = await readFile(outputFile(indexPath), 'utf8')
      const canonical = `${siteUrl}/${locale}${route}/`
      assert.ok(page.includes(`rel="canonical" href="${canonical}"`))
    }
  }
})

test('Cloudflare target configuration has no hard-coded GitHub Pages paths', async () => {
  const [site, manifestSource, serviceWorker, offlinePage, packageSource] = await Promise.all([
    readFile(new URL('../lib/site.ts', import.meta.url), 'utf8'),
    readFile(new URL('../public/manifest.json', import.meta.url), 'utf8'),
    readFile(new URL('../public/sw.js', import.meta.url), 'utf8'),
    readFile(new URL('../public/offline.html', import.meta.url), 'utf8'),
    readFile(new URL('../package.json', import.meta.url), 'utf8'),
  ])
  const manifest = JSON.parse(manifestSource)
  const scripts = JSON.parse(packageSource).scripts

  assert.match(site, /NEXT_PUBLIC_BASE_PATH/)
  assert.match(site, /NEXT_PUBLIC_SITE_URL/)
  assert.equal(manifest.start_url, './')
  assert.equal(manifest.scope, './')
  assert.deepEqual(manifest.shortcuts.map(({ url }) => url), ['en/contact/#booking', 'en/services/'])
  assert.match(serviceWorker, /self\.registration\.scope/)
  assert.doesNotMatch(serviceWorker, /const BASE_PATH = '\/kashishbeautyparlour'/)
  assert.match(offlinePage, /href="\.\/"/)
  assert.equal(typeof scripts['build:cloudflare'], 'string')
})

test('public review references do not fabricate ratings, counts, or verification', async () => {
  const [constants, layout, hero, home, contact, socialProof, whyChooseUs, staff, staffProfiles, staffSelection, testimonials, ...messages] = await Promise.all([
    readFile(new URL('../lib/constants.ts', import.meta.url), 'utf8'),
    readFile(new URL('../app/[locale]/layout.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/home/Hero.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/home/HomeClient.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../app/[locale]/contact/page.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/home/SocialProof.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/home/WhyChooseUs.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../lib/data/staff.ts', import.meta.url), 'utf8'),
    readFile(new URL('../components/home/StaffProfiles.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/booking/StaffSelection.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../components/home/Testimonials.tsx', import.meta.url), 'utf8'),
    ...['en', 'hi', 'mr'].map((locale) =>
      readFile(new URL(`../i18n/messages/${locale}.json`, import.meta.url), 'utf8'),
    ),
  ])

  assert.match(constants, /reviews: 'https:\/\/share\.google\/UsAD81WRbXEeYdxZX'/)
  assert.doesNotMatch(constants, /averageRating|totalReviews|happyCustomers|happyBrides|studentsTrained/)
  assert.doesNotMatch(layout, /aggregateRating|ratingValue|reviewCount/)

  for (const source of [hero, home, contact, socialProof, testimonials]) {
    assert.doesNotMatch(source, /\b(?:4\.8|4\.9|650|480|127|43)\b|Verified via|five-star verified/i)
    assert.doesNotMatch(source, /BUSINESS_STATS\.(averageRating|totalReviews|happyCustomers|happyBrides|studentsTrained)/)
  }

  assert.match(socialProof, /BUSINESS_INFO\.maps\.reviews/)
  assert.doesNotMatch(socialProof, /reviewData|top-rated|testimon/i)
  for (const source of [hero, home, contact, socialProof, whyChooseUs]) {
    assert.match(source, /useTranslations\('ReviewReference'\)/)
  }
  for (const message of messages) {
    const parsed = JSON.parse(message)
    assert.equal(typeof parsed.ReviewReference.read, 'string')
    assert.equal(typeof parsed.ReviewReference.open, 'string')
  }
  assert.doesNotMatch(staff, /certifications|rating|reviews|nextAvailable|popular/)
  assert.doesNotMatch(staffProfiles, /Top Rated|certif|member\.(rating|reviews|popular)/i)
  assert.doesNotMatch(staffSelection, /staff\.(rating|reviews|popular|nextAvailable)/)
  assert.doesNotMatch(testimonials, /testimonials|testimonial\.(rating|text|name|service)/i)
  await assert.rejects(
    readFile(new URL('../lib/data/testimonials.ts', import.meta.url), 'utf8'),
    { code: 'ENOENT' },
  )
})

test('exported pages omit unsupported review aggregates and customer totals', async () => {
  const pages = await exportedHtmlFiles()
  const forbidden = /aggregateRating|ratingValue|reviewCount|\b(?:4\.8|4\.9|4\.7|650|480|127|43)\b|Verified via|five-star verified|Top Rated|(?:10,000|1,000|1000|100)\+|Jawed Habib Certified|L.Oréal Professional Certified|OPI Certified|Instant Reservations|तुरंत रिजर्वेशन|त्वरित रिझर्व्हेशन|Confirmation Within 2 Hours|2 घंटे में पुष्टि|2 तासांत पुष्टी/i

  assert.ok(pages.length > 0, 'the export should contain static HTML pages')
  for (const [path, page] of pages) {
    assert.doesNotMatch(page, forbidden, `unsupported claim in ${path}`)
  }

  const home = await readFile(outputFile('en/index.html'), 'utf8')
  assert.match(home, /https:\/\/share\.google\/UsAD81WRbXEeYdxZX/)
})
