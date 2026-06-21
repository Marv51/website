import { Fragment } from "react";
import type { ReactNode } from "react";

// Tiny syntax-highlight primitives. Each maps to a .xa-* color in app.css.
const P = ({ children }: { children: ReactNode }) => <span className="xa-p">{children}</span>; // punctuation
const E = ({ children }: { children: ReactNode }) => <span className="xa-e">{children}</span>; // element name
const A = ({ children }: { children: ReactNode }) => <span className="xa-a">{children}</span>; // attribute name
const C = ({ children }: { children: ReactNode }) => <span className="xa-c">{children}</span>; // comment
const Str = ({ children }: { children: ReactNode }) => (
  <>
    <span className="xa-p">"</span>
    <span className="xa-s">{children}</span>
    <span className="xa-p">"</span>
  </>
);

const NL = "\n";
const ind = (n: number) => "  ".repeat(n);

type Attr = [string, string];

const At = ({ k, v }: { k: string; v: string }) => (
  <>
    {" "}
    <A>{k}</A>
    <P>=</P>
    <Str>{v}</Str>
  </>
);

function Self({ n, name, attrs = [] }: { n: number; name: string; attrs?: Attr[] }) {
  return (
    <>
      {ind(n)}
      <P>&lt;</P>
      <E>{name}</E>
      {attrs.map(([k, v], i) => (
        <At key={i} k={k} v={v} />
      ))}
      <P>{" />"}</P>
      {NL}
    </>
  );
}

function Open({ n, name, attrs = [] }: { n: number; name: string; attrs?: Attr[] }) {
  return (
    <>
      {ind(n)}
      <P>&lt;</P>
      <E>{name}</E>
      {attrs.map(([k, v], i) => (
        <At key={i} k={k} v={v} />
      ))}
      <P>&gt;</P>
      {NL}
    </>
  );
}

function Close({ n, name }: { n: number; name: string }) {
  return (
    <>
      {ind(n)}
      <P>&lt;/</P>
      <E>{name}</E>
      <P>&gt;</P>
      {NL}
    </>
  );
}

function Cm({ n, text }: { n: number; text: string }) {
  return (
    <>
      {ind(n)}
      <C>{"<!-- " + text + " -->"}</C>
      {NL}
    </>
  );
}

type XamlDocProps = {
  lang: string;
  role: string;
  tagline: string;
  projects: { projectName: string }[];
  skills: { label_en: string; label_de: string; items: string[] }[];
  experience: { period_en: string; period_de: string; role_en: string; role_de: string; org_en: string; org_de: string }[];
  smallProjects: { name: string; url: string; desc_en: string; desc_de: string }[];
};

export function XamlDoc({ lang, role, tagline, projects, skills, experience, smallProjects }: XamlDocProps) {
  const t = (en: string, de: string) => (lang === "de" ? de : en);

  return (
    <pre className="xaml-doc" aria-label="Page rendered as XAML">
      <code>
        <Open
          n={0}
          name="Window"
          attrs={[
            ["x:Class", "Ruehe.Portfolio"],
            ["Title", "Marvin Rühe — Portfolio"],
            ["FontFamily", "Fraunces, system-ui"],
          ]}
        />
        <Open n={1} name="ScrollViewer" />
        <Open n={2} name="StackPanel" attrs={[["Margin", "0 24"], ["MaxWidth", "1100"], ["Spacing", "24"]]} />

        <Cm n={3} text="Hero" />
        <Open n={3} name="StackPanel" attrs={[["Orientation", "Horizontal"], ["Spacing", "28"]]} />
        <Self n={4} name="Ellipse" attrs={[["Width", "120"], ["Height", "120"], ["Fill", "{ImageBrush MarvinRuehe.jpg}"]]} />
        <Open n={4} name="StackPanel" />
        <Self n={5} name="TextBlock" attrs={[["Text", "Marvin Rühe"], ["FontFamily", "Fraunces"], ["FontSize", "58"]]} />
        <Self n={5} name="TextBlock" attrs={[["Text", role], ["Foreground", "{StaticResource Accent}"]]} />
        <Self n={5} name="TextBlock" attrs={[["Text", tagline]]} />
        <Self n={5} name="Badge" attrs={[["Icon", "📍"], ["Content", t("Freiburg, Germany", "Freiburg, Deutschland")]]} />
        <Close n={4} name="StackPanel" />
        <Close n={3} name="StackPanel" />

        <Cm n={3} text={t("Contact", "Kontakt")} />
        <Open n={3} name="HeaderedContentControl" attrs={[["Header", t("Contact", "Kontakt")]]} />
        <Open n={4} name="Border" attrs={[["Style", "{StaticResource Card}"]]} />
        <Open n={5} name="StackPanel" attrs={[["Spacing", "12"]]} />
        <Self n={6} name="TextBlock" attrs={[["Text", t("The best way to reach me is by mail:", "Man erreicht mich am besten per Mail:")]]} />
        <Self n={6} name="Button" attrs={[["Content", "marvin@server-fish.de"], ["Style", "{StaticResource AccentButton}"]]} />
        <Open n={6} name="WrapPanel" />
        {["Mastodon", "GitHub", "Stack Overflow", "LinkedIn"].map((p, i) => (
          <Self key={i} n={7} name="Button" attrs={[["Content", p]]} />
        ))}
        <Close n={6} name="WrapPanel" />
        <Close n={5} name="StackPanel" />
        <Close n={4} name="Border" />
        <Close n={3} name="HeaderedContentControl" />

        <Cm n={3} text={t("Skills", "Kenntnisse")} />
        <Open n={3} name="HeaderedItemsControl" attrs={[["Header", t("Skills", "Kenntnisse")]]} />
        {skills.map((g, gi) => (
          <Fragment key={gi}>
            <Open n={4} name="GroupBox" attrs={[["Header", lang === "de" ? g.label_de : g.label_en]]} />
            <Open n={5} name="WrapPanel" />
            {g.items.map((s, si) => (
              <Self key={si} n={6} name="Chip" attrs={[["Content", s]]} />
            ))}
            <Close n={5} name="WrapPanel" />
            <Close n={4} name="GroupBox" />
          </Fragment>
        ))}
        <Close n={3} name="HeaderedItemsControl" />

        <Cm n={3} text={t("Experience", "Berufserfahrung")} />
        <Open n={3} name="ItemsControl" attrs={[["Header", t("Experience", "Berufserfahrung")]]} />
        {experience.map((e, i) => (
          <Self
            key={i}
            n={4}
            name="ExperienceItem"
            attrs={[
              ["Period", lang === "de" ? e.period_de : e.period_en],
              ["Role", lang === "de" ? e.role_de : e.role_en],
              ["Org", lang === "de" ? e.org_de : e.org_en],
            ]}
          />
        ))}
        <Close n={3} name="ItemsControl" />

        <Cm n={3} text={t("Projects", "Projekte")} />
        <Open n={3} name="ItemsControl" attrs={[["Header", t("Projects", "Projekte")]]} />
        {projects.map((p, i) => (
          <Self key={i} n={4} name="ProjectCard" attrs={[["Title", p.projectName]]} />
        ))}
        <Close n={3} name="ItemsControl" />

        <Cm n={3} text={t("Smaller projects", "Kleinere Projekte")} />
        <Open n={3} name="ItemsControl" attrs={[["Header", t("Smaller projects", "Kleinere Projekte")]]} />
        {smallProjects.map((p, i) => (
          <Self
            key={i}
            n={4}
            name="Hyperlink"
            attrs={[
              ["NavigateUri", p.url],
              ["Text", `${p.name} — ${lang === "de" ? p.desc_de : p.desc_en}`],
            ]}
          />
        ))}
        <Close n={3} name="ItemsControl" />

        <Close n={2} name="StackPanel" />
        <Close n={1} name="ScrollViewer" />
        <Close n={0} name="Window" />
        <Cm n={0} text="Oh, did he build this with some Uno-compiler, or is this just fake?" />
      </code>
    </pre>
  );
}
