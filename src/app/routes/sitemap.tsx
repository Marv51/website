import { renderSitemap } from "../seo-links";

// Resource route (loader only, no component): prerendered to
// build/client/sitemap.xml, and also served live under `npm run dev`.
export function loader() {
  return new Response(renderSitemap(), {
    headers: { "Content-Type": "application/xml" },
  });
}
