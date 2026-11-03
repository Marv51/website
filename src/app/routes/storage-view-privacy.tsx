import type { Route } from "./+types/storage-view-privacy";
import { StorageView } from "../storage-view/storage-view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Datenschutzerklärung für Storage View" },
  ];
}

export default function StorageViewPrivacy() {
  return <StorageView />;
}