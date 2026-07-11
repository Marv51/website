import type { Route } from "./+types/imprint";
import { Imprint } from "../imprint/imprint";
import { bilingualLinks } from "../seo-links";

export const links: Route.LinksFunction = () =>
  bilingualLinks("/en/imprint", "/de/impressum", "en");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Webseite - Imprint & Privacy" },
  ];
}

export default function HomeDe() {
  return <Imprint lang="en" />;
}
