import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Kashish Beauty Parlour',
  description: 'View our portfolio of beautiful transformations - bridal makeup, hair styling, facials, and more beauty services in Pune.',
}

const galleryImages = [
  {
    id: 1,
    category: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    title: 'Traditional Bridal Look',
  },
  {
    id: 2,
    category: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800',
    title: 'HD Bridal Makeup',
  },
  {
    id: 3,
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800',
    title: 'Hair Color Transformation',
  },
  {
    id: 4,
    category: 'Party Makeup',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    title: 'Glamorous Party Look',
  },
  {
    id: 5,
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    title: 'Braided Hairstyle',
  },
  {
    id: 6,
    category: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    title: 'Modern Bridal Look',
  },
  {
    id: 7,
    category: 'Nail Art',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    title: 'Creative Nail Art',
  },
  {
    id: 8,
    category: 'Party Makeup',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
    title: 'Elegant Evening Makeup',
  },
  {
    id: 9,
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800',
    title: 'Hair Spa Treatment',
  },
]

const categories = ['All', 'Bridal Makeup', 'Hair Styling', 'Party Makeup', 'Nail Art']

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Work Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Explore our portfolio of beautiful transformations and see the difference professional care makes
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-sm font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-heading font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              Note: These are sample images. Replace with actual before/after photos of your work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment and let us bring out your natural beauty
          </p>
          <a
            href="/contact#booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition transform hover:scale-105"
          >
            Book Appointment Now
          </a>
        </div>
      </section>
    </div>
  )
}