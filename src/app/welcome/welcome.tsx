import { Project } from "../project/project";
import { Profiles } from "../profiles/profiles";
import { XamlDoc } from "./xaml";

import "../app.css";
import avatar from "../MarvinRuehe.jpg";
import { Footer } from "../footer/footer";
import { NavLink } from "react-router";

const PROJECTS = [
  {
    projectName: "Project-Quick-Open",
    priority: true,
    description_en: "Windows 11 app to find and open frequently opened projects.",
    description_de: "Windows 11 App um häufig benutzte Ordner schnell wiederzufinden und zu öffnen.",
    link_target: "https://www.microsoft.com/store/apps/9N2J8WKZ7PC2",
    link_text_en: "Microsoft Store",
    link_text_de: "Microsoft Store",
    image: "/img/projectOpen.png",
  },
  {
    projectName: "Telani",
    description_en: "Windows app for fire safety experts: Create building protection concepts visually with ease.",
    description_de: "Windows App für Brandschutzsachverständige: Brandmatrixen einfach visuell erstellen.",
    note_en: "🏆 FeuerTrutz Product of the Year 2024 · vfdb Excellence Award 2024",
    note_de: "🏆 FeuerTrutz Produkt des Jahres 2024 · vfdb Excellence Award 2024",
    link_target: "https://telani.net",
    link_text_en: "Telani website",
    link_text_de: "Telani Webseite",
    image: "/img/telani.png",
  },
  {
    projectName: "SWR3-Radio App",
    retired: true,
    description_en: "The easiest way to listen to the local German radio station SWR3",
    description_de: "Die einfachste Art unter Windows 8.1 und 10, SWR3 als Webradio zu hören.",
    note_en: "📥 35,000 downloads on the Windows 8 Store",
    note_de: "📥 35.000 Downloads im Windows 8 Store",
    link_target: "https://apps.microsoft.com/windows/app/swr3-webradio/cf3926a9-8b31-41b2-9cc2-5213eef63e8f",
    image: "/img/screenshot.png",
  },
];

const HERO = {
  en: {
    role: "Team Lead, Software Development",
    tagline: "I lead development of telani — building Windows apps, on-device AI, and web tools.",
  },
  de: {
    role: "Teamleitung Softwareentwicklung",
    tagline: "Ich leite die Entwicklung von telani — Windows-Apps, lokale KI und Web-Tools.",
  },
};

// Curated from public repos on github.com/Marv51 (test repos and coursework
// excluded). Review/trim to taste.
// The Telani.* entries are forks of the telani-app org's source repos;
// descriptions are inferred from the names — refine as needed.
const SMALL_PROJECTS: { name: string; url: string; desc_en: string; desc_de: string; note_en?: string; note_de?: string }[] = [
  {
    name: "Telani.Sqlite",
    url: "https://github.com/Marv51/Telani.Sqlite",
    desc_en: "SQLite data layer for the Telani app.",
    desc_de: "SQLite-Datenschicht für die Telani-App.",
  },
  {
    name: "Telani.OpenDocumentCreator",
    url: "https://github.com/Marv51/Telani.OpenDocumentCreator",
    desc_en: "OpenDocument file generation for Telani.",
    desc_de: "OpenDocument-Dateierzeugung für Telani.",
  },
  {
    name: "Telani.SourceGenerator",
    url: "https://github.com/Marv51/Telani.SourceGenerator",
    desc_en: "C# source generator used in Telani.",
    desc_de: "C#-Source-Generator für Telani.",
    note_en: "News: now open source — excellent, battle-proven source generators built on the latest IIncrementalGenerator API.",
    note_de: "News: jetzt Open Source — exzellente, praxiserprobte Source-Generatoren auf Basis der neuesten IIncrementalGenerator-API.",
  },
  {
    name: "MiniCsvHelper",
    url: "https://github.com/Marv51/MiniCsvHelper",
    desc_en: "A tiny C# library for reading and writing CSV files.",
    desc_de: "Eine kleine C#-Bibliothek zum Lesen und Schreiben von CSV-Dateien.",
  },
  {
    name: "ruehe.me",
    url: "https://github.com/Marv51/website",
    desc_en: "This very website — a React Router 7 static site (yes, it lists itself).",
    desc_de: "Genau diese Website — eine statische React-Router-7-Seite (ja, sie listet sich selbst).",
  },
];

const SKILLS: { label_en: string; label_de: string; items: string[] }[] = [
  {
    label_en: "Languages",
    label_de: "Sprachen",
    items: ["C#", "TypeScript", "JavaScript", "PHP", "C/C++", "SQL / SQLite"],
  },
  {
    label_en: "Windows & Desktop",
    label_de: "Windows & Desktop",
    items: [".NET", "WinUI 3", "WPF", "XAML", "MSIX"],
  },
  {
    label_en: "Web",
    label_de: "Web",
    items: ["React", "React Router", "Symfony", "HTML & CSS"],
  },
  {
    label_en: "AI / ML",
    label_de: "KI / ML",
    items: ["Python", "PyTorch", "ONNX", "Ollama", "Gemma", "Claude Code"],
  },
  {
    label_en: "DevOps & Tooling",
    label_de: "DevOps & Werkzeuge",
    items: ["Docker", "Linux server", "Git", "GitHub Actions", "CI/CD"],
  },
];

const EXPERIENCE = [
  {
    period_en: "2026 – present",
    period_de: "2026 – heute",
    role_en: "Team Lead, Software Development",
    role_de: "Teamleitung Softwareentwicklung",
    org_en: "gb&t Gebäudebestand und Technik",
    org_de: "gb&t Gebäudebestand und Technik",
    desc_en: "Technical roadmap and architecture of telani; on-device AI (ONNX, semantic search), open-sourcing core libraries, and mentoring.",
    desc_de: "Technische Roadmap und Architektur von telani; lokale KI (ONNX, Semantic Search), Open-Sourcing von Kern-Bibliotheken und Mentoring.",
  },
  {
    period_en: "2022 – 2026",
    period_de: "2022 – 2026",
    role_en: "Lead Software Developer",
    role_de: "Leitender Softwareentwickler",
    org_en: "gb&t Gebäudebestand und Technik",
    org_de: "gb&t Gebäudebestand und Technik",
    desc_en: "Drove telani to FeuerTrutz Product of the Year 2024 and the vfdb Excellence Award 2024. Built CI/CD pipelines and integrated React WebView components.",
    desc_de: "telani zum FeuerTrutz Produkt des Jahres 2024 und zum vfdb Excellence Award 2024 geführt. CI/CD-Pipelines aufgebaut und React-WebView-Komponenten integriert.",
  },
  {
    period_en: "2019 – 2022",
    period_de: "2019 – 2022",
    role_en: "Software Developer — telani",
    role_de: "Softwareentwickler — telani",
    org_en: "gb&t Gebäudebestand und Technik",
    org_de: "gb&t Gebäudebestand und Technik",
    desc_en: "Built telani from a C# WPF app to WinUI 3 + MSIX, with a PHP/Symfony license & user backend.",
    desc_de: "telani von einer C#-WPF-Anwendung zu WinUI 3 + MSIX entwickelt, mit Lizenz- und Nutzerverwaltung in PHP/Symfony.",
  },
  {
    period_en: "2018 – 2019",
    period_de: "2018 – 2019",
    role_en: "Master's Thesis",
    role_de: "Masterarbeit",
    org_en: "Philips Medical Research, Hamburg",
    org_de: "Philips Medical Research, Hamburg",
    desc_en: "MRI anomaly detection with Generative Adversarial Networks (GANs) — flagging anomalies a model trained only on healthy scans can't reproduce (grade 1.0).",
    desc_de: "Anomalie-Erkennung in MRT-Bildern mit Generative Adversarial Networks (GANs) — Anomalien werden erkannt, weil ein nur auf gesunden Scans trainiertes Modell sie nicht reproduzieren kann (Note 1,0).",
  },
  {
    period_en: "2015 – 2017",
    period_de: "2015 – 2017",
    role_en: "Internship & Bachelor's Thesis",
    role_de: "Praxissemester & Bachelorarbeit",
    org_en: "Philips Medical Systems, Böblingen",
    org_de: "Philips Medical Systems, Böblingen",
    desc_en: "Patient-monitor development in low-level real-time C/C++ (selected for the Philips CONNECT talent program); bachelor's thesis on cross-platform UIs in a medical context (grade 1.3).",
    desc_de: "Patientenmonitor-Entwicklung mit hardwarenaher Echtzeit-Programmierung in C/C++ (Aufnahme ins Talentprogramm Philips CONNECT); Bachelorarbeit zu Cross-Platform-UIs im medizinischen Kontext (Note 1,3).",
  },
  {
    period_en: "2010 – 2019",
    period_de: "2010 – 2019",
    role_en: "Owner / Freelance Developer",
    role_de: "Inhaber / Freiberuflicher Entwickler",
    org_en: "Sole proprietorship",
    org_de: "Einzelunternehmen",
    desc_en: "Custom software for building analysis and measurement tech — klimafish, SensorAnalyseBox, and an autonomous rebar-scanning robot.",
    desc_de: "Individualsoftware für Gebäudeanalyse und Messtechnik — klimafish, SensorAnalyseBox und ein autonomer Armierungs-Scanner-Roboter.",
  },
];

export function Welcome({lang}: {lang: string}) {
  const hero = lang === "de" ? HERO.de : HERO.en;
  return (
    <>
      <div className="xaml-hide">
      <section className="hero">
        <img className="hero-avatar" src={avatar} alt="Marvin Rühe" />
        <div className="hero-text">
          <h1 className="hero-name">Marvin R&uuml;he</h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-tagline">{hero.tagline}</p>
          <p className="hero-location">
            <span className="hero-location-chip">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              {lang === "en" ? "Freiburg, Germany" : "Freiburg, Deutschland"}
            </span>
          </p>
        </div>
      </section>
      <h2>{lang === "en" ? "Contact" : "Kontakt"}</h2>
      <div className="contact-card">
        <p className="contact-lead">
          {lang === "en" ? "The best way to reach me is by mail:" : "Man erreicht mich am besten per Mail:"}
        </p>
        <p>
          <a className="btn btn-primary contact-email" href="mailto:marvin+website@server-fish.de">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.4l-8 5-8-5V6l8 5 8-5v2.4z" />
            </svg>
            marvin@server-fish.de
          </a>
        </p>
        <p className="contact-lead">
          {lang === "en" ? "Alternatively:" : "Alternativ:"}
        </p>
        <Profiles />
      </div>
      <h2>{lang === "en" ? "Skills" : "Kenntnisse"}</h2>
      <div className="skills">
        {SKILLS.map((group) => (
          <div className="skill-group" key={group.label_en}>
            <h3 className="skill-group-label">{lang === "de" ? group.label_de : group.label_en}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-chip" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2>{lang === "en" ? "Experience" : "Berufserfahrung"}</h2>
      <div className="experience">
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <div className="timeline-item" key={e.role_en + e.period_en}>
              <div className="timeline-period">{lang === "de" ? e.period_de : e.period_en}</div>
              <div className="timeline-body">
                <h3 className="timeline-role">{lang === "de" ? e.role_de : e.role_en}</h3>
                <div className="timeline-org">{lang === "de" ? e.org_de : e.org_en}</div>
                <p className="timeline-desc">{lang === "de" ? e.desc_de : e.desc_en}</p>
              </div>
            </div>
          ))}
        </div>
        <input type="checkbox" id="exp-toggle" className="exp-toggle-input" />
        <label htmlFor="exp-toggle" className="exp-more">
          <span className="exp-more-on">{lang === "en" ? "Show more" : "Mehr anzeigen"}</span>
          <span className="exp-more-off">{lang === "en" ? "Show less" : "Weniger anzeigen"}</span>
          <span className="exp-more-chevron" aria-hidden="true">&#9662;</span>
        </label>
      </div>
      <aside className="msix-cta">
        <div className="msix-cta-body">
          <h3 className="msix-cta-title">MSIX Consulting</h3>
          <p className="msix-cta-text">
            {lang === "en"
              ? "Need help packaging your app with MSIX? I'm among the most experienced MSIX packaging experts in the world — let's talk."
              : "Brauchen Sie Hilfe beim Verpacken Ihrer App mit MSIX? Ich gehöre zu den erfahrensten MSIX-Packaging-Experten weltweit — sprechen wir."}
          </p>
        </div>
        <a className="msix-cta-btn" href="mailto:marvin+msix@server-fish.de?subject=MSIX%20Consulting">
          {lang === "en" ? "Get in touch" : "Kontakt aufnehmen"}
        </a>
      </aside>
      <h2>{lang === "en" ? "Projects" : "Projekte"}</h2>
      <div className="row">
        {PROJECTS.map((p) => (
          <Project key={p.projectName} lang={lang} {...p} />
        ))}
      </div>
      <h2>{lang === "en" ? "Smaller projects" : "Kleinere Projekte"}</h2>
      <ul className="small-projects">
        {SMALL_PROJECTS.map((p) => (
          <li key={p.name}>
            <a className="small-project" href={p.url} target="_blank" rel="noopener noreferrer">
              <span className="small-project-main">
                <span className="small-project-name">{p.name}</span>
                <span className="small-project-sep" aria-hidden="true">&mdash;</span>
                <span className="small-project-desc">{lang === "de" ? p.desc_de : p.desc_en}</span>
                <span className="small-project-arrow" aria-hidden="true">&rarr;</span>
              </span>
              {(p.note_en || p.note_de) && (
                <span className="small-project-note">{lang === "de" ? p.note_de : p.note_en}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
      <p className="small-projects-all">
        <a className="btn project-btn" href="https://github.com/Marv51" target="_blank" rel="noopener noreferrer">
          {lang === "en" ? "See all on GitHub" : "Alle auf GitHub ansehen"} <span className="project-btn-arrow">&raquo;</span>
        </a>
      </p>
      </div>
      <XamlDoc
        lang={lang}
        role={hero.role}
        tagline={hero.tagline}
        projects={PROJECTS}
        skills={SKILLS}
        experience={EXPERIENCE}
        smallProjects={SMALL_PROJECTS}
      />
    </>
  );
}