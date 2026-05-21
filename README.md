# Jesko Jets (React + Vite)

React port of the Jesko Jets Webflow site, ready for [Vercel](https://vercel.com) deployment.

## Changes from original `index.html`

- UTM parameters removed from The First The Last agency links (`utm_source`, `utm_medium`, `utm_campaign`).
- Markup rendered via React; animations still use the original Webflow, GSAP, Barba, Lenis, and Slater scripts.

## Development

```bash
npm install
npm run dev
```

After editing `source/index.html` (original Webflow export backup), re-extract body markup:

```bash
node scripts/extract-body.mjs
```

## Deploy to Vercel

1. Push this folder to GitHub (or import the repo in Vercel).
2. Set **Root Directory** to `jeskojets-react` if the repo contains other files.
3. Vercel detects Vite automatically; `vercel.json` is included for SPA routing.

Or deploy from CLI:

```bash
cd jeskojets-react
npx vercel
```
