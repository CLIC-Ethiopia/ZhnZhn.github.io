"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[736],{717:(t,e,n)=>{n.r(e),n.d(e,{default:()=>L});var i=n(9679),r=n(5893);const s=({points:t=[],height:e,margin:n,color:i,style:s={}})=>{const l=t.map((t=>[t.x,t.y])).reduce(((t,e)=>t.concat(e))),o=[t[t.length-1].x,e-n,n,e-n,n,t[0].y],a=l.concat(o),h={stroke:i||s.stroke||"slategray",strokeWidth:s.strokeWidth||"1",strokeLinejoin:s.strokeLinejoin||"round",strokeLinecap:s.strokeLinecap||"round",fill:"none"},c={stroke:s.stroke||"none",strokeWidth:"0",fillOpacity:s.fillOpacity||".1",fill:s.fill||i||"slategray"};return(0,r.jsxs)("g",{children:[(0,r.jsx)("polyline",{points:a.join(" "),style:c}),(0,r.jsx)("polyline",{points:l.join(" "),style:h})]})},l=(t,e)=>{if(t.length<2||0===e)return 0;const n=t[e-1].y-t[e].y;return 0===n?0:n>0?1:-1},o={"-1":"red",0:"black",1:"green"},a={fill:"slategray"},h=Math.ceil,c=Math.max,y=({points:t=[],height:e,style:n=a,barWidth:i,pointIndex:s=-1,barStrokeColors:y=o})=>{const{strokeWidth:x=0}=n,g=i||((t,e)=>t&&t.length>1?h(c(0,t[1].x-t[0].x-parseInt(e,10))):0)(t,x);return(0,r.jsx)("g",{children:t.map(((i,o)=>{const{x:a,y:p}=i,d=o===s?{...n,fill:y[l(t,s)]}:n;return(0,r.jsx)("rect",{x:h(a-x*o),y:h(p),width:h(g),height:h(c(0,e-p)),style:d},o)}))})};Math.sign||(Math.sign=function(t){return t>0?1:-1});const x=function(t){return t.length<2?0:Math.sign(t[t.length-2].y-t[t.length-1].y)},g=({points:t,size:e=2,style:n,spotColors:i=o})=>{const s=(0,r.jsx)("circle",{cx:t[0].x,cy:t[0].y,r:e,style:n}),l=(0,r.jsx)("circle",{cx:t[t.length-1].x,cy:t[t.length-1].y,r:e,style:n||{fill:i[x(t)]}});return(0,r.jsxs)("g",{children:[n&&s,l]})},p=({points:t,size:e=2,style:n,spotColors:i=o,pointIndex:s})=>{const a=t[s],{x:h,y:c}=a||{};return null==h||null==c?null:(0,r.jsx)("g",{children:(0,r.jsx)("circle",{cx:h,cy:c,r:e,style:n||{fill:i[l(t,s)]}})})},d=t=>Math.max.apply(Math,t),m=t=>Math.min.apply(Math,t),u=t=>t.reduce(((t,e)=>t+e))/t.length,f={max:d,min:m,mean:u,avg:u,median:t=>t.sort(((t,e)=>t-e))[Math.floor(t.length/2)]},k={stroke:"red",strokeOpacity:.75,strokeDasharray:"2, 2"},j=({points:t,margin:e,type:n="mean",style:i=k,value:s})=>{const l=t.map((t=>t.y)),o="custom"===n?s:f[n](l);return(0,r.jsx)("line",{x1:t[0].x,y1:o+e,x2:t[t.length-1].x,y2:o+e,style:i})},w=({title:t,...e})=>(0,r.jsx)("text",{...e,children:t}),M=({data:t,height:e=0,dy:n=3,color:i="#f44336",fontSize:s=14})=>{const l=m(t),o=e-n;return(0,r.jsx)(w,{title:l,x:0,y:o,stroke:"none",fill:i,fontSize:s})},v=({data:t,dy:e=4,color:n="#8bc34a",fontSize:i=14})=>{const s=d(t),l=i-e;return(0,r.jsx)(w,{title:s,x:0,y:l,stroke:"none",fill:n,fontSize:i})},b=Array.isArray,L={SparkView:(0,i.memo)((({data:t,limit:e,style:n,preserveAspectRatio:s="none",width:l=240,height:o=60,svgWidth:a,svgHeight:h,margin:c=2,min:y,max:x,children:g})=>{if(!b(t)||0===t.length)return null;const p=(({data:t,limit:e,width:n=1,height:i=1,margin:r=0,max:s=d(t),min:l=m(t)})=>{const o=t.length;e&&e<o&&(t=t.slice(o-e));const a=(i-2*r)/(s-l||2),h=(n-2*r)/((e||o)-(o>1?1:0));return t.map(((t,e)=>({x:e*h+r,y:(s===l?1:s-t)*a+r})))})({data:t,limit:e,width:l,height:o,margin:c,max:x,min:y}),u={style:n,preserveAspectRatio:s,viewBox:"0 0 "+l+" "+o,width:a>0?a:void 0,height:h>0?h:void 0};return(0,r.jsx)("svg",{...u,children:i.Children.map(g,(e=>(0,i.cloneElement)(e,{data:t,points:p,width:l,height:o,margin:c})))})})),Line:s,Bars:y,Spots:g,Spot:p,ReferenceLine:j,MinLabel:M,MaxLabel:v}}}]);