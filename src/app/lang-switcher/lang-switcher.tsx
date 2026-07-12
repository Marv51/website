import { NavLink, useLocation } from "react-router";
import { PAGES, type PagePair } from "../seo-links";

// Equivalent EN ↔ DE page pairs come from the single source of truth in
// seo-links.ts, so a page added there automatically works in the switcher too.
const pagePairs = Object.values(PAGES) as PagePair[];

function equivalentPaths(pathname: string): PagePair {
  return (
    pagePairs.find((p) => p.en === pathname || p.de === pathname) ??
    PAGES.home
  );
}

export function LangSwitcher() {
  const { pathname } = useLocation();
  const { en, de } = equivalentPaths(pathname);

  return (
    <div className="lang">
      <NavLink
        className={({ isActive }) =>
          isActive ? "lang-left" : "not-active lang-left"
        }
        to={en}
        end
      >
        en
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "lang-right" : "not-active lang-right"
        }
        to={de}
        end
      >
        de
      </NavLink>
    </div>
  );
}
