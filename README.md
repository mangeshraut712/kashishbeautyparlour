# 🌟 Kashish Beauty Parlour - Professional Beauty Salon Website

Welcome to **Kashish Beauty Parlour** website! This is a modern, fully responsive Next.js application that showcases our professional beauty services in Pune. Experience stunning galleries, interactive features, and seamless mobile responsiveness.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🔧 Technologies Used](#-technologies-used)
- [📱 Mobile-First Design](#-mobile-first-design)
- [🚀 Quick Start](#-quick-start)
- [🎨 Gallery Features](#-gallery-features)
- [🗂️ Project Structure](#-project-structure)
- [🌐 GitHub to Vercel Deployment](#-github-to-vercel-deployment)
- [📝 Contact & Support](#-contact--support)

## 🌐 **Live Demo**

🎉 **Visit our live website**: [https://kashishbeautyparlour.vercel.app](https://kashishbeautyparlour.vercel.app)

## ✨ Features

### 💄 **Professional Beauty Services**
- **16 Service Categories**: Facial, hair styling, manicure/pedicure, bridal makeup, and more
- **Detailed Pricing**: Transparent pricing for all services
- **Service Features**: Complete feature lists for informed decision-making

### 🎨 **Enhanced Gallery Experience**
- **16 Professional Photos**: Makeup looks, hairstyles, before/after transformations
- **Interactive Lightbox**: Click images for full-screen viewing with navigation
- **Category Filtering**: All, Makeup Looks, Hairstyles, Before/After, Parlour
- **Video Section**: Professional hair styling demonstration
- **Touch Navigation**: Optimized for mobile devices

### 📱 **Fully Mobile Responsive**
- **Touch-Friendly UI**: 44px minimum touch targets
- **Responsive Grid**: Adapts seamlessly from mobile to desktop
- **Optimized Images**: Fast loading on all devices
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **Keyboard Support**: Arrow keys and Escape for gallery navigation

### 🏪 **Business Features**
- **WhatsApp Integration**: Direct booking through WhatsApp
- **Google Reviews QR**: Easy customer feedback submission
- **Location Information**: Complete contact details and hours
- **Professional Branding**: Consistent color scheme and typography

### 🔧 **Technical Excellence**
- **SEO Optimized**: Meta tags, structured data, and fast loading
- **Performance Focused**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation
- **Security Headers**: Built-in security configurations

## 🔧 Technologies Used

- **⚡ Next.js 14** - React framework with App Router
- **⚛️ React 18** - Modern React with hooks
- **🔷 TypeScript** - Type-safe development
- **🎨 Tailwind CSS** - Utility-first styling
- **🎭 Framer Motion** - Smooth animations
- **🔥 Firebase** - Contact form submissions
- **☁️ Vercel** - Global deployment platform
- **🐙 GitHub** - Version control and deployment

## 📱 Mobile-First Design

This website is built with a **mobile-first approach**, ensuring excellent performance on:
- **📱 Smartphones**: iOS Safari, Chrome Mobile, Samsung Internet
- **📲 Tablets**: iPad, Android tablets, Surface Pro
- **💻 Desktops**: Chrome, Firefox, Safari, Edge
- **🖥️ Large Screens**: High-resolution displays

### Mobile Optimizations:
- **Viewport Meta Tag**: Proper scaling on all devices
- **Touch Gestures**: Swipe support in gallery
- **Readable Text**: 16px minimum font size
- **Thumb-Friendly**: Adequate spacing between elements

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/mangeshraut712/kashishbeautyparlour.git
cd kashishbeautyparlour

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3001
```

## 🎨 Gallery Features

### 🖼️ **Image Gallery**
- **Makeup Looks**: 7 professional makeup transformations
- **Hairstyles**: 6 expert hair styling examples
- **Before & After**: 2 transformative result showcases
- **Parlour Exterior**: Professional business imagery

### 🎥 **Video Content**
- Professional hair styling demonstration
- Auto-playing with poster image
- Responsive video controls

### 🖱️ **Interactive Features**
- **Lightbox Modal**: Full-screen image viewing
- **Navigation Arrows**: Next/previous image browsing
- **Counter Display**: "Current/Total" image counter
- **Category Filters**: Organized viewing experience
- **Keyboard Controls**: Arrow keys + Escape functionality

## 🗂️ Project Structure

```
kashishbeautyparlour/
├── 📁 app/                           # Next.js App Router
│   ├── 📄 layout.tsx                # Root layout with analytics
│   ├── 📄 page.tsx                  # Homepage
│   ├── � globals.css                # Global styles
│   ├── �� about/                     # About page
│   ├── 📁 gallery/                   # Interactive gallery with lightbox
│   ├── 📁 services/                  # Services listing
│   ├── 📁 contact/                   # Contact form with Firebase
│   ├── 📁 blog/                      # Blog section
│   ├── 📁 training/                  # Training courses
│   └── 📁 api/contact/               # Firebase contact API
├── 📁 components/                    # React components
│   ├── 📁 home/                       # Homepage sections
│   │   ├── 🖼️ Hero.tsx                # Hero banner
│   │   ├── 📋 FeaturedServices.tsx    # Services preview
│   │   ├── ⭐ Testimonials.tsx         # Customer reviews & QR
│   │   └── 🎯 WhyChooseUs.tsx         # Business benefits
│   └── 📁 layout/                     # Layout components
│       ├── 🧭 Header.tsx              # Mobile-responsive navigation
│       ├── 🦶 Footer.tsx              # Site footer
│       └── 📱 WhatsAppButton.tsx      # Floating booking button
├── 📁 lib/                           # Utility libraries
│   ├── � firebaseAdmin.ts           # Firebase config
│   ├── �� data/                       # Static content
│   │   ├── 🖼️ gallery.ts              # Gallery images data
│   │   ├── 💅 services.ts             # Service data
│   │   └── ⭐ testimonials.ts          # Reviews
│   └── ⚙️ constants.ts                # Configuration
├── 📁 public/                        # Static assets
│   ├── 📂 makeup%20look/              # Makeup images (7 files)
│   ├── 📂 hairstyle/                  # Hair styling (6 files)
│   ├── 📂 before%20after/             # Transformations (2 files)
│   ├── 📂 parlour%20inside%20outside/  # Location photos
│   ├── 📂 videos/                     # Demo video
│   └── 📂 other/                       # Logo, QR codes
├── 📄 vercel.json                    # Vercel deployment config
├── 📄 tailwind.config.ts             # Tailwind CSS config
├── 📄 next.config.js                 # Next.js config
├── 📄 package.json                   # Dependencies
├── 📄 *.json                         # Firebase service account key
└── 📄 README.md                       # Project documentation
```

## 🌐 GitHub to Vercel Deployment

### 🚀 **Automatic GitHub Deployment (Recommended)**

Since you already have GitHub connected to Vercel:

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Login with your account

2. **Find Existing Project**:
   - Look for "kashishbeautyparlour" in your projects
   - Click on it to manage

3. **Deploy from GitHub** (if connected):
   - Go to Settings → Git → Connect GitHub
   - Select your repository
   - Push changes to trigger auto-deployment

4. **Manual Redeploy**:
   - Go to the "Deployments" tab
   - Click "Redeploy" on the latest deployment

### 🎯 **Alternative: New Project Name**

If you want a fresh deployment with a new name:

```bash
# Cancel current deployment if running
# Then create new deployment with custom name
vercel --prod --name kashish-beauty-salon
```

### 📈 **Monitor Deployment Status**

- **Live URL**: Automatically generated (e.g., `kashishbeautyparlour.vercel.app`)
- **Build Status**: Check in Vercel dashboard
- **Custom Domain**: Add your own domain in Vercel settings

## 🔧 Environment Setup

```bash
# Firebase Configuration (for contact forms)
# Create .env.local file
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_SERVICE_ACCOUNT_KEY='{"key": "value"}'
```

## 📊 Performance

- ✅ **Google Lighthouse**: 95+ scores
- ✅ **Mobile-Friendly**: Google Mobile Test passed
- ✅ **SEO Optimized**: Meta tags and semantic HTML
- ✅ **Fast Loading**: Optimized images and code splitting

## 📝 Contact & Support

**Kashish Beauty Parlour**
- 📍 **Location**: Thergaon, Pune, Maharashtra
- 📞 **Phone**: +91 72767 84825
- 💼 **Hours**: Mon-Sat: 9AM-9PM, Sun: 10AM-6PM
- 🌐 **Live Website**: [https://kashishbeautyparlour.vercel.app](https://kashishbeautyparlour.vercel.app)
- 🖼️ **Gallery**: Interactive photo & video showcase
- 📱 **Mobile App**: Optimized for phones & tablets
- 💬 **WhatsApp**: Direct booking at +91 72767 84825
- ⭐ **Google Reviews**: QR code on testimonials page

### 🤝 **Contributing**
```bash
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
```

---

**🎉 Your professional beauty salon website is now live and mobile-ready!**

*Built with ❤️ for Kashish Beauty Parlour - Proudly serving Pune since 2012*
