# ruehe.me

Marvin Rühe's personal website — a bilingual (English/German) static site built with [React Router 7](https://reactrouter.com/) and deployed to GitHub Pages at [ruehe.me](https://ruehe.me).

The site is prerendered (`ssr: false`, `prerender: true`), so the production build is plain static HTML and assets — there is no runtime server.

## Project layout

The application lives in [`src/`](./src), not the repository root. Run all `npm` commands from there.

```
src/
├── app/
│   ├── routes.ts          # route configuration (config-based)
│   ├── root.tsx           # document shell + language detection
│   ├── routes/            # thin page components (en under /, de under /de)
│   ├── welcome/ project/ profiles/ footer/ imprint/   # shared components
│   └── app.css            # hand-written CSS (variables + dark mode)
└── public/                # static assets + CNAME
```

## Development

Requires Node 24 (pinned via `engines`).

```bash
cd src
npm install
npm run dev        # Vite dev server with HMR at http://localhost:5173
```

Other scripts (from `src/`):

- `npm run build` — production build into `src/build/client`
- `npm run typecheck` — `react-router typegen` then `tsc`
- `npm start` — serve a built app locally

### Containerized development

From the repository root:

```bash
docker-compose up
```

This runs the dev server in a Node 24 container with `src/` bind-mounted for live editing, reachable at http://localhost:5173. Dependencies install at container startup, so a `package.json` change just needs a container restart.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds the site and publishes `src/build/client` to GitHub Pages. Pull requests build but do not deploy.
