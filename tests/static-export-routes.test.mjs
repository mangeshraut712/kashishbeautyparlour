import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import test from 'node:test'

const siteUrl = process.env.EXPECTED_SITE_URL || 'https://mangeshraut712.github.io/kashishbeautyparlour'
const basePath = process.env.EXPECTED_BASE_PATH ?? '/kashishbeautyparlour'
const outputDir = process.env.EXPORT_DIR || 'out'

function outputFile(path) {
  return new URL(`../${outputDir}/${path}`, import.meta.url)
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

test('the static export advertises locale-qualified pages and PWA shortcuts', async () => {
  const [sitemap, manifestSource] = await Promise.all([
    readFile(outputFile('sitemap.xml'), 'utf8'),
    readFile(outputFile('manifest.json'), 'utf8'),
  ])

  for (const locale of ['en', 'hi', 'mr']) {
    for (const route of ['', '/about', '/services', '/gallery', '/training', '/contact']) {
      assert.match(sitemap, new RegExp(`<loc>${siteUrl}/${locale}${route}</loc>`))
    }
  }

  assert.doesNotMatch(sitemap, new RegExp(`<loc>${siteUrl}/about</loc>`))

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

  assert.match(gallery, new RegExp(`poster="${escapeRegExp(`${basePath}/images/`)}`))
  assert.match(gallery, new RegExp(`src="${escapeRegExp(`${basePath}/videos/`)}`))

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

test('the sitemap includes every exported visitor route and article', async () => {
  const [sitemap, blogEntries] = await Promise.all([
    readFile(outputFile('sitemap.xml'), 'utf8'),
    readdir(outputFile('en/blog/'), { withFileTypes: true }),
  ])
  const routes = ['/blog', '/bridal', '/privacy', '/terms']
  const articleIds = blogEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name)

  for (const locale of ['en', 'hi', 'mr']) {
    for (const route of routes) {
      assert.match(sitemap, new RegExp(`<loc>${siteUrl}/${locale}${route}</loc>`))
    }

    for (const id of articleIds) {
      assert.match(sitemap, new RegExp(`<loc>${siteUrl}/${locale}/blog/${id}</loc>`))
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
      assert.match(page, new RegExp(`rel="canonical" href="${escapeRegExp(canonical)}"`))
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
