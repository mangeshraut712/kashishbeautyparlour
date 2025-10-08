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
      {/* Header Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Training at Kashish Beauty Parlour
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your passion into a successful beauty career with expert mentorship, professional equipment, and industry-recognized certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              🌸 Our Training Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our comprehensive beauty training programs designed for aspiring professionals.
            </p>
            <p className="text-primary font-semibold text-lg mt-2">
              Institution: Kashish Beauty Parlour & Training Center
            </p>
          </div>

          {courses.map((course) => (
            <div
              key={course.id}
              className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg mb-12"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8">
                <h3 className="text-3xl font-heading font-bold mb-4">
                  💄 {course.title}
                </h3>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Duration: {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Timings: {course.schedule}
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-full font-semibold">
                    Fees: {course.price}
                  </div>
                </div>
              </div>

              {/* Course Description */}
              <div className="p-8">
                <p className="text-gray-600 text-lg mb-8">
                  {course.description}
                </p>

                {/* Basic Syllabus */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">🩷 Basic Syllabus</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {course.basicSyllabus.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 bg-pink-50 p-3 rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Syllabus */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">💋 Advanced Syllabus</h4>

                  {/* Makeup Module */}
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold text-purple-700 mb-3">Makeup Module</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {course.advancedSyllabus.makeupModule.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-purple-50 p-2 rounded">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hair Module */}
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold text-blue-700 mb-3">Hair Module</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {course.advancedSyllabus.hairModule.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-blue-50 p-2 rounded">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skin Module */}
                  <div>
                    <h5 className="text-xl font-semibold text-green-700 mb-3">Skin Module</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.advancedSyllabus.skinModule.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 bg-green-50 p-2 rounded">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Sessions */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">💕 Demo Sessions Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.demoSessions.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 bg-yellow-50 p-3 rounded-lg">
                        <span className="text-2xl">💄</span>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Duration & Details */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">🕓 Course Duration & Details</h4>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <strong>Duration:</strong> {course.duration}
                      </div>
                      <div>
                        <strong>Timings:</strong> {course.schedule}
                      </div>
                      <div>
                        <strong>Fees:</strong> {course.price}
                      </div>
                      <div>
                        <strong>Topics Covered:</strong> Basic + Advanced Syllabus
                      </div>
                      <div className="md:col-span-2">
                        <strong>Certification:</strong> ISO-Certified Certificate on Completion
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Required */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">📋 Documents Required</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.documentsRequired.map((doc, index) => (
                      <div key={index} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                        <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Options */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">💳 Payment Options</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {course.paymentOptions.map((option, index) => (
                      <div key={index} className="text-center bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl mb-2">💰</div>
                        <span className="text-gray-700 font-medium">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <div className="text-center">
                  <Link
                    href="/contact#booking"
                    className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/30 text-lg"
                  >
                    <GraduationCap className="w-6 h-6 mr-3" />
                    Enroll Now - ₹60,000
                  </Link>
                </div>
              </div>
            </div>
          ))}
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-black border-t-4 border-white/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Start Your Beautiful Career Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-black/85 font-medium">
            Join thousands of successful beauty professionals who started their career with our training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-yellow-500"
            >
              Enroll in Course
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-yellow-500"
            >
              Get More Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
