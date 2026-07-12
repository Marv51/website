import type { Route } from "./+types/layout";
import { Imprint } from "../imprint/imprint";
import { Outlet } from "react-router";
import { Footer } from "../footer/footer";
import { LangSwitcher } from "../lang-switcher/lang-switcher";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marvin Rühe's Webseite" },
  ];
}

export default function Layout() {
  return (<><div className="navbar navbar-inverse navbar-fixed-top">
    <LangSwitcher />
</div>
  <div className="container main-content">
    <Outlet />
    

    <Footer lang="de" />
    </div>
    </>
    
    );
}
