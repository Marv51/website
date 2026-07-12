import { Link, useLocation } from "react-router";
import { PAGES, type Lang } from "../seo-links";

/**
 * Name shown on the left of the header, linking back to the language's home
 * page. Hidden on the home page itself, where the hero already shows the name.
 */
export function NavBrand({ lang }: { lang: Lang }) {
  const { pathname } = useLocation();
  const home = lang === "de" ? PAGES.home.de : PAGES.home.en;

  if (pathname === home) return null;

  return (
    <div className="nav-brand-container">
      <Link className="nav-brand" to={home}>
        Marvin R&uuml;he
      </Link>
    </div>
  );
}
