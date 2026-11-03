export function StorageViewPrivacy({lang}: {lang: string}){
    const email = <a href="mailto:support@storage-view.new">support@storage-view.new</a>;

    if (lang === "en") {
        return (
            <div className="policy">
                <h2>Privacy Policy for Storage View</h2>
                <p>
                    Storage View is an app developed by me, Marvin R&uuml;he. It is distributed exclusively through the
                    Microsoft Store, which handles its download and purchase. If you have any questions about your
                    privacy there, please see Microsoft's privacy policy.
                </p>

                <h3>Controller</h3>
                <p>
                    The controller responsible for data processing is Marvin R&uuml;he, Altweg 85, 79356 Eichstetten,
                    Germany, email: {email}.
                </p>

                <h3>License validation</h3>
                <p>
                    Storage View only transfers data to validate Premium purchases. For this, the app derives a
                    pseudonymous device identifier from your device's hardware ID. I do not receive your name, your
                    email address or your Microsoft account; the identifier does not allow me to identify you. If you
                    have not purchased Premium, Storage View never contacts my servers.
                </p>
                <p>
                    The app passes the device identifier to the Microsoft Store, which uses it to create a proof of
                    purchase, and sends both to my license server. The server has the Microsoft Store validate the
                    proof of purchase together with the device identifier; Microsoft only confirms whether the
                    purchase is valid. In doing so, Microsoft can link the device identifier to your Microsoft account
                    and processes this data as an independent controller. Microsoft is certified under the EU-US Data
                    Privacy Framework.
                </p>
                <p>
                    My license server runs on Cloudflare (Cloudflare Workers). As part of this request, Cloudflare
                    also processes your IP address for technical reasons. Cloudflare acts as a processor
                    (Art. 28 GDPR). As Cloudflare is based in the USA, data may be transferred to the USA; this is
                    done on the basis of the EU-US Data Privacy Framework, under which Cloudflare is certified.
                    Please see Cloudflare's privacy policy for details.
                </p>
                <p>
                    The legal basis is Art. 6(1)(b) GDPR (performance of a contract). Reading the hardware ID is
                    permitted without consent under Section 25(2) No. 2 TDDDG, as it is strictly necessary for the
                    Premium feature you requested. Without this data, your Premium purchase cannot be validated.
                </p>
                <p>
                    The device identifier and proof of purchase are deleted after 30 days. No automated
                    decision-making or profiling takes place.
                </p>

                <h3>Contact and debug reports</h3>
                <p>
                    If you email me, I process your email address, your name if you provide it, and the content of
                    your message in order to answer your request. The legal basis is Art. 6(1)(f) GDPR (legitimate
                    interest in answering your request) or, if your request concerns your Premium purchase,
                    Art. 6(1)(b) GDPR. I delete your message once your request has been resolved, unless statutory
                    retention obligations apply.
                </p>
                <p>
                    My mailbox is provided by Google (Google Workspace), which acts as a processor (Art. 28 GDPR).
                    Data may be transferred to the USA; this is done on the basis of the EU-US Data Privacy
                    Framework, under which Google is certified.
                </p>
                <p>
                    You can create a debug report with “Save debug report”; Storage View saves it to a location you
                    choose and does not send it anywhere. It contains system, drive and scan information, app logs
                    and, where applicable, memory dumps of previous crashes, but no file contents. The main personal
                    data in it are your computer's name and file and folder names from the scanned folders. Please
                    review the report before sharing it.
                </p>
                <p>
                    If you send the report to me, you do so voluntarily. I use it only to analyse and fix the reported
                    bug and delete it once it is no longer needed for that. The legal basis is Art. 6(1)(f) GDPR
                    (legitimate interest in fixing bugs).
                </p>

                <h3>Your rights</h3>
                <p>
                    You have the right of access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure
                    (Art. 17 GDPR), restriction of processing (Art. 18 GDPR) and data portability (Art. 20 GDPR).
                    Where processing is based on Art. 6(1)(f) GDPR, you have the right to object to it (Art. 21 GDPR).
                    To exercise these rights, please contact the email address above. You also have the right to
                    lodge a complaint with a data protection supervisory authority (Art. 77 GDPR), for example the
                    State Commissioner for Data Protection and Freedom of Information of Baden-Württemberg.
                </p>
                <p>
                    Last modified: November 3rd, 2026
                </p>
            </div>
        )
    }
    return (
        <div className="policy">
            <h2>Datenschutzerkl&auml;rung für Storage View</h2>
            <p>
                Storage View ist eine App, die von mir, Marvin R&uuml;he, entwickelt wurde. Sie wird exklusiv über
                den Microsoft Store vertrieben, der Download und Kauf abwickelt. Falls Sie Fragen zu Ihrer
                Privatsph&auml;re dort haben, lesen Sie bitte die Datenschutzerklärung von Microsoft.
            </p>

            <h3>Verantwortlicher</h3>
            <p>
                Verantwortlich für die Datenverarbeitung ist Marvin R&uuml;he, Altweg 85, 79356 Eichstetten,
                E-Mail: {email}.
            </p>

            <h3>Lizenzprüfung</h3>
            <p>
                Storage View überträgt nur für die Lizenzprüfung von Premium-Käufen Daten. Dafür bildet die App
                aus der Hardware-Kennung Ihres Geräts eine pseudonyme Gerätekennung. Ich erhalte dabei weder Ihren
                Namen noch Ihre E-Mail-Adresse oder Ihr Microsoft-Konto; die Kennung lässt für mich keine
                Rückschlüsse auf Ihre Person zu. Ohne Premium-Kauf nimmt Storage View keinen Kontakt zu meinen
                Servern auf.
            </p>
            <p>
                Die App übergibt die Gerätekennung an den Microsoft Store, der daraus einen Kaufnachweis erstellt,
                und sendet beides an meinen Lizenzserver. Dieser lässt den Kaufnachweis zusammen mit der
                Gerätekennung vom Microsoft Store prüfen, der nur bestätigt, ob der Kauf gültig ist. Microsoft kann
                die Gerätekennung dabei Ihrem Microsoft-Konto zuordnen und verarbeitet diese Daten als
                eigenständiger Verantwortlicher. Microsoft ist unter dem EU-US Data Privacy Framework zertifiziert.
            </p>
            <p>
                Mein Lizenzserver wird bei Cloudflare betrieben (Cloudflare Workers). Bei dieser Anfrage
                verarbeitet Cloudflare technisch bedingt auch Ihre IP-Adresse. Cloudflare ist als
                Auftragsverarbeiter tätig (Art. 28 DSGVO). Da Cloudflare ein Unternehmen mit Sitz in den USA ist,
                können Daten in die USA übermittelt werden; dies erfolgt auf Grundlage des EU-US Data Privacy
                Framework, unter dem Cloudflare zertifiziert ist. Weitere Informationen finden Sie in der
                Datenschutzerklärung von Cloudflare.
            </p>
            <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Das Auslesen der
                Hardware-Kennung ist nach § 25 Abs. 2 Nr. 2 TDDDG ohne Einwilligung zulässig, da es für die von
                Ihnen gewünschte Premium-Funktion unbedingt erforderlich ist. Ohne diese Daten kann Ihr
                Premium-Kauf nicht bestätigt werden.
            </p>
            <p>
                Die Gerätekennung und der Kaufnachweis werden nach 30 Tagen gelöscht. Eine automatisierte
                Entscheidungsfindung oder ein Profiling findet nicht statt.
            </p>

            <h3>Kontakt und Debugberichte</h3>
            <p>
                Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre E-Mail-Adresse, gegebenenfalls Ihren
                Namen und den Inhalt Ihrer Nachricht, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage) oder, wenn
                Ihre Anfrage Ihren Premium-Kauf betrifft, Art. 6 Abs. 1 lit. b DSGVO. Ich lösche Ihre Nachricht,
                sobald Ihre Anfrage erledigt ist, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
            <p>
                Mein E-Mail-Postfach wird von Google (Google Workspace) bereitgestellt, das als
                Auftragsverarbeiter tätig ist (Art. 28 DSGVO). Dabei können Daten in die USA übermittelt werden;
                dies erfolgt auf Grundlage des EU-US Data Privacy Framework, unter dem Google zertifiziert ist.
            </p>
            <p>
                Über „Debugbericht speichern“ können Sie einen Fehlerbericht erstellen, den Storage View an einem
                Ort Ihrer Wahl speichert und nicht übermittelt. Er enthält System-, Laufwerks- und
                Scan-Informationen, App-Protokolle und gegebenenfalls Speicherabbilder früherer Abstürze, aber
                keine Dateiinhalte. Personenbezogen sind vor allem der Computername sowie Datei- und Ordnernamen
                aus den gescannten Ordnern. Bitte prüfen Sie den Bericht, bevor Sie ihn weitergeben.
            </p>
            <p>
                Wenn Sie mir den Bericht zusenden, tun Sie das freiwillig. Ich verwende ihn ausschließlich, um den
                gemeldeten Fehler zu analysieren und zu beheben, und lösche ihn, sobald er dafür nicht mehr
                benötigt wird. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Fehlerbehebung).
            </p>

            <h3>Ihre Rechte</h3>
            <p>
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
                (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit
                (Art. 20 DSGVO). Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, können Sie ihr
                widersprechen (Art. 21 DSGVO). Wenden Sie sich dazu an die oben genannte E-Mail-Adresse.
                Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren
                (Art. 77 DSGVO), zum Beispiel beim Landesbeauftragten für den Datenschutz und die
                Informationsfreiheit Baden-Württemberg.
            </p>
            <p>
                Zuletzt verändert: 3. November 2026
            </p>
        </div>
    );
}
