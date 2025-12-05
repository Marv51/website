export function Project({lang, projectName, image, link_target, description_en, description_de, link_text_de = null, link_text_en = null, priority = false} : {
    lang: string,
    projectName: string,
    image: string,
    link_target: string,
    description_en: string,
    description_de: string, 
    link_text_en?: string | null,
    link_text_de?: string | null,
    priority?: boolean
}){

    if (lang === "de"){
        return <>
        <div className="span4">
        <h3>{projectName}</h3>
        <p><a target="_blank" href={link_target}><img src={image} {...(priority ? {fetchPriority: "high"} : {})} className="img-polaroid" /></a></p>
        <p>{description_de}</p>
        <p><a className="btn" target="_blank" href={link_target}>{link_text_de ?? "Details anzeigen"} &raquo;</a></p>
    </div>
</>
    }
    return <> 
    <div className="span4">
        <h3>{projectName}</h3>
        <p><a target="_blank" href={link_target}><img src={image} {...(priority ? {fetchPriority: "high"} : {})} className="img-polaroid" /></a></p>
        <p>{description_en}</p>
        <p><a className="btn" target="_blank" href={link_target}>{link_text_en ?? "Show details" } &raquo;</a></p>
    </div>
    </>
}