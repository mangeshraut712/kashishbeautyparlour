import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, IndianRupee, ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'

export const metadata: Metadata = {
  title: 'Our Services | Kashish Beauty Parlour',
  description: 'Explore our complete range of beauty services including bridal makeup, hair styling, facials, spa treatments, and professional training courses in Pune.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Premium Beauty Services
            </h1>
            <p className="text-lg text-gray-600">
              From bridal makeup to spa treatments, discover our complete range of professional beauty services 
              designed to enhance your natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Price & Duration */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <IndianRupee className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                    
                    <Link
                      href="/contact#booking"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference professional care makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition transform hover:scale-105"
            >
              Book Appointment
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-full font-semibold transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}