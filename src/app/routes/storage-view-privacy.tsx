import type { Route } from "./+types/storage-view-privacy";
import { StorageViewPrivacy } from "../storage-view/storage-view";
import { bilingualLinks, PAGES } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks(PAGES.storageViewPrivacy, "en");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Storage View - Privacy Policy" },
  ];
}

export default function StorageViewPrivacyEn() {
  return <StorageViewPrivacy lang="en" />;
}
