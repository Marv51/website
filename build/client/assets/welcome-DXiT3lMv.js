import{l as e,p as d,N as l}from"./chunk-D52XG6IA-CG2pnn4M.js";function a({lang:s,projectName:i,image:n,link_target:r,description_en:t,description_de:c,link_text_de:h=null,link_text_en:o=null}){return s==="de"?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"span4",children:[e.jsx("h3",{children:i}),e.jsx("p",{children:e.jsx("a",{target:"_blank",href:r,children:e.jsx("img",{src:n,className:"img-polaroid"})})}),e.jsx("p",{children:c}),e.jsx("p",{children:e.jsxs("a",{className:"btn",target:"_blank",href:r,children:[h??"Details anzeigen"," »"]})})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"span4",children:[e.jsx("h3",{children:i}),e.jsx("p",{children:e.jsx("a",{target:"_blank",href:r,children:e.jsx("img",{src:n,className:"img-polaroid"})})}),e.jsx("p",{children:t}),e.jsx("p",{children:e.jsxs("a",{className:"btn",target:"_blank",href:"{{project.link_target}}",children:[o??"Show details"," »"]})})]})})}function m(){return e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"https://mastodon.social/@marv51",rel:"me",className:"btn btn-small",children:"Mastodon"}),e.jsx("a",{href:"https://github.com/marv51",className:"btn btn-small",children:"GitHub"}),e.jsx("a",{href:"https://stackoverflow.com/users/6409018/marv51",className:"btn btn-small",children:"Stack Overflow"}),e.jsx("a",{href:"https://www.linkedin.com/in/marvinruehe/",className:"btn btn-small",children:"LinkedIn"})]})}function p({lang:s}){let[i,n]=d();const r=i.get("impressum")==="true",t=c=>{r?n({},{preventScrollReset:!0}):n({impressum:"true"},{preventScrollReset:!0}),c.preventDefault()};return s==="en"?e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsxs("footer",{children:[e.jsxs("p",{children:["© Marvin Rühe 2018 - ",new Date().getFullYear()," | ",e.jsx("a",{className:"btn btn-small",id:"show_impressum",href:"#",onClick:t,children:"Imprint & privacy"})]}),e.jsx("div",{className:"btn-toolbar",children:e.jsx("div",{className:"btn-group"})}),e.jsxs("p",{id:"impressum",className:r?"":"hidden_impressum",children:["This is my website, Marvin Rühe, you can reach me at marvin@server-fish.de. I strive to be as careful as possible when it comes to content and websites I link to. However, I can not be held responsible for websites I link to. If you have concerns or find questionable content please contact me. Privacy: I do not record any information about your visit of this website. This website is hosted at GitHub, so they might log some information (Their privacy policy can be found: ",e.jsx("a",{href:"https://help.github.com/en/articles/github-privacy-statement",children:"here"}),"). The source code of this website is available ",e.jsx("a",{href:"https://github.com/Marv51/website",children:" here"}),"."]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("hr",{}),e.jsxs("footer",{children:[e.jsxs("p",{children:["© Marvin Rühe 2018 - ",new Date().getFullYear()," | ",e.jsx("a",{className:"btn btn-small",href:"#",id:"show_impressum",onClick:t,children:"Impressum & Datenschutz"})]}),e.jsx("div",{className:"btn-toolbar",children:e.jsx("div",{className:"btn-group"})}),e.jsxs("p",{id:"impressum",className:r?"":"hidden_impressum",children:["Die ist meine Webseite, Marvin Rühe, man erreicht mich unter marvin (at) server-fish.de. Ich versuche möglichst gründlich bei Inhalten und Links zu sein, bin aber nicht für verlinkte Webseiten verantwortlich. Wenn Ihnen Fehler oder fragwürdige Inhalte auffallen, bitte ich um Nachricht. Zum Thema Datenschutz: Ich 'verfolge' Sie nicht, soll heißen ich zeichne nichts über Ihren Besuch auf dieser Webseite auf. Diese Webseite wird von GitHub gehostet (",e.jsx("a",{href:"https://help.github.com/en/articles/github-privacy-statement",children:"GitHub privacy policy"}),"), der Quellcode ist ",e.jsx("a",{href:"https://github.com/Marv51/website",children:" hier verfügbar"}),"."]})]})]})}function b({lang:s}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"navbar navbar-inverse navbar-fixed-top",children:[e.jsx("div",{className:"navbar-inner",children:e.jsx("div",{className:"container",children:e.jsx("a",{className:"brand",href:"#",children:"Marvin Rühe"})})}),e.jsxs("div",{className:"lang",children:[e.jsx(l,{className:({isActive:i})=>i?"":"not-active",to:"/",children:"en"})," / ",e.jsx(l,{className:({isActive:i})=>i?"":"not-active",to:"/de",children:"de"})]})]}),e.jsxs("div",{className:"container main-content",children:[e.jsx("h2",{children:s==="en"?"Contact":"Kontakt"}),s==="en"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["The best way to reach me is by mail: ",e.jsx("a",{className:"btn btn-small",href:"mailto:marvin+website@server-fish.de",children:"marvin@server-fish.de"})]}),e.jsx("p",{children:"Alternatively:"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Man erreicht mich am besten per Mail: ",e.jsx("a",{className:"btn btn-small",href:"mailto:marvin+website@server-fish.de",children:"marvin@server-fish.de"})]}),e.jsx("p",{children:"Alternativ:"})]}),e.jsx(m,{}),e.jsx("h2",{children:s==="en"?"Projects":"Projekte"}),e.jsxs("div",{className:"row",children:[e.jsx(a,{lang:s,projectName:"GitHub",description_de:"Kleinere Projekte von mir findet man auf GitHub.",description_en:"Smaller projects of mine are on GitHub.",link_text_de:"GitHub Profil",link_text_en:"GitHub profil",link_target:"https://github.com/Marv51",image:"img/github.png"}),e.jsx(a,{lang:s,projectName:"Project-Quick-Open",description_de:"Windows 10 App um häufig benutzte Ordner schnell wiederzufinden und zu öffnen.",description_en:"Windows 10 app to find and open frequently opened projects.",link_target:"https://www.microsoft.com/store/apps/9N2J8WKZ7PC2",image:"img/projectOpen.png"}),e.jsx(a,{lang:s,projectName:"SWR3-Radio App",description_de:"Die einfachste Art unter Windows 8.1 und 10, SWR3 als Webradio zu hören.",description_en:"The easiest way to listen to the local German radio station SWR3",link_target:"https://apps.microsoft.com/windows/app/swr3-webradio/cf3926a9-8b31-41b2-9cc2-5213eef63e8f",image:"img/screenshot.png"}),e.jsx(a,{lang:s,projectName:"Telani",description_de:"Windows App für Brandschutzsachverständige: Brandmatrixen einfach visuell erstellen.",description_en:"Windows app for fire safety experts: Create building protection concepts visually with ease.",link_text_de:"Telani Webseite",link_text_en:"Telani website",link_target:"https://telani.net",image:"img/telani.png"})]}),e.jsx(p,{lang:s})]})]})}export{b as W};
