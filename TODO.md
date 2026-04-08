# TODO

## Priority: High

- [x] Replace mailto contact form with Formspree backend
- [x] Set up Vercel Analytics
- [ ] Add image assets — favicon, apple-touch-icon, and OG images to `/public`

## Priority: Medium

- [ ] Add loading states and error boundaries for client components
- [ ] Consider adding a lightweight CMS (Sanity, Contentlayer) for project cards so client can update without code changes

## Priority: Lower

- [ ] Set up Vitest or Jest for component testing — at minimum test translation key coverage between en.json and es.json
- [ ] Add GitHub Actions CI pipeline — lint + typecheck + build on PRs
- [ ] Add performance monitoring (Vercel Speed Insights or Lighthouse CI)

## Done

- [x] Add `<meta>` OG tags and social preview images for link sharing (og:title, og:description per locale)
- [x] Add JSON-LD structured data for local business SEO
- [x] Create sitemap.xml and robots.txt for search engine crawling
- [x] Implement proper 404 page with locale support
- [x] Upgrade Next.js from 14.2.15 to 14.2.35 (security fix)
- [x] Implement `prefers-reduced-motion` to disable ScrollReveal animations for accessibility
- [x] Add skip-to-content link for keyboard navigation accessibility
- [x] Add real project URLs to "View project" links in Work section
- [x] Add WhatsApp link to contact section
