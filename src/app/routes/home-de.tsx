import type { Route } from "./+types/home-de";
import { Welcome } from "../welcome/welcome";
import { bilingualLinks } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks("/", "/de", "de");

export function meta({}: Route.MetaArgs) {
  const title = "Marvin Rühe — Teamleitung Softwareentwicklung";
  const description =
    "Marvin Rühe — Teamleitung Softwareentwicklung bei gb&t. Ich entwickle Windows-Apps (WinUI 3, WPF, MSIX), lokale KI und Web-Tools und leite die Entwicklung der preisgekrönten Software telani.";
  const url = "https://ruehe.me/de";
  const image = "https://ruehe.me/og-de.jpg";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Marvin Rühe" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: "de_DE" },
    { property: "og:locale:alternate", content: "en_US" },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

export default function HomeDe() {
  return <Welcome lang="de" />;
}
