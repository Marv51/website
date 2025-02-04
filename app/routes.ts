import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    
    route("/Project-Quick-Open/datenschutz.html", "routes/project-quick-privacy.tsx"),
    route("/SWR3App/datenschutz.html", "routes/swr3-app-privacy.tsx"),
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/imprint", "routes/imprint.tsx"),
    ]),
    layout("routes/layout-de.tsx", [
        route("/de", "routes/home-de.tsx"),
        route("/impressum", "routes/imprint-de.tsx"),
    ]),
    
] satisfies RouteConfig;
