export function Imprint({lang}: {lang: string}){
    if (lang === "en") {
        return (
            <>
                <h2>Imprint & Privacy</h2>
                <p>
                    This is my website, Marvin Rühe, you can reach me at marvin@server-fish.de. I strive to be as careful as possible when it comes to content and websites I link to. However, I can not be held responsible for websites I link to. If you have concerns or find questionable content please contact me.
                Privacy: I do not record any information about your visit of this website. This website is hosted at GitHub, so they might log some information (Their privacy policy can be found: <a href="https://help.github.com/en/articles/github-privacy-statement">here</a>). The source code of this website is available <a href="https://github.com/Marv51/website"> here</a>.
                </p>
            </>
        )
    }
    return (<>
        <h2>Impressum und Datenschutz</h2>
        <p>
        Die ist meine Webseite, Marvin R&uuml;he, man erreicht mich unter marvin (at) server-fish.de. Ich versuche m&ouml;glichst gr&uuml;ndlich bei Inhalten und Links zu sein, bin aber nicht für verlinkte Webseiten verantwortlich. Wenn Ihnen Fehler oder fragw&uuml;rdige Inhalte auffallen, bitte ich um Nachricht.
    Zum Thema Datenschutz: Ich 'verfolge' Sie nicht, soll heißen ich zeichne nichts über Ihren Besuch auf dieser Webseite auf.
    Diese Webseite wird von GitHub gehostet (<a href="https://help.github.com/en/articles/github-privacy-statement">GitHub privacy policy</a>), der Quellcode ist <a href="https://github.com/Marv51/website"> hier verfügbar</a>.
        </p>
    </>
    )
}