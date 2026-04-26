# Bundle size budget

Tracked to keep the marketing site fast on slow networks (Puerto Rico mobile users on cell data are a real cohort). Numbers are first-load JS, taken from `npm run build` output.

## Current budget

| Surface                 | Budget         | Why                                                             |
| ----------------------- | -------------- | --------------------------------------------------------------- |
| Shared first-load JS    | ≤ 220 kB       | Anything above this and the homepage starts to feel heavy on 3G |
| `/[locale]` (homepage)  | ≤ 240 kB total | Landing page must hydrate fast — biggest conversion impact      |
| `/[locale]/work/[slug]` | ≤ 240 kB total | Case studies are the second-most-shared surface                 |
| Middleware              | ≤ 110 kB       | next-intl middleware. Re-evaluate if it grows past this         |

## How to inspect

```bash
make analyze       # writes .next/analyze/{client,edge,nodejs}.html and opens in browser
```

Open the generated HTML reports to drill into specific chunks.

## What to do if a budget is exceeded

1. Find the offender — look for new dependencies added since the last green build.
2. Try dynamic import for client-only or below-the-fold components.
3. Check for accidental client components that should be server components (`'use client'` at the top of files that don't need it).
4. If a dependency is unavoidable, raise the budget here with a one-line justification.
