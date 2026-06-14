import type { Route } from "./+types/swr3-app-privacy";
import { SWR3App } from "../swr3-app-privacy/swr3-app";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Datenschutzerklärung für inoffizielle SWR3 - Webradio App | Windows 8" },
  ];
}

export default function ProjectQuickPrivacy() {
  return <SWR3App />;
}