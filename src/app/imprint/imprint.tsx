export function Imprint({lang}: {lang: string}){
    if (lang === "en") {
        return (
            <>
                <h2>Imprint &amp; Privacy</h2>
                <p>
                    This is my personal website. I, Marvin R&uuml;he, can be contacted at marvin (at) server-fish.de.
                </p>
                <p> 
                    I do not collect, store, or analyze any personal data from visitors to this website. This website does not 
                    use cookies, analytics or tracking services, or embedded content from third parties.
                </p>
                <p> 
                    This website is hosted via GitHub Pages. As the hosting provider, GitHub may process technical information,
                    such as IP addresses or server log data, when this website is accessed. For more information, please refer 
                    to <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"> GitHub's Privacy Statement</a>.
                </p>
                <p>
                    Where technical data is processed as part of providing this website, this serves the secure and reliable operation
                    of the website. The processing is based on Art. 6(1)(f) GDPR and is in my legitimate interest to ensure the operation
                    and security of this website.
                </p>    
                <p> 
                    You have the right to request access to your personal data, as well as the right to
                    rectification, erasure, restriction of processing, and objection to processing. You also have the right to lodge a complaint 
                    with a data protection supervisory authority.
                </p>
                <p> 
                    The <a href="https://github.com/Marv51/website">source code of this website</a> is publicly available on GitHub.
                </p>
            </>
        )
    }
    return (<>
        <h2>Impressum & Datenschutz</h2>
        <p>
            Dies ist meine persönliche Webseite. Ich, Marvin R&uuml;he, bin erreichbar unter marvin (at) server-fish.de.
        </p>
        <p>
            Ich erhebe, speichere oder analysiere keine personenbezogenen Daten von Besucher:innen dieser Webseite. 
            Diese Webseite verwendet keine Cookies, keine Analyse- oder Trackingdienste und keine eingebundenen Inhalte 
            von Drittanbietern.
        </p>
        <p>
            Diese Webseite wird über GitHub Pages gehostet. Als Hosting-Anbieter kann GitHub beim Aufruf der Webseite 
            möglicherweise technische Informationen, beispielsweise IP-Adressen oder Server-Logdaten, verarbeitet. Weitere Informationen 
            finden Sie in der <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Datenschutzerklärung von GitHub</a>.
        </p>
        <p>
            Soweit bei der Bereitstellung dieser Webseite technische Daten verarbeitet werden, erfolgt dies auf Grundlage von 
            Art. 6 Abs. 1 lit. f DSGVO. Dies liegt in meinem berechtigten Interesse, den Betrieb und die 
            Sicherheit dieser Webseite zu gewährleisten.
        </p>
        <p>
            Sie haben das Recht auf Auskunft über Ihre personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung 
            der Verarbeitung und Widerspruch gegen die Verarbeitung. Zudem haben Sie das Recht, sich bei einer 
            Datenschutzaufsichtsbehörde zu beschweren.
        </p>
        <p>
            Der <a href="https://github.com/Marv51/website">Quellcode dieser Webseite</a> ist öffentlich auf GitHub verfügbar.
        </p>
    </>
    )
}