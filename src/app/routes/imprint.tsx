import type { Route } from "./+types/imprint";
import { Imprint } from "../imprint/imprint";
import { bilingualLinks, PAGES } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks(PAGES.imprint, "en");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Webseite - Imprint & Privacy" },
  ];
}

export default function HomeDe() {
  return <Imprint lang="en" />;
}
