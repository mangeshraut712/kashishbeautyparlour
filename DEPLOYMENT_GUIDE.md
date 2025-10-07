# 🚀 Deployment Guide - Kashish Beauty Parlour Website

## Quick Start: Get Your Website Live in 30 Minutes!

This guide will help you deploy your beauty parlour website to the internet for **FREE** using Vercel.

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure you have:

- [ ] Updated business information in `website/lib/constants.ts`
- [ ] Added your actual phone numbers and email
- [ ] Added WhatsApp number for bookings
- [ ] Replaced placeholder images with real photos (recommended)
- [ ] Tested website locally (`npm run dev`)
- [ ] Created GitHub account (free)
- [ ] Created Vercel account (free)

---

## 🌐 Step 1: Register Domain Name (Optional but Recommended)

### Option A: Buy Your Own Domain (₹800/year)

**Recommended Domains:**
- kashishbeautyparlour.com
- kashishbeauty.in
- kashishsalon.com

**Where to Buy:**
1. **Namecheap** (Recommended)
   - Go to [namecheap.com](https://namecheap.com)
   - Search for your domain
   - Add to cart and checkout
   - Cost: ~₹800/year

2. **GoDaddy**
   - Go to [godaddy.com](https://godaddy.com)
   - Search and purchase
   - Cost: ~₹900/year

3. **BigRock** (Indian)
   - Go to [bigrock.in](https://bigrock.in)
   - Search and purchase
   - Cost: ~₹700/year

### Option B: Use Free Vercel Subdomain

- Your site will be at: `kashishbeautyparlour.vercel.app`
- Free forever
- Can add custom domain later

---

## 📁 Step 2: Push Code to GitHub

### 2.1 Repository Already Exists

The code is already in the GitHub repository:
`https://github.com/mangeshraut712/kashishbeautyparlour`

### 2.2 Push Latest Changes (If you made any edits)

If you updated any content, push your changes:

```bash
cd /path/to/kashishbeautyparlour

# Add all changes
git add .

# Commit with a message
git commit -m "Updated business information and content"

# Push to GitHub
git push
```

If this is a fresh clone and you haven't made changes, skip to Step 3.

---

## ☁️ Step 3: Deploy to Vercel (FREE Hosting)

### 3.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### 3.2 Import Project

1. Click "Add New..." → "Project"
2. Find your `kashishbeautyparlour` repository
3. Click "Import"

### 3.3 Configure Project

**Framework Preset:** Next.js (should auto-detect)

**Build Command:** `npm run build` (default)

**Output Directory:** `.next` (default)

**Install Command:** `npm install` (default)

**Click "Deploy"**

### 3.4 Wait for Deployment (2-3 minutes)

Vercel will:
- Install dependencies
- Build your website
- Deploy to global CDN
- Assign you a URL

### 3.5 Your Website is Live! 🎉

You'll get a URL like: `https://kashishbeautyparlour.vercel.app`

---

## 🔧 Step 4: Add Environment Variables

Important: Add your business details to Vercel

1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add these variables:

```
NEXT_PUBLIC_SITE_URL = https://kashishbeautyparlour.vercel.app
NEXT_PUBLIC_SITE_NAME = Kashish Beauty Parlour
NEXT_PUBLIC_PHONE = +919876543210
NEXT_PUBLIC_WHATSAPP = 919876543210
NEXT_PUBLIC_EMAIL = info@kashishbeautyparlour.com
NEXT_PUBLIC_ADDRESS = Shop No 5, Nisarg Raj Society, Dange Chowk Rd, Pune
NEXT_PUBLIC_INSTAGRAM = kashishbeautyparlour
NEXT_PUBLIC_FACEBOOK = kashishbeautyparlour
```

4. Click "Save"
5. Go to "Deployments" → Click "..." on latest deployment → "Redeploy"

---

## 🌐 Step 5: Add Custom Domain (If You Bought One)

### 5.1 Add Domain to Vercel

1. Go to Project Settings → "Domains"
2. Enter your domain: `kashishbeautyparlour.com`
3. Click "Add"

### 5.2 Configure DNS

Vercel will show you DNS records to add. Go to your domain provider (Namecheap/GoDaddy):

**For Namecheap:**
1. Login to Namecheap
2. Go to "Domain List" → Click "Manage"
3. Advanced DNS → Add New Record

**Add these records:**

**Type:** A Record
**Host:** @
**Value:** 76.76.21.21
**TTL:** Automatic

**Type:** CNAME
**Host:** www
**Value:** cname.vercel-dns.com
**TTL:** Automatic

### 5.3 Wait for DNS Propagation (5 minutes - 24 hours)

Usually works within 10-30 minutes.

### 5.4 SSL Certificate (Automatic)

Vercel automatically adds HTTPS (free SSL certificate). Your site will be secure! 🔒

---

## 📊 Step 6: Set Up Google Analytics (Optional)

### 6.1 Create Google Analytics Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Create account and property
4. Choose "Web" platform
5. Enter your website URL
6. Get your Measurement ID (G-XXXXXXXXXX)

### 6.2 Add to Vercel

1. Go to Vercel → Project Settings → Environment Variables
2. Add:
```
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```
3. Redeploy

### 6.3 Verify Installation

1. Visit your website
2. Go to Google Analytics → Reports → Realtime
3. You should see yourself as active user!

---

## 🗺️ Step 7: Set Up Google My Business

### 7.1 Create/Claim Listing

1. Go to [business.google.com](https://business.google.com)
2. Click "Manage now"
3. Search for "Kashish Beauty Parlour"
4. If found, claim it
5. If not found, create new listing

### 7.2 Verify Your Business

Google will verify via:
- Phone call
- Postcard (takes 5-7 days)
- Email (if available)

### 7.3 Complete Your Profile

Add:
- Business name
- Category: Beauty Salon, Makeup Artist
- Address
- Phone number
- Website URL (your new website!)
- Business hours
- Photos (20-30 minimum)
- Services
- Products (optional)

### 7.4 Get Embedded Map URL

1. Open Google Maps
2. Search for your business
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Update in `website/lib/constants.ts`:

```typescript
maps: {
  embed: 'YOUR_EMBED_URL_HERE',
}
```

---

## 📝 Step 8: Submit to Search Engines

### 8.1 Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter your domain
4. Verify ownership (via DNS or HTML file)
5. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 8.2 Bing Webmaster Tools (Optional)

1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify
4. Submit sitemap

---

## 🔄 Step 9: Make Updates

### Update Content

1. Edit files locally
2. Test changes: `npm run dev`
3. Commit changes:
```bash
git add .
git commit -m "Updated services pricing"
git push
```
4. Vercel automatically deploys new version! (1-2 minutes)

### Update Environment Variables

1. Go to Vercel → Settings → Environment Variables
2. Edit or add new variables
3. Redeploy for changes to take effect

---

## 📊 Step 10: Monitor Performance

### Vercel Analytics (Free)

- Automatically enabled
- View in Vercel dashboard → Analytics
- See page views, visitors, performance

### Google Analytics

- Detailed traffic insights
- User behavior
- Demographics
- Acquisition channels

### Check Website Speed

1. Go to [pagespeed.web.dev](https://pagespeed.web.dev)
2. Enter your URL
3. Analyze results
4. Should score 90+ on all metrics

---

## 🎯 Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] All pages work (Home, About, Services, etc.)
- [ ] WhatsApp button works
- [ ] Contact form works
- [ ] Images load properly
- [ ] Mobile responsive (test on phone)
- [ ] Google Maps shows correctly
- [ ] SSL certificate active (https://)
- [ ] Social media links work
- [ ] Phone numbers are clickable
- [ ] No broken links

---

## 🐛 Troubleshooting

### Build Failed

**Error:** Dependencies not installed
**Fix:** Check `package.json` is correct, commit and push again

**Error:** Environment variable missing
**Fix:** Add all required variables in Vercel settings

### Domain Not Working

**Problem:** Shows "This site can't be reached"
**Fix:** Wait longer (DNS takes time), check DNS settings

### Images Not Loading

**Problem:** Images show broken
**Fix:** Check image paths, ensure images are in `public/` folder

### WhatsApp Button Not Working

**Problem:** Button doesn't open WhatsApp
**Fix:** Check WhatsApp number format (no + symbol in NEXT_PUBLIC_WHATSAPP)

### Contact Form Not Working

**Problem:** Form submission fails
**Fix:** Check WhatsApp number is correct in environment variables

---

## 💰 Costs Summary

### Free Option (Recommended for Start)
- **Hosting:** FREE (Vercel)
- **SSL Certificate:** FREE (automatic)
- **Bandwidth:** FREE (100GB/month)
- **Total:** ₹0/month

### With Custom Domain
- **Domain:** ₹800/year (~₹67/month)
- **Hosting:** FREE (Vercel)
- **Total:** ₹67/month

### With Email
- **Domain:** ₹800/year
- **Google Workspace:** ₹125/month
- **Hosting:** FREE (Vercel)
- **Total:** ₹192/month

---

## 📧 Email Setup (Optional)

### Google Workspace (Recommended)

**Cost:** ₹125/user/month

1. Go to [workspace.google.com](https://workspace.google.com)
2. Start free trial
3. Add your domain
4. Verify domain ownership
5. Create email: `info@kashishbeautyparlour.com`
6. Set up on phone/computer

### Free Alternative: Zoho Mail

**Cost:** FREE (1 user, 5GB)

1. Go to [zoho.com/mail](https://zoho.com/mail)
2. Sign up for free plan
3. Add domain
4. Verify ownership
5. Create email address

---

## 🎨 Update Images & Content

### Replace Placeholder Images

1. Take high-quality photos
2. Optimize images:
   - Use [tinypng.com](https://tinypng.com) to compress
   - Recommended size: max 500KB per image
3. Add to `public/images/`
4. Update image paths in code

### Update Services

Edit `lib/data/services.ts`:
```typescript
{
  name: 'Your Service Name',
  price: 'Starting from ₹XXX',
  description: 'Your description',
  // ...
}
```

### Add Testimonials

Edit components to add real customer reviews.

---

## 📱 Mobile App (Future)

Once website is successful, consider:
- Progressive Web App (PWA) - can be installed on phones
- Native mobile app (Android/iOS)
- Online booking system
- Payment integration

---

## 🎯 Next Steps After Deployment

1. **Week 1:**
   - Share website on social media
   - Add to all business profiles
   - Update JustDial listing with website
   - Ask customers to visit and review

2. **Month 1:**
   - Start blog posting (SEO)
   - Run social media campaigns
   - Collect Google reviews
   - Monitor analytics

3. **Month 2-3:**
   - Start paid advertising
   - Partner with local businesses
   - Email marketing
   - Content marketing

4. **Month 4-6:**
   - Scale successful campaigns
   - Optimize based on data
   - Add new features
   - Expand services

---

## 🆘 Need Help?

### Vercel Support
- [vercel.com/docs](https://vercel.com/docs)
- Community forum
- Email support

### Website Issues
- Check website/README.md
- Review code documentation
- Test locally first

---

## 🎉 Congratulations!

Your beauty parlour website is now live and ready to attract customers!

**Share your website:**
- Add to WhatsApp status
- Instagram bio
- Facebook page
- Business cards
- Salon signage
- Google My Business

**Remember:** Website is just the start. Follow CLIENT_ACQUISITION_STRATEGY.md for marketing success!

---

**Your website is live! Start attracting clients today! 🚀**