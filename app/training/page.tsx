import type { Metadata } from 'next'
import Link from 'next/link'
import { GraduationCap, Clock, Users, Award, CheckCircle } from 'lucide-react'
import { courses, benefits } from '@/lib/data/training'

export const metadata: Metadata = {
  title: 'Beauty Training | Kashish Beauty Parlour',
  description: 'Professional beauty training courses at Kashish Beauty Parlour. Learn makeup artistry, hair styling, and beauty services with certified trainers.',
}

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Beauty Training Center
            </h1>
            <p className="text-lg text-gray-600">
              Learn professional beauty skills from certified experts and build your career in the beauty industry
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-gray-600 text-lg">
              Get trained by industry professionals with practical experience and theoretical knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Training Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our comprehensive beauty training programs designed for aspiring professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                {/* Header */}
                <div className="bg-primary text-white p-6">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {course.schedule}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary font-bold text-2xl">
                      {course.price}
                    </div>
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  <p className="text-gray-600 mb-6">
                    {course.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact#booking"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Start Your Beautiful Career Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of successful beauty professionals who started their career with our training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-semibold transition transform hover:scale-105"
            >
              Enroll in Course
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary rounded-full font-semibold transition transform hover:scale-105"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Ready to Begin Your Training?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today to learn more about our courses and admission process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-medium transition"
            >
              Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}