if(!self.define){let s,e={};const o=(o,r)=>(o=new URL(o+".js",r).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(r,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let n={};const u=s=>o(s,t),l={module:{uri:t},exports:n,require:u};e[t]=Promise.all(r.map((s=>l[s]||u(s)))).then((s=>(i(...s),n)))}}define(["./workbox-4f586afe"],(function(s){"use strict";s.setCacheNameDetails({prefix:"plantilla"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/Notas_curso_IA/css/app.e6048f19.css",revision:null},{url:"/Notas_curso_IA/css/chunk-vendors.832cdaa5.css",revision:null},{url:"/Notas_curso_IA/img/agente.228988ea.svg",revision:null},{url:"/Notas_curso_IA/img/automata_finito.9d45b857.svg",revision:null},{url:"/Notas_curso_IA/img/grafo1.08b21016.svg",revision:null},{url:"/Notas_curso_IA/index.html",revision:"86d2401dd0b2e233ca9e63337d7db97f"},{url:"/Notas_curso_IA/js/about.7a242c7b.js",revision:null},{url:"/Notas_curso_IA/js/app.3c259d89.js",revision:null},{url:"/Notas_curso_IA/manifest.json",revision:"d953d50b0a763f2883fefdbad8e197e9"},{url:"/Notas_curso_IA/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map