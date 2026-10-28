import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const siteUrl = 'https://mangeshraut712.github.io/kashishbeautyparlour'

test('the static export advertises locale-qualified pages and PWA shortcuts', async () => {
  const [sitemap, manifestSource] = await Promise.all([
    readFile(new URL('../out/sitemap.xml', import.meta.url), 'utf8'),
    readFile(new URL('../out/manifest.json', import.meta.url), 'utf8'),
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
      '/kashishbeautyparlour/en/contact/#booking',
      '/kashishbeautyparlour/en/services/',
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
    readFile(new URL('../out/index.html', import.meta.url), 'utf8'),
    readFile(new URL('../out/en/contact/index.html', import.meta.url), 'utf8'),
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
