'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data/blog'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  // Convert markdown-like content to JSX
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            {line.replace('### ', '')}
          </h3>
        )
      }
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.*?)\*\*: (.*)/)
        if (match) {
          return (
            <div key={index} className="mb-2">
              <strong className="text-gray-900">{match[1]}:</strong> {match[2]}
            </div>
          )
        }
      }
      if (line.startsWith('1. **')) {
        const match = line.match(/1\. \*\*(.*?)\*\*: (.*)/)
        if (match) {
          return (
            <div key={index} className="mb-2">
              <strong className="text-gray-900">{match[1]}:</strong> {match[2]}
            </div>
          )
        }
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      if (line.startsWith('- ')) {
        return (
          <div key={index} className="ml-4 mb-1">
            • {line.replace('- ', '')}
          </div>
        )
      }
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Post */}
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.id}`}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition" />
                    <span className="text-sm font-medium text-primary">Previous Post</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                    {prevPost.title}
                  </h3>
                </Link>
              )}

              {/* Next Post */}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.id}`}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition md:text-right"
                >
                  <div className="flex items-center gap-3 mb-3 md:justify-end">
                    <span className="text-sm font-medium text-primary">Next Post</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                    {nextPost.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
