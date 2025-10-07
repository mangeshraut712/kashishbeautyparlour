# Kashish Beauty Parlour Website

A modern, responsive website for Kashish Beauty Parlour built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **SEO Optimized**: Built-in SEO features with dynamic sitemap and robots.txt
- **Performance**: Optimized for speed with Next.js 14 and image optimization
- **Contact Forms**: Integrated contact and booking forms with Firebase backend
- **Blog System**: Dynamic blog with category filtering
- **Gallery**: Interactive image gallery with category filters
- **Training Center**: Professional beauty training course information
- **WhatsApp Integration**: Direct WhatsApp contact functionality
- **Mobile Responsive**: Fully responsive design for all devices

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase Admin SDK, Firestore
- **Deployment**: Vercel (recommended)
- **Version Control**: Git, GitHub

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── services/          # Services page
│   ├── training/          # Training page
│   └── api/               # API routes
├── components/            # Reusable React components
│   ├── home/              # Homepage components
│   └── layout/            # Layout components
├── lib/                   # Utility functions and data
│   ├── data/              # Centralized data files
│   └── constants.ts       # Global constants
├── public/                # Static assets
│   ├── images/            # Image assets
│   └── logo.png           # Logo file
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd kashish-beauty-parlour
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_PRIVATE_KEY=your-private-key
   FIREBASE_CLIENT_EMAIL=your-client-email
   NEXT_PUBLIC_WHATSAPP=your-whatsapp-number
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment Guide

### Option 1: Deploy with Vercel (Recommended - FREE)

Vercel is the easiest and most cost-effective way to deploy your Next.js website with a free domain.

#### Step 1: Prepare Your Code

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Update Environment Variables**
   - Update `lib/constants.ts` with your business information
   - Replace placeholder images in `public/images/` with actual photos
   - Update `app/robots.ts` with your actual domain

#### Step 2: Deploy to Vercel

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add your Firebase credentials:
     ```
     FIREBASE_PROJECT_ID=your-project-id
     FIREBASE_PRIVATE_KEY=your-private-key
     FIREBASE_CLIENT_EMAIL=your-client-email
     NEXT_PUBLIC_WHATSAPP=your-whatsapp-number
     ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a free domain like `your-project.vercel.app`

#### Step 3: Custom Domain (Optional)

1. **Buy a Domain**
   - Purchase a domain from providers like:
     - [Namecheap](https://namecheap.com) (~$10/year)
     - [GoDaddy](https://godaddy.com) (~$12/year)
     - [Google Domains](https://domains.google) (~$12/year)

2. **Add Domain to Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow Vercel's DNS configuration instructions

3. **Update DNS Settings**
   - In your domain provider's DNS settings:
     - Add CNAME record: `www` → `cname.vercel-dns.com`
     - Add A record: `@` → `76.76.19.61`

### Option 2: Deploy with Netlify (Alternative - FREE)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `out` folder
   - Or connect your GitHub repository

3. **Configure Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add your Firebase credentials

### Option 3: Deploy with GitHub Pages (FREE)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Configuration

### Business Information

Update `lib/constants.ts` with your business details:

```typescript
export const BUSINESS_INFO = {
  name: "Kashish Beauty Parlour",
  phone: "+91-9876543210",
  email: "info@kashishbeauty.com",
  address: "123 Main Street, Pune, Maharashtra 411001",
  // ... other details
}
```

### Services

Add your services in `lib/data/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: 1,
    category: "Makeup",
    name: "Bridal Makeup",
    description: "Complete bridal makeup package",
    price: "₹15,000",
    duration: "3-4 hours",
    // ... other details
  }
]
```

### Images

1. **Replace placeholder images** in `public/images/`
2. **Optimize images** for web (use WebP format when possible)
3. **Update image paths** in data files if needed

## 📱 WhatsApp Integration

The website includes WhatsApp integration for easy customer contact:

1. **Set up WhatsApp Business**
   - Download WhatsApp Business app
   - Create a business profile

2. **Configure the number**
   - Update `NEXT_PUBLIC_WHATSAPP` in environment variables
   - Format: `91XXXXXXXXXX` (without + symbol)

## 🔍 SEO Optimization

The website includes built-in SEO features:

- **Meta tags** for each page
- **Dynamic sitemap** generation
- **Robots.txt** configuration
- **Open Graph** tags for social sharing
- **Structured data** for better search visibility

### Google Analytics Setup

1. **Create Google Analytics account**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create a new property

2. **Add tracking code**
   - Add your GA4 measurement ID to environment variables
   - Update `app/layout.tsx` with your tracking code

## 🚀 Performance Optimization

- **Image optimization** with Next.js Image component
- **Code splitting** for faster loading
- **Lazy loading** for images and components
- **Minified CSS and JavaScript**
- **CDN delivery** through Vercel

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Structure

- **Components**: Reusable UI components in `components/`
- **Pages**: Route pages in `app/`
- **Data**: Centralized data in `lib/data/`
- **Styles**: Global styles in `app/globals.css`
- **Types**: TypeScript interfaces in `lib/`

## 📞 Support

For technical support or questions:

- **Email**: support@kashishbeauty.com
- **Phone**: +91-9876543210
- **WhatsApp**: +91-9876543210

## 📄 License

This project is licensed under the MIT License.

## 🎉 Congratulations!

Your beauty parlour website is now ready to go live! 

### Next Steps:

1. **Deploy to Vercel** (recommended)
2. **Add your business images**
3. **Update business information**
4. **Set up Google Analytics**
5. **Test all functionality**
6. **Share your website with customers!**

### Cost Breakdown:

- **Domain**: $10-12/year (optional)
- **Hosting**: FREE (Vercel)
- **SSL Certificate**: FREE (Vercel)
- **CDN**: FREE (Vercel)
- **Total**: $0-12/year

Your website is now professional, fast, and ready to attract customers!
