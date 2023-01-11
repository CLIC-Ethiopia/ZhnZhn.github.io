"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[861],{6235:(o,e,t)=>{t.d(e,{T:()=>l,V:()=>r});var a=t(9916),n=t(5893);const i={color:"#607d8b"},s={color:"#232f3b"},l=o=>{let{onClick:e}=o;return(0,n.jsx)(a.Z,{style:i,caption:"Load",title:"Load Item to Container",onClick:e})},r=o=>{let{onClick:e}=o;return(0,n.jsx)(a.Z,{style:s,caption:"Show",title:"Show Item Container",onClick:e})}},7915:(o,e,t)=>{t.r(e),t.d(e,{default:()=>K});var a=t(9999),n=t(6016),i=t(1926),s=t(6612),l=t(5868),r=t(3683),c=t(6490),p=t(157),u=t(1868),d=t(16),h=t(6485),S=t(9916),g=t(6315),m=t(6235),w=t(5893);const T={color:"#232f3b"},Z="First Load Meta",C="Select...",v="Default Empty",b="Import - Trade (USD)",L="Export - Trade (USD)",x="Re-Import - Trade (USD)",D="Re-Export - Trade (USD)",j=o=>({caption:o,value:o}),y=[{caption:"Default: Empty Filter",value:v},j(b),j("Import - Weight (Kg)"),j(L),j("Export - Weight (Kg)"),j(x),j(D)],F=[{caption:"Default: Area",value:h.rb},{caption:"Semi Donut: Total Top90, On Every Year: Recent 2 Years",value:h.yE},{caption:"Stacked Area: Total Top90, On Recent Year",value:h.m3},{caption:"Stacked Area Percent: Total Top90, On Recent Year",value:h.VJ},{caption:"Stacked Column: Total Top90, On Recent Year",value:h.q_},{caption:"Stacked Column Percent: Total Top90, On Recent Year",value:h.P0},{caption:"Tree Map: On Recent Year",value:h.ri}],O=o=>e=>-1!==e.caption.indexOf(o),f=(o,e)=>{let t;if(o&&e){const a=o.value;a!==v&&(t=e.filter(O(a)),a===b&&(t=t.filter(O(x))),a===L&&(t=t.filter(O(D))))}return t||e},I=o=>!o||o.value===h.rb,V={optionTrades:[],placeholderTrade:Z,isLoadingTradeFailed:!1,isLoadingTrade:!1},R=(0,n.Z)((o=>{const{isShow:e,countryURI:t,countryJsonProp:n,commodityURI:v,commodityJsonProp:b,initFromDate:L,initToDate:x,onTestDate:D,msgOnNotValidFormat:j,msgOnNotSelected:O,dataColumn:R,loadId:k,dataSource:A,toTopLayer:M,onAbout:N,fnValue:Y,onLoad:E,onShow:P,onClose:U}=o,[J,K]=(0,c.Z)(N),[W,H]=(0,i.Z)(!0),[B,_]=(0,i.Z)(!1),[q,Q]=(0,i.Z)(!1),[z,G]=(0,i.Z)(!1),X=(0,s.Z)((()=>[(0,p.Z)("L","Click to toggle input labels",H),(0,p.Z)("F","Click to toggle filter input",_),(0,p.Z)("D","Click to toggle date input",Q),(0,p.Z)("C","Click to toggle chart type input",G),(0,p.Z)("A","About datasource",N)])),[$,oo,eo]=(0,u.Z)(),[to,ao]=(0,a.eJ)(V),{isLoadingTrade:no,isLoadingTradeFailed:io,optionTrades:so,placeholderTrade:lo}=to,[ro,co]=(0,a.eJ)(!0),po=(0,a.sO)(),[uo,ho]=(0,l.Z)(),[So,go]=(0,l.Z)(),[mo,wo]=(0,l.Z)(),[To,Zo]=(0,l.Z)(),[Co,vo]=(0,l.Z)(),[bo,Lo]=(0,l.Z)(),xo=(0,a.I4)((()=>{To(),Co(),ao(V)}),[]),Do=(0,a.I4)((o=>{uo(o),xo()}),[]),jo=(0,a.I4)((o=>{So(o),xo()}),[]),yo=(0,a.I4)((o=>{bo(o);const e=I(o);co(e),_(!e)}),[]),Fo=(0,a.I4)((()=>{const o=ho(),e=go(),t=[[o,"Country"],[e,"Chapter"]],n=(0,d.Z)(t,O,po);0===n.length?(E({...(0,a.eA)(po).getValues(),loadId:k,isLoadMeta:!0,value:Y(e.value,o.value),onLoad:o=>{Co(o),ao({optionTrades:f(wo(),vo()),isLoadingTrade:!1,isLoadingTradeFailed:!1,placeholderTrade:C})},onCancel:()=>ao((o=>({...o,isLoadingTrade:!1,isLoadingTradeFailed:!1,placeholderTrade:C}))),onFailed:()=>ao((o=>({...o,isLoadingTrade:!1,isLoadingTradeFailed:!0})))}),ao((o=>({...o,isLoadingTrade:!0}))),eo()):oo(n)}),[]),Oo=(0,r.Z)((()=>{const o=[],e=Lo(),t=Zo(),n=wo();if(I(e)?t||o.push(O("Subheading")):(lo===Z&&o.push(Z),n||o.push(O("Trade Filter"))),0===o.length){const o=ho(),i=go(),s=t?t.value:R,l=e?e.value:h.rb,r=n?o.caption+":"+n.caption:""+o.caption,c=I(e)?void 0:((o,e)=>{const t=o.value.length+2;return e.map((o=>{let{value:e,caption:a}=o;return a=a.substring(0,a.length-t),{caption:a,value:e}}))})(n,so);E({...(0,a.eA)(po).getValues(),value:Y(i.value,o.value),dataColumn:s,seriaType:l,sliceItems:c,title:r,subtitle:i.caption,loadId:k,dataSource:A}),eo()}else oo(o)})),fo=(0,a.Ye)((()=>[(0,w.jsx)(S.Z,{style:T,caption:"Load Meta",title:"First Load Meta, then Load Item",onClick:Fo},"meta"),(0,w.jsx)(m.T,{onClick:Oo},"load")]),[]),Io=(0,a.I4)((()=>{U(),eo()}),[]);return(0,w.jsxs)(g.Z.DraggableDialog,{isShow:e,caption:"United Nations Commodity Trade",menuModel:K,commandButtons:fo,toTopLayer:M,onShow:P,onClose:Io,children:[(0,w.jsx)(g.Z.Toolbar,{isShow:J,buttons:X}),(0,w.jsx)(g.Z.SelectWithLoad,{isShow:e,isShowLabels:W,uri:t,jsonProp:n,caption:"Country:",optionNames:"Countries",onSelect:Do}),(0,w.jsx)(g.Z.SelectWithLoad,{isShow:e,isShowLabels:W,uri:v,jsonProp:b,caption:"Chapter:",optionNames:"Chapters",onSelect:jo}),(0,w.jsx)(g.Z.ShowHide,{isShow:B,children:(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:W,caption:"Filter Trade:",options:y,placeholder:"Filter...",onSelect:mo})}),(0,w.jsx)(g.Z.ShowHide,{isShow:ro,children:(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:W,caption:"Subheading:",options:so,optionNames:"Meta",isLoading:no,isLoadingFailed:io,placeholder:lo,onLoadOption:Fo,onSelect:To})}),(0,w.jsx)(g.Z.ShowHide,{isShow:q,children:(0,w.jsx)(g.Z.DatesFragment,{ref:po,isShowLabels:W,initFromDate:L,initToDate:x,msgOnNotValidFormat:j,onTestDate:D})}),(0,w.jsx)(g.Z.ShowHide,{isShow:z,children:(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:W,caption:"Chart Type:",options:F,onSelect:yo})}),(0,w.jsx)(g.Z.ValidationMessages,{validationMessages:$})]})}));var k=t(7286);const A=[{caption:"2021",value:2021},{caption:"2020",value:2020},{caption:"2019",value:2019},{caption:"2018",value:2018},{caption:"2017",value:2017},{caption:"2016",value:2016},{caption:"2015",value:2015},{caption:"2014",value:2014},{caption:"2013",value:2013},{caption:"2012",value:2012}],M=(0,n.Z)((o=>{const{isShow:e,isFd:t,caption:n,futuresURI:i,msgOnNotSelected:s,msgOnNotValidFormat:r,initFromDate:c,isYmdOrEmpty:p,errNotYmdOrEmpty:u,toTopLayer:d,onAbout:h,loadFn:S,onLoad:m,onShow:T,onClose:Z}=o,[C,v,b,L,x,D,j,y]=(0,k.Z)({onAbout:h,onClose:Z}),F=(0,a.sO)(),O=(0,a.sO)(),[f,I]=(0,l.Z)(),V=(0,a.I4)((()=>{const e=[],n=(0,a.eA)(F),{msg:i=[]}=n.getValidation(),l=I(),c=(0,a.eA)(O);if(e.push(...i),l||e.push(s("Year")),t&&!c.isValid()&&e.push(r("From Date")),0===e.length){const{one:e,two:a}=n.getValues(),i=t?c.getValue():void 0;m(S(o,{item:e,month:a,year:l,fromDate:i})),j()}else D(e)}),[]);return(0,w.jsxs)(g.Z.DraggableDialog,{isShow:e,caption:n,menuModel:b,toTopLayer:d,onLoad:V,onShow:T,onClose:y,children:[(0,w.jsx)(g.Z.Toolbar,{isShow:C,buttons:L}),(0,w.jsx)(g.Z.SelectOneTwo,{ref:F,isShow:e,isShowLabels:v,uri:i,oneCaption:"Futures",oneOptionNames:"Futures",oneJsonProp:"futures",twoCaption:"Month",msgOnNotSelected:s}),(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:v,caption:"Year",options:A,onSelect:f}),t&&(0,w.jsx)(g.Z.RowDate,{innerRef:O,isShowLabels:v,title:"From Date:",initialValue:c,errorMsg:u,onTest:p}),(0,w.jsx)(g.Z.ValidationMessages,{validationMessages:x})]})})),N=[{caption:"Continuous Contract #1",value:1},{caption:"Continuous Contract #2",value:2},{caption:"Continuous Contract #3",value:3},{caption:"Continuous Contract #4",value:4},{caption:"Continuous Contract #5",value:5}],Y=(0,n.Z)((o=>{const{isShow:e,isFd:t,caption:n,futuresURI:i,msgOnNotSelected:s,msgOnNotValidFormat:r,initFromDate:c,isYmdOrEmpty:p,errNotYmdOrEmpty:u,toTopLayer:d,onAbout:h,loadFn:S,onLoad:m,onShow:T,onClose:Z}=o,[C,v,b,L,x,D,j,y]=(0,k.Z)({onAbout:h,onClose:Z}),[F,O]=(0,l.Z)(),f=(0,a.sO)(),I=(0,a.sO)(),V=(0,a.I4)((()=>{const e=[],n=(0,a.eA)(f),{msg:i=[]}=n.getValidation(),l=O(),c=(0,a.eA)(I);if(e.push(...i),l||e.push(s("Type")),t&&!c.isValid()&&e.push(r("From Date")),0===e.length){const{one:e,two:a}=n.getValues(),i=t?c.getValue():void 0;m(S(o,{exchange:e,item:a,type:l,fromDate:i})),j()}else D(e)}),[]);return(0,w.jsxs)(g.Z.DraggableDialog,{isShow:e,caption:n,menuModel:b,toTopLayer:d,onLoad:V,onShow:T,onClose:y,children:[(0,w.jsx)(g.Z.Toolbar,{isShow:C,buttons:L}),(0,w.jsx)(g.Z.SelectOneTwo,{ref:f,isShow:e,isShowLabels:v,uri:i,oneCaption:"Exchange",oneOptionNames:"Exchanges",oneJsonProp:"futures",twoCaption:"Asset",msgOnNotSelected:s}),(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:v,caption:"Type",options:N,onSelect:F}),t&&(0,w.jsx)(g.Z.RowDate,{innerRef:I,isShowLabels:v,title:"From Date:",initialValue:c,errorMsg:u,onTest:p}),(0,w.jsx)(g.Z.ValidationMessages,{validationMessages:x})]})}));var E=t(5091);const P=[{caption:"Thousand Barrels per day (kb/d)",value:"KD"},{caption:"Thousand Barrels (kbbl)",value:"KB"},{caption:"Thousand Kilolitres (kl)",value:"KL"},{caption:"Thousand Metric Tons (kmt)",value:"KT"},{caption:"Conversion factor barrels/ktons",value:"BK"}],U=P[0],J=[{caption:"AreaSpline",value:h.rb},{caption:"Yearly by Month",value:h.Qh}],K={UNCommodityTrade:R,Futures3:M,FuturesWiki:Y,JodiWorldOil:(0,n.Z)((o=>{let{isShow:e,caption:t,oneCaption:n,oneURI:s,oneJsonProp:r,parentCaption:c,parentChildURI:p,parentJsonProp:u,childCaption:d,msgOnNotSelected:h,initFromDate:S,initToDate:m,msgOnNotValidFormat:T,onTestDate:Z,dataColumn:C,loadId:v,dataSource:b,toTopLayer:L,onAbout:x,fnValue:D,onLoad:j,onShow:y,onClose:F}=o;const[O,f]=(0,i.Z)(!1),[I,V]=(0,i.Z)(!1),[R,A,M,N,Y,K,W,H]=(0,k.Z)({onAbout:x,onClose:F,toggleDate:f,toggleOptions:V}),[B,_]=(0,l.Z)(),[q,Q]=(0,l.Z)(),[z,G]=(0,l.Z)(),X=(0,a.sO)(),$=(0,a.sO)(),oo=(0,a.I4)((()=>{const o=[],e=_(),t=(0,a.eA)(X),{msg:n=[]}=t.getValidation(),i=Q()||U;if(e||o.push(h("Country")),o.push(...n),(0,E.Z)($,o),0===o.length){const o=(0,a.eA)($),{one:n,two:s}=t.getValues(),{value:l}=G()||{};j({...o.getValues(),value:D(e.value,n.value,s.value,i.value),title:e.caption+": "+n.caption,subtitle:s.caption+": "+i.caption,seriaType:l,dataColumn:C,loadId:v,dataSource:b}),W()}else K(o)}),[]);return(0,w.jsxs)(g.Z.DraggableDialog,{isShow:e,caption:t,menuModel:M,toTopLayer:L,onLoad:oo,onShow:y,onClose:H,children:[(0,w.jsx)(g.Z.Toolbar,{isShow:R,buttons:N}),(0,w.jsx)(g.Z.SelectWithLoad,{isShow:e,isShowLabels:A,uri:s,jsonProp:r,caption:n,optionNames:"Items",onSelect:B}),(0,w.jsx)(g.Z.SelectOneTwo,{ref:X,isShow:e,isShowLabels:A,uri:p,oneCaption:c,oneJsonProp:u,twoCaption:d,msgOnNotSelected:h}),(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:A,caption:"Units",options:P,onSelect:q}),(0,w.jsx)(g.Z.ShowHide,{isShow:O,children:(0,w.jsx)(g.Z.DatesFragment,{ref:$,isShowLabels:A,initFromDate:S,initToDate:m,msgOnNotValidFormat:T,onTestDate:Z})}),(0,w.jsx)(g.Z.ShowHide,{isShow:I,children:(0,w.jsx)(g.Z.RowInputSelect,{isShowLabels:A,caption:"Chart Type",placeholder:"Default: AreaSpline",options:J,onSelect:z})}),(0,w.jsx)(g.Z.ValidationMessages,{validationMessages:Y})]})}))}}}]);