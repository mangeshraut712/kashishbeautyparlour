'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
    text: 'Exceptional bridal makeup service! The artistry and attention to detail made me feel absolutely beautiful on my special day. The team understood exactly what I wanted and delivered beyond expectations. Highly recommended for brides-to-be!',
  },
  {
    id: 2,
    name: 'Anjali Desai',
    service: 'Hair Styling & Treatment',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    text: 'Outstanding hair transformation at Kashish! I had severe hair damage from coloring, but their keratin treatment completely revived my hair. The stylist was incredibly skilled and patient. Six months later, my hair is still looking fabulous!',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    service: 'Regular Facial & Skin Care',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    rating: 5,
    text: 'Life-changing experience! After struggling with acne and dull skin for years, their customized facial treatments have given me clear, glowing skin I never thought possible. The therapist really understands skin concerns and provides personalized care.',
  },
  {
    id: 4,
    name: 'Rashmi Khanna',
    service: 'Party Makeup & Hair',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150',
    rating: 5,
    text: 'Perfect for special occasions! I needed makeup for a corporate event and they made me look absolutely professional yet stunning. The team worked within budget and the results lasted the entire evening. Will definitely return!',
  },
  {
    id: 5,
    name: 'Kavita Jain',
    service: 'Nail Art & Spa',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    text: 'Amazing attention to detail! My bridal nail art was absolutely exquisite. The designs were unique and perfectly matched my wedding theme. Staff is friendly, hygienic, and uses top-quality products. Highly satisfied!',
  },
  {
    id: 6,
    name: 'Meera Singhania',
    service: 'Complete Beauty Package',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
    rating: 5,
    text: 'The best in Pune! Professional, hygienic, and affordable. I got their bridal package (makeup, hair, facial, and manicure) and everything was perfect. The team is skilled, patient, and really cares about customer satisfaction. 10/10!',
  },
  {
    id: 7,
    name: 'Divya Agarwal',
    service: 'Beauty Training Course',
    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=150',
    rating: 5,
    text: 'Excellent training institute! I recently completed their makeup artist course and it was comprehensive and practical. The trainers are industry experts with real experience. Got a good job immediately after completion. Thank you Kashish!',
  },
  {
    id: 8,
    name: 'Preeti Chowdhury',
    service: 'Threading & Eyebrow Shaping',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    rating: 5,
    text: 'Best threading service I\'ve ever experienced! Precise, painless, and quick. The hygienically maintained environment and professional staff make it a pleasure to visit. Will recommend to all my friends.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
                href="https://www.google.com/maps/place/Kashish+Beauty+Parlour+And+Training+Center/@18.6139308,73.7686134,21z/data=!4m6!3m5!1s0x3bc2b991efb060f3:0x43b57b6b4ece4560!8m2!3d18.6140134!4d73.7685068!16s%2Fg%2F11f66rbt37?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            <Star className="w-5 h-5" />
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
