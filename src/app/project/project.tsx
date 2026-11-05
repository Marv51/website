import styles from "./project.module.css";

export function Project({lang, projectName, image, link_target, description_en, description_de, link_text_de = null, link_text_en = null, priority = false, retired = false, comingSoon = false, buttonDisabled = false, note_en = null, note_de = null} : {
    lang: string,
    projectName: string,
    image: string,
    link_target: string,
    description_en: string,
    description_de: string,
    link_text_en?: string | null,
    link_text_de?: string | null,
    priority?: boolean,
    retired?: boolean,
    comingSoon?: boolean,
    buttonDisabled?: boolean,
    note_en?: string | null,
    note_de?: string | null
}){
    const description = lang === "de" ? description_de : description_en;
    const note = lang === "de" ? note_de : note_en;
    const linkText = lang === "de"
        ? (link_text_de ?? "Details anzeigen")
        : (link_text_en ?? "Show details");

    return (
        <div className={retired ? "project-card project-card-retired" : "project-card"}>
            {buttonDisabled ? (
                <span className="project-card-media" aria-disabled="true">
                    <img src={image} {...(priority ? {fetchPriority: "high"} : {})} className="img-polaroid" alt={projectName} />
                    {retired && <span className="project-badge">{lang === "de" ? "Eingestellt" : "Retired"}</span>}
                    {comingSoon && <span className={`project-badge ${styles.badgeSoon}`}>{lang === "de" ? "Demnächst" : "Coming soon"}</span>}
                </span>
            ) : (
                <a className="project-card-media" target="_blank" rel="noopener noreferrer" href={link_target}>
                    <img src={image} {...(priority ? {fetchPriority: "high"} : {})} className="img-polaroid" alt={projectName} />
                    {retired && <span className="project-badge">{lang === "de" ? "Eingestellt" : "Retired"}</span>}
                    {comingSoon && <span className={`project-badge ${styles.badgeSoon}`}>{lang === "de" ? "Demnächst" : "Coming soon"}</span>}
                </a>
            )}
            <h3>{projectName}</h3>
            <p className="project-desc">{description}</p>
            {note && <p className="project-note">{note}</p>}
            <p className="project-card-actions">
                {buttonDisabled ? (
                    <span className={`btn project-btn ${styles.buttonDisabled}`} aria-disabled="true">
                        {linkText} <span className="project-btn-arrow">&raquo;</span>
                    </span>
                ) : (
                    <a className="btn project-btn" target="_blank" rel="noopener noreferrer" href={link_target}>
                        {linkText} <span className="project-btn-arrow">&raquo;</span>
                    </a>
                )}
            </p>
        </div>
    );
}
