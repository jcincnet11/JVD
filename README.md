# John Vincent Digital

Professional service website for John Vincent Digital — an AI-powered web design studio based in Puerto Rico.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com). No environment variables required.

## How to Update

### Project cards

Edit `components/Work.tsx` — update the `projects` array with new project names, colors, and keys. Add matching translations in `messages/en.json` and `messages/es.json` under `work.projects`.

### Contact email

Edit `components/Contact.tsx` — change the `mailto:` address in the `handleSubmit` function.

### Add a new service

1. Add a new card entry in `messages/en.json` and `messages/es.json` under `services`
2. Add the corresponding icon and card in `components/Services.tsx`
3. Add pricing details under `pricing.bundles` in both message files
4. Update `components/Pricing.tsx` to include the new bundle key

### Translations

All translatable text lives in `messages/en.json` and `messages/es.json`. Edit these files to update any copy on the site.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (EN/ES bilingual support)
- **Vercel** (deployment)
