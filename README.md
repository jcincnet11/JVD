# John Vincent Digital

Professional service website for John Vincent Digital — an AI-powered web design studio based in Puerto Rico.

## Commands

All operations go through the Makefile. Run `make help` for the full list.

### Development

```bash
make run              # Start dev server
make build            # Build for production
make start            # Start production server locally
make lint             # Run Next.js linter
make typecheck        # Run TypeScript type checking
make deps             # Install dependencies
make clean            # Remove build artifacts
```

### Deployment

```bash
make deploy           # Deploy to Vercel production
make deploy-preview   # Deploy a Vercel preview
make logs             # View Vercel deployment logs
make status           # Show git and Vercel project status
```

## How to Update

### Project cards

Edit `components/Work.tsx` — update the `projects` array with new project names, colors, and keys. Add matching translations in `messages/en.json` and `messages/es.json` under `work.projects`.

### Contact email

Edit `components/Contact.tsx` — change the `mailto:` address in the `handleSubmit` function.

### Add a new service

1. Add a new card entry in `messages/en.json` and `messages/es.json` under `services`
2. Add the corresponding icon and card in `components/Services.tsx`
3. Add engagement details under `pricing.bundles` in both message files
4. Update `components/Pricing.tsx` to include the new bundle key

### Translations

All translatable text lives in `messages/en.json` and `messages/es.json`. Edit these files to update any copy on the site. See `docs/i18n.md` for details.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (EN/ES bilingual support)
- **Vercel** (deployment)
