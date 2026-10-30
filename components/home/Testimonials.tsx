import { ExternalLink } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/constants'

export default function ReviewReference() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Google reviews
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Read feedback or share your experience on our Google business profile.
        </p>
        <a
          href={BUSINESS_INFO.maps.reviews}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-colors"
        >
          Open Google reviews
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
