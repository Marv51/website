# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marvin Rühe's personal website (deployed at **ruehe.me**, see `src/public/CNAME`). Built with **React Router 7** as a prerendered static site and published to **GitHub Pages**.

## Repository layout

The entire application lives in **`src/`** — `package.json`, lockfile, and all source are there, not at the repo root. Always run npm commands from `src/`. The root only holds Docker config, the README, and `.github/`.

## Commands (run from `src/`)

- `npm install` — install deps (Node 24 is pinned via `engines`)
- `npm run dev` — Vite dev server with HMR (default port 5173)
- `npm run build` — production build into `src/build/client` (static prerendered output)
- `npm run typecheck` — runs `react-router typegen` then `tsc`
- `npm start` — serve a built app locally

There is no test runner or linter configured.

### Containerized dev (from repo root)

`docker-compose up` runs the dev server in a Node 24 container. `src/` is bind-mounted to `/app` for live editing; `node_modules` is a named volume (Linux-native deps installed at container startup, so a `package.json` change just needs a container restart). `CHOKIDAR_USEPOLLING=true` is set because file events don't cross the bind mount on macOS/Windows. App is exposed at `localhost:5173`.

## Architecture

**Static prerendered SPA, not a server app.** `react-router.config.ts` sets `ssr: false` + `prerender: true`, so the build emits static HTML/assets for GitHub Pages — there is no runtime server in production. Avoid loaders/actions that assume a live server. Several React Router v8 `future` flags are enabled in that config.

**Routing** is defined in `src/app/routes.ts` (config-based, not file-based). The site is **bilingual**: an English tree under `/` (`routes/layout.tsx`) and a German tree under `/de` (`routes/layout-de.tsx`). The two layouts are near-duplicates differing only in the `lang` prop passed to components. `root.tsx` detects language by checking whether the deepest matched route id ends in `-de` and sets `<html lang>` accordingly.

Page components in `app/routes/` are thin wrappers that render shared presentational components from sibling folders (`welcome/`, `project/`, `profiles/`, `footer/`, `imprint/`). Those components take a `lang` prop and switch text inline with ternaries — there is no i18n library.

There are also two standalone privacy-policy routes for separate apps (`/SWR3App/datenschutz.html`, `/Project-Quick-Open/datenschutz.html`) outside the layout trees.

**Styling** is hand-written CSS in `src/app/app.css` (CSS variables, dark mode via `prefers-color-scheme`). The markup uses Bootstrap-style class names (`navbar`, `btn`, `row`). **Tailwind is not actually used** despite what the README's template boilerplate claims.

The `~/*` TypeScript path alias maps to `src/app/*`.

## Deployment

`.github/workflows/deploy.yml` runs on push/PR to `main` with `working-directory: src`: `npm ci` → `npm run build`, then on push to `main` only it uploads `src/build/client` and deploys to GitHub Pages.
