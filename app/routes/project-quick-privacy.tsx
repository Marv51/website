import type { Route } from "./+types/project-quick-privacy";
import { ProjectQuick } from "../project-quick/project-quick";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Datenschutzerklärung für Project-Quick-Open" },
  ];
}

export default function ProjectQuickPrivacy() {
  return <ProjectQuick />;
}