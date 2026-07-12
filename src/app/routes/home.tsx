import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { bilingualLinks, PAGES, SITE_URL } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks(PAGES.home, "en");

export function meta({}: Route.MetaArgs) {
  const title = "Marvin Rühe — Team Lead, Software Development";
  const description =
    "Marvin Rühe — Team Lead, Software Development at gb&t. I build Windows apps (WinUI 3, WPF, MSIX), on-device AI, and web tools, and lead development of the award-winning telani software.";
  const url = `${SITE_URL}${PAGES.home.en}`;
  const image = `${SITE_URL}/og.jpg`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Marvin Rühe" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: "en_US" },
    { property: "og:locale:alternate", content: "de_DE" },
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

export default function Home() {
  return <Welcome lang="en" />;
}
