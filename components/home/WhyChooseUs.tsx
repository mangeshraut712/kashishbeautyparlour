import { Award, Users, Clock, Shield, Heart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Experienced and certified beauticians with years of expertise',
  },
  {
    icon: Users,
    title: '5000+ Happy Clients',
    description: 'Trusted by thousands of satisfied customers across Pune',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Open 7 days a week with convenient appointment slots',
  },
  {
    icon: Shield,
    title: 'Hygiene & Safety',
    description: 'Maintaining highest standards of cleanliness and safety',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Customized services tailored to your unique needs',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'Using only high-quality, branded beauty products',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
            Your Trusted Beauty Partner
          </h2>
          <p className="text-gray-600 text-lg">
            We combine expertise, quality, and care to give you the best beauty experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition group"
              >
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-2xl flex items-center justify-center mb-4 transition">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}