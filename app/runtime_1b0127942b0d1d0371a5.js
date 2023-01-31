(()=>{"use strict";var e,r,t,a,o,n={},l={};function d(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return n[e].call(t.exports,t,t.exports,d),t.exports}d.m=n,e=[],d.O=(r,t,a,o)=>{if(!t){var n=1/0;for(f=0;f<e.length;f++){for(var[t,a,o]=e[f],l=!0,i=0;i<t.length;i++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(l=!1,o<n&&(n=o));if(l){e.splice(f--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[t,a,o]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var l=2&a&&e;"object"==typeof l&&!~r.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(o,n),o},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>({10:"config-dialog",30:"browser-slider",57:"alpha-dialogs",138:"stat-dialogs",146:"general-dialogs",256:"usa-economy-dialogs",341:"watch-browser",437:"watch-dialogs",567:"leaflet",673:"un-dialogs",736:"sparklines",861:"quandl-dialogs",940:"general-modal-dialogs"}[e]+"_"+{10:"31af61597271700c3bfd",30:"bb5aa1d6c3a3f7c98428",57:"cb07b5f3c7e2709c290c",138:"f6c328139240da9c3c5f",146:"4d26c34ba156ca83461a",256:"72856a76060a596959f7",341:"6b72985c8a9d2bb8c1ca",437:"814753c5a84f1d223f50",567:"90838d6bdd43c29a53d7",673:"eec26fc3669fe84d4d9b",736:"b8c18bf5601806d2c0e6",861:"d5bcf2ddcc7cef19924c",940:"76e03723f99b80b37ba7"}[e]+".js"),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="web-app-erc:",d.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var l,i;if(void 0!==t)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+t){l=s;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.setAttribute("data-webpack",o+t),l.src=e),a[e]=[r];var u=(r,t)=>{l.onerror=l.onload=null,clearTimeout(p);var o=a[e];if(delete a[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),i&&document.head.appendChild(l)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="app/",(()=>{var e={666:0};d.f.j=(r,t)=>{var a=d.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(666!=r){var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=d.p+d.u(r),l=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}}),"chunk-"+r,r)}else e[r]=0},d.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[n,l,i]=t,c=0;if(n.some((r=>0!==e[r]))){for(a in l)d.o(l,a)&&(d.m[a]=l[a]);if(i)var f=i(d)}for(r&&r(t);c<n.length;c++)o=n[c],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(f)},t=self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();