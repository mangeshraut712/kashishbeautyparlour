<a id="top"></a>

<div align="center">

<img src="public/icon.png" alt="Kashish Beauty Parlour" width="104" height="104" />

# Kashish Beauty Parlour & Training Center

### _Premium salon website with booking, payments, multilingual support, and AI help_

<img src="https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js badge" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000000" alt="React badge" />
<img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript badge" />
<img src="https://img.shields.io/badge/Tailwind-4.1-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind badge" />
<img src="https://img.shields.io/badge/Live-Demo-0EA5E9?style=for-the-badge" alt="Live demo badge" />

[Live Demo](https://kashishbeautyparlour.vercel.app/) • [Repository](https://github.com/mangeshraut712/kashishbeautyparlour) • [Issues](https://github.com/mangeshraut712/kashishbeautyparlour/issues)

**[About](#about) • [Features](#features) • [Pages](#pages) • [Tech Stack](#tech-stack) • [Quick Start](#quick-start) • [Project Structure](#project-structure) • [Scripts](#scripts) • [Contact](#contact)**

</div>

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contact](#contact)

---

<a id="about"></a>

## About

Kashish Beauty Parlour & Training Center is a production-style Next.js site for a salon and academy experience in Thergaon, Pune. The app combines service browsing, appointment booking, payment flows, multilingual content, and an AI chatbot so customers can move from discovery to booking without leaving the site.

<a id="features"></a>

## Features

- AI chat assistant powered by Google Gemini for customer support and service guidance.
- Calendar-based booking with staff selection, package pricing, and booking history flows.
- Razorpay and UPI payment support, including EMI-oriented UI components.
- English and Marathi localization with route-based language switching.
- PWA-ready assets, offline shell support, and strong SEO-oriented metadata.
- Home, services, bridal, training, gallery, blog, and contact sections built for a real business site.

<a id="pages"></a>

## Pages

- `/` home with hero, featured services, testimonials, offers, and social proof
- `/about` story, team, values, and salon background
- `/services` service catalog with categories and pricing
- `/bridal` bridal packages and inquiry flows
- `/training` beauty courses and certifications
- `/gallery` image and transformation showcase
- `/contact` location, booking, and contact details
- `/blog` tips, trends, and beauty content

<a id="tech-stack"></a>

## Tech Stack

**Frontend**

- Next.js 15.5
- React 19
- TypeScript 5.9
- Tailwind CSS 4.1
- Framer Motion

**Business Integrations**

- Google Generative AI
- Razorpay
- Firebase Admin
- Twilio
- next-intl

**Platform**

- Vercel Analytics
- Speed Insights
- Sharp image optimization
- PWA manifest and service worker support

<a id="quick-start"></a>

## Quick Start

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
git clone https://github.com/mangeshraut712/kashishbeautyparlour.git
cd kashishbeautyparlour
npm install
cp .env.example .env.local
```

### Run

```bash
npm run dev
```

The site runs locally on the default Next.js dev port. Use `.env.local` to provide the API keys needed for chatbot, payment, and messaging features.

<a id="project-structure"></a>

## Project Structure

```text
kashishbeautyparlour/
├── app/                 # App Router routes, API handlers, and localized pages
├── components/          # Booking, chat, home, payment, and UI components
├── lib/                 # Data models, utilities, and business logic
├── i18n/                # Locale request handling and message files
├── public/              # Media, icons, service images, and offline assets
├── middleware.ts        # Language routing middleware
└── vercel.json          # Deployment configuration
```

<a id="scripts"></a>

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run dev:turbo` | Start the dev server with Turbopack |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run Next.js linting |
| `npm run lint:fix` | Auto-fix lintable issues |
| `npm run type-check` | Run TypeScript checks |
| `npm run analyze` | Generate a bundle analysis build |
| `npm run deploy:preview` | Deploy a preview to Vercel |
| `npm run deploy:prod` | Deploy the site to production on Vercel |

<a id="contact"></a>

## Contact

- Live demo: [kashishbeautyparlour.vercel.app](https://kashishbeautyparlour.vercel.app/)
- Repository issues: [mangeshraut712/kashishbeautyparlour/issues](https://github.com/mangeshraut712/kashishbeautyparlour/issues)

[↑ Back to Top](#top)
