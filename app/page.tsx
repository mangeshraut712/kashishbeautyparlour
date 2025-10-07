import Hero from '@/components/home/Hero'
import FeaturedServices from '@/components/home/FeaturedServices'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import SpecialOffers from '@/components/home/SpecialOffers'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <SpecialOffers />
      <Testimonials />
    </>
  )
}