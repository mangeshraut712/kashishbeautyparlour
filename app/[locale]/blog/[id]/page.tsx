import type { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'
import Image from 'next/image'
import { blogPostsData } from '@/lib/data/blog'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

// Use the shared blog data
const blogPosts = blogPostsData

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
      <section className="bg-white py-16 border-b border-gray-100">
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
              <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
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
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white text-primary text-sm rounded-full border border-primary/20 shadow-sm"
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
            <div className="mb-12 rounded-2xl overflow-hidden relative h-64 md:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 800px"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('###')) {
                  const text = paragraph.replace(/^###\s*/, '')
                  return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">{text}</h3>
                } else if (paragraph.startsWith('##')) {
                  const text = paragraph.replace(/^##\s*/, '')
                  return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">{text}</h2>
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- ')).map(line => line.replace('- ', ''))
                  return (
                    <ul key={index} className="list-disc list-inside text-gray-700 space-y-2 mt-4 mb-6 ml-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.includes('**')) {
                  const parts = paragraph.split('**')
                  return (
                    <div key={index} className="mt-6 mb-4 text-gray-700">
                      {parts.map((part, partIndex) => {
                        if (partIndex % 2 === 1) {
                          return <strong key={partIndex} className="font-bold text-gray-900">{part}</strong>
                        }
                        return part
                      })}
                    </div>
                  )
                } else {
                  return <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">{paragraph}</p>
                }
              })}
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-white border-t border-gray-100">
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
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold">
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
              className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
