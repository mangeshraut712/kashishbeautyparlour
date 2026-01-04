// UI Components
export { Button, buttonVariants } from './ui/button'
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants } from './ui/card'
export { OptimizedImage, BackgroundImage, AvatarImage } from './ui/image'
export {
    AnimatedSection,
    AnimatedDiv,
    StaggerContainer,
    StaggerItem,
    ParallaxWrapper,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem
} from './ui/animations'

// Layout Components
export { default as Header } from './layout/Header'
export { default as Footer } from './layout/Footer'

// Providers
export { ThemeProvider } from './providers/theme-provider'

// Home Page Components
export { default as Hero } from './home/Hero'
export { default as FeaturedServices } from './home/FeaturedServices'
export { default as WhyChooseUs } from './home/WhyChooseUs'
export { default as SpecialOffers } from './home/SpecialOffers'
export { default as BeforeAfterGallery } from './home/BeforeAfterGallery'
export { default as StaffProfiles } from './home/StaffProfiles'
export { default as SocialProof } from './home/SocialProof'

// Booking Components
export { default as BookingCalendar } from './booking/BookingCalendar'
export { default as BridalInquiryForm } from './booking/BridalInquiryForm'
export { default as WeddingPackageCalculator } from './booking/WeddingPackageCalculator'
export { default as StaffSelection } from './booking/StaffSelection'

// Payment Components
export { default as UPIPayment } from './payment/UPIPayment'
export { default as EMICalculator } from './payment/EMICalculator'

// Marketing Components
export { default as FestivalOfferPopup } from './marketing/FestivalOfferPopup'

// Social Components
export { default as ShareButtons } from './social/ShareButtons'

// PWA Components
export { default as PWAInstallPrompt } from './pwa/PWAInstallPrompt'

// Gift Components
export { default as GiftCardPurchase } from './gift/GiftCardPurchase'

// Loyalty Components
export { default as LoyaltyDashboard } from './loyalty/LoyaltyDashboard'
