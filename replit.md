# Guardian Commercial Realty - Corporate Website

## Overview
A professional corporate website for Guardian Commercial Realty ("The Tenant's Advocate"), a commercial real estate advisory firm that exclusively represents tenants and buyers. Founded and led by President & CEO Robert F. Chavez.

## Company Info
- **Company:** Guardian Commercial Realty
- **Tagline:** The Tenant's Advocate
- **President & CEO:** Robert F. Chavez
- **Address:** 10940 Wilshire Boulevard, Suite 925, Los Angeles, CA 90024
- **Phone:** 310.882.2050
- **Jobs Email:** jobs@guardianusa.net
- **Certification:** Minority Business Enterprise (MBE) - Southern California Minority Business Development Council

## Tech Stack
- **Frontend:** React + TypeScript + Tailwind CSS + shadcn/ui
- **Routing:** wouter (client-side)
- **Backend:** Express.js (serves the SPA)
- **Build Tool:** Vite
- **Form Handling:** react-hook-form + zod validation
- **Database:** None (static content site, no database required)

## Pages
- **Home** (`/`) - Hero with Robert Chavez quote, service cards, featured case studies, client logos, testimonial quote, guaranty section
- **Services** (`/services`) - Strategic Planning, Transaction Services, Business Point Negotiations, Protective Services with detailed bullet points
- **Case Studies** (`/case-studies`) - Featured studies (1st Enterprise Bank, 20th Century Fox FCU) + additional client cards + representative client list
- **Testimonials** (`/testimonials`) - Full John C. Black / 1st Enterprise Bank testimonial letter, Dan Tucker testimonial
- **About** (`/about`) - Robert Chavez full bio, Mission/Vision/Core Competency cards, MBE certification, Guaranty, Conflict of Interest section
- **Contact** (`/contact`) - Detailed contact form (first/last name, company, phone, email, contact method, message), address/phone cards, employment opportunities
- **Privacy** (`/privacy`) - Full privacy policy based on actual Guardian content

## Project Structure
```
client/src/
  components/
    navbar.tsx       - Sticky top navigation with mobile menu, Guardian branding
    footer.tsx       - Footer with links, contact info, copyright
    layout.tsx       - Shared layout wrapper (navbar + footer)
  hooks/
    use-page-title.ts - Per-page title and meta description management
  pages/
    home.tsx
    services.tsx
    case-studies.tsx
    testimonials.tsx
    about.tsx
    contact.tsx
    privacy.tsx
  App.tsx            - Route definitions
client/public/images/ - Company images (hero, Robert Chavez headshot, etc.)
```

## Design
- Primary color: Deep navy blue (HSL 215 70% 22%) - matches Guardian brand
- Fonts: Inter (body), Playfair Display (headings/serif)
- Clean, professional corporate aesthetic
- Fully responsive for mobile/tablet/desktop
- No database required - static content site

## Running
```
npm run dev
```
