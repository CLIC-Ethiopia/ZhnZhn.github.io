"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[256],{5941:(e,o,t)=>{t.r(o),t.d(o,{default:()=>g});var s=t(9999),a=t(6016),i=t(1926),n=t(5868),l=t(7286),r=t(5091),d=t(8910),p=t(5893);const c={margin:10,marginTop:16,fontWeight:"bold"},h=e=>!!e&&"Z"===e.value,u=/^\d{5}$/,w=e=>u.test(e.trim()),g={Zillow:(0,a.Z)((e=>{let{isShow:o,caption:t,oneCaption:a,oneURI:u,oneJsonProp:g,twoCaption:S,twoURI:Z,twoJsonProp:m,threeCaption:b,msgOnNotSelected:C,initFromDate:f,initToDate:j,msgOnNotValidFormat:D,onTestDate:v,dataColumn:x,loadId:T,dataSource:V,toTopLayer:L,onAbout:O,fnValue:I,onLoad:F,onShow:y,onClose:A}=e;const[N,P]=(0,i.Z)(!1),[k,H]=(0,i.Z)(!1),[M,_,J,R,U,W,q,z]=(0,l.Z)({onAbout:O,onClose:A,toggleDate:H}),K=(0,s.sO)(),$=(0,s.sO)(),B=(0,s.sO)(),[E,G]=(0,n.Z)(),Q=(0,s.I4)((e=>{P(h(e))}),[]),X=(0,s.I4)((()=>{const e=[],o=G(),t=(0,s.eA)(K),{one:i}=t.getValues(),n=(0,s.eA)($);if(o||e.push(C(a)),h(i))n.isValid()||e.push("Zip Code is not valid");else{const{msg:o=[]}=t.getValidation();0!==o.length&&e.push(...o)}if((0,r.Z)(B,e),0===e.length){const{one:e,two:o}=t.getValues(),a=n.getValue(),l=h(e),r=l?{value:a,caption:a}:o,d="function"==typeof I?I(i.value,e.value,r.value):void 0,p=(0,s.eA)(B);F({...p.getValues(),title:e.caption+": "+r.caption,subtitle:i.caption,isKeyFeature:l,value:d,dataColumn:x,loadId:T,dataSource:V}),q()}else W(e)}),[]);return(0,p.jsxs)(d.Z.DraggableDialog,{isShow:o,caption:t,menuModel:J,toTopLayer:L,onLoad:X,onShow:y,onClose:z,children:[(0,p.jsx)(d.Z.Toolbar,{isShow:M,buttons:R}),(0,p.jsx)(d.Z.SelectWithLoad,{isShow:o,isShowLabels:_,uri:u,jsonProp:g,caption:a,optionNames:"Items",onSelect:E}),(0,p.jsx)(d.Z.SelectOneTwo,{ref:K,isShow:o,isShowLabels:_,isHideTwo:N,uri:Z,oneCaption:S,oneJsonProp:m,twoCaption:b,msgOnNotSelected:C,onSelectOne:Q}),(0,p.jsx)(d.Z.ShowHide,{isShow:N,children:(0,p.jsx)(d.Z.RowPattern,{ref:$,isShowLabels:_,caption:"*Zip Code",placeholder:"Zip Code, 5 Digits",onTest:w,errorMsg:"5 digits format is required"})}),(0,p.jsx)(d.Z.ShowHide,{isShow:k,children:(0,p.jsx)(d.Z.DatesFragment,{ref:B,isShowLabels:_,initFromDate:f,initToDate:j,msgOnNotValidFormat:D,onTestDate:v})}),(0,p.jsx)(d.Z.ShowHide,{isShow:N,children:(0,p.jsx)("div",{style:c,children:"*Data present not for all zip codes"})}),(0,p.jsx)(d.Z.ValidationMessages,{validationMessages:U})]})}))}}}]);