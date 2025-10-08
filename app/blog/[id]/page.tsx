import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react'
import Image from 'next/image'

interface PageProps {
  params: Promise<{
    id: string
  }>
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
    content: `Foundation is the base of any makeup look, and choosing the right one can make or break your entire appearance. The key is understanding your skin type and how different formulations interact with your skin.

## Skin Type Guide

### Oily Skin
Look for oil-free, matte foundations that control shine without drying out your skin. These foundations typically contain absorbing ingredients and provide long-lasting wear.

### Dry Skin
Hydrating, dewy formulas with moisturizing ingredients will keep your skin looking fresh throughout the day. Look for foundations with hyaluronic acid or nourishing oils.

### Combination Skin
Medium coverage foundations work best for T-zone shine with dry cheeks. These versatile products adapt to different areas of your face.

### Sensitive Skin
Hypoallergenic options with minimal ingredients help avoid irritation. Fragrance-free formulas are ideal for reactive skin types.

## Popular Foundation Types

### Liquid Foundation
Best for all skin types, provides natural coverage with medium to full buildable makeup.

### Cream Foundation
Perfect for dry skin, offers creamy hydration with smooth application and comfortable wear.

### Powder Foundation
Great for oily skin, provides matte finish without shine and controls oil production.

### Tinted Moisturizer
Light coverage with skincare benefits, ideal for natural everyday looks.

## Application Tips

1. Always apply foundation on moisturized skin
2. Use a damp makeup sponge for natural blending
3. Start with a small amount and build coverage gradually
4. Match foundation to your neck and jawline for seamless results

Professional consultation at Kashish Beauty Parlour can help identify your perfect foundation match.`
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
    content: `Japanese skincare has been perfected over generations, and their multi-step approach is now popular worldwide. This method focuses on layering products to build skin health, rather than heavy coverage.

## The 6 Essential Steps

### 1. Make-up Remover
Double cleanse to remove impurities using oil-based and water-based cleansers for thorough detoxification.

### 2. Cleanser
Thoroughly clean without stripping natural oils using gentle, pH-balanced formulas that respect your skin barrier.

### 3. Toner
Balance pH and prep skin for absorption while removing any remaining impurities and preparing pores for treatment products.

### 4. Essence/Treatment
Targeted serums that address specific concerns like hydration, brightening, or anti-aging with concentrated active ingredients.

### 5. Serum
High-potency formulations with vitamins, peptides, and antioxidants for intensive skin nourishment.

### 6. Moisturizer
Lock in hydration and protect the skin barrier with nourishing creams or lotions that seal in all the benefits.

## Why This Method Works

The layered Japanese approach ensures:
- Optimal product absorption
- Maximum skin nourishment
- Balanced hydration
- Incremental treatment benefits

## Adapt for Indian Skin

While following the Japanese method, consider:
- Adding SPF protection for Indian climate
- Selecting products with natural ingredients
- Adjusting for seasonal changes
- Consulting dermatologists for skin concerns

Experience professional Japanese-inspired skincare treatments at Kashish Beauty Parlour.`
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
    content: `Holiday makeup should capture the joy of the season while looking effortlessly beautiful. Forget flashy trends and focus on what truly makes photos memorable and timeless.

## Essential Rules

### Keep Makeup Natural
Focus on enhancing natural beauty rather than creating dramatic art. Natural makeup photographs better in various lighting conditions and looks appropriate for most holiday gatherings.

### Prioritize Skin Health
Hydrated skin photographs beautifully and provides the perfect canvas for makeup. Well-moisturized skin is the foundation of any successful makeup look.

### Color Coordination
Lipstick should complement your outfit colors for a cohesive appearance. Neutral tones work well with most festive clothing.

### Appropriate Definition
Eyes and brows should frame your face elegantly without being overwhelming. Well-groomed eyebrows are essential for structured facial features.

### Comfort Over Trend
Wear makeup you can enjoy throughout the entire event. Uncomfortable makeup distracts from the holiday joy.

## Timeless Techniques

### Foundation Application
Use products that match your natural skin tone exactly. Blend thoroughly for seamless coverage that photographs uniformly.

### Eye Enhancement
Focus on definition rather than decoration. Mascara and eyeliner create memorable eyes that stand out in photos.

### Lip Definition
Well-defined lips look stunning in holiday photos. Use liners that match your lipstick for precision.

### Finishing Touches
Minimal highlighting and contouring provide dimension without excess. Set everything with translucent powder for longevity.

## Professional Holiday Services

For perfect holiday makeup that lasts the entire celebration:
- Pre-event trials
- Professional application
- Touch-up services
- Photography-ready makeup

Remember, photos capture emotions more than trends. Let your natural glow shine through while looking beautifully presentable.`
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
    content: `Knowing your skin type is crucial for effective skincare. Different skin types respond differently to products and require tailored care approaches to achieve optimal skin health.

## Identification Tests

### Oil Test
Blot paper test to measure shine production and oil distribution across your face.

### Purity Test
Go without washing for a few days to monitor natural breakout patterns and oil production.

### Climate Test
Observe reactions to weather changes, humidity levels, and temperature variations.

### Product Test
Try different formulations to see how your skin responds to various ingredients and textures.

## Care Guidelines

### Oily Skin
Use mattifying products with salicylic acid and clay-based cleansers. Focus on oil control without stripping natural moisture. Lightweight, non-comedogenic formulas work best.

### Dry Skin
Focus on moisturizing ingredients like hyaluronic acid, glycerin, and ceramides. Use hydrating cleansers and richer creams. Avoid harsh exfoliants and hot water.

### Combination Skin
Zone-specific products for different areas. Oil-free moisturizers for T-zone with richer products for cheeks. Gentle exfoliation for balance.

### Sensitive Skin
Gentle, fragrance-free formulations with minimal ingredients. Avoid potential irritants like retinoids and acids until skin tolerance improves. Barrier repair is essential.

## Seasonal Adjustments

### Summer Care
Increased SPF usage, lightweight products, extra hydration from sun exposure.

### Winter Care
Heavier moisturization, humidity consideration, protection from indoor heating.

### Monsoon Care
Anti-fungal properties, waterproof products, humidity-appropriate routines.

### Indian Climate Considerations
High pollution protection, sun sensitivity, seasonal dryness management, and climate-specific product choices.

Professional consultation at Kashish Beauty Parlour can help identify your exact skin type and concerns through expert analysis.`
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
    content: `Eyebrows frame the face and are crucial for facial expressions. Current trends offer options from bold statements to natural enhancement, with various styling choices to suit different preferences.

## Popular Trends

### Structured Brows
Precise, architectural shapes with clean lines and defined arches. Popular for professional looks and contemporary styling.

### Natural Arc
Soft, eyebrow-like contours that follow natural growth patterns. Minimal intervention for a fresh, authentic appearance.

### Powdered Look
Filled brows for bold appearance and enhanced definition. Provides dimension and shape to the face.

### Bold and Thick
Statement-making arches with emphasis on volume and presence. Makes a strong fashion statement.

### Minimal and Thin
Subtle, thin lines for delicate facial features. Requires expert application for balanced appearance.

## Professional Tips

### Consultation
Professional shape assessment based on your face shape, bone structure, and personal style preferences.

### Threading
Precise hair removal technique providing clean, defined lines with long-lasting smoothness.

### Handmade Products
Natural waxes and oils for better adhesion and skin compatibility compared to commercial products.

### Maintenance
Weekly shaping sessions and at-home care routines to maintain shape between professional visits.

## Indian Skin Considerations

### Skin Sensitivity
Techniques adapted for Indian skin tones and sensitivity levels. gentler methods for reactive skin.

### Hair Texture
Treatment methods suitable for different hair growth patterns and thickness variations.

### Color Matching
Product selection that complements various skin tones and undertones common in Indian complexions.

## Home Care Tips

### Daily Cleaning
Gentle cleansing to remove impurities and maintain eyebrow area hygiene.

### Moisturizing
Light moisturization to prevent dryness and maintain skin elasticity.

### Exfoliation
Gentle weekly exfoliation to prevent ingrown hairs and maintain smoothness.

### Protection
Sun protection for eyebrow area to prevent premature aging of delicate skin.

At Kashish, we use the latest techniques to achieve your perfect eyebrow shape and style, customized to your facial features and preferences.`
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
    content: `Discover the latest bridal makeup trends that are expected to dominate 2024 weddings. From natural glows to bold features, the focus remains on timeless elegance that captures the bride's unique beauty.

## Current Trends

### Natural Glow
Dewy skin look with minimal makeup for a fresh, radiant appearance that photographs beautifully.

### Bold Eyes
Smoky eyes or winged eyeliner for drama and memorable wedding photos.

### Nude Lips
Soft, natural lip colors that complement various skin tones and wedding themes.

### Glitter Accents
Subtle shimmer for special touches like eyeshadow highlights or cheek accents.

### Strong Brows
Well-defined, groomed eyebrows that provide perfect facial framing.

## Wedding Photography Tips

Choose makeup that works well across different lighting conditions:
- Outdoor ceremonies need natural, glowy makeup
- Indoor receptions can incorporate more dramatic elements
- Photo shoots require long-lasting formulas
- Different light temperatures need color adjustments

Choose makeup that flatters your skin tone and personality while ensuring comfort throughout your special day.`
  }
]

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts.find(p => p.id === parseInt(resolvedParams.id))

  if (!post) {
    return {
      title: 'Blog Post Not Found | Kashish Beauty Parlour',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Kashish Beauty Parlour`,
    description: post.excerpt,
    keywords: post.tags.join(', ') + ', beauty tips, makeup, skincare',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    }
  }
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  const post = blogPosts.find(p => p.id === parseInt(resolvedParams.id))

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  // Handle headings
                  const level = paragraph.match(/^(#+)/)?.[1].length || 1
                  const text = paragraph.replace(/^#+\s*/, '')
                  switch (level) {
                    case 2:
                      return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">{text}</h2>
                    case 3:
                      return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">{text}</h3>
                    default:
                      return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">{text}</h2>
                  }
                } else if (paragraph.startsWith('- ')) {
                  // Handle bullet points
                  const items = post.content.split('\n').filter(line =>
                    line.startsWith('- ')
                  ).map(line => line.replace('- ', ''))

                  return (
                    <ul key={index} className="list-disc list-inside text-gray-700 space-y-2 mt-4 mb-6 ml-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.includes('**') && paragraph.includes(':')) {
                  // Handle bold text with colon (definitions)
                  const parts = paragraph.split('**')
                  return (
                    <div key={index} className="mt-6 mb-4">
                      {parts.map((part, partIndex) => {
                        if (partIndex % 2 === 1) {
                          return <strong key={partIndex} className="font-bold text-gray-900">{part}</strong>
                        }
                        return part
                      })}
                    </div>
                  )
                } else {
                  // Regular paragraph
                  return <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">{paragraph}</p>
                }
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
                >
                  <Link href={`/blog/${relatedPost.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedPost.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(relatedPost.date).toLocaleDateString('en-IN')}
                        </div>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-yellow-500"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Share this article
          </h3>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              📘 Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              🐦 Twitter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              📷 Instagram
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              🔗 Copy Link
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
