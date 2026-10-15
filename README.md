# Spice Monarch

An independently implemented, Delta Cafés-inspired editorial website for Indian spice sourcing. Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion. The design uses Spice Monarch branding and licensed spice photographs, with attribution at `/image-credits`.

## Start locally

Use Node.js 22.18 or newer:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. To use port 3100 explicitly:

```sh
npm run dev -- -H 127.0.0.1 -p 3100
```

For the production build:

```sh
npm run lint
npm run build
npm start -- -H 127.0.0.1 -p 3100
```

## Features

- Full-screen photographic story carousel, manual controls, pause/play, and reduced-motion support.
- Accessible fullscreen navigation with keyboard dismissal and focus management.
- Horizontal spice collection, chapter-based spice journey, and a three-question spice finder.
- Search, category filters, sorting, quick previews, and comparison of up to three spices.
- Twenty product specification pages, FAQs, company pages, a brochure, and photography credits.
- Product selections and quiz results carry into an inquiry that buyers review before sending through WhatsApp or their email app.
- Responsive layouts, keyboard controls, metadata, sitemap, local indexing protection, and security headers.

## Configuration

Copy `.env.example` to `.env.local` if you need to override the defaults. The verified business phone number is the default WhatsApp destination.

- `NEXT_PUBLIC_CONTACT_PHONE`: display phone and WhatsApp number.
- `NEXT_PUBLIC_CONTACT_EMAIL`: verified business email; enables the email draft option.
- `NEXT_PUBLIC_SITE_URL`: actual HTTPS website URL after deployment; leave blank locally.

The public website needs no database. Preparing an inquiry does not submit or store it: the buyer must review and send it from WhatsApp or email. No background message is sent. Optional Prisma tooling is retained for future backend work; the admin placeholder routes return 404.

## Content and photography

Product specifications and trade information require business confirmation before commercial use. Photographs identify the named spices and do not represent specific inventory, shipment origin, or certification. Image attribution, source links, and licences are retained in `src/lib/photo-credits.json` and on `/image-credits`.

No Delta Cafés source code, logo, videos, or product photography are included. The interface is adapted for Spice Monarch's spice catalogue and inquiry workflow.

## Source control

Environment files, databases, dependency folders, and build output are ignored. Never commit secrets. Optional database seed credentials must be supplied through environment variables; there is no built-in admin password.
