import type { Route } from "./+types/layout";
import { Imprint } from "../imprint/imprint";
import { ViewTransition } from "react";
import { Outlet } from "react-router";
import { Footer } from "../footer/footer";
import { LangSwitcher } from "../lang-switcher/lang-switcher";
import { NavBrand } from "../nav-brand/nav-brand";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Webseite" },
  ];
}

export default function Layout() {
  return (<><div className="navbar navbar-inverse navbar-fixed-top">
    <div className="navbar-content">
      <NavBrand lang="en" />
      <LangSwitcher />
    </div>
</div>
  <div className="container main-content">
    <ViewTransition name="page">
      <Outlet />
    </ViewTransition>
    
    <Footer lang="en" />
    </div>
    </>
    
    );
}
