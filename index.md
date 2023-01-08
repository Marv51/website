---
layout: default
title: "Marvin R&uuml;he's Website"
lang: en
---
Contact
-------

The best way to reach me is by mail: [marvin@server-fish.de](mailto:marvin+website@server-fish.de){: .btn .btn-small}

Alternatively:

{% include profiles.md %}

Projects
---------

<div class="row">
{% for project in site.projects %}
<div class="span4">
    <h3>{{project.name}}</h3>
    <p><a target="_blank" href="{{project.link_target}}"><img src="{{project.image}}" class="img-polaroid" /></a></p>
    <p>{{project.description_en}}</p>
    <p><a class="btn" target="_blank" href="{{project.link_target}}">{{project.link_text_en | default: "Show details" }} &raquo;</a></p>
</div>
{% endfor %}
</div>