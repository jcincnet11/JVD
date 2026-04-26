# TODO

AGENTS: When prompted, complete tasks from the list below. Before starting work, mark the item as pending `[~]` so parallel agents don't collide. After completion, mark it `[x]`. Start at the top unless the user specifies otherwise.

## Backlog

- [x] Add security headers (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-Content-Type-Options) via `headers()` in `next.config.mjs` — this is a public marketing site with no current header hardening
- [x] Verify the Formspree endpoint — old endpoint `https://formspree.io/f/johnvincentdigital@gmail.com` was 404; replaced with `xrerbdlw` (verified `ok:true`) in `components/Contact.tsx`, configurable via `NEXT_PUBLIC_FORMSPREE_ID`
- [x] Move the hardcoded `siteUrl` constant out of `app/[locale]/layout.tsx`, `app/[locale]/work/[slug]/page.tsx`, and `app/sitemap.ts` into a single `lib/site.ts` or `NEXT_PUBLIC_SITE_URL` env var — currently duplicated in 3 places
- [x] Run `npm test` in CI — `.github/workflows/ci.yml` runs lint + typecheck + build but skips the existing Vitest suite
- [x] Add `.env.example` documenting `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, and any new env vars introduced by other backlog items
- [x] Pin Node version with a `.nvmrc` file (CI uses 20 — match it locally)
- [x] Add component tests for `components/Contact.tsx` covering validation (name < 2 chars, invalid email, message < 10 chars), honeypot field, and submit success/error states — currently zero coverage of business logic
- [x] Add a Playwright smoke test suite — `/en` and `/es` render, nav anchors scroll to sections, a case study page (`/en/work/imperfect-gaming`) loads without errors
- [x] Add automated axe-core a11y check in CI against the built site — the site advertises WCAG AA compliance, so drift would undermine the pitch (consider reusing `jvd-a11y-scanner`)
- [x] Add Lighthouse CI with a performance/SEO/a11y budget enforced on PRs (`.github/workflows/lighthouse.yml`)
- [x] Add an OpenGraph image generator for case study pages — `app/[locale]/work/[slug]/opengraph-image.tsx` (locale root already has one; case study share previews currently fall back to default)
- [x] Track contact form submissions as Vercel Analytics custom events — fire on success and error in `components/Contact.tsx` to measure conversion
- [x] Add Breadcrumb JSON-LD on case study pages (`Home > Work > [Case Study]`) for richer SERP results
- [x] Add `@next/bundle-analyzer` and document a size budget — middleware is 101 kB and shared JS is 198 kB; track regressions via PR comments or CI check
- [x] Add Prettier with a format check step in CI to prevent style drift across contributors/agents
