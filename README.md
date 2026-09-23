# Arif Hidayat — Portfolio

Lead Software Engineer based in Karawang, Indonesia. I build systems for finance, insurance, and public utilities.

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
- `public/` — static assets, `RESUME.html`, privacy policy

## Deploy

Push to `main` — Netlify builds from `npm run build`. Config in `netlify.toml`.
