import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import duo from "../duolingo-streak.json";

const daysSince = (iso: string) => Math.max(0, Math.floor((Date.now() - Date.parse(iso)) / 86400000));

export function Footer({lang} : {
    lang: string
}){
    const isEn = lang === "en";
    const year = new Date().getFullYear();
    const { pathname } = useLocation();
    const isHome = pathname === "/" || pathname === "/de";

    // Start from the build-time value (matches the prerendered HTML), then
    // optimistically add the days elapsed since after mount — no hydration mismatch.
    const [streak, setStreak] = useState(duo.streak);
    useEffect(() => {
        if (duo.streak > 0) setStreak(duo.streak + daysSince(duo.since));
    }, []);

    return (
        <footer className="site-footer">
            <p className="site-footer-copy">&copy; Marvin R&uuml;he 2018 &ndash; {year}</p>
            {duo.streak > 0 && (
                <a
                    className="footer-streak"
                    href={`https://www.duolingo.com/profile/${duo.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🔥 {streak.toLocaleString(isEn ? "en" : "de")} {isEn ? "day Duolingo streak" : "Tage Duolingo-Streak"}
                </a>
            )}
            {isHome && (
                <span className="xaml-toggle">
                    <input type="checkbox" id="xaml-toggle" className="xaml-toggle-input" />
                    <label htmlFor="xaml-toggle" className="xaml-toggle-label">
                        <span className="xaml-toggle-glyph" aria-hidden="true">&lt;/&gt;</span>
                        <span className="xaml-toggle-on">{isEn ? "Show as XAML" : "Als XAML anzeigen"}</span>
                        <span className="xaml-toggle-off">{isEn ? "Show rendered page" : "Gerendert anzeigen"}</span>
                    </label>
                </span>
            )}
            <NavLink className="site-footer-link" to={isEn ? "/en/imprint" : "/de/impressum"}>
                {isEn ? "Imprint & privacy" : "Impressum & Datenschutz"}
            </NavLink>
        </footer>
    );
}
