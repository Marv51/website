import type { Config } from "@react-router/dev/config";
import { sitemapPaths } from "./app/seo-links";

// Prerendered paths intentionally kept OUT of the sitemap: the error page, the
// sitemap resource route itself, and the two standalone app privacy policies
// (not part of the bilingual site).
const SITEMAP_EXCLUDED = new Set([
  "/404",
  "/sitemap.xml",
  "/Project-Quick-Open/datenschutz.html",
  "/SWR3App/datenschutz.html",
]);

export default {
  ssr: false,
  // Function form of `prerender` returns the same static paths as `true`, but
  // also lets us cross-check route discovery against the sitemap. A prerendered
  // page missing from both PAGES and the exclude list fails the build, so the
  // sitemap can't silently fall out of sync with the routes.
  prerender: ({ getStaticPaths }) => {
    const discovered = getStaticPaths();
    const known = new Set([...sitemapPaths(), ...SITEMAP_EXCLUDED]);
    const unaccounted = discovered.filter((path) => !known.has(path));
    if (unaccounted.length > 0) {
      throw new Error(
        `[sitemap] Prerendered path(s) missing from the sitemap and exclude ` +
          `list: ${unaccounted.join(", ")}. Add them to PAGES in ` +
          `app/seo-links.ts, or to SITEMAP_EXCLUDED in react-router.config.ts.`,
      );
    }
    return discovered;
  },
} satisfies Config;
