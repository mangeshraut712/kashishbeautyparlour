'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
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
            Don&apos;t just take our word for it - hear from our satisfied clients
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
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
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
              Share your experience and help others discover Kashish Beauty Parlour And Training Center!
            </p>

            {/* Google Reviews QR Code */}
            <div className="mb-4">
              <div className="relative w-48 h-48 mx-auto rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
                <Image
                  src="/images/other/reviews qr code.jpg"
                  alt="Scan to leave a Google review"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Scan the QR code to leave your review
            </p>

            <a
              href="https://www.google.com/maps/place/Kashish+Beauty+Parlour+And+Training+Center/@18.6142502,73.7660255,17z/data=!4m18!1m9!3m8!1s0x3bc2b991efb060f3:0x43b57b6b4ece4560!2sKashish+Beauty+Parlour+And+Training+Center!8m2!3d18.6142502!4d73.7686004!9m1!1b1!16s%2Fg%2F11f66rbt37!3m7!1s0x3bc2b991efb060f3:0x43b57b6b4ece4560!8m2!3d18.6142502!4d73.7686004!9m1!1b1!16s%2Fg%2F11f66rbt37?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black hover:bg-yellow-300 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-yellow-500"
            >
              Leave a Review ⭐
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
