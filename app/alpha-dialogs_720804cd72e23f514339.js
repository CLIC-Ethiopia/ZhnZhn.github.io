"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[57],{4176:(o,e,n)=>{n.r(e),n.d(e,{default:()=>A});var t=n(9999),r=n(6016),s=n(1926),a=n(5861),i=n(5868),l=n(6490),c=n(9643),d=n(3322),h=n(5893);const S=Number.isNaN,p=o=>""===(o+"").trim(),u=o=>!p(o),w=(o,e)=>n=>{if(p(n))return!0;const t=parseInt((n+"").trim(),10);return!S(t)&&t>o&&t<e},Z=w(0,201),b=w(250,2500),C=(o,e)=>{switch(o){case"MACD":return"MACD(12, 24, 9)";case"STOCH":return"STOCH(5, 3, 3, SMA)";default:return o+" ("+e+")"}},g=(o,e)=>(0,t.VP)(o)&&(0,t.d9)(o)||e,f=(0,r.Z)((o=>{let{isShow:e,caption:n,oneURI:r,oneJsonProp:S,oneCaption:p,loadId:w,onLoad:f,onShow:I,onFront:x,onClose:k,onClickInfo:j}=o;const[m,A]=(0,l.Z)(j),[D,L]=(0,s.Z)(),[y,M]=(0,s.Z)(!0),T=(0,c.Z)({toggleLabels:M,toggleOptions:L,onClickInfo:j}),P=(0,t.sO)(),R=(0,t.sO)(),N=(0,t.sO)(),[O,F,v]=(0,a.Z)(!1),[E,V]=(0,i.Z)(),_=(0,t.I4)((()=>{const o=g(R,30),e=g(N,501),n=g(P),r=(V()||{}).value||"SMA";f({loadId:w,indicator:r,ticket:n,period:o,forDays:e,value:C(r,o),hasSecondYAxis:(0,t.eA)(O)})}),[]);return(0,h.jsxs)(d.Z.DraggableDialog,{isShow:e,caption:n,menuModel:A,onLoad:_,onShowChart:I,onFront:x,onClose:k,children:[(0,h.jsx)(d.Z.Toolbar,{isShow:m,buttons:T}),(0,h.jsx)(d.Z.RowPattern,{ref:P,isShowLabels:y,caption:"Stock",placeholder:"Nyse or Nasdaq Symbol",onTest:u,errorMsg:"Not Empty"}),(0,h.jsx)(d.Z.SelectWithLoad,{isShow:e,isShowLabels:y,uri:r,jsonProp:S,caption:p,optionNames:"Items",placeholder:"Default: SMA (30)",onSelect:E}),(0,h.jsxs)(d.Z.ShowHide,{isShow:D,children:[(0,h.jsx)(d.Z.RowPattern,{ref:R,isShowLabels:y,caption:"Period",placeholder:"Default: 30",onTest:Z,errorMsg:"Number in range 1-200"}),(0,h.jsx)(d.Z.RowPattern,{ref:N,isShowLabels:y,caption:"For Days",placeholder:"Default: 501 (2 Years)",onTest:b,errorMsg:"Number in range 250-2500"})]}),(0,h.jsx)(d.Z.RowCheckBox,{initValue:!1,caption:"Add Seria with Second YAxis",onCheck:F,onUnCheck:v})]})})),I={width:300},x={paddingRight:16},k=(0,r.Z)((o=>{let{isShow:e,caption:n,loadId:r,dfSubId:s,onLoad:a,onShow:i,onFront:S,onClose:p,onClickInfo:u}=o;const[w,Z]=(0,l.Z)(u),b=(0,c.Z)({onClickInfo:u}),C=(0,t.I4)((()=>{a({loadId:r,dfSubId:s,indicator:"SECTOR"})}),[]);return(0,h.jsxs)(d.Z.DraggableDialog,{isShow:e,style:I,caption:n,menuModel:Z,onLoad:C,onShowChart:i,onFront:S,onClose:p,children:[(0,h.jsx)(d.Z.Toolbar,{isShow:w,buttons:b}),(0,h.jsx)(d.Z.Row.Text,{styleRoot:x,caption:"AV:",text:"Sector Performances"})]})}));var j=n(6612),m=n(1291);const A={Indicator:f,Sector:k,Search:(0,r.Z)((o=>{let{isShow:e,caption:n,getKey:t,loadId:r,onError:a,onFront:i,onClose:S,onClickInfo:p}=o;const[u,w]=(0,l.Z)(p),[Z,b]=(0,s.Z)(!0),C=(0,c.Z)({toggleLabels:b,onClickInfo:p}),g=(0,j.Z)((()=>({...m.Z,onError:a,crUrlOptions:()=>{const o=t(r);if(o)return{apiKey:o};a("API key from Alpha Vantage is required","Without API Key")}})));return(0,h.jsxs)(d.Z.DraggableDialog,{isShow:e,caption:n,menuModel:w,onFront:i,onClose:S,children:[(0,h.jsx)(d.Z.Toolbar,{isShow:u,buttons:C}),(0,h.jsx)(d.Z.RowInputSearch,{isShowLabels:Z,caption:"Token",searchApi:g})]})}))}}}]);