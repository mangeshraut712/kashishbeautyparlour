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

        {/* Google Reviews Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                ✨ Love Our Services?
              </h3>
              <p className="text-gray-600">
                Help us grow by leaving a Google review
              </p>
            </div>

            {/* QR Code */}
            <div className="mb-6">
              <img
                src="/images/google-reviews-qr.png"
                alt="Google Reviews QR Code"
                className="w-48 h-48 mx-auto rounded-xl shadow-md"
              />
            </div>

            {/* Scan Text */}
            <p className="text-sm text-gray-500 mb-4">
              📱 Scan QR code to leave a review
            </p>

            {/* Direct Link */}
            <a
              href={BUSINESS_INFO.maps.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <Star className="w-5 h-5" />
              Leave a Google Review
            </a>
          </div>
