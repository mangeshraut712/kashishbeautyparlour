import type { Metadata } from 'next'
import { Image as ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery | Kashish Beauty Parlour',
  description: 'Browse our portfolio of beauty transformations, bridal makeovers, hair styling, and beauty services at Kashish Beauty Parlour.',
}

const galleryCategories = [
  'All',
  'Bridal',
  'Makeup',
  'Hair',
  'Facial',
  'Nails',
  'Spa',
]

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop',
    alt: 'Bridal Makeup',
    category: 'Bridal',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop',
    alt: 'Hair Styling',
    category: 'Hair',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop',
    alt: 'Manicure & Pedicure',
    category: 'Nails',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    alt: 'Party Makeup',
    category: 'Makeup',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop',
    alt: 'Spa Treatment',
    category: 'Spa',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop',
    alt: 'Hair Treatment',
    category: 'Hair',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop',
    alt: 'Makeup Look',
    category: 'Makeup',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop',
    alt: 'Beauty Consultation',
    category: 'Makeup',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop',
    alt: 'Facial Treatment',
    category: 'Facial',
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Explore our portfolio of stunning beauty transformations and professional services
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition transform hover:scale-105">
              <ImageIcon className="w-5 h-5 mr-2" />
              Load More Images
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment and see your own beautiful transformation added to our gallery
          </p>
          <a
            href="/contact#booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-semibold transition transform hover:scale-105"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  )
}
