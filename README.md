# GHR Ventures Multi-Page Website

A comprehensive multi-page website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a strict monochrome design system (black, white, and silver only).

## Project Overview

GHR Ventures is a parent brand website showcasing three distinct business divisions:
- **GHR Construction** - Residential & commercial construction services
- **GHR Management** - Property management services
- **GHR Equities** - Real estate investment

## Site Structure

### Main Landing Page (/)
- Full-screen typography-only hero
- Three company cards with navigation
- About section
- Three pillars (Integrity, Excellence, Growth)

### GHR Construction (/construction)
**Pages:**
- Home - Services overview, why choose us, recent projects
- Services - Detailed service descriptions (Residential, Commercial, Renovations, Design-Build)
- Projects - Filterable portfolio grid
- About - Company story, team, certifications
- **Contact & Inquiries** - Comprehensive project inquiry form with:
  - Project details (type, location, budget, timeline)
  - File upload capability
  - Contact sidebar
  - What to expect section

### GHR Management (/management)
**Pages:**
- Home - Service overview, stats, testimonials
- Services - Residential, Commercial, Short-Term, HOA management
- Owners - Owner portal features, FAQ accordion
- Tenants - Application process, screening criteria, maintenance info, FAQ
- Contact - Consultation request form

### GHR Equities (/equities)
**Pages:**
- Home - Investment focus, approach, metrics
- Criteria - Asset classes, deal parameters, investment criteria
- **Submit a Deal** - Comprehensive deal submission form with:
  - Contact information
  - Property details
  - Financial information
  - Deal description & file upload
  - Confirmation checkbox
  - What happens next section
- Portfolio - Current and past investments with status badges
- About - Mission, leadership team
- Contact - General contact form

## Design System

### Colors (Strictly Enforced)
- Black: `#0A0A0A` - Primary text, headings, nav background
- White: `#FFFFFF` - Page backgrounds, card surfaces, reversed text
- Silver variants:
  - `#A8A8A8` - Mid-tone silver
  - `#D4D4D4` - Light silver (borders, dividers)
  - `#707070` - Dark silver (secondary text)

### Typography
- Font Family: Inter (Google Fonts)
- Headings: Bold, tight tracking, large sizes (56-72px on desktop)
- Body: 16px, dark silver (#707070) for secondary text

### Design Principles
- Minimalist aesthetic with generous whitespace
- Sharp edges (max 4px border-radius)
- No drop shadows
- 1px borders in silver-light
- Alternating black/white section backgrounds
- CTAs: Black bg + white text (primary), White bg + black border (secondary)

## Technical Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Emergent Platform

## Key Features

### Navigation
- Sticky header with company-specific menus
- "← GHR" back link on all subsidiary pages
- Mobile hamburger menu with full-screen overlay
- Context-aware navigation (shows relevant links per section)

### Forms
All forms include:
- Client-side validation
- Required field indicators (red asterisk)
- Clean input styling with 1px silver borders
- Success confirmation screens
- Proper TypeScript typing

### Interactive Elements
- Hover effects on cards and buttons
- FAQ accordions with expand/collapse
- Filter tabs for project portfolios
- Form file uploads

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (< 768px), Desktop (≥ 768px)
- All grids collapse to single column on mobile
- Touch-friendly button sizes
- Optimized typography scaling

## Contact Information

- **Phone:** (732) 740-3742
- **Email:** sam@ghrgrp.com
- No physical address displayed

## File Structure

```
/app
├── layout.tsx              # Root layout with navigation
├── page.tsx                # Main landing page
├── globals.css             # Global styles & design system
├── construction/
│   ├── page.tsx           # Construction home
│   ├── services/page.tsx
│   ├── projects/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx   # Priority: Complex inquiry form
├── management/
│   ├── page.tsx           # Management home
│   ├── services/page.tsx
│   ├── owners/page.tsx    # With FAQ accordion
│   ├── tenants/page.tsx   # With FAQ accordion
│   └── contact/page.tsx
├── equities/
│   ├── page.tsx           # Equities home
│   ├── criteria/page.tsx  # Investment criteria table
│   ├── submit/page.tsx    # Priority: Complex deal submission form
│   ├── portfolio/page.tsx # Investment portfolio grid
│   ├── about/page.tsx
│   └── contact/page.tsx
└── components/
    └── Navigation.tsx      # Global navigation component

```

## Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## Placeholder Images

All images use placehold.co with monochrome color schemes:
- `https://placehold.co/800x500/0A0A0A/FFFFFF` (black background)
- `https://placehold.co/800x500/D4D4D4/0A0A0A` (light silver background)

## Notes

- This is a static frontend-only site (no backend/API integration)
- Forms show success messages but don't actually submit data
- All links are properly wired with Next.js Link components
- Fully accessible with semantic HTML
- No external API calls or data fetching

## Live URL

https://ghr-multi-brand.preview.emergentagent.com

---

Built with attention to detail and strict adherence to the monochrome design system.
