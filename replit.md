# GuardianUSA Corporate Website

## Overview
A professional corporate website for GuardianUSA, a commercial real estate tenant representation company. Built as a single-page application with React, Tailwind CSS, and shadcn/ui components.

## Tech Stack
- **Frontend:** React + TypeScript + Tailwind CSS + shadcn/ui
- **Routing:** wouter (client-side)
- **Backend:** Express.js (serves the SPA)
- **Build Tool:** Vite

## Pages
- **Home** (`/`) - Hero section, service cards, case study teasers, testimonial teasers, CTA
- **Services** (`/services`) - Detailed service listings with bullet points
- **Case Studies** (`/case-studies`) - Grid of 4 case study cards with results
- **Testimonials** (`/testimonials`) - 6 testimonial quote cards
- **About** (`/about`) - Company overview, mission, vision, competencies, leadership
- **Contact** (`/contact`) - Contact form with client-side validation, contact info
- **Privacy** (`/privacy`) - Privacy policy template

## Project Structure
```
client/src/
  components/
    navbar.tsx       - Sticky top navigation with mobile menu
    footer.tsx       - Footer with links, contact info, copyright
    layout.tsx       - Shared layout wrapper (navbar + footer)
  pages/
    home.tsx
    services.tsx
    case-studies.tsx
    testimonials.tsx
    about.tsx
    contact.tsx
    privacy.tsx
  App.tsx            - Route definitions
```

## Design
- Primary color: Deep navy blue (HSL 215 70% 22%)
- Fonts: Inter (body), Playfair Display (headings)
- Clean, corporate aesthetic with consistent spacing
- Fully responsive for mobile/tablet/desktop
- No database required - static content site

## Running
```
npm run dev
```
