import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'

export default function FeaturedServices() {
  const featuredServices = services.slice(0, 4)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
            Discover Our Premium Beauty Services
          </h2>
          <p className="text-gray-600 text-lg">
            From bridal makeup to spa treatments, we offer a complete range of professional beauty services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-primary font-bold text-lg">
                      {service.price}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {service.duration}
                    </div>
                  </div>
                  <Link
                    href={`/services#${service.id}`}
                    className="w-10 h-10 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-full flex items-center justify-center transition"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}