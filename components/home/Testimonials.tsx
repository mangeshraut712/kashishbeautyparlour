'use client'

import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'
import { BUSINESS_INFO } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              🌟 Loved Our Service?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Share your experience and help others discover Kashish Beauty Parlour!
            </p>

            {/* Google Reviews QR Code */}
            <div className="mb-4">
              <img
                src="/images/reviews qr code.jpg"
                alt="Scan to leave a Google review"
                className="w-48 h-48 mx-auto rounded-2xl shadow-md hover:shadow-lg transition"
              />
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Scan the QR code to leave your review
            </p>

            <a
              href="https://www.google.com/search?q=kashish+beauty+parlour+thergaon+pune&rlz=1C1SQJL_enIN974IN974&oq=kashish+beauty+parlour+thergaon+pune&aqs=chrome..69i57j0i22i30j0i13i30.1717j0j1&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition transform hover:scale-105"
            >
              Leave a Review ⭐
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
