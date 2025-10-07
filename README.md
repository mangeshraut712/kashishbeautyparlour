# Kashish Beauty Parlour Website

This is a Next.js project for the Kashish Beauty Parlour website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
kashishbeautyparlour/
├── app/                    # Next.js app router pages
├── components/             # Reusable UI components
├── lib/                    # Utility functions and data
├── public/                 # Static assets (images, favicon)
├── .env.example           # Environment variables template
└── README.md              # This file
```

### Key Directories

- **app/**: Contains all the page routes and layout components
- **components/**: Organized by feature (home, layout, etc.)
- **lib/data/**: Static data files for different sections
- **lib/constants.ts**: Business information and navigation links
- **public/**: Static files; place images in `public/images/` subfolders

## Code Style and Readability

- Uses TypeScript for type safety
- Components include JSDoc comments for developer documentation
- Consistent naming conventions (PascalCase for components, camelCase for variables)
- Responsive design with Tailwind CSS
- Error-safe code with type checking

## Media Assets

Images are currently using optimized external URLs from Unsplash. For production:

1. Download images to `public/images/` organized by type
2. Update image paths in `lib/data/` files
3. Use WebP/AVIF formats for better performance

## How to Publish Your Website for Free

### Option 1: Vercel (Recommended - Fully Free)

Vercel provides free hosting with automatic deployments from GitHub.

#### Prerequisites
* Github account
* Vercel account (signup free at vercel.com)

#### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." > "Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Free Domain**
   - Your site gets a free `.vercel.app` domain (e.g., `kashish-beauty-parlour.vercel.app`)
   - Automatic HTTPS included

#### Adding Custom Domain (Optional)
1. Get a free domain from Freenom.com (e.g., `.tk`, `.ml`, `.ga`)
2. In Vercel project settings > "Domains" tab
3. Add your custom domain
4. Configure DNS: Add CNAME record to your domain provider
5. DNS propagation takes 5-30 minutes

### Option 2: Netlify

Alternatives include Netlify or GitHub Pages:
- Netlify: Similar to Vercel, drag & drop or Git integration
- GitHub Pages: Free but requires more setup for modern frameworks

### Deployment Time
- Vercel: 1-2 minutes
- Custom domain setup: 5-30 minutes for DNS

### Going Live Checklist
- [ ] Code pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Domain configured (if custom)
- [ ] Test all pages and features
- [ ] Check mobile responsiveness
- [ ] Update contact information if needed

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
