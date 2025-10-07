# Kashish Beauty Parlour Website

🎨 **Professional Beauty Parlour & Training Center Website**

Modern, fast, and SEO-optimized website built with Next.js 14 and TypeScript.

## 🚀 Features

- ✅ **Modern Design** - Beautiful, responsive UI with Tailwind CSS
- ✅ **Fast Performance** - Optimized for speed and SEO
- ✅ **WhatsApp Integration** - Direct booking through WhatsApp
- ✅ **Mobile-First** - Perfect on all devices
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Service Catalog** - Complete list of services with pricing
- ✅ **Photo Gallery** - Showcase your work
- ✅ **Blog Section** - Share beauty tips and attract organic traffic
- ✅ **Contact Forms** - Easy booking and inquiry system
- ✅ **Google Maps** - Integrated location map

## 📁 Project Structure

```
website/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── gallery/           # Gallery page
│   ├── training/          # Training center page
│   ├── blog/              # Blog section
│   └── contact/           # Contact & booking page
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, WhatsApp button
│   └── home/             # Homepage components
├── lib/                   # Utilities and data
│   ├── constants.ts      # Business info constants
│   └── data/             # Static data (services, etc.)
└── public/               # Static assets
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/mangeshraut712/kashishbeautyparlour.git
cd kashishbeautyparlour/website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your actual:
- Phone numbers
- Email address
- WhatsApp number
- Google Maps embed URL
- Social media links

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Business Information

Edit `lib/constants.ts`:
```typescript
export const BUSINESS_INFO = {
  name: 'Your Salon Name',
  contact: {
    phone: 'Your Phone',
    whatsapp: 'WhatsApp Number',
    email: 'Your Email',
  },
  address: {
    // Your address
  },
  // ... other info
}
```

### Add Your Services

Edit `lib/data/services.ts` to add/modify services:
```typescript
export const services = [
  {
    id: 'service-id',
    name: 'Service Name',
    price: 'Starting from ₹XXX',
    // ... other details
  },
]
```

### Update Images

Replace placeholder images with your actual photos:
- Add images to `public/images/`
- Update image paths in components

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_COLOR',    // Gold
  secondary: '#YOUR_COLOR',  // Pink
  accent: '#YOUR_COLOR',     // Burgundy
}
```

## 📦 Deployment

### Deploy to Vercel (Recommended - FREE)

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`

4. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add your domain (e.g., kashishbeautyparlour.com)
   - Update DNS records as instructed

### Deploy to Netlify (Alternative - FREE)

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Deploy
```bash
npm run build
netlify deploy --prod
```

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📊 Analytics Setup

### Google Analytics

1. Create Google Analytics account
2. Get your GA4 Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Vercel Analytics

Free analytics are automatically enabled on Vercel!

## 🎯 SEO Optimization

Website includes:
- ✅ Meta tags on all pages
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt
- ✅ Structured data (schema markup)
- ✅ Open Graph tags
- ✅ Fast loading speed

### Submit to Google

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your website
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google My Business**
   - Claim your business listing
   - Add website URL
   - Upload photos
   - Collect reviews

## 📱 WhatsApp Integration

The website uses WhatsApp for bookings. Update your WhatsApp Business number in:
- `lib/constants.ts`
- `.env.local`

Message format is customized in `components/layout/WhatsAppButton.tsx` and contact form.

## 🎨 Design System

**Colors:**
- Primary (Gold): #D4AF37
- Secondary (Pink): #FFB6C1
- Accent (Burgundy): #800020

**Fonts:**
- Headings: Playfair Display
- Body: Inter

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📞 Support

For questions or issues:
- Check documentation in parent folder
- Review `WEBSITE_PLAN.md` for features
- See `CLIENT_ACQUISITION_STRATEGY.md` for marketing

## 📝 Content Updates

### Adding Blog Posts

1. Create new file in `app/blog/[slug]/page.tsx`
2. Add post metadata to `app/blog/page.tsx`
3. Include SEO keywords

### Updating Services

Edit `lib/data/services.ts` and update:
- Service name
- Description
- Price
- Duration
- Features

## 🔒 Security

- ✅ HTTPS (via Vercel)
- ✅ Security headers configured
- ✅ No sensitive data in code
- ✅ Environment variables for secrets

## 🚀 Performance

Target metrics:
- Page load: < 2 seconds
- Lighthouse score: 90+
- Mobile-friendly: Yes
- Core Web Vitals: Pass

## 📈 Next Steps

1. **Content:**
   - Replace placeholder images with real photos
   - Add actual service descriptions
   - Collect customer testimonials

2. **SEO:**
   - Set up Google Analytics
   - Submit sitemap to Google
   - Create Google My Business listing

3. **Marketing:**
   - Follow `CLIENT_ACQUISITION_STRATEGY.md`
   - Start social media posting
   - Run first ad campaigns

## 🎁 Features to Add Later

- [ ] Online payment integration
- [ ] Advanced booking system with calendar
- [ ] Client dashboard
- [ ] Email automation
- [ ] Multi-language support
- [ ] Review aggregation

## 📄 License

Proprietary and confidential.

---

**Built with ❤️ for Kashish Beauty Parlour**