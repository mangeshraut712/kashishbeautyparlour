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
    title: 'How to Choose the Right Foundation for Your Skin Type',
    excerpt: 'Learn to identify your skin type and select the perfect foundation that enhances your natural beauty without masking it. Complete guide for flawless makeup application.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop',
    category: 'Makeup',
    author: 'Dr. Priya Sharma',
    date: '2024-12-15',
    readTime: '6 min read',
    tags: ['foundation', 'skin types', 'makeup tips'],
    content: 'Foundation is the base of any makeup look, and choosing the right one can make or break your entire appearance. The key is understanding your skin type and how different formulations interact with your skin.\n\n### Skin Type Guide\n\n- **Oily Skin**: Look for oil-free, matte foundations that control shine without drying out your skin.\n- **Dry Skin**: Hydrating, dewy formulas with moisturizing ingredients will keep your skin looking fresh.\n- **Combination Skin**: Medium coverage foundations work best for T-zone shine with dry cheeks.\n- **Sensitive Skin**: Hypoallergenic options with minimal ingredients to avoid irritation.\n\n### Popular Foundation Types\n\n- **Liquid Foundation**: Best for all skin types, provides natural coverage\n- **Cream Foundation**: Perfect for dry skin, offers creamy hydration\n- **Powder Foundation**: Great for oily skin, provides matte finish without shine\n- **Tinted Moisturizer**: Light coverage with skincare benefits'
  },
  {
    id: 2,
    title: 'Essential Skincare Routine: Japanese Celebrity Method',
    excerpt: 'Discover the Japanese beauty methodology that celebrities swear by. Master the 6-step skincare routine for radiant, healthy skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop',
    category: 'Skincare',
    author: 'Dr. Priya Sharma',
    date: '2024-12-12',
    readTime: '8 min read',
    tags: ['skincare routine', 'japanese method', 'beauty tips'],
    content: 'Japanese skincare has been perfected over generations, and their multi-step approach is now popular worldwide. This method focuses on layering products to build skin health, rather than heavy coverage.\n\n### The 6 Essential Steps\n\n1. **Make-up Remover**: Double cleanse to remove impurities\n2. **Cleanser**: Thoroughly clean without stripping natural oils\n3. **Toner**: Balance pH and prep skin for absorption\n4. **Essence/Treatment**: Targeted serums for specific concerns\n5. **Serum**: Concentrated active ingredients\n6. **Moisturizer**: Lock in hydration and protect the skin barrier\n\nThe layered approach ensures optimal product absorption and maximum benefits for your skin.'
  },
  {
    id: 3,
    title: 'Holiday Makeup: Timeless Rules You Shouldn\'t Break',
    excerpt: 'Holiday season makeup tips that stand the test of time. Focus on timeless techniques rather than trendy experiments for memorable photos.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=500&fit=crop',
    category: 'Makeup',
    author: 'Sarah Johnson',
    date: '2024-12-10',
    readTime: '7 min read',
    tags: ['holiday makeup', 'timeless beauty', 'celebration looks'],
    content: 'Holiday makeup should capture the joy of the season while looking effortlessly beautiful. Forget flashy trends and focus on what truly makes photos memorable.\n\n### Essential Rules\n\n- **Keep Makeup Natural**: Focus on enhancing natural beauty rather than creating art\n- **Prioritize Skin Health**: Hydrated skin photographs beautifully\n- **Color Coordination**: Lipstick should complement your outfit and occasion\n- ** appropriate Definition**: Eyes and brows should frame your face elegantly\n- **Comfort Over Trend**: Wear makeup you can enjoy all day/night long\n\nRemember, photos capture emotions more than trends. Let your natural glow shine through!'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Lip Care',
    excerpt: 'Transform dry, chapped lips into soft, kissable perfection. Complete guide from exfoliation to hydration for beautiful lips.',
    image: 'https://images.unsplash.com/photo-1596463036319-331c911f44fb?w=800&h=500&fit=crop',
    category: 'Skincare',
    author: 'Sarah Johnson',
    date: '2024-12-08',
    readTime: '5 min read',
    tags: ['lip care', 'exfoliation', 'hydration'],
    content: 'Beautiful lips start with proper care. Kissable, smooth lips require regular attention throughout the year, but especially during harsh seasons.\n\n### Weekly Routine\n\n- **Exfoliate**: 2-3 times per week with gentle sugar-based scrubs\n- **Moisturize**: Daily application of nourishing balms\n- **Hydrate**: Drink plenty of water from within\n- **Protect**: Use SPF-protected products during sun exposure\n\n### Essential Ingredients\n\nLook for products containing:\n- Shea butter and cocoa butter\n- Vitamin E and hyaluronic acid\n- Natural oils like jojoba and argan\n- Beeswax for barrier protection\n\nConsistent care leads to naturally soft, healthy lips.'
  },
  {
    id: 5,
    title: 'Understanding Your Skin Type and Its Care',
    excerpt: 'Comprehensive guide to identifying and caring for different skin types. From identification tests to personalized treatments.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=500&fit=crop',
    category: 'Skincare',
    author: 'Dr. Priya Sharma',
    date: '2024-12-05',
    readTime: '9 min read',
    tags: ['skin types', 'skincare', 'identification'],
    content: 'Knowing your skin type is crucial for effective skincare. Different skin types respond differently to products and require tailored care approaches.\n\n### Identification Tests\n\n- **Oil Test**: Blot paper test to measure shine production\n- **Purity Test**: Go without washing to monitor breakouts\n- **Climate Test**: Observe reactions to weather changes\n- **Product Test**: Try different formulations to see responses\n\n### Care Guidelines\n\n- **Oily Skin**: Use mattifying products with salicylic acid and clay\n- **Dry Skin**: Focus on moisturizing ingredients like hyaluronic acid and ceramides\n- **Combination Skin**: Zone-specific products for different areas\n- **Sensitive Skin**: Gentle, fragrance-free formulations with peptides\n\nProfessional consultation at Kashish can help identify your exact skin type and concerns.'
  },
  {
    id: 6,
    title: 'Eyebrow Trends and Professional Styling Tips',
    excerpt: 'Explore current eyebrow trends from bold to minimal. Get professional tips for eyebrow shaping and maintenance.',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&h=500&fit=crop',
    category: 'Makeup',
    author: 'Sarah Johnson',
    date: '2024-12-03',
    readTime: '6 min read',
    tags: ['eyebrows', 'trends', 'styling'],
    content: 'Eyebrows frame the face and are crucial for facial expressions. Current trends offer options from bold statements to natural enhancement.\n\n### Popular Trends\n\n- **Structured Brows**: Precise, architectural shapes\n- **Natural Arc**: Soft, eyebrow-like contours\n- **Powdered Look**: Filled brows for bold appearance\n- **Bold and Thick**: Statement-making arches\n- **Minimal and Thin**: Subtle, thin lines\n\n### Professional Tips\n\n- **Consultation**: Professional shape assessment\n- **Threading**: Precise hair removal technique\n- **Handmade Products**: Natural waxes and oils\n- **Maintenance**: Weekly shaping sessions\n\nAt Kashish, we use the latest techniques to achieve your perfect eyebrow shape and style.'
  },
  {
    id: 7,
    title: 'Bridal Makeup Trends 2024: What\'s In and What\'s Out',
    excerpt: 'Discover the latest bridal makeup trends that are expected to dominate 2024 weddings. From natural glows to bold features.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=500&fit=crop',
    category: 'Bridal',
    author: 'Kashish Team',
    date: '2024-12-01',
    readTime: '5 min read',
    tags: ['bridal makeup', 'trends', '2024'],
    content: 'Discover the latest bridal makeup trends that are expected to dominate 2024 weddings. From natural glows to bold features.\n\n### Current Trends:\n\n- **Natural Glow**: Dewy skin look with minimal makeup\n- **Bold Eyes**: Smoky eyes or winged eyeliner for drama\n- **Nude Lips**: Soft, natural lip colors\n- **Glitter Accents**: Subtle shimmer for special touches\n- **Strong Brows**: Well-defined, groomed eyebrows\n\nChoose makeup that flatters your skin tone and personality.'
  }
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
