# Arif Hidayat — Portfolio

Lead Software Engineer based in Jakarta, Indonesia (UTC+7) — open to remote roles. I build systems for finance, insurance, and public utilities.

Live: https://portofolio-arifhidayat.netlify.app/

## Stack

React 19, TypeScript, Vite, Tailwind 4, Framer Motion, TanStack Query, Zustand. Deployed on Netlify.

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

- `src/components/sections/` — Hero, About, Experience, Projects, Skills, Contact
- `src/api/portfolioApi.ts` — profile, projects, education, experience data
- `src/hooks/usePortfolioData.ts` — data fetching with React Query
- `public/` — static assets, `RESUME.html`, `RESUME.pdf`, privacy policy

## Contact form

Copy `.env.example` to `.env` and fill in the EmailJS keys to send contact-form
messages by email. Without the keys, the form falls back to opening the visitor's
mail client (`mailto:`) — it never shows a fake success message.

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Template variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`.

## Deploy

Push to `main` — Netlify builds from `npm run build`. Config in `netlify.toml`.
