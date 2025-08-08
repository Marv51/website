import { Link, NavLink, useSearchParams } from "react-router";

export function Footer({lang} : {
    lang: string
}){

    if (lang === "en"){
        return (
            <>
            <hr />
            <footer>
              <p>&copy; Marvin R&uuml;he 2018 - {new Date().getFullYear()} | <NavLink id="show_impressum" to="/en/imprint">Imprint & privacy</NavLink></p>
           </footer>
           </>
        );
    } else 
    {
      return (
        <>
          <hr />
          <footer>
            <p>&copy; Marvin R&uuml;he 2018 - {new Date().getFullYear()} | <NavLink to="/de/impressum" id="show_impressum">Impressum & Datenschutz</NavLink></p>
          </footer>
       </>
    );
    }
}