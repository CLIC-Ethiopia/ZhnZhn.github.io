(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[138],{9402:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ve});var s=o(9679),n=o(9468),r=o(4706),i=o(2554),a=o(8804),c=o(2812);const u=e=>"is"+e+"Select";var l=o(5893);const d=(e,t,{isShowLabels:o,isRow:s,fSelect:n})=>{const{id:r,caption:i,options:a,placeholder:d}=e,p=!s[u(r)];return(0,l.jsx)(c.Z.ShowHide,{isShow:p,children:(0,l.jsx)(c.Z.RowInputSelect,{isShowLabels:o,caption:i,placeholder:d,options:a,onSelect:n(t)})},r)};var p=o(1926),h=o(7753);const m=()=>{const e=(0,s.useRef)([]),t=(0,s.useCallback)((t=>o=>{e.current[t]=o?{...o}:void 0}),[]);return[e,t]},f=(e,t,o)=>({caption:e,title:t,onClick:o}),g=(e,t,o,n)=>{const[r,i]=(0,p.Z)(!0),a=(0,s.useMemo)((()=>[f("L","Click to toggle input labels",e),f("T","Toggle Inputs",t),f("O","Chart Options",o),f("A","About Datasource",n)]),[]);return[(0,s.useMemo)((()=>(0,l.jsx)(c.Z.Toolbar,{isShow:r,buttons:a})),[r]),i]},C="row__pane-topic not-selected",w=(e,t,o=!0)=>({cn:C,onClick:t,name:e,isClose:o}),S=(e,t)=>(0,s.useMemo)((()=>({titleCl:C,pageWidth:175,maxPages:1,p0:[w("Toggle ToolBar",e),w("About Datasource",t)]})),[]),b=e=>{const[t,o]=(0,s.useState)(e);return[t,(0,s.useCallback)((()=>o((e=>!e))),[]),(0,s.useCallback)((()=>o(!1)),[])]},y=()=>{const e=(0,s.useRef)({}),[t,o,n]=b(!1),r=(0,s.useCallback)((t=>{e.current[t]=!e.current[t]}),[]);return[(0,s.useMemo)((()=>(0,l.jsx)(c.Z.ModalOptions,{isShow:t,toggleOption:r,onClose:n})),[t]),e,o]},v=e=>{const[t,o]=(0,s.useState)({isShowChart:!0,isShowDate:!1}),n=(0,s.useCallback)((e=>{o((t=>(t[e]=!t[e],{...t})))}),[]);return(0,s.useEffect)((()=>{const t={};let s=!1;e.forEach((e=>{e.dfItem&&(s=!0,t[u(e.id)]=!0)})),o((e=>s?{...e,...t}:e))}),[e]),[t,o,n]},O=(e=[])=>{const t=(0,s.useRef)(e),o=(0,s.useCallback)((e=>{t.current.push(e)}),[]),n=(0,s.useCallback)((e=>{t.current=t.current.filter((t=>t!==e))}),[]);return[t,o,n]},I=e=>{const[t,o,n]=b(!1),[r,i,a]=v(e),{isShowChart:d,isShowDate:p}=r,[h,m,f]=O();return[(0,s.useMemo)((()=>(0,l.jsx)(c.Z.ModalToggle,{isShow:t,selectProps:e,isShowChart:d,isShowDate:p,crIsId:u,onToggle:a,onCheckCaption:m,onUnCheckCaption:f,onClose:n})),[t,e,d,p]),h,r,i,o]};const T=class{constructor(e=5e3){this.mls=e,this.isLoading=!1}start(e){return!this.isLoading&&(this.loadingUrl=e,this.isLoading=!0,this.timeoutId=setTimeout((()=>{e===this.loadingUrl&&(this.isLoading=!1)}),this.mls),!0)}stop(){this.isLoading=!1,clearTimeout(this.timeoutId)}},D="time",x="Geo Entity",M=(e,t,o)=>({caption:e,slice:{[t]:o}}),k=e=>e?e.charAt(0).toUpperCase()+e.substring(1):"",F=Object.keys,L=e=>(e||"").split("_").map(k).join(" "),j=(e,t)=>{const{label:o}=e||{};return F(o||{}).map((e=>({caption:o[e],value:e,id:t})))},E=e=>{const t=[null],o=[];return F(e).forEach((s=>{if(s!==D){const n=e[s],{label:r,category:i}=n||{},a={c:L(r),v:s,options:j(i,s)};"s_adj"===s?(a.c="Adjust",a.options=(e=>e.options.map((e=>(e.sc=e.value,e.caption=e.caption+" ("+e.value+")",e))))(a),o.push(a)):"geo"===s?(a.c=x,t[0]=a):t.push(a)}})),{dims:t.filter(Boolean).concat(o),timeId:D}},Z=({values:e,id:t})=>(e||[]).map((e=>M(e.text,t,e.id))),q=e=>{const t=[];let o;return e.forEach((e=>{const{time:s,text:n="",id:r}=e;s?(o=r,t.dateOptions=e.values.map((({id:e,text:t})=>({caption:t,value:e}))).reverse()):t.push({c:k(n),v:r,options:Z(e)})})),{mapFrequency:"Y",dims:t,timeId:o}},A=Array.isArray,P={month:"M",quarter:"K"},R=["Tid","Year","Month","Vuosi","Vuosineljännes"],_=(e,t)=>!A(e)||!A(t)||e.length!==t.length,U=({values:e,valueTexts:t,code:o})=>{if(!_(e,t))return t.map(((t,s)=>M(t,o,e[s])))},B=e=>{const t=[];let o,s="Y";return e.forEach((e=>{const{code:n,time:r}=e,i=e.text||"";((e,t)=>!e&&-1===R.indexOf(t)&&-1===(t+"").indexOf("TLIST("))(r,n)?t.push({c:k(i),v:n,options:U(e)}):(o=n,s=P[i.toLowerCase()],t.dateOptions=(({values:e,valueTexts:t})=>{if(_(e,t))return;const o=[];return t.forEach(((t,s)=>{o.push({caption:t,value:e[s]})})),o.reverse()})(e))})),{mapFrequency:s,dims:t,timeId:o}},Q=(e,t)=>fetch(e,t).then((e=>{const{status:t,statusText:o}=e;if(t>=200&&t<400)return e.json();if(403===t)throw Error("HTTP Code 403: Forbitten.\nMaybe, require API key.");throw Error("HTTP Code: "+t+" "+o)})),W=Array.isArray,Y=e=>{const t=[],{variables:o,dimension:s,source:n}=e;return((e,t)=>e&&"Eurostat"===t)(s,n)?E(s):W(o)?(r=o[0])&&r.id&&r.text&&!W(r.valueTexts)&&W(r.values)?q(o):B(o):{dims:t,timeId:undefined,mapFrequency:"Y"};var r},H=e=>Q(e).then(Y),N=e=>"M"===e?"2019M01":"S"===e?"2019S1":"Q"===e?"2019Q1":"2019",V=({dfNonTime:e,mapFrequency:t,dfId:o},s)=>{const n=[s,e?"":"time="+N(t)].filter(Boolean).join("&");return"https://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/"+o+(n?"?"+n:"")},G={DF:({proxy:e="",baseMeta:t,dfId:o})=>""+e+t+"/"+o,EU_STAT:V},K=e=>e.dimUrl||(e=>(G[e.loadId]||G.DF)(e))(e),z=(e,t,o)=>({id:e,caption:t,options:o}),J=(e,t)=>{const o=t?((e,t)=>{const o=Object.create(null);return e.forEach((e=>{o[e.v]=e})),t.map((({v:e,c:t})=>z(e,t,o[e].options)))})(e,t):(e=>e.map((({c:e,v:t,options:o})=>z(t,e,o))))(e);return o.dateOptions=e.dateOptions,(e=>{e.forEach(((e,t)=>{const{options:o}=e;if(1===o.length){const t=o[0];e.placeholder=t.caption,e.dfItem=t,e.isRow=!1}}))})(o),o},X=(e,t)=>{const o=K(t),s=t.dims;return e.start(o),H(o).then((({dims:e,mapFrequency:t,timeId:o})=>{if(!(e=>{const t=e.length;let o=0;for(;o<t&&e[o].options;o++);return o===t})(e))throw{errMsg:"Loaded dims without options"};return{timeId:o,mapFrequency:t,configs:J(e,s)}}))},$=e=>(e.options||[]).length,ee=(e,t)=>{const{dfQ:o}=t,s=V(t,o[0]),n=V(t,o[1]);let r=[];return e.start(s),H(s).then((({dims:e})=>{r=r.concat(e)})).then((()=>{return e=5e3,new Promise((t=>{setTimeout((()=>t()),e)}));var e})).then((()=>(e.stop(),e.start(n),H(n)))).then((({dims:e,mapFrequency:t,timeId:o})=>(r=(e=>{const t=Object.create(null);return e.forEach((e=>{const o=e.v,s=t[o];(!s||$(s)<$(e))&&(t[o]=e)})),Object.keys(t).map((e=>t[e]))})(r.concat(e)),{timeId:"time",mapFrequency:t,configs:J(r)})))},te=Array.isArray,oe=new T,se=({errMsg:e,message:t})=>({errMsg:e||t}),ne=e=>{if(oe.isLoading)return Promise.resolve({errMsg:"Another dialog are still loading"});{const t=(e=>{const{dfQ:t}=e;return te(t)?2===t.length?ee:void 0:X})(e);return t?t(oe,e).catch(se).finally((()=>oe.stop())):Promise.resolve({errMsg:"Incorrect dialog configuration"})}},re=e=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=e}),[e]),t.current},{crOptions:ie}=r.Z,{crDateConfig:ae}=c.Z,ce=(e,t)=>({caption:e,value:t}),ue=({dims:e,proxy:t,baseMeta:o,loadId:s,mapFrequency:n,dfProps:r},i)=>{ne({dims:e,proxy:t,baseMeta:o,loadId:s,mapFrequency:n,...r}).then(i).catch((e=>{i({errMsg:e.message})}))},le=()=>({isLoading:!0,isLoadFailed:!1}),de=e=>e.map((e=>e.options)),pe=e=>{const t=[];return e.forEach((e=>{(e.options||[]).length>1&&t.push(ce(e.caption,e.id))})),t},he=e=>{const{chartsType:t,mapFrequency:o,mapDateDf:n,dfProps:r={}}=e,i=r.mapFrequency||o||"M",a=r.mapDateDf||n,[{isLoading:c,isLoadFailed:u},l]=(0,s.useState)(le),[d,p]=(0,s.useState)([]),[h,m]=(0,s.useState)((()=>({configs:[],selectOptions:[],mapFrequency:o,chartOptions:ie(e),dateOptions:[]}))),f=(0,s.useCallback)((({configs:e,timeId:o,mapFrequency:s,errMsg:n})=>{if(e){const n=s||i,[r,c]=((e,t,o)=>{const{dateOptions:s}=e;if(s)return[s,s[0]];const{dateOptions:n,dateDefault:r}=ae(t,o);return[n,ce(r,r)]})(e,n,a);l({isLoading:!1,isLoadFailed:!1}),m({timeId:o,configs:e,selectOptions:de(e),mapFrequency:n,dimOptions:pe(e),chartOptions:ie({configs:e,chartsType:t}),dateOptions:r,dateDf:c})}else l({isLoading:!1,isLoadFailed:!0}),p([n])}),[t,i,a]),g=((e,t)=>{const o=re(e);return t&&!o.isShow&&e.isShow})(e,u);return(0,s.useEffect)((()=>{ue(e,f)}),[]),(0,s.useEffect)((()=>{g&&(ue(e,f),l(le))}),[g,e,f]),[h,c,u,d,p,m]},me=e=>(0,s.useMemo)((()=>[(0,l.jsx)(c.Z.Button.Load,{onClick:e},"load")]),[e]),fe=(e,t,o)=>{e((e=>e[t]!==o?(e[t]=o,{...e}):e))},ge={margin:"16px auto 32px"},Ce={...ge,borderColor:"#f44336",animation:"none"},we=(e,t)=>e?ge:t?Ce:void 0,{isCategory:Se}=r.Z,be=n.Z.wideWidth(),ye=(e,t)=>e.isShow===t.isShow,ve={StatN:(0,s.memo)((e=>{const{isShow:t,caption:o,onShow:n,onFront:r,loadFn:u,onLoad:f,msgOnNotSelected:C,onClickInfo:w,onClose:b}=e,v=!e.dims&&!e.notDim,[O,T]=m(),[D,M]=(0,h.Z)(),[k,F]=(0,h.Z)(),[L,j]=(0,h.Z)(),[E,Z,q,A,P,R]=he(e),{configs:_,selectOptions:U,chartType:B,chartOptions:Q,dimOptions:W,dateOptions:Y,dateDf:H={},timeId:N}=E,[V,G]=(0,p.Z)(be),[K,z,J]=y(),[X,$,ee,te,oe]=I(_),{isShowDate:se,isShowChart:ne}=ee,[re,ie]=g(G,oe,J,w),ae=(0,s.useCallback)((()=>{b(),P([])}),[]),ce=(0,s.useCallback)((()=>{const t=[];if(q)return t.push("Dims for request haven't been loaded.\nClose, open dialog for trying load again."),t;if(Z)return t.push("Dims is loading"),t;const o=Se(B),{dim:s}=B||{},n=((e,t,o,s)=>n=>{o.forEach(((o,r)=>{const{caption:i}=o;n(i)&&!s[r]&&e.push(t(i))}))})(t,C,_,O.current);if(!v||!o){const r=e.notDim?x:s;return n((e=>!(o&&e===r))),t}if(o){const e=L.current;if(!e)return t.push("Dim isn't selected"),t;n((t=>t!==e.caption))}return t}),[q,Z,_,B,C]),ue=(0,s.useCallback)((e=>{const t=!!Se(e)&&(k.current=null,!0);fe(te,"isShowDate",t),fe(R,"chartType",e)}),[]),le=(0,s.useCallback)((()=>{((e,t)=>{e.forEach(((e,o)=>{const{dfItem:s}=e;s&&t(o)(s)}))})(_,T);const t=ce();if(0===t.length){const{seriaColor:t,seriaWidth:o}=D.current?D.current.getConf():{},s=((e,t)=>e.dfC||(t||{}).value)(e,L.current),n=((e,t)=>e.dfC||!t?"":t.caption||"")(e,L.current),r=u({...e},{timeId:N,dfC:s,dfTitle:n,time:(k.current||H).value,dialogOptions:z.current,chartType:B,seriaColor:t,seriaWidth:o,items:O.current,titles:$.current,selectOptions:U});f(r)}P(t)}),[ce,H,N,B,_,U]),de=me(le),pe=S(ie,w),ge=we(Z,q);return(0,l.jsxs)(c.Z.DraggableDialog,{isShow:t,caption:o,menuModel:pe,commandButtons:de,onShowChart:n,onFront:r,onClose:ae,children:[re,K,X,ge?(0,l.jsx)(i.Z,{style:ge}):(0,l.jsx)(a.Z,{items:_,crItem:d,isShowLabels:V,isRow:ee,fSelect:T}),(0,l.jsx)(c.Z.RowChartDate,{chartType:B,isShowLabels:V,isShowChart:ne,chartOptions:Q,onSelectChart:ue,onRegColor:M,isShowDate:se,dateDefault:H.caption,dateOptions:Y,onSelecDate:F,isDim:v,dimOptions:W,onSelecDim:j}),(0,l.jsx)(c.Z.ValidationMessages,{validationMessages:A})]})}),ye)}}}]);