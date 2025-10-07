import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beauty Tips & Blog | Kashish Beauty Parlour',
  description: 'Expert beauty tips, makeup tutorials, skincare advice, and latest trends from Kashish Beauty Parlour professionals in Pune.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Bridal Makeup Checklist: 6-Month Timeline for Pune Brides',
    excerpt: 'Complete guide to preparing for your wedding day beauty. From skin care to makeup trials, we cover everything you need.',
    category: 'Bridal',
    date: '2025-09-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    slug: 'bridal-makeup-timeline-pune',
  },
  {
    id: 2,
    title: 'Best Hair Care Routine for Pune\'s Weather',
    excerpt: 'Pune\'s climate can be harsh on your hair. Learn how to maintain healthy, beautiful hair year-round.',
    category: 'Hair Care',
    date: '2025-09-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800',
    slug: 'hair-care-pune-weather',
  },
  {
    id: 3,
    title: '10 Beauty Tips for Glowing Skin in Summer',
    excerpt: 'Keep your skin radiant and healthy during hot summer months with these expert-recommended tips.',
    category: 'Skin Care',
    date: '2025-09-05',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    slug: 'summer-skincare-tips',
  },
  {
    id: 4,
    title: 'How to Choose the Right Beauty Parlour in Pune',
    excerpt: 'Not all beauty parlours are created equal. Here\'s what to look for when choosing a beauty salon.',
    category: 'Beauty Tips',
    date: '2025-08-28',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    slug: 'choose-right-beauty-parlour',
  },
  {
    id: 5,
    title: 'Facial Treatment Guide: Which One is Right for You?',
    excerpt: 'From gold facials to fruit facials, understand different treatments and find the perfect one for your skin type.',
    category: 'Skin Care',
    date: '2025-08-20',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    slug: 'facial-treatment-guide',
  },
  {
    id: 6,
    title: 'How to Become a Makeup Artist in Pune',
    excerpt: 'Step-by-step guide to starting your career as a professional makeup artist in Pune\'s beauty industry.',
    category: 'Career',
    date: '2025-08-15',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    slug: 'become-makeup-artist-pune',
  },
]

const categories = ['All', 'Bridal', 'Hair Care', 'Skin Care', 'Beauty Tips', 'Career']

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Beauty Tips & Insights
            </h1>
            <p className="text-lg text-gray-600">
              Expert advice, tutorials, and the latest beauty trends from Kashish Beauty Parlour professionals
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
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
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
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
            <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Get Beauty Tips in Your Inbox
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter for weekly beauty tips, exclusive offers, and more
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-white/30 flex-1 max-w-md"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-semibold transition transform hover:scale-105"
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