import { useSearchParams } from "react-router";

export function Footer({lang} : {
    lang: string
}){
  let [searchParams, setSearchParams] = useSearchParams();
  const showImpressum = searchParams.get("impressum") === "true"

  const toggleImpressum = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!showImpressum){
      setSearchParams({"impressum": "true"}, {preventScrollReset: true});
    }
    else{
      setSearchParams({}, {preventScrollReset: true});
    }
    ev.preventDefault();
  };

    if (lang === "en"){
        return (
            <>
            <hr />
            <footer>
              <p>&copy; Marvin R&uuml;he 2018 - {new Date().getFullYear()} | <a className="btn btn-small" id="show_impressum" href="#" onClick={toggleImpressum}>Imprint & privacy</a></p>
               <div className="btn-toolbar">
                    <div className="btn-group"></div>
                </div>
              <p id="impressum" className={!showImpressum ? "hidden_impressum" : ""}>
                This is my website, Marvin Rühe, you can reach me at marvin@server-fish.de. I strive to be as careful as possible when it comes to content and websites I link to. However, I can not be held responsible for websites I link to. If you have concerns or find questionable content please contact me.
                Privacy: I do not record any information about your visit of this website. This website is hosted at GitHub, so they might log some information (Their privacy policy can be found: <a href="https://help.github.com/en/articles/github-privacy-statement">here</a>). The source code of this website is available <a href="https://github.com/Marv51/website"> here</a>.
              </p>
           </footer>
           </>
        );
    } else 
    {
      return (
        <>
             <hr />
<footer>
  <p>&copy; Marvin R&uuml;he 2018 - {new Date().getFullYear()} | <a className="btn btn-small" href="#" id="show_impressum" onClick={toggleImpressum}>Impressum & Datenschutz</a></p>
   <div className="btn-toolbar">
<div className="btn-group"></div>
</div>
  <p id="impressum" className={!showImpressum ? "hidden_impressum" : ""}>Die ist meine Webseite, Marvin R&uuml;he, man erreicht mich unter marvin (at) server-fish.de. Ich versuche m&ouml;glichst gr&uuml;ndlich bei Inhalten und Links zu sein, bin aber nicht für verlinkte Webseiten verantwortlich. Wenn Ihnen Fehler oder fragw&uuml;rdige Inhalte auffallen, bitte ich um Nachricht.
    Zum Thema Datenschutz: Ich 'verfolge' Sie nicht, soll heißen ich zeichne nichts über Ihren Besuch auf dieser Webseite auf.
    Diese Webseite wird von GitHub gehostet (<a href="https://help.github.com/en/articles/github-privacy-statement">GitHub privacy policy</a>), der Quellcode ist <a href="https://github.com/Marv51/website"> hier verfügbar</a>.
  </p>
</footer>
       </>
    );
    }
}