"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[736],{717:(t,e,n)=>{n.r(e),n.d(e,{default:()=>C});var i=n(1768),l=n(5893);const r=t=>{let{points:e=[],height:n,margin:i,color:r,style:s={}}=t;const o=e.map((t=>[t.x,t.y])).reduce(((t,e)=>t.concat(e))),a=[e[e.length-1].x,n-i,i,n-i,i,e[0].y],h=o.concat(a),c={stroke:r||s.stroke||"slategray",strokeWidth:s.strokeWidth||"1",strokeLinejoin:s.strokeLinejoin||"round",strokeLinecap:s.strokeLinecap||"round",fill:"none"},y={stroke:s.stroke||"none",strokeWidth:"0",fillOpacity:s.fillOpacity||".1",fill:s.fill||r||"slategray"};return(0,l.jsxs)("g",{children:[(0,l.jsx)("polyline",{points:h.join(" "),style:y}),(0,l.jsx)("polyline",{points:o.join(" "),style:c})]})},s=(t,e)=>{if(t.length<2||0===e)return 0;const n=t[e-1].y-t[e].y;return 0===n?0:n>0?1:-1},o={"-1":"red",0:"black",1:"green"},a={fill:"slategray"},h=Math.ceil,c=Math.max,y=t=>{let{points:e=[],height:n,style:i=a,barWidth:r,pointIndex:y=-1,barStrokeColors:x=o}=t;const{strokeWidth:g=0}=i,p=r||((t,e)=>t&&t.length>1?h(c(0,t[1].x-t[0].x-parseInt(e,10))):0)(e,g);return(0,l.jsx)("g",{children:e.map(((t,r)=>{const{x:o,y:a}=t,d=r===y?{...i,fill:x[s(e,y)]}:i;return(0,l.jsx)("rect",{x:h(o-g*r),y:h(a),width:h(p),height:h(c(0,n-a)),style:d},r)}))})};Math.sign||(Math.sign=function(t){return t>0?1:-1});const x=function(t){return t.length<2?0:Math.sign(t[t.length-2].y-t[t.length-1].y)},g=t=>{let{points:e,size:n=2,style:i,spotColors:r=o}=t;const s=(0,l.jsx)("circle",{cx:e[0].x,cy:e[0].y,r:n,style:i}),a=(0,l.jsx)("circle",{cx:e[e.length-1].x,cy:e[e.length-1].y,r:n,style:i||{fill:r[x(e)]}});return(0,l.jsxs)("g",{children:[i&&s,a]})},p=t=>{let{points:e,size:n=2,style:i,spotColors:r=o,pointIndex:a}=t;const h=e[a],{x:c,y}=h||{};return null==c||null==y?null:(0,l.jsx)("g",{children:(0,l.jsx)("circle",{cx:c,cy:y,r:n,style:i||{fill:r[s(e,a)]}})})},d=t=>Math.max.apply(Math,t),u=t=>Math.min.apply(Math,t),m=t=>t.reduce(((t,e)=>t+e))/t.length,f={max:d,min:u,mean:m,avg:m,median:t=>t.sort(((t,e)=>t-e))[Math.floor(t.length/2)]},k={stroke:"red",strokeOpacity:.75,strokeDasharray:"2, 2"},j=t=>{let{points:e,margin:n,type:i="mean",style:r=k,value:s}=t;const o=e.map((t=>t.y)),a="custom"===i?s:f[i](o);return(0,l.jsx)("line",{x1:e[0].x,y1:a+n,x2:e[e.length-1].x,y2:a+n,style:r})},w=t=>{let{title:e,...n}=t;return(0,l.jsx)("text",{...n,children:e})},M=t=>{let{data:e,height:n=0,dy:i=3,color:r="#f44336",fontSize:s=14}=t;const o=u(e),a=n-i;return(0,l.jsx)(w,{title:o,x:0,y:a,stroke:"none",fill:r,fontSize:s})},v=t=>{let{data:e,dy:n=4,color:i="#8bc34a",fontSize:r=14}=t;const s=d(e),o=r-n;return(0,l.jsx)(w,{title:s,x:0,y:o,stroke:"none",fill:i,fontSize:r})},b=Array.isArray,L=240,S=60,z="none",W=2,C={SparkView:(0,i.X$)((t=>{let{data:e,limit:n,style:r,preserveAspectRatio:s=z,width:o=L,height:a=S,svgWidth:h,svgHeight:c,margin:y=W,min:x,max:g,children:p}=t;if(!b(e)||0===e.length)return null;const m=(t=>{let{data:e,limit:n,width:i=1,height:l=1,margin:r=0,max:s=d(e),min:o=u(e)}=t;const a=e.length;n&&n<a&&(e=e.slice(a-n));const h=(l-2*r)/(s-o||2),c=(i-2*r)/((n||a)-(a>1?1:0));return e.map(((t,e)=>({x:e*c+r,y:(s===o?1:s-t)*h+r})))})({data:e,limit:n,width:o,height:a,margin:y,max:g,min:x}),f={style:r,preserveAspectRatio:s,viewBox:`0 0 ${o} ${a}`,width:h>0?h:void 0,height:c>0?c:void 0};return(0,l.jsx)("svg",{...f,children:i.hu.map(p,(t=>(0,i.Tm)(t,{data:e,points:m,width:o,height:a,margin:y})))})})),Line:r,Bars:y,Spots:g,Spot:p,ReferenceLine:j,MinLabel:M,MaxLabel:v}}}]);