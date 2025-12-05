import { Project } from "../project/project";
import { Profiles } from "../profiles/profiles";

import "../app.css";
import { Footer } from "../footer/footer";
import { NavLink } from "react-router";

export function Welcome({lang}: {lang: string}) {
  return (
    <>
      <h2>{lang === "en" ? "Contact" : "Kontakt"}</h2>
      {lang === "en" ? <>
      <p>
    The best way to reach me is by mail: <a className="btn btn-small" href="mailto:marvin+website@server-fish.de">marvin@server-fish.de</a>
    </p>
     <p>
     Alternatively:
     </p>
     </>
     :
     <>
     <p>
     Man erreicht mich am besten per Mail: <a className="btn btn-small" href="mailto:marvin+website@server-fish.de">marvin@server-fish.de</a>
    </p>
     <p>
     Alternativ:
     </p>
     </>}
     <p>
     <Profiles />
     </p>
      <h2>{lang === "en" ? "Projects" : "Projekte"}</h2>
      <div className="row">
        <Project
          lang={lang}
          priority={true}
          projectName="GitHub"
          description_de="Kleinere Projekte von mir findet man auf GitHub."
          description_en="Smaller projects of mine are on GitHub."
          link_text_de="GitHub Profil"
          link_text_en="GitHub profil"
          link_target="https://github.com/Marv51"
          image="/img/github.png" />
          <Project
          lang={lang}
          projectName="Project-Quick-Open"
          description_de="Windows 11 App um häufig benutzte Ordner schnell wiederzufinden und zu öffnen."
          description_en="Windows 11 app to find and open frequently opened projects."
          link_target="https://www.microsoft.com/store/apps/9N2J8WKZ7PC2"
          link_text_de="Microsoft Store"
          link_text_en="Microsoft Store"
          image="/img/projectOpen.png"
          />
          <Project
          lang={lang}
          projectName="Telani"
          description_de="Windows App für Brandschutzsachverständige: Brandmatrixen einfach visuell erstellen."
          description_en="Windows app for fire safety experts: Create building protection concepts visually with ease."
          link_text_de="Telani Webseite"
          link_text_en="Telani website"
          link_target="https://telani.net"
          image="/img/telani.png"
          />
          <Project
          lang={lang}
          projectName="SWR3-Radio App"
          description_de="Die einfachste Art unter Windows 8.1 und 10, SWR3 als Webradio zu h&ouml;ren."
          description_en="The easiest way to listen to the local German radio station SWR3"
          link_target="https://apps.microsoft.com/windows/app/swr3-webradio/cf3926a9-8b31-41b2-9cc2-5213eef63e8f"
          image="/img/screenshot.png"
          />
        </div>
    </>
  );
}