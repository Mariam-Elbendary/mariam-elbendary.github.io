# Mariam Elbendary — Frontend Developer Portfolio

Personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript** and **Tailwind CSS**, statically exported and hosted on GitHub Pages.

Live site: https://mariam-elbendary.github.io

## Features
- Dark, responsive design (320px → large desktop), accessible navbar with mobile menu
- Categorised skills, experience timeline, expandable project case studies
- mailto-based contact (no backend required)
- SEO metadata, Open Graph, favicon, robots.txt and sitemap

## Local setup
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in ./out
```

## Customising
All personal data and links live in `lib/config.ts`. Add your LinkedIn URL and each project's GitHub / live-demo URL there; empty values are hidden or shown as "soon".

## Deployment
Pushing to `main` runs `.github/workflows/deploy.yml` (install → build → deploy via the official Pages actions). In the repo settings, set **Pages → Source** to **GitHub Actions**. If you host it under a project repo name instead of `<username>.github.io`, set `basePath` in `next.config.mjs`.
