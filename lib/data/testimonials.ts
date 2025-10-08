// Testimonials data
export interface Testimonial {
  id: number
  name: string
  service: string
  image: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Exceptional bridal makeup service! The artistry and attention to detail made me feel absolutely beautiful on my special day. The team understood exactly what I wanted and delivered beyond expectations. Highly recommended for brides-to-be!',
  },
  {
    id: 2,
    name: 'Anjali Desai',
    service: 'Hair Styling & Treatment',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Outstanding hair transformation at Kashish! I had severe hair damage from coloring, but their keratin treatment completely revived my hair. The stylist was incredibly skilled and patient. Six months later, my hair is still looking fabulous!',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    service: 'Regular Facial & Skin Care',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Life-changing experience! After struggling with acne and dull skin for years, their customized facial treatments have given me clear, glowing skin I never thought possible. The therapist really understands skin concerns and provides personalized care.',
  },
  {
    id: 4,
    name: 'Rashmi Khanna',
    service: 'Party Makeup & Hair',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Absolutely love the party makeup and hair styling! The team made me look stunning for my sister\'s wedding. The makeup lasted all day and the hairstyle was perfect. Will definitely come back for future events!',
  },
  {
    id: 5,
    name: 'Meera Joshi',
    service: 'Spa & Wellness',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The spa experience at Kashish is simply divine! The massage and facial treatment left me feeling completely relaxed and rejuvenated. The ambiance is peaceful and the therapists are very professional. A perfect escape from daily stress!',
  },
  {
    id: 6,
    name: 'Kavya Reddy',
    service: 'Hair Color & Highlights',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Amazing hair coloring service! The colorist understood exactly what I wanted and the results exceeded my expectations. The highlights look natural and the color has stayed vibrant for months. Highly recommend their hair services!',
  },
  {
    id: 7,
    name: 'Pooja Singh',
    service: 'Nail Art & Manicure',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The nail art and manicure services are exceptional! The technicians are incredibly skilled with intricate designs and perfect shapes. My nails look salon-perfect and last longer than any other salon I\'ve tried. The cleanliness and hygiene standards are also top-notch!',
  },
  {
    id: 8,
    name: 'Divya Nair',
    service: 'Threading & Eyebrow Shaping',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Professional threading service that is precise and painless! The shape they gave my eyebrows perfectly complements my face structure. I no longer need to fill them in much, and the service is quick and affordable. Highly skilled technicians with a gentle touch!',
  },
  {
    id: 9,
    name: 'Sakshi Mehta',
    service: 'Body Waxing & Depilation',
    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'The waxing services are amazing - clean, professional, and almost painless with their expertise! They use the best wax quality and the room is always hygienic. Results last weeks and my skin stays smooth. They cater to different skin sensitivities perfectly!',
  },
  {
    id: 10,
    name: 'Riya Kapoor',
    service: 'Henna/Mehndi Design',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Beautiful and intricate henna designs that turned my bridal hand into a work of art! The mehndi artist is incredibly talented with traditional motifs and the henna paste quality is excellent. The cone prepared fresh and the stain was dark and long-lasting. Perfect for my wedding!',
  },
  {
    id: 11,
    name: 'Aaradhya Sharma',
    service: 'Eyebrow Microblading & Lash Extensions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Transformative eyebrow microblading experience! My sparse eyebrows now look full and perfectly shaped. The precision work is exceptional and natural-looking. Combined with lash extensions that open up my eyes amazingly. The aftercare was clear and the results have been flawless for months!',
  },
  {
    id: 12,
    name: 'Shraddha Iyer',
    service: 'Hair Straightening & Smoothing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Professional hair straightening that gave me silky, manageable hair! After years of dealing with curly, unmanageable hair, this treatment has completely changed my routine. The stylist explained the process thoroughly and the results are beyond what I expected. My hair is now straight, smooth, and healthy!',
  },
]
