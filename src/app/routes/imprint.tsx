import type { Route } from "./+types/imprint";
import { Imprint } from "../imprint/imprint";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Webseite - Imprint & Privacy" },
    { lang: "en" }
  ];
}

export default function HomeDe() {
  return <Imprint lang="en" />;
}
