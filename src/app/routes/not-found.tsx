import type { Route } from "./+types/not-found";
import { NotFound } from "../not-found/not-found";
import "../app.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 — Page not found | Marvin Rühe" },
  ];
}

export default function NotFoundRoute() {
  return <NotFound />;
}
