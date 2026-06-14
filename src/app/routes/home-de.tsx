import type { Route } from "./+types/home-de";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühes Webseite" },
    { lang: "de" }
  ];
}

export default function HomeDe() {
  return <Welcome lang="de" />;
}
