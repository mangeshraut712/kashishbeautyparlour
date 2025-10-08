import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
          404
        </h2>
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
          Page Not Found
        </h3>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. Let's get you back to beauty services.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-primary/90 transition"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-purple-600/90 transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}
