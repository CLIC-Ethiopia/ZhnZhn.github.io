"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[146],{3707:(o,e,t)=>{t.r(e),t.d(e,{default:()=>A});var s=t(9999),n=t(6016),a=t(1926),i=t(3683),l=t(7286),r=t(8463),h=t(9620),p=t(4868),c=t(5893);const d={width:85},w={width:270},S=o=>"string"==typeof o&&o.trim(),g=o=>S(o)&&S(o.split("/")[2]),Z=(0,h.kK)({chartsType:"t2"}),u=(0,n.Z)((o=>{const{isShow:e,noDate:t,caption:n,oneCaption:h,onePlaceholder:S,initFromDate:u,initToDate:m,msgOnNotValidFormat:D,onTestDate:T,toTopLayer:b,onAbout:C,loadFn:x,onLoad:j,onShow:L,onClose:O}=o,[A,F]=(0,s.eJ)("SPLINE"),[V,y]=(0,a.Z)(!0),[f,N,I,v,P]=(0,r.Z)(),[M,k,R,W]=(0,l.Z)({onAbout:C,onClose:O,toggleOptions:I,toggleDate:t?void 0:y}),J=(0,s.sO)(),U=(0,s.sO)(),H=(0,s.sO)(),Y=(0,i.Z)((()=>{const e=(0,s.eA)(J);if(e&&e.isValid()){const t=e.getValue();j(x(o,{...(0,s.d9)(H),items:[{c:t,v:t}],dialogOptions:(0,s.eA)(f),chartType:A}))}else e.showErrMsg()}));return(0,c.jsxs)(p.Z.DraggableDialog,{isShow:e,menuModel:R,caption:n,toTopLayer:b,onLoad:Y,onShow:L,onClose:O,children:[(0,c.jsx)(p.Z.Toolbar,{isShow:M,buttons:W}),(0,c.jsx)(p.Z.ModalOptions,{isShow:N,toggleOption:P,onClose:v}),(0,c.jsx)(p.Z.RowPattern,{ref:J,isShow:e,isShowLabels:k,style:w,captionStyle:d,placeholder:S,caption:h,onTest:g,errorMsg:"Empty or Id format is not valid"}),(0,c.jsx)(p.Z.RowChartDate,{refSeriaColor:H,chartType:A,isShowLabels:k,isShowChart:!0,labelStyle:d,selectWidth:w.width,chartOptions:Z,onSelectChart:F,noDate:t}),!t&&(0,c.jsx)(p.Z.ShowHide,{isShow:V,children:(0,c.jsx)(p.Z.DatesFragment,{ref:U,isShowLabels:k,initFromDate:u,initToDate:m,msgOnNotValidFormat:D,onTestDate:T})})]})}));var m=t(5868),D=t(16);const T=o=>{const e=(0,s.eA)(o);return e?e.getValues():{}},b=(0,n.Z)((o=>{const{isShow:e,noDate:t,caption:n,oneCaption:i,oneNames:r,oneURI:h,oneJsonProp:d,isWithOneInput:w,twoCaption:S,twoNames:g,twoURI:Z,twoJsonProp:u,isWithInputTwo:b,threeCaption:C,threeNames:x,threeURI:j,threeJsonProp:L,isWithInputThree:O,initFromDate:A,initToDate:F,msgOnNotSelected:V,msgOnNotValidFormat:y,onTestDate:f,toTopLayer:N,onAbout:I,loadFn:v,onLoad:P,onShow:M,onClose:k}=o,[R,W]=(0,a.Z)(!0),[J,U,H,Y,_,B,E]=(0,l.Z)({onAbout:I,onClose:k,toggleDate:t?void 0:W}),[K,Q]=(0,m.Z)(),[q,z]=(0,m.Z)(),[G,X]=(0,m.Z)(),$=(0,s.sO)(),oo=(0,s.I4)((()=>{const e=Q(),t=z(),s=X(),n=[[e,i],[t,S],j?[s,C]:void 0].filter(Boolean),a=(0,D.Z)(n,V,$);0===a.length&&P(v(o,{one:e,two:t,three:s,...T($)})),B(a)}),[]);return(0,c.jsxs)(p.Z.DraggableDialog,{isShow:e,caption:n,menuModel:H,toTopLayer:N,onLoad:oo,onShow:M,onClose:E,children:[(0,c.jsx)(p.Z.Toolbar,{isShow:J,buttons:Y}),(0,c.jsx)(p.Z.SelectWithLoad,{isShow:e,isShowLabels:U,isWithInput:w,uri:h,jsonProp:d,caption:i,optionNames:r,onSelect:K}),(0,c.jsx)(p.Z.SelectWithLoad,{isShow:e,isShowLabels:U,isWithInput:b,uri:Z,jsonProp:u,caption:S,optionNames:g,onSelect:q}),j&&(0,c.jsx)(p.Z.SelectWithLoad,{isShow:e,isShowLabels:U,isWithInput:O,uri:j,jsonProp:L,caption:C,optionNames:x,onSelect:G}),!0!==t&&(0,c.jsx)(p.Z.ShowHide,{isShow:R,children:(0,c.jsx)(p.Z.DatesFragment,{ref:$,isShowLabels:U,initFromDate:A,initToDate:F,msgOnNotValidFormat:y,onTestDate:f})}),(0,c.jsx)(p.Z.ValidationMessages,{validationMessages:_})]})}));var C=t(5861),x=t(5091);const j=(0,n.Z)((o=>{const{isShow:e,caption:t,oneCaption:n,oneURI:i,oneJsonProp:r,twoCaption:h,msgOnNotSelected:d,initFromDate:w,initToDate:S,msgOnNotValidFormat:g,onTestDate:Z,toTopLayer:u,onAbout:m,loadFn:D,onLoad:T,onShow:b,onClose:j}=o,[L,O]=(0,a.Z)(!0),[A,F]=(0,a.Z)(!1),[V,y,f,N,I,v,P]=(0,l.Z)({onAbout:m,onClose:j,toggleDate:O,toggleOptions:F}),[M,k,R]=(0,C.Z)(false),W=(0,s.sO)(),J=(0,s.sO)(),U=(0,s.I4)((()=>{const e=(0,s.eA)(J),{msg:t=[]}=e.getValidation();(0,x.Z)(W,t),0===t.length&&T(D(o,{...e.getValues(),...(0,s.eA)(W).getValues(),hasSecondYAxis:(0,s.eA)(M)})),v(t)}),[]);return(0,c.jsxs)(p.Z.DraggableDialog,{isShow:e,caption:t,menuModel:f,toTopLayer:u,onLoad:U,onShow:b,onClose:P,children:[(0,c.jsx)(p.Z.Toolbar,{isShow:V,buttons:N}),(0,c.jsx)(p.Z.SelectOneTwo,{ref:J,isShow:e,isShowLabels:y,uri:i,oneCaption:n,oneJsonProp:r,twoCaption:h,msgOnNotSelected:d}),(0,c.jsx)(p.Z.ShowHide,{isShow:L,children:(0,c.jsx)(p.Z.DatesFragment,{ref:W,isShowLabels:y,initFromDate:w,initToDate:S,msgOnNotValidFormat:g,onTestDate:Z})}),(0,c.jsx)(p.Z.ShowHide,{isShow:A,children:(0,c.jsx)(p.Z.RowCheckBox1,{caption:"Add Seria with Second YAxis",initialValue:false,onCheck:k,onUnCheck:R})}),(0,c.jsx)(p.Z.ValidationMessages,{validationMessages:I})]})}));var L=t(6485);const O=[{caption:"Default: Area",value:L.rb},{caption:"Scatter: Label Up",value:L.JK},{caption:"Scatter: Label Down",value:L.oD}],A={Query:u,Type4:b,Type4A:j,Type5:(0,n.Z)((o=>{const{isShow:e,isChartType:t,caption:n,oneCaption:i,oneURI:r,oneJsonProp:h,twoCaption:d,twoURI:w,twoJsonProp:S,threeCaption:g,msgOnNotSelected:Z,initFromDate:u,initToDate:D,msgOnNotValidFormat:T,onTestDate:b,toTopLayer:j,onAbout:L,loadFn:A,onLoad:F,onShow:V,onClose:y}=o,[f,N]=(0,a.Z)(!1),[I,v]=(0,a.Z)(!1),[P,M,k,R,W,J,U]=(0,l.Z)({onAbout:L,onClose:y,toggleDate:N,toggleOptions:v}),[H,Y,_]=(0,C.Z)(false),[B,E]=(0,m.Z)(),[K,Q]=(0,m.Z)(),q=(0,s.sO)(),z=(0,s.sO)(),G=(0,s.I4)((()=>{const e=[],t=E(),n=(0,s.eA)(z),{msg:a=[]}=n.getValidation();if(t||e.push(Z(i)),e.push(...a),(0,x.Z)(q,e),0===e.length){const{one:e,two:a}=n.getValues(),{value:i}=Q()||{};F(A(o,{...(0,s.eA)(q).getValues(),one:t,two:e,three:a,seriaType:i,hasSecondYAxis:(0,s.eA)(H)}))}J(e)}),[]);return(0,c.jsxs)(p.Z.DraggableDialog,{isShow:e,caption:n,menuModel:k,toTopLayer:j,onLoad:G,onShow:V,onClose:U,children:[(0,c.jsx)(p.Z.Toolbar,{isShow:P,buttons:R}),(0,c.jsx)(p.Z.SelectWithLoad,{isShow:e,isShowLabels:M,uri:r,jsonProp:h,caption:i,optionNames:"Items",onSelect:B}),(0,c.jsx)(p.Z.SelectOneTwo,{ref:z,isShow:e,isShowLabels:M,uri:w,oneCaption:d,oneJsonProp:S,twoCaption:g,msgOnNotSelected:Z}),(0,c.jsx)(p.Z.ShowHide,{isShow:f,children:(0,c.jsx)(p.Z.DatesFragment,{ref:q,isShowLabels:M,initFromDate:u,initToDate:D,msgOnNotValidFormat:T,onTestDate:b})}),(0,c.jsxs)(p.Z.ShowHide,{isShow:I,children:[t&&(0,c.jsx)(p.Z.RowInputSelect,{isShowLabels:M,caption:"Chart Type:",options:O,onSelect:K}),(0,c.jsx)(p.Z.RowCheckBox1,{caption:"Add Seria with Second YAxis",initialValue:false,onCheck:Y,onUnCheck:_})]}),(0,c.jsx)(p.Z.ValidationMessages,{validationMessages:W})]})}))}},5091:(o,e,t)=>{t.d(e,{Z:()=>n});var s=t(9999);const n=(o,e)=>{const t=(0,s.eA)(o);if(t){const{isValid:o,datesMsg:s}=t.getValidation();o||e.push(s)}}},16:(o,e,t)=>{t.d(e,{Z:()=>n});var s=t(5091);const n=(o,e,t)=>{const n=o.reduce(((o,t)=>(t[0]||o.push(e(t[1])),o)),[]);return(0,s.Z)(t,n),n}}}]);