---
layout: default
title: "Marvin R&uuml;hes Webseite"
lang: de
---
Kontakt
-------
Man erreicht mich am besten per Mail: [marvin@server-fish.de](mailto:marvin+website@server-fish.de){: .btn .btn-small}

Alternativ:

{% include profiles.md %}

Projekte
----------

<div class="row">
{% for project in site.projects %}
<div class="span4">
    <h3>{{project.name}}</h3>
    <p><img src="{{project.image}}" class="img-polaroid" /></p>
    <p>{{project.description_de}}</p>
    <p><a class="btn" target="_blank" href="{{project.link_target}}">{{project.link_text_de | default: "Details anzeigen"}} &raquo;</a></p>
</div>
{% endfor %}
</div>