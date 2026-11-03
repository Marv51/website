import type { Route } from "./+types/storage-view-privacy-de";
import { StorageViewPrivacy } from "../storage-view/storage-view";
import { bilingualLinks, PAGES } from "../seo-links";

export const links: Route.LinksFunction = () => bilingualLinks(PAGES.storageViewPrivacy, "de");

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Storage View - Datenschutzerklärung" },
  ];
}

export default function StorageViewPrivacyDe() {
  return <StorageViewPrivacy lang="de" />;
}
