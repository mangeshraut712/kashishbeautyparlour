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
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-lg font-medium text-gray-800 italic">
                    "The journey of <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-bold">Kashish Beauty Parlour</span> & Training Center began in <span className="font-bold text-primary">2012</span>, fueled by the vision and passion of <span className="font-bold text-accent">Meena Raut</span>."
                  </p>
                </div>

                <p>
                  What started as a heartfelt <span className="font-semibold text-pink-600">hobby and family venture</span> in Dange Chowk, Pune, quickly blossomed into something much more. In those early days, quality beauty services were a rarity in the area, and Meena recognized a profound need.
                </p>

                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                  <p className="text-gray-700">
                    With <span className="font-bold text-purple-600">innate talent</span>, <span className="font-bold text-purple-600">unwavering dedication</span>, and <span className="font-bold text-purple-600">relentless hard work</span>, Meena quickly earned a reputation for excellence. Her thirst for knowledge led her to continually refine her skills, pursuing <span className="font-semibold text-accent">advanced training</span> with esteemed professionals like <span className="font-bold">Jawed Habib</span> and <span className="font-bold">international beauticians</span>, and earning a <span className="font-bold text-green-600">Government Certification</span> in various parlour courses. She didn't just learn; she <span className="font-bold text-primary">mastered her craft</span>.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 text-4xl text-pink-200">❇</div>
                  <p>
                    In <span className="font-bold text-primary">2012</span>, our first parlour opened its doors in Dange Chowk—a <span className="font-semibold text-green-600">welcoming, airy space</span> bathed in natural light, adorned with greenery, and filled with fresh air. It was designed to be a <span className="font-bold italic text-blue-600">sanctuary</span>. From the very beginning, our core philosophy has been to provide <span className="font-bold text-primary">exceptional service</span>. Whether it's a perfect haircut, expertly shaped eyebrows, or offering the finest cosmetic products, <span className="font-semibold text-purple-600">every detail is handled with care</span>.
                  </p>
                </div>

                <p className="text-lg">
                  <span className="text-2xl text-pink-400">🌸</span> Meena's expertise naturally extended to <span className="font-bold text-teal-600">teaching</span>. Recognizing the potential in others, she established our <span className="font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">Training Center</span>, becoming a highly regarded professional guide for <span className="font-semibold text-teal-600">aspiring beauticians</span>. We believe in <span className="font-bold text-purple-600">empowering the next generation</span>, sharing not just techniques but also the passion and dedication that define <span className="font-bold text-pink-600">Kashish</span>.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-100">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">✨</span>
                    <span className="font-bold text-lg text-gray-800">For over a decade</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    we've had the privilege of serving <span className="font-bold text-pink-600">thousands of satisfied clients</span>, from transformative bridal makeovers to essential everyday beauty needs. Our commitment to <span className="font-semibold text-purple-600">personalized care</span> and <span className="font-semibold text-purple-600">continuous improvement</span> is what sets us apart. We firmly believe that <span className="font-bold italic text-orange-600">beauty is more than skin deep—it's about feeling confident, radiant, and comfortable in your own skin</span>. We take the time to understand your unique preferences, ensuring every visit is a <span className="font-semibold text-green-600">tailored, delightful experience</span>.
                  </p>
                </div>

                <div className="text-center py-4">
                  <p className="text-lg text-gray-700 mb-2">
                    At <span className="font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Kashish</span>, we know that <span className="font-semibold text-green-600">happy clients and happy staff</span> are the foundation of a brighter future.
                  </p>
                  <p className="text-base text-gray-600 font-medium">
                    Your satisfaction isn't just our goal; it's our <span className="font-bold text-orange-500">best advertisement</span>.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <p className="text-lg font-medium text-center text-gray-800">
                    We invite you to experience the <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Kashish difference</span> and become a part of our continuing story of <span className="font-semibold text-pink-500">beauty</span>, <span className="font-semibold text-purple-500">confidence</span>, and <span className="font-semibold text-indigo-500">success</span>.
                  </p>
                </div>
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
