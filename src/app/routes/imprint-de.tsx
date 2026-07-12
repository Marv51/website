import type { Route } from "./+types/imprint-de";
import { Imprint } from "../imprint/imprint";
import { bilingualLinks, PAGES } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks(PAGES.imprint, "de");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühes Webseite - Impressum und Datenschutz" },
  ];
}

export default function HomeDe() {
  return <Imprint lang="de" />;
}


  