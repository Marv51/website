import type { Route } from "./+types/layout";
import { Imprint } from "../imprint/imprint";
import { NavLink, Outlet } from "react-router";
import { Footer } from "~/footer/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Webseite" },
    { lang: "en" }
  ];
}

export default function Layout() {
  return (<><div className="navbar navbar-inverse navbar-fixed-top">
    <div className="navbar-inner">
    <div className="container">
        <a className="brand" href="/">Marvin R&uuml;he</a>
    </div>
    </div>
    <div className="lang">
        <NavLink className={({ isActive }) => isActive ? "" : "not-active"} to="/">en</NavLink> /&nbsp;
        <NavLink className={({ isActive }) => isActive ? "" : "not-active"} to="/de">de</NavLink>
    </div>
</div>
  <div className="container main-content">
    <Outlet />
    
    <Footer lang="en" />
    </div>
    </>
    
    );
}
