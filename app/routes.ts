import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/de", "routes/home-de.tsx"),
    route("/Project-Quick-Open/datenschutz.html", "routes/project-quick-privacy.tsx"),
    route("/SWR3App/datenschutz.html", "routes/swr3-app-privacy.tsx"),
] satisfies RouteConfig;
