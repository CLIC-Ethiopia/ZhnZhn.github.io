(()=>{"use strict";var e,r,t,a,o,n={},d={};function f(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={exports:{}};return n[e].call(t.exports,t,t.exports,f),t.exports}f.m=n,e=[],f.O=(r,t,a,o)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,a,o]=e[l],d=!0,c=0;c<t.length;c++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](t[c])))?t.splice(c--,1):(d=!1,o<n&&(n=o));if(d){e.splice(l--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,a,o]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var d=2&a&&e;"object"==typeof d&&!~r.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,f.d(o,n),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>({10:"config-dialog",30:"browser-slider",57:"alpha-dialogs",138:"stat-dialogs",146:"general-dialogs",256:"usa-economy-dialogs",341:"watch-browser",437:"watch-dialogs",567:"leaflet",673:"un-dialogs",736:"sparklines",861:"quandl-dialogs"}[e]+"_"+{10:"5720f96edf3addc31464",30:"3e5d743bc1fd9fa756e7",57:"965a393a2ae7852930cd",138:"3382c4ff9b48576b8e48",146:"8701c12eebd2a39757d1",256:"0be0b2a0e50630ba010a",341:"155b781f6ef21d289deb",437:"b6c1513f3778a3e90737",567:"90838d6bdd43c29a53d7",673:"248d18ba80c0c2f36476",736:"b8c18bf5601806d2c0e6",861:"d92c3794c4845e742f4b"}[e]+".js"),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="web-app-erc:",f.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var d,c;if(void 0!==t)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var u=i[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+t){d=u;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",o+t),d.src=e),a[e]=[r];var s=(r,t)=>{d.onerror=d.onload=null,clearTimeout(b);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),r)return r(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),c&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="app/",(()=>{var e={666:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(666!=r){var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=f.p+f.u(r),d=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+r,r)}else e[r]=0},f.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[n,d,c]=t,i=0;if(n.some((r=>0!==e[r]))){for(a in d)f.o(d,a)&&(f.m[a]=d[a]);if(c)var l=c(f)}for(r&&r(t);i<n.length;i++)o=n[i],f.o(e,o)&&e[o]&&e[o][0](),e[n[i]]=0;return f.O(l)},t=self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();