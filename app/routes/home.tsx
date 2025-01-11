import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Website" },
    { lang: "en"}
  ];
}

export default function Home() {
  return <Welcome lang="en" />;
}
