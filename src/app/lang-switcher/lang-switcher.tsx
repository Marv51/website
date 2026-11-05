import { Link, useLocation } from "react-router";
import { PAGES, type PagePair } from "../seo-links";

// Equivalent EN ↔ DE page pairs come from the single source of truth in
// seo-links.ts, so a page added there automatically works in the switcher too.
const pagePairs = Object.values(PAGES) as PagePair[];

// Tolerate trailing slashes, e.g. "/en/storage-view/privacy/".
function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function LangSwitcher() {
  const pathname = normalize(useLocation().pathname);
  const { en, de } =
    pagePairs.find((p) => p.en === pathname || p.de === pathname) ??
    // Pages without an English equivalent (legacy German-only policies).
    { en: PAGES.home.en, de: pathname };

  return (
    <div className="lang">
      <Link
        className={pathname === en ? "lang-left" : "not-active lang-left"}
        aria-current={pathname === en ? "page" : undefined}
        to={en}
      >
        en
      </Link>
      <Link
        className={pathname === de ? "lang-right" : "not-active lang-right"}
        aria-current={pathname === de ? "page" : undefined}
        to={de}
      >
        de
      </Link>
    </div>
  );
}
