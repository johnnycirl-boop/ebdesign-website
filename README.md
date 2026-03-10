# EBdesign.ie — Professional Website

Professional holding website for EBdesign, accelerating businesses across the South East of Ireland.

## Design System

This site uses a **sunflower yellow** theme adapted from the Kennel Manager design system, with professional typography and a clean, modern aesthetic.

**Colors:**
- Primary: Sunflower Yellow (#FFD93D)
- Neutral: Professional Grays (#202020–#FAFAFA)
- Accent: Trust/Growth (Green, Blue, Orange)

## Pages

- **Home** (`/`) — Hero, services overview, call-to-action
- **About** (`/about`) — Company story, values, partnership approach

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This site is deployed on Vercel.

```bash
npm run build
# Push to GitHub → Vercel auto-deploys
```

## Content & Customization

### Brand Elements
- Logo: "EBdesign" (sunflower yellow)
- Colors: See `lib/design-system.ts`
- Typography: Inter (sans-serif), Merriweather (serif)

### Update Copy
- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Navigation: `components/Navigation.tsx`
- Footer: `components/Footer.tsx`

### Add New Pages
1. Create a new directory: `app/new-page/`
2. Add `page.tsx` (required)
3. Add `page.module.css` (optional)
4. Update Navigation component if needed

## Project Structure

```
ebdesign-website/
├── app/
│   ├── layout.tsx          (Root layout)
│   ├── globals.css         (Global styles)
│   ├── page.tsx            (Home page)
│   └── about/
│       ├── page.tsx        (About page)
│       └── about.module.css
├── components/
│   ├── Navigation.tsx
│   ├── Navigation.module.css
│   ├── Footer.tsx
│   └── Footer.module.css
├── lib/
│   └── design-system.ts    (Design tokens)
├── package.json
├── next.config.js
└── tsconfig.json
```

## Notes

- This is a **holding website** — placeholder copy is ready for customization
- Design system tokens are centralized in `lib/design-system.ts`
- Responsive design (mobile-first)
- SEO metadata configured in `app/layout.tsx`

---

**Status:** Ready for local testing. Push to Vercel when design & copy are approved.
