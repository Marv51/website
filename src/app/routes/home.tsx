import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { bilingualLinks } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks("/", "/de", "en");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe — Team Lead, Software Development" },
    {
      name: "description",
      content:
        "Marvin Rühe — Team Lead, Software Development at gb&t. I build Windows apps (WinUI 3, WPF, MSIX), on-device AI, and web tools, and lead development of the award-winning telani software.",
    },
  ];
}

export default function Home() {
  return <Welcome lang="en" />;
}
