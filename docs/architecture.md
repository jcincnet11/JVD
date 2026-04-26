# Architecture

## Overview

Single-page scrolling website built on Next.js 14 App Router with bilingual EN/ES support. No database, no API routes, no auth — it's a static-ish marketing site that deploys to Vercel's edge network.

## Request Flow

```
Browser request
  → Vercel Edge Network
  → middleware.ts (locale detection, redirect / → /en)
  → app/[locale]/layout.tsx (fonts, i18n provider)
  → app/[locale]/page.tsx (composes all section components)
  → Static HTML + hydrated client components
```

## i18n Architecture

The bilingual system uses `next-intl` with URL-based locale routing:

- **Middleware** (`middleware.ts`) — Intercepts requests, detects locale from URL, redirects bare `/` to `/en`
- **Server config** (`i18n/request.ts`) — Loads the correct `messages/*.json` file based on locale
- **Provider** (`app/[locale]/layout.tsx`) — Wraps the app in `NextIntlClientProvider` with loaded messages
- **Components** — Use `useTranslations('section')` hook to access translated strings

Translation files are flat JSON with nested keys per section. All user-facing text must go through the translation system — no hardcoded strings in components.

## Component Architecture

All components are section-level — one component per visible section on the page. They're composed top-to-bottom in `page.tsx`:

| Component    | Type   | Purpose                                  |
| ------------ | ------ | ---------------------------------------- |
| Nav          | Client | Sticky nav, scroll tracking, mobile menu |
| Hero         | Server | Headline, CTAs                           |
| TrustBar     | Server | Stats row                                |
| Services     | Server | 4 service cards                          |
| Work         | Server | 4 project showcase cards                 |
| Pricing      | Server | "How we work" engagement cards           |
| About        | Server | Bio + stats                              |
| Contact      | Client | Form with mailto action                  |
| Footer       | Server | Links, copyright                         |
| ScrollReveal | Client | Reusable IntersectionObserver wrapper    |

Client components are only used when hooks or browser APIs are needed (scroll tracking, form state, IntersectionObserver).

## Styling

Tailwind CSS with a custom theme defined in `tailwind.config.ts`. Key design tokens:

- **Colors:** cream background, charcoal text, green accent, warm-gray secondary
- **Fonts:** Fraunces serif for headings, Plus Jakarta Sans for body (loaded via `next/font/google`)
- **Cards:** White bg, `border-border`, hover shifts to `border-accent` with subtle lift
- **Animations:** CSS transitions only, triggered by `ScrollReveal` IntersectionObserver wrapper

## Deployment

Vercel auto-deploys on push to `main` via GitHub integration. No env vars, no build-time secrets, no server-side data fetching. The site is effectively static with dynamic locale routing at the edge.
