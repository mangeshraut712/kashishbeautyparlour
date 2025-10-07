import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beauty Blog | Kashish Beauty Parlour',
  description: 'Read our beauty tips, trends, and expert advice on makeup, skincare, hair care, and beauty services at Kashish Beauty Parlour.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Bridal Makeup Trends 2024: What\'s In and What\'s Out',
    excerpt: 'Discover the latest bridal makeup trends that are expected to dominate 2024 weddings. From natural glows to bold features.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=500&fit=crop',
    category: 'Makeup',
    author: 'Kashish Team',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['bridal makeup', 'trends', '2024'],
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Skincare Routine for Indian Skin',
    excerpt: 'A comprehensive guide to building the perfect skincare routine tailored for Indian skin types and climate.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=500&fit=crop',
    category: 'Skincare',
    author: 'Dr. Priya Sharma',
    date: '2024-01-12',
    readTime: '8 min read',
    tags: ['skincare', 'indian skin', 'routine'],
  },
  {
    id: 3,
    title: 'Hair Care Tips for Healthy, Shiny Locks',
    excerpt: 'Learn expert hair care tips to maintain healthy, shiny hair throughout the year, regardless of weather.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=500&fit=crop',
    category: 'Hair Care',
    author: 'Sarah Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['hair care', 'healthy hair', 'tips'],
  },
  {
    id: 4,
    title: 'Nail Art Trends You Should Try This Season',
    excerpt: 'Explore the hottest nail art trends for 2024, from minimalist designs to bold statements.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=500&fit=crop',
    category: 'Nails',
    author: 'Kashish Team',
    date: '2024-01-08',
    readTime: '4 min read',
    tags: ['nail art', 'trends', 'designs'],
  },
  {
    id: 5,
    title: 'DIY Spa Treatments at Home During Lockdown',
    excerpt: 'Create luxurious spa-like treatments at home using simple ingredients found in your kitchen.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop',
    category: 'Wellness',
    author: 'Dr. Priya Sharma',
    date: '2024-01-05',
    readTime: '7 min read',
    tags: ['spa', 'diy', 'home treatments'],
  },
  {
    id: 6,
    title: 'Choosing the Right Makeup Products for Your Skin Type',
    excerpt: 'A guide to selecting the perfect makeup products that complement your skin type and concerns.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=500&fit=crop',
    category: 'Makeup',
    author: 'Sarah Johnson',
    date: '2024-01-03',
    readTime: '5 min read',
    tags: ['makeup products', 'skin type', 'guide'],
  },
]

const categories = [
  'All',
  'Makeup',
  'Skincare',
  'Hair Care',
  'Nails',
  'Wellness',
  'Tips',
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Beauty Blog
            </h1>
            <p className="text-lg text-gray-600">
              Expert tips, beauty trends, and advice from our professional team
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-IN')}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        <Tag className="w-2 h-2" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Stay Beauty Ready
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest beauty tips, trends, and exclusive offers
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
