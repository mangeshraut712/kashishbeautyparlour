'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { useState } from 'react'
import { blogPostsData, categories } from '@/lib/data/blog'
import { useTranslations } from 'next-intl'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const tCommon = useTranslations('Common')

  const filteredPosts = selectedCategory === 'All'
    ? blogPostsData
    : blogPostsData.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Beauty <span className="gold-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Expert tips, beauty trends, and advice from our professional team
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-bold transition ${category === selectedCategory
                  ? 'bg-primary text-black shadow-lg shadow-primary/20'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
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
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100 hover:border-primary/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-bold">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3 text-primary" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-primary" />
                      {new Date(post.date).toLocaleDateString('en-IN')}
                    </div>
                    <span className="bg-white px-2 py-0.5 rounded-full text-[10px] border border-gray-100">{post.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-gray-600 text-[10px] font-bold rounded-full border border-gray-100 uppercase tracking-wider shadow-sm"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 font-bold transition-all text-sm uppercase tracking-wider"
                  >
                    {tCommon('learnMore')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white border-t border-gray-100 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
            Stay Beauty Ready
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 font-medium">
            Subscribe to our newsletter for the latest beauty tips, trends, and exclusive offers
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2 p-1.5 bg-white rounded-full border border-gray-100 shadow-lg" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                id="blog-newsletter-email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter subscription"
                className="flex-1 px-6 py-3 rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400 font-medium"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 gold-gradient text-black rounded-full font-bold transition shadow-xl"
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
