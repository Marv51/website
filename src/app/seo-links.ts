export const SITE_URL = "https://ruehe.me";

export type Lang = "en" | "de";
export type PagePair = { en: string; de: string };

/**
 * EN ↔ DE equivalents for every indexable page. Single source of truth: per-page
 * canonical/hreflang links (`bilingualLinks`) and the generated sitemap
 * (`renderSitemap`) both read from this, so a new page added here flows to both.
 */
export const PAGES = {
  home: { en: "/", de: "/de" },
  imprint: { en: "/en/imprint", de: "/de/impressum" },
} as const satisfies Record<string, PagePair>;

/** Canonical + hreflang alternate <link>s for one page in one language. */
export function bilingualLinks({ en, de }: PagePair, current: Lang) {
  return [
    { rel: "canonical", href: `${SITE_URL}${current === "en" ? en : de}` },
    { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${en}` },
    { rel: "alternate", hrefLang: "de", href: `${SITE_URL}${de}` },
    { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${en}` },
  ];
}

/** The sitemap.xml document, derived from PAGES. */
export function renderSitemap(): string {
  const urls = Object.values(PAGES)
    .flatMap(({ en, de }) =>
      [en, de].map(
        (loc) => `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${en}" />
    <xhtml:link rel="alternate" hreflang="de" href="${SITE_URL}${de}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${en}" />
  </url>`,
      ),
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

/** Every URL listed in the sitemap (both languages), for build-time drift checks. */
export function sitemapPaths(): string[] {
  return Object.values(PAGES).flatMap(({ en, de }) => [en, de]);
}
