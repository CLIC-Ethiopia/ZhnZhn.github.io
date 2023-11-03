"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[30],{8121:(e,t,r)=>{r.r(t),r.d(t,{default:()=>fe});var s=r(1768),n=r(4887),o=r(2564),i=r(1926),l=r(795);let a;const c=e=>{const t=parseInt((""+e.updated).trim().slice(0,4),10);return"number"!=typeof(r=t)||r-r!=0||(a||(a=(new Date).getUTCFullYear()))-t<3;var r},d=e=>e.active,p=(e,t)=>e?"SDN"===t?d:c:void 0;var u=r(7894),g=r(752),m=r(9902);const f=(0,s.kr)();var x=r(8190),h=r(5255),y=r(5893);const v={width:240,paddingBottom:8},C=e=>{let{is:t,toggleMenu:r,toggleFilter:s}=e;return(0,y.jsx)(x.Z,{isShow:t,className:"popup-menu charts__menu-more",style:v,onClose:r,children:(0,y.jsx)(h.Z,{caption:"Filter Not Active Topic",onToggle:s})})};var j=r(7815),$=r(2038);const k={dialogConf:!0,dialogType:"DialogStatN",dialogProps:{chartsType:"t2ae",dfProps:{}}},b=Object.assign,w=e=>{const t=e.text||"";return{menuTitle:t.slice(0,27),contFullCaption:`${e.sP}: ${r=t,r.length>35?r.slice(0,35)+"...":r}`};var r},I=e=>()=>{const{rootUrl:t,id:r,proxy:s,bT:n,lT:o,dU:i,noTime:l,dS:a}=e,c=(e=>{let{rootDimUrl:t,rootUrl:r,id:s,proxy:n="",dfDimQuery:o=""}=e;return`${n}${t||r}/${s}${o}`})(e),d=b({},k,{type:`${n}_${r}`,...w(e)});b(d.dialogProps,{loadId:o,descrUrl:i,dataSource:a,dfProps:{dimUrl:c,baseMeta:t,dfId:r,proxy:s,noTime:l}}),$.Ck.showDialog(`${n}_${r}`,n,d)},T=Array.isArray,P=(e,t)=>{const r=[];return e.forEach((e=>{e.id!==t&&(e.text=e.description,(e.hasSubjects||(e=>{let{tables:t}=e;return T(t)&&0===t.length})(e))&&(e.type="l"),r.push(e))})),r},O=(e,t)=>{const r=e[0];return 0!==(r.tables||[]).length?r.tables.map((e=>(e.text=`${e.id}: ${e.text}, ${e.firstPeriod||""}-${e.latestPeriod||""}`,e))):0!==(r.subjects||[]).length?P(r.subjects,t):P(e,t)},S=e=>(e.forEach((e=>{"t"===e.type&&(e.text=`${e.id}: ${e.text}`)})),e),Z=Array.isArray,M=(e,t)=>e.text<t.text?-1:e.text>t.text?1:0,N={SDN:O,SIR:S},A=function(e,t,r){void 0===e&&(e="");const{rootUrl:s,dfTi:n="",lT:o}=t;return fetch(`${e}${s}/${r}${n}`,{cache:"default"}).then((e=>e.json())).then((e=>{if(Z(e)){const t=N[o];t&&(e=t(e,r)),e.sort(M)}return e}))};var F=r(554);const D="menu-item",U={fontWeight:"bold",fontSize:"16px"},_={color:"#f44336",paddingLeft:12},R={position:"relative",color:"#607d8b",padding:"8px 0 4px 32px",cursor:"pointer"},Y={position:"absolute",top:8,left:16},X=`${D} ${n.gX}`,L={padding:8,cursor:"pointer"},E={...L,paddingLeft:12},J=e=>{let{innerRef:t,title:r,onClick:s}=e;const n=(0,F.Z)(s);return(0,y.jsxs)("div",{ref:t,className:D,style:R,role:"menuitem",tabIndex:"0",onClick:s,onKeyDown:n,children:[r,(0,y.jsx)("span",{style:Y,children:"<"})]})};var B=r(2554);const K=e=>{let{innerRef:t,item:r,onClick:s}=e;const{text:n,type:o}=r,[i,l]=(e=>"l"===e?[D,E]:[X,L])(o),a=(0,F.Z)(s,[s]);return(0,y.jsx)("div",{ref:t,className:i,style:l,tabIndex:"0",role:"menuitem",onClick:s,onKeyDown:a,children:n})},q=[],z=(0,s.X$)((e=>{let{refFirstItem:t,model:r=q,fOnClickItem:n}=e;const o=(e=>{const t=(0,s.qp)(f);return(0,s.Ye)((()=>t?e.filter(t):e),[t,e])})(r);return(0,y.jsx)("div",{children:o.map(((e,r)=>(0,y.jsx)(K,{innerRef:0===r?t:void 0,item:e,onClick:n(e)},e.id)))})})),Q=e=>{let{errMsg:t}=e;return t?(0,y.jsx)("div",{style:_,children:t}):null},W=e=>{let{refFirstItem:t,model:r,fOnClickItem:s,errMsg:n}=e;return(0,y.jsxs)(y.Fragment,{children:[!(r||n)&&(0,y.jsx)(B.Z,{}),(0,y.jsx)(z,{refFirstItem:t,model:r,fOnClickItem:s}),(0,y.jsx)(Q,{errMsg:n})]})},G=Array.isArray,H=(e,t,r,n,o,i,l)=>{const{text:a,id:c,type:d}=l,p=((e,t,r)=>"SDN"===e.lT?r||t:t?`${t}/${r}`:r)(r,t,c);return"l"===d?(0,s.YO)(o,p,a,n):i({id:p,...r,text:a,proxy:e})},V=e=>{let{style:t,store:r,title:n,id:o="",dfProps:i={},pageNumber:l,pageCurrent:a,onClickPrev:c,onClickNext:d,fOnClickItem:p,loadItems:u}=e;const g=(0,s.sO)(),m=(0,s.sO)(),[f,x]=(0,s.eJ)({}),{model:h,errMsg:v}=f,C=((e,t)=>e.getProxy(t.lT))(r,i),j=(0,s.I4)((0,s.YO)(H,C,o,i,l,d,p),[C]),$=0!==l&&n&&c,k=l===a&&($||!$&&h);return(0,s.d4)((()=>(n&&u(C,i,o).then((e=>{const t=G(e)?{model:e}:{errMsg:"Response is not array"};x(t)})).catch((e=>x({errMsg:e.message}))),()=>{clearTimeout((0,s.eA)(m)),(0,s.oe)(g,null)})),[]),(0,s.d4)((()=>{k&&(clearTimeout((0,s.eA)(m)),(0,s.oe)(m,setTimeout((()=>{(0,s.Bd)(g)}),1e3)))}),[k]),(0,y.jsxs)("div",{style:{...U,...t},children:[$&&(0,y.jsx)(J,{innerRef:g,title:n,onClick:(0,s.YO)(c,l)}),(0,y.jsx)(W,{refFirstItem:$?void 0:g,model:h,fOnClickItem:j,errMsg:v})]})};var ee=r(9679);const te=e=>{let{pages:t,onClickPrev:r,...s}=e;return t.map(((e,t)=>(0,ee.createElement)(V,{...s,...e,key:e.id,pageNumber:t,onClickPrev:0===t?void 0:r})))},re=300,se={width:re,overflow:"hidden"},ne={width:1500,overflowX:"hidden",display:"flex",flexFlow:"row nowrap",alignItems:"flex-start",transition:"all 750ms ease-out"},oe={width:re},ie=e=>{const t=e.style.transform.trim().slice(11).replace("px","").replace(")","");return parseInt(t,10)},le={pageCurrent:0,pages:[{id:"",title:"Menu"}]},ae=e=>{let{dfProps:t,store:r}=e;const n=(0,s.sO)(),o=(0,s.sO)(0),[{pageCurrent:i,pages:l},a]=(0,s.eJ)(le),c=(0,j.Z)((e=>{a((t=>{const{pageCurrent:r}=t;return 0===r||r!==e||(0,s.oe)(o,-1),{...t,pageCurrent:e-1}}))})),d=(0,j.Z)(((e,t,r)=>{a((n=>{const{pageCurrent:i,pages:l}=n;if(r!==i)return n;const a=r+1,{id:c}=l[a]||{};return e&&c!==e&&(l.splice(a),l.push({id:e,title:t})),(0,s.oe)(o,1),{pages:l,pageCurrent:r+1}}))}),[c]),p=((e,t)=>{const r=(0,s.eA)(e),n=(0,s.eA)(t),o=0!==n&&r?((0,s.oe)(t,0),ie(r)-1*n*re):0===n&&r?ie(r):0;return{...ne,transform:`translateX(${o}px)`}})(n,o);return(0,y.jsx)("div",{style:se,children:(0,y.jsx)("div",{ref:n,style:p,children:(0,y.jsx)(te,{pages:l,pageCurrent:i,style:oe,store:r,dfProps:t,onClickPrev:c,onClickNext:d,loadItems:A,fOnClickItem:I})})})},ce=(0,n.vJ)(),de={paddingRight:0},pe={paddingLeft:6},ue={position:"relative",top:-4},ge={position:"relative",top:-3,paddingLeft:4},me={height:"92%"},fe=(0,s.X$)((e=>{const{isInitShow:t,caption:r,browserType:n,showAction:a}=e,[c,d,x]=(0,o.Z)(t),[h,v]=(0,i.Z)(),[j,$]=(0,i.Z)(),k=(0,s.Ye)((()=>p(j,e.dfProps.lT)),[j]);return(0,l.Z)(((e,t)=>{e===a&&t===n&&d()})),(0,y.jsx)(f.Provider,{value:k,children:(0,y.jsxs)(u.Z,{isShow:c,style:de,children:[(0,y.jsx)(C,{is:h,toggleMenu:v,toggleFilter:$}),(0,y.jsx)(g.Z,{style:pe,caption:r,captionStyle:ge,svgMoreStyle:ue,onMore:v,onClose:x}),(0,y.jsx)(m.Z,{className:ce,style:me,children:(0,y.jsx)(ae,{...e})})]})})}))}}]);