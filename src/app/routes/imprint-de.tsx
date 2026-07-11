import type { Route } from "./+types/imprint-de";
import { Imprint } from "../imprint/imprint";
import { bilingualLinks } from "../seo-links";

export const links: Route.LinksFunction = () =>
  bilingualLinks("/en/imprint", "/de/impressum", "de");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühes Webseite - Impressum und Datenschutz" },
  ];
}

export default function HomeDe() {
  return <Imprint lang="de" />;
}
