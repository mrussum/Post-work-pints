# Post Work Pints 🍺

> The official beer o'clock detector for the fine people of **Shaw & Co, BS1**.
> Close the laptop. The harbour is calling.

A cute, funny little web app for finding your post-work pint in Bristol —
curated pubs, bars and cider boats all within a stroll of the office, with
photos, info, a **pint-based rating system**, and reviews you can write yourself.

![Made with 🍺 and mild dehydration](https://img.shields.io/badge/made%20with-%F0%9F%8D%BA-f2a900)

## ✨ Features

- 🍻 **Curated Bristol drinking holes** near Shaw & Co (King Street, the
  harbourside, St Nick's and beyond) — real places, with funny blurbs.
- ⭐ **Pint ratings** — rate everything out of 5 🍺 (because stars are for amateurs).
- 📝 **Write your own reviews** — name, pint rating and a verdict. Saved right
  in your browser, no sign-up, no faff.
- 🔍 **Search, sort & filter** — by vibe ("Cider Heaven", "Live Music"…),
  distance from the office, or kindness to your wallet.
- 📸 **Photos** with cute gradient + emoji fallbacks so it always looks lovely,
  even offline.
- 📍 **Get directions** straight to Google Maps.
- 📱 Fully responsive — works a treat on your phone at 5:01pm.

## 🚀 Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server
```

Then open the URL it prints (usually **http://localhost:5173**) in your browser.
That's it — pints await.

## 🏗️ Build for hosting

```bash
npm run build    # outputs a static site to dist/
npm run preview  # preview the production build locally
```

The `dist/` folder is a plain static site — drop it on **Netlify**, **Vercel**,
**GitHub Pages**, or any static host. For GitHub Pages, build with
`GH_PAGES=1 npm run build` so asset paths are set for the `/Post-work-pints/`
sub-path.

## 🛠️ Tech

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev) for the dev server & build
- No backend — reviews persist in `localStorage`

## 🍺 Adding or editing pubs

All the venues live in [`src/data/pubs.ts`](src/data/pubs.ts). Copy an existing
entry, tweak the details (name, blurb, vibes, walk time, seed reviews) and it'll
appear automatically. Go wild.

---

Please drink responsibly, legends. 🧡
