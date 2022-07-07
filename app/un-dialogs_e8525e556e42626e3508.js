"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[673],{5780:(e,o,t)=>{t.r(o),t.d(o,{default:()=>R});var a=t(9999),l=t(6016),r=t(1926),s=t(5868),n=t(7286);const i=()=>{const[e,o]=(0,r.Z)(!1),t=(0,a.I4)((()=>{o(!1)}),[o]);return[e,o,t]};var c=t(6623),p=t(8190),h=t(8811),u=t(1312),d=t(5893);const g={...u.oc,lineHeight:1.6,padding:"6px 14px"},S=e=>{let{isShow:o,configs:t,onClose:a}=e;return(0,d.jsx)(p.Z,{isShow:o,className:u.xx,style:g,onClose:a,children:(t||[]).map((e=>(0,d.jsx)(h.Z,{style:u.yE,checkedColor:u.MR,caption:e[0],value:e[1],onToggle:e[2]},e[0])))})},w=[{c:"Export Value",v:{rg:2,measure:"TradeValue"}},{c:"Export Weight",v:{rg:2,measure:"NetWeight"}},{c:"Export Quantity",v:{rg:2,measure:"TradeQuantity"}},{c:"Export Average Value Per Weight",v:{rg:2,measure:"avgPerWeight"}},{c:"Export Average Value Per Quantity",v:{rg:2,measure:"avgPerQuantity"}},{c:"Import Value",v:{rg:1,measure:"TradeValue"}},{c:"Import Weight",v:{rg:1,measure:"NetWeight"}},{c:"Import Quantity",v:{rg:1,measure:"TradeQuantity"}},{c:"Import Average Value Per Weight",v:{rg:1,measure:"avgPerWeight"}},{c:"Import Average Value Per Quantity",v:{rg:1,measure:"avgPerQuantity"}}],Z=w[0],x={c:"All",v:"all"},v=[{c:"Annual",v:"A"},{c:"Monthly",v:"M"}],m=v[0],j=(0,l.Z)((e=>{const{isShow:o,caption:t,oneURI:l,twoURI:p,tpURI:h,msgOnNotSelected:u,toTopLayer:g,onAbout:j,loadFn:A,onLoad:b,onShow:I,onClose:L}=e,[T,y,C]=i(),[f,V,R,P,D,W,M,H]=(0,n.Z)({onAbout:j,onClose:L,toggleInputs:y}),[E,Q]=(0,r.Z)(!0),[F,U]=(0,r.Z)(!1),[N,k]=(0,r.Z)(!0),[O,_]=(0,r.Z)(!1),q=(0,a.sO)(),[B,G]=(0,s.Z)(),[z,J]=(0,s.Z)(),[K,X]=(0,s.Z)(),[Y,$]=(0,s.Z)(),ee=(0,a.I4)((()=>{const o=(0,a.eA)(q),{msg:t=[]}=o.getValidation(),l=G()||x,r=l.v,s=X(),n=s&&s.v,i=$()||m;if("all"===r&&"all"===n&&t.push("Query All to All is too complex"),"all"===r&&"M"===i.v&&t.push("Query All Monthly is too complex"),0===t.length){const{one:t,two:a}=o.getValues();b(A(e,{one:l,two:t,three:a,tradeFlow:J()||Z,tradePartner:s,freq:i})),M()}else W(t)}),[]);return(0,d.jsxs)(c.Z.DraggableDialog,{isShow:o,caption:t,menuModel:R,toTopLayer:g,onLoad:ee,onShow:I,onClose:H,children:[(0,d.jsx)(c.Z.Toolbar,{isShow:f,buttons:P}),(0,d.jsx)(S,{isShow:T,configs:[["Partner",F,U],["Heading",E,Q],["Trade Flow",N,k],["Frequency",O,_]],onClose:C}),(0,d.jsx)(c.Z.SelectWithLoad,{isShow:o,isShowLabels:V,uri:l,caption:"Reporter",placeholder:"Default: All",onSelect:B}),(0,d.jsx)(c.Z.ShowHide,{isShow:F,children:(0,d.jsx)(c.Z.SelectWithLoad,{isShowLabels:V,uri:h,caption:"Partner",placeholder:"Default: World",onSelect:K})}),(0,d.jsx)(c.Z.ShowHide,{isShow:E,children:(0,d.jsx)(c.Z.SelectOneTwo,{ref:q,isShow:o,isShowLabels:V,uri:p,oneCaption:"Heading",twoCaption:"Subheading",msgOnNotSelected:u})}),(0,d.jsx)(c.Z.ShowHide,{isShow:N,children:(0,d.jsx)(c.Z.RowInputSelect,{isShowLabels:V,caption:"Trade Flow",placeholder:"Default: Export Value",propCaption:"c",options:w,onSelect:z})}),(0,d.jsx)(c.Z.ShowHide,{isShow:O,children:(0,d.jsx)(c.Z.RowInputSelect,{isShowLabels:V,caption:"Frequency",placeholder:"Default: Annual",propCaption:"c",options:v,onSelect:Y})}),(0,d.jsx)(c.Z.ValidationMessages,{validationMessages:D})]})})),A=[{c:"Total",v:"total"},{c:"All 2-digit HS commodities",v:"AG2"}],b=A[0],I=(()=>{const e=[];for(let o=0;o<22;o++){const t=""+(2021-o);e.push({c:t,v:t})}return e})(),L=I[0],T=[{c:"Export Value",v:{rg:2,measure:"TradeValue"}},{c:"Import Value",v:{rg:1,measure:"TradeValue"}}],y=[{c:"TreeMap (60, 90)",v:"TREE_MAP"},{c:"Bar (60, 90)",v:"BAR"}],C=T[0],f={c:"World",v:"0"},V={c:"Annual",v:"A"},R={UnDialog5:j,UnDialogAgg:(0,l.Z)((e=>{const{isShow:o,caption:t,oneURI:l,tpURI:p,msgOnNotSelected:h,toTopLayer:u,onAbout:g,loadFn:w,onLoad:Z,onShow:x,onClose:v}=e,[m,j,R]=i(),[P,D,W,M,H,E,Q,F]=(0,n.Z)({onAbout:g,onClose:v,toggleInputs:j}),[U,N]=(0,r.Z)(!0),[k,O]=(0,r.Z)(!1),[_,q]=(0,r.Z)(!0),[B,G]=(0,r.Z)(!1),[z,J]=(0,s.Z)(),[K,X]=(0,s.Z)(),[Y,$]=(0,s.Z)(),[ee,oe]=(0,s.Z)(),[te,ae]=(0,s.Z)(),[le,re]=(0,s.Z)(),se=(0,a.I4)((e=>{Y(e);const o=e&&e.v!==b.v;G(o)}),[]),ne=(0,a.I4)((()=>{const o=J(),t=X()||f,a=[];o||a.push(h("Reporter")),(o&&"all"===o.v||"all"===t.v)&&a.push("Query All is too complex"),0===a.length?(Z(w(e,{one:o,three:$()||b,tradeFlow:oe()||C,tradePartner:t,period:re()||L,chart:ae(),freq:V})),Q()):E(a)}),[]);return(0,d.jsxs)(c.Z.DraggableDialog,{isShow:o,caption:t,menuModel:W,toTopLayer:u,onLoad:ne,onShow:x,onClose:F,children:[(0,d.jsx)(c.Z.Toolbar,{isShow:P,buttons:M}),(0,d.jsx)(S,{isShow:m,configs:[["Trade Flow",U,N],["Partner",k,O],["Aggregation",_,q]],onClose:R}),(0,d.jsx)(c.Z.SelectWithLoad,{isShow:o,isShowLabels:D,uri:l,caption:"Reporter",onSelect:z}),(0,d.jsx)(c.Z.ShowHide,{isShow:U,children:(0,d.jsx)(c.Z.RowInputSelect,{isShowLabels:D,caption:"Trade Flow",placeholder:"Default: Export Value",propCaption:"c",options:T,onSelect:ee})}),(0,d.jsx)(c.Z.ShowHide,{isShow:k,children:(0,d.jsx)(c.Z.SelectWithLoad,{isShowLabels:D,uri:p,caption:"Partner",placeholder:"Default: World",onSelect:K})}),(0,d.jsxs)(c.Z.ShowHide,{isShow:_,children:[(0,d.jsx)(c.Z.RowInputSelect,{isShowLabels:D,caption:"Aggregation",placeholder:"Default: Total",propCaption:"c",options:A,onSelect:se}),(0,d.jsxs)(c.Z.ShowHide,{isShow:B,children:[(0,d.jsx)(c.Z.RowInputSelect,{isShowLabels:D,caption:"Chart",placeholder:"Default: TreeMap (60,90)",propCaption:"c",options:y,onSelect:te}),(0,d.jsx)(c.Z.RowInputSelect,{isShowLabels:D,caption:"Period",placeholder:"Default: 2021",propCaption:"c",options:I,onSelect:le})]})]}),(0,d.jsx)(c.Z.ValidationMessages,{validationMessages:H})]})}))}}}]);