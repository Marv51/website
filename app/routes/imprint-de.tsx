import type { Route } from "./+types/imprint-de";
import { Imprint } from "../imprint/imprint";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühes Webseite - Impressum und Datenschutz" },
    { lang: "de" }
  ];
}

export default function HomeDe() {
  return <Imprint lang="de" />;
}
