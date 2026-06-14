import type { Route } from "./+types/home-de";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe — Teamleitung Softwareentwicklung" },
    {
      name: "description",
      content:
        "Marvin Rühe — Teamleitung Softwareentwicklung bei gb&t. Ich entwickle Windows-Apps (WinUI 3, WPF, MSIX), lokale KI und Web-Tools und leite die Entwicklung der preisgekrönten Software telani.",
    },
  ];
}

export default function HomeDe() {
  return <Welcome lang="de" />;
}
