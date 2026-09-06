import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main style={{ fontFamily: 'system-ui, sans-serif', padding: '4rem 1.5rem', textAlign: 'center' }}>
          <h1>Page not found</h1>
          <p>The page you requested is not available.</p>
          <p>
            <Link href="/en/">Return to Kashish Beauty Parlour</Link>
          </p>
        </main>
      </body>
    </html>
  )
}
