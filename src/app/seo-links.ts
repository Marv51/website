const BASE_URL = "https://ruehe.me";

export function bilingualLinks(enPath: string, dePath: string, current: "en" | "de") {
  const canonicalPath = current === "en" ? enPath : dePath;
  return [
    { rel: "canonical", href: `${BASE_URL}${canonicalPath}` },
    { rel: "alternate", hrefLang: "en", href: `${BASE_URL}${enPath}` },
    { rel: "alternate", hrefLang: "de", href: `${BASE_URL}${dePath}` },
    { rel: "alternate", hrefLang: "x-default", href: `${BASE_URL}${enPath}` },
  ];
}
