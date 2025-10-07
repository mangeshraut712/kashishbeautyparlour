import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Users, Sparkles, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Kashish Beauty Parlour',
  description: 'Learn about Kashish Beauty Parlour - Pune\'s trusted beauty and training center with years of experience in professional beauty services.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              About Kashish Beauty Parlour
            </h1>
            <p className="text-lg text-gray-600">
              Where beauty meets artistry and every client becomes family
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kashish Beauty Parlour was founded with a simple dream - to make every woman feel 
                  beautiful, confident, and special. What started as a small beauty parlour has grown 
                  into one of Pune's most trusted beauty destinations.
                </p>
                <p>
                  With over a decade of experience in the beauty industry, we have served thousands 
                  of satisfied clients, from bridal makeovers to everyday beauty needs. Our commitment 
                  to excellence and personalized care sets us apart.
                </p>
                <p>
                  We believe that beauty is not just about appearance - it's about feeling confident 
                  and comfortable in your own skin. That's why we take time to understand each client's 
                  unique needs and preferences, ensuring a tailored experience every time.
                </p>
                <p>
                  Beyond beauty services, we're proud to run a professional training center, helping 
                  aspiring beauticians develop their skills and build successful careers in the beauty industry.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop"
                alt="Kashish Beauty Parlour Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every service we provide
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through honest service
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Staying updated with latest trends and techniques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Care</h3>
              <p className="text-gray-600">
                Treating every client with love and attention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12 text-center">
              Why Choose Kashish?
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Certified & Experienced Professionals
                  </h3>
                  <p className="text-gray-600">
                    Our team consists of certified beauticians with years of experience and ongoing training 
                    in the latest beauty techniques and trends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Premium Quality Products
                  </h3>
                  <p className="text-gray-600">
                    We use only high-quality, branded products from trusted manufacturers to ensure 
                    the best results and safety for your skin and hair.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hygiene & Safety First
                  </h3>
                  <p className="text-gray-600">
                    We maintain the highest standards of cleanliness and hygiene, with sanitized tools, 
                    clean environment, and strict safety protocols.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Personalized Consultation
                  </h3>
                  <p className="text-gray-600">
                    Every service begins with a detailed consultation to understand your needs, preferences, 
                    and desired outcomes for customized results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Affordable Luxury
                  </h3>
                  <p className="text-gray-600">
                    We believe everyone deserves to look and feel beautiful. Our services offer premium 
                    quality at reasonable prices, making luxury accessible.
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
            Experience the Kashish Difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied clients who trust us for their beauty needs
          </p>
          <Link
            href="/contact#booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full font-semibold transition transform hover:scale-105"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}