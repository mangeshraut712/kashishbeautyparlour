import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Clock, IndianRupee, BookOpen, Users, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beauty Training Courses | Kashish Beauty Parlour',
  description: 'Professional beauty training courses in Pune. Learn bridal makeup, hair styling, skin care, and more. Get certified and start your career in beauty industry.',
}

const courses = [
  {
    id: 1,
    title: 'Professional Makeup Artist Course',
    duration: '3 Months',
    fee: '₹35,000',
    description: 'Complete makeup training including bridal, party, HD, and airbrush makeup techniques.',
    topics: [
      'Basic to advanced makeup techniques',
      'Bridal makeup specialization',
      'HD & Airbrush makeup',
      'Color theory and face shapes',
      'Product knowledge',
      'Client handling',
    ],
  },
  {
    id: 2,
    title: 'Hair Styling & Treatment Course',
    duration: '2 Months',
    fee: '₹28,000',
    description: 'Learn professional hair cutting, styling, coloring, and treatment techniques.',
    topics: [
      'Hair cutting techniques',
      'Hair styling and updos',
      'Hair coloring and highlights',
      'Keratin and other treatments',
      'Hair spa procedures',
      'Bridal hairstyling',
    ],
  },
  {
    id: 3,
    title: 'Skin Care & Facial Course',
    duration: '1.5 Months',
    fee: '₹22,000',
    description: 'Master various facial techniques, skin analysis, and treatment procedures.',
    topics: [
      'Skin analysis and types',
      'Various facial techniques',
      'Anti-aging treatments',
      'Acne and pigmentation care',
      'Massage techniques',
      'Product formulations',
    ],
  },
  {
    id: 4,
    title: 'Complete Beauty Course',
    duration: '6 Months',
    fee: '₹65,000',
    description: 'Comprehensive training covering all aspects of beauty services - makeup, hair, skin, and nails.',
    topics: [
      'All makeup techniques',
      'Hair cutting, styling & treatments',
      'Facial and skin care',
      'Manicure, pedicure, nail art',
      'Spa and massage',
      'Business management',
    ],
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Professional Beauty Training Center
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn from certified professionals and start your rewarding career in the beauty industry
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Learn With Us?
            </h2>
            <p className="text-gray-600 text-lg">
              Get industry-ready skills with hands-on training and certified courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Certified Training</h3>
              <p className="text-gray-600">Get recognized certification upon course completion</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Small Batches</h3>
              <p className="text-gray-600">Limited students per batch for personalized attention</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Hands-on Practice</h3>
              <p className="text-gray-600">Learn by doing with real clients and live sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Training Courses
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our range of professional beauty courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8"
              >
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{course.fee}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary mt-1">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact#booking"
                  className="block w-full text-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
              Admission Process
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inquiry & Counseling</h3>
                  <p className="text-gray-600">
                    Contact us or visit our center to learn about courses and career opportunities
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-600">
                    Fill out the admission form and submit required documents
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fee Payment</h3>
                  <p className="text-gray-600">
                    Pay course fees (installment options available)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Learning</h3>
                  <p className="text-gray-600">
                    Begin your journey with scheduled classes and hands-on training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Start Your Beauty Career Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of successful students who started their journey with us
          </p>
          <Link
            href="/contact#booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-semibold transition transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  )
}