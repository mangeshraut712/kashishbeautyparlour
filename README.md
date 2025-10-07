# Kashish Beauty Parlour Website

Welcome to the Kashish Beauty Parlour website! This is a Next.js project designed to showcase our beauty services, allow customers to get in touch with us easily, and provide a seamless user experience.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Publish Your Website for Free](#how-to-publish-your-website-for-free)
- [Firebase Setup](#firebase-setup)
- [Learn More](#learn-more)

## Features

- **Responsive Design**: The website is fully responsive, ensuring a great experience on all devices, from desktops to mobile phones.
- **Contact Form**: Users can fill out a contact form to reach us directly, with submissions stored in Firebase Firestore.
- **Blog Section**: Share beauty tips, updates, and news through our blog.
- **Gallery**: Showcase our work and services visually with an organized gallery.
- **Service Information**: Detailed descriptions of the services offered, including pricing and availability.
- **Social Media Integration**: Links to our social media profiles for easy access to updates and promotions.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/kashish-beauty-parlour.git
cd kashish-beauty-parlour
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is organized as follows:

```
.
├── app
│   ├── about
│   │   └── page.tsx                # About page component
│   ├── api                          # API routes for server-side functions
│   ├── blog
│   │   ├── [id]
│   │   │   └── page.tsx            # Dynamic blog post page
│   │   └── page.tsx                # Blog index page
│   ├── contact
│   │   └── page.tsx                # Contact page with form
│   ├── gallery
│   │   └── page.tsx                # Gallery page to showcase images
│   ├── privacy
│   │   └── page.tsx                # Privacy policy page
│   ├── services
│   │   └── page.tsx                # Services offered
│   ├── terms
│   │   └── page.tsx                # Terms and conditions page
│   ├── training
│   │   └── page.tsx                # Training services offered
│   ├── globals.css                  # Global styles
│   ├── layout.tsx                   # Main layout component
│   ├── page.tsx                     # Home page component
│   ├── robots.ts                    # Robots.txt for SEO
│   └── sitemap.ts                   # Sitemap for SEO
├── components
│   ├── home
│   │   ├── FeaturedServices.tsx     # Featured services component
│   │   ├── Hero.tsx                 # Hero section component
│   │   ├── SpecialOffers.tsx        # Special offers component
│   │   ├── Testimonials.tsx          # Customer testimonials component
│   │   └── WhyChooseUs.tsx          # Reasons to choose us component
│   └── layout
│       ├── Footer.tsx               # Footer component
│       ├── Header.tsx               # Header component
│       └── WhatsAppButton.tsx       # WhatsApp contact button component
├── lib
│   ├── data
│   │   ├── blog.ts                   # Blog data and content
│   │   ├── gallery.ts                # Gallery data
│   │   ├── services.ts               # Services data
│   │   └── training.ts               # Training data
│   └── constants.ts                  # Constants and configuration
├── public
│   └── logo.png                      # Logo image
├── .env.example                      # Example environment variables
├── .gitignore                        # Files and directories to ignore in git
├── next.config.js                   # Next.js configuration
├── package-lock.json                 # Lock file for npm dependencies
├── package.json                       # Project metadata and dependencies
├── postcss.config.js                 # PostCSS configuration
├── README.md                         # Project documentation
├── tailwind.config.ts                # Tailwind CSS configuration
└── tsconfig.json                     # TypeScript configuration
```

## Technologies Used

*   [Next.js](https://nextjs.org/) - A React framework for production, enabling server-side rendering and static site generation.
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development, allowing for custom designs without leaving your HTML.
*   [Firebase](https://firebase.google.com/) - A platform for building mobile and web applications, providing Firestore for database storage and authentication services.
*   [Vercel](https://vercel.com/) - A cloud platform for static sites and Serverless Functions, optimized for Next.js applications.

## How to Publish Your Website for Free

You can publish your website for free using [Vercel](https://vercel.com), the creators of Next.js.

### Prerequisites

*   A [GitHub](https://github.com) account.
*   A [Vercel](https://vercel.com) account.

### Step 1: Push Your Code to GitHub

1.  Create a new repository on GitHub.
2.  Follow the instructions on GitHub to push your local repository to the new remote repository.

### Step 2: Deploy to Vercel

1.  Go to your Vercel dashboard and click "Add New..." > "Project".
2.  Import your GitHub repository.
3.  Vercel will automatically detect that you are using Next.js and configure the build settings for you.
4.  Click "Deploy".

That's it! Your website is now live on a Vercel domain (e.g., `your-project-name.vercel.app`).

### Step 3: Add a Custom Domain

If you want to use a custom domain (e.g., `www.yourdomain.com`), you can get one for free from [Freenom](https://www.freenom.com/).

1.  Go to Freenom and search for a domain name.
2.  Select a free domain (e.g., `.tk`, `.ml`, `.ga`, `.cf`, `.gq`).
3.  Follow the instructions to register the domain.
4.  In your Vercel project settings, go to the "Domains" tab and add your custom domain.
5.  Follow the instructions on Vercel to configure the DNS settings for your domain. This usually involves adding a CNAME record to your domain's DNS settings.

## Firebase Setup

To connect your website to Firebase for storing contact information:

1. In the Firebase console, enable Firestore.
2. Create a service account key (Project Settings → Service Accounts → Create new key).
3. Add the JSON to your local `.env.local` as `FIREBASE_SERVICE_ACCOUNT_KEY` (JSON string) and set `FIREBASE_PROJECT_ID`.
   - Example (.env.local):
     ```
     FIREBASE_PROJECT_ID=kashishbeautyparlour-d4956
     FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"...", "private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n", ...}'
     ```
4. Locally: run `rm -rf .next && npm run dev` to start the development server.
5. For deployment (Vercel): set `FIREBASE_PROJECT_ID` and `FIREBASE_SERVICE_ACCOUNT_KEY` in Project → Settings → Environment Variables. Use the raw JSON string (ensure newlines escaped or use base64).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!