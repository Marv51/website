import type { Config } from "@react-router/dev/config";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { renderSitemap, sitemapPaths } from "./app/seo-links";

// Prerendered paths intentionally kept OUT of the sitemap: the error page and
// the two standalone app privacy policies (not part of the bilingual site).
const SITEMAP_EXCLUDED = new Set([
  "/404",
  "/Project-Quick-Open/datenschutz.html",
  "/SWR3App/datenschutz.html",
]);

export default {
  ssr: false,
  // Function form of `prerender` returns the same static paths as `true`, but
  // also lets us cross-check route discovery against the sitemap so a new page
  // can't silently go missing from it.
  prerender: ({ getStaticPaths }) => {
    const discovered = getStaticPaths();
    const known = new Set([...sitemapPaths(), ...SITEMAP_EXCLUDED]);
    const unaccounted = discovered.filter((path) => !known.has(path));
    if (unaccounted.length > 0) {
      console.warn(
        `[sitemap] Prerendered path(s) missing from the sitemap and exclude ` +
          `list: ${unaccounted.join(", ")}. Add them to PAGES in ` +
          `app/seo-links.ts, or to SITEMAP_EXCLUDED in react-router.config.ts.`,
      );
    }
    return discovered;
  },
  // Emit sitemap.xml into the prerendered output, derived from PAGES.
  buildEnd: async ({ reactRouterConfig }) => {
    const out = join(reactRouterConfig.buildDirectory, "client", "sitemap.xml");
    await writeFile(out, renderSitemap(), "utf-8");
    console.log(`[sitemap] wrote ${out}`);
  },
} satisfies Config;
