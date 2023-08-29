"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[1],{8397:(o,e,t)=>{t.r(e),t.d(e,{default:()=>f});var n=t(1768),s=t(6016),r=t(1926),a=t(5861),i=t(5868),l=t(6490),c=t(9643),d=t(4868),h=t(5893);const p=Number.isNaN,u=o=>""===(o+"").trim(),S=o=>!u(o),w=(o,e)=>t=>{if(u(t))return!0;const n=parseInt((t+"").trim(),10);return!p(n)&&n>o&&n<e},b=w(0,201),Z=w(250,2500),g=(o,e)=>{switch(o){case"MACD":return"MACD(12, 24, 9)";case"STOCH":return"STOCH(5, 3, 3, SMA)";default:return o+" ("+e+")"}},L=(0,s.Z)((o=>{let{isShow:e,caption:t,oneURI:s,oneJsonProp:p,oneCaption:u,toTopLayer:w,onAbout:L,loadId:A,onLoad:x,onShow:C,onClose:T}=o;const[y,f]=(0,l.Z)(L),[j,I]=(0,r.Z)(),[m,D]=(0,r.Z)(!0),k=(0,c.Z)({toggleLabels:D,toggleOptions:I,onAbout:L}),M=(0,n.sO)(),N=(0,n.sO)(),P=(0,n.sO)(),[R,O,K]=(0,a.Z)(!1),[v,_]=(0,i.Z)(),E=(0,n.I4)((()=>{const o=(0,n.CK)(N)||30,e=(0,n.CK)(P)||501,t=(0,n.CK)(M),s=(_()||{}).value||"SMA";x({loadId:A,indicator:s,ticket:t,period:o,forDays:e,value:g(s,o),hasSecondYAxis:(0,n.eA)(R)})}),[]);return(0,h.jsxs)(d.Z.DraggableDialog,{isShow:e,caption:t,menuModel:f,toTopLayer:w,onLoad:E,onShow:C,onClose:T,children:[(0,h.jsx)(d.Z.Toolbar,{isShow:y,buttons:k}),(0,h.jsx)(d.Z.RowPattern,{ref:M,isShowLabels:m,caption:"Stock",placeholder:"Nyse or Nasdaq Symbol",onTest:S,errorMsg:"Not Empty"}),(0,h.jsx)(d.Z.SelectWithLoad,{isShow:e,isShowLabels:m,uri:s,jsonProp:p,caption:u,optionNames:"Items",placeholder:"Default: SMA (30)",onSelect:v}),(0,h.jsxs)(d.Z.ShowHide,{isShow:j,children:[(0,h.jsx)(d.Z.RowPattern,{ref:N,isShowLabels:m,caption:"Period",placeholder:"Default: 30",onTest:b,errorMsg:"Number in range 1-200"}),(0,h.jsx)(d.Z.RowPattern,{ref:P,isShowLabels:m,caption:"For Days",placeholder:"Default: 501 (2 Years)",onTest:Z,errorMsg:"Number in range 250-2500"})]}),(0,h.jsx)(d.Z.RowCheckBox1,{caption:"Add Seria with Second YAxis",onCheck:O,onUnCheck:K})]})})),A={width:300},x={paddingRight:16},C=(0,s.Z)((o=>{let{isShow:e,caption:t,toTopLayer:s,onAbout:r,loadId:a,onLoad:i,onShow:p,onClose:u}=o;const[S,w]=(0,l.Z)(r),b=(0,c.Z)({onAbout:r}),Z=(0,n.I4)((()=>{i({loadId:a,dfSubId:"GL",dfFn:"GL"})}),[]);return(0,h.jsxs)(d.Z.DraggableDialog,{isShow:e,style:A,caption:t,menuModel:w,toTopLayer:s,onLoad:Z,onShow:p,onClose:u,children:[(0,h.jsx)(d.Z.Toolbar,{isShow:S,buttons:b}),(0,h.jsx)(d.Z.RowText,{style:x,caption:"AV:",text:"Top Gainers & Losers"})]})}));var T=t(6612),y=t(1291);const f={Indicator:L,Top:C,Search:(0,s.Z)((o=>{let{isShow:e,caption:t,getKey:n,loadId:s,toTopLayer:a,onAbout:i,onError:p,onClose:u}=o;const[S,w]=(0,l.Z)(i),[b,Z]=(0,r.Z)(!0),g=(0,c.Z)({toggleLabels:Z,onAbout:i}),L=(0,T.Z)((()=>({...y.Z,onError:p,crUrlOptions:()=>{const o=n(s);if(o)return{apiKey:o};p("API key from Alpha Vantage is required","Without API Key")}})));return(0,h.jsxs)(d.Z.DraggableDialog,{isShow:e,caption:t,menuModel:w,toTopLayer:a,onClose:u,children:[(0,h.jsx)(d.Z.Toolbar,{isShow:S,buttons:g}),(0,h.jsx)(d.Z.RowInputSearch,{isShowLabels:b,caption:"Token",searchApi:L})]})}))}}}]);