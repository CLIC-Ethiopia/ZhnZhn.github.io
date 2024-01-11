"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[437],{6235:(t,e,o)=>{o.d(e,{T:()=>l,V:()=>r});var s=o(9916),n=o(5893);const i={color:"#607d8b"},a={color:"#232f3b"},l=t=>{let{onClick:e}=t;return(0,n.jsx)(s.Z,{style:i,caption:"Load",title:"Load Item to Container",onClick:e})},r=t=>{let{onClick:e}=t;return(0,n.jsx)(s.Z,{style:a,caption:"Show",title:"Show Item Container",onClick:e})}},2220:(t,e,o)=>{o.r(e),o.d(e,{default:()=>lt});var s=o(9999),n=o(6016),i=o(1926),a=o(8240),l=o(7020),r=o(9468),c=o(231),p=o(3115),u=o(4485),d=o(5138),h=o(4141),x=o(6235),m=o(2276),g=o(5893);const C={width:365},j={width:265},f={display:"inline-block",maxWidth:250,height:32,verticalAlign:"middle"},w=t=>"number"==typeof t&&t-t==0,y=(0,r.i2)(),L={},S=(0,a.QS)(2),G=(0,a.TP)(),T=(0,n.Z)((t=>{let{isShow:e,data:o=L,onClose:n}=t;const r=(0,s.sO)(),{caption:T,fromDate:Z,initToDate:R,onTestDate:v,itemConf:B}=o,{dataSource:I,x:O,y:b}=B||{},[D,N]=(0,i.Z)(y),[A,E]=(0,i.Z)(w(O)),[M,W]=(0,i.Z)(),k=(0,s.eA)((0,s.sO)([{caption:"L",title:"Click to toggle input labels",onClick:N},{caption:"V",title:"Click to toggle row value",onClick:E},{caption:"D",title:"Click to toggle date input",onClick:W}])),[V,F]=(0,s.eJ)([]),P=[(0,g.jsx)(x.T,{onClick:()=>{const t=(0,s.eA)(r),{isValid:e,datesMsg:i}=t.getValidation(),a=e?[]:i;if(0===a.length){const{id:e,title:s,subtitle:i,caption:a,columnName:l,dataColumn:r,seriaColumnNames:d,itemConf:h={}}=o,{fromDate:x,toDate:m}=t.getValues(),g={id:e,title:s,subtitle:i,value:a,item:a,fromDate:x,toDate:m,columnName:l,dataColumn:r,seriaColumnNames:d,loadId:h.loadId||p.O8,...h};(0,c.oi)({chartType:p.e9,browserType:u.lx},g),n(),F((t=>t.length>0?[]:t))}else F(a)}},"load")];(0,s.d4)((()=>{E(w(O))}),[O,E]);const _=Z||S,J=R||G,H=v||a.RB,q=D?C:j,U=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=""),`${(0,l.Z)(e)} ${(0,a.P9)(t)}`.trim()}(O,b);return(0,g.jsxs)(d.Z,{style:q,isShow:e,caption:"Load Item",commandButtons:P,onClose:()=>{n(),F([])},children:[(0,g.jsx)(h.Z.Toolbar,{isShow:!0,buttons:k}),(0,g.jsx)(h.Z.RowText,{isShowLabels:D,textStyle:f,caption:"Item:",text:T}),(0,g.jsx)(h.Z.ShowHide,{isShow:A,children:(0,g.jsx)(h.Z.RowText,{isShowLabels:D,textStyle:f,caption:"Value:",text:U})}),(0,g.jsx)(h.Z.ShowHide,{isShow:M,children:(0,g.jsx)(h.Z.DatesFragment,{ref:r,isShowLabels:D,initFromDate:_,initToDate:J,onTestDate:H})}),(0,g.jsx)(h.Z.RowText,{isShowLabels:D,textStyle:f,caption:"Source:",text:I}),(0,g.jsx)(m.Z,{validationMessages:V})]})}));var Z=o(2261),R=o(3218),v=o(3901),B=o(2125),I=o(3943),O=o(3297);const b=()=>{const t=(0,s.sO)(),[e,o]=(0,s.eJ)([]),n=(0,s.I4)((()=>{(0,s.fb)(t),o([])}),[]);return[e,o,n,t]};var D=o(5313),N=o(7376);const A={...N.UR,lineHeight:2},E={...N.m9,width:120},M={width:250,height:30,paddingLeft:10,marginLeft:0,marginRight:0},W=(0,s.Gp)(((t,e)=>{let{caption:o}=t;return(0,g.jsxs)("div",{style:A,children:[(0,g.jsx)("span",{style:E,children:o}),(0,g.jsx)(D.Z,{ref:e,style:M})]})}));var k=o(5262);const V={...N.m9,width:120},F=t=>{let{caption:e,options:o,onSelect:s}=t;return(0,g.jsxs)("div",{style:N.UR,children:[(0,g.jsx)("span",{style:V,children:e}),(0,g.jsx)(k.Z,{width:"250",options:o,onSelect:s})]})};var P=o(5868);const _=()=>{const t=(0,s.sO)(),e=(0,s.I4)((e=>{(0,s.oe)(t,(e||{}).caption)}),[]);return[t,e]},J=(0,s.Gp)(((t,e)=>{const[o,n]=(0,P.Z)(t),{getWatchListsByGroup:i,groupCaption:a,groupOptions:l,listCaption:r}=t,c=(0,s.sO)(),[p,u]=_(),[d,h]=(0,s.eJ)([]),x=(0,s.I4)((t=>{const{caption:e}=t||{};t&&e?((0,s.oe)(c,e),(0,s.oe)(p,null),h(t.lists||[])):(0,s.oe)(c,null)}),[]);return(0,s.d4)((()=>{const e=n();if(e!==t){if(e.groupOptions!==l)(0,s.oe)(c,null),(0,s.oe)(p,null),h([]);else if((0,s.eA)(c)){const t=i(c.current);t!==d&&((0,s.oe)(p,null),h(t))}o(t)}}),[t]),(0,s.aP)(e,(()=>({getValue:()=>({captionGroup:(0,s.eA)(c),captionList:(0,s.eA)(p)})}))),(0,g.jsxs)("div",{children:[(0,g.jsx)(F,{caption:a,options:l,onSelect:x}),(0,g.jsx)(F,{caption:r,options:d,onSelect:u})]})}));var H=o(481);const q={...o(390).x,margin:"8px 4px 10px 0"},U=t=>{let{refBtClose:e,withoutClear:o,caption:s,title:n,onPrimary:i,onClear:a,onClose:l}=t;return(0,g.jsxs)("div",{style:q,children:[(0,g.jsx)(H.Z.Primary,{caption:s,title:n,onClick:i}),!o&&(0,g.jsx)(H.Z.Clear,{onClick:a}),(0,g.jsx)(H.Z.Close,{refBt:e,onClick:l})]})},$={RowInputText:W,RowInputSelect:F,SelectGroupList:J,Button:H.Z,RowButtons:U,ValidationMessages:m.Z},Q=t=>t.isVisible?t.setRefFocusLast:void 0,Y=t=>{const{forActionType:e,useMsEdit:o,msgOnIsEmptyName:n,onCreate:i,onClose:a}=t,[l,r,c,p]=b();return o((t=>{t&&t.forActionType===e&&(t.messages?r(t.messages):c())})),(0,g.jsxs)("div",{children:[(0,g.jsx)($.RowInputText,{ref:p,caption:"Group:"}),(0,g.jsx)($.ValidationMessages,{validationMessages:l}),(0,g.jsx)($.RowButtons,{refBtClose:Q(t),caption:"Create",title:"Create New Group",onPrimary:()=>{const t=(0,s.d9)(p);t?i({caption:t}):((0,s.fb)(p),r([n("Group")]))},onClear:c,onClose:a})]})},z=(t,e,o)=>{const{useMsEdit:n,forActionType:i,getWatchGroups:a}=t,[l,r]=(0,s.eJ)((()=>a()));return n((t=>{t&&(t.forActionType===i?t.messages?e(t.messages):(o(),r(a())):r(a()))})),l},K=t=>{const{msgOnNotSelect:e,msgOnIsEmptyName:o,onRename:n,onClose:i}=t,[a,l,r,c]=b(),p=z(t,l,r),[u,d]=_();return(0,g.jsxs)("div",{children:[(0,g.jsx)($.RowInputSelect,{caption:"Group From:",options:p,onSelect:d}),(0,g.jsx)($.RowInputText,{ref:c,caption:"Group To:"}),(0,g.jsx)($.ValidationMessages,{validationMessages:a}),(0,g.jsx)($.RowButtons,{refBtClose:Q(t),caption:"Edit",title:"Edit Group Name",onPrimary:()=>{const t=(0,s.d9)(c),i=(0,s.eA)(u);if(t&&i)n({captionFrom:i,captionTo:t});else{const s=[];i||s.push(e("Group From")),t||s.push(o("Group To")),l(s)}},onClear:r,onClose:i})]})},X=t=>({groups:t(),errs:[]}),tt=(t,e)=>({type:t,payload:e}),et=(t,e)=>{let{type:o,payload:s}=e;switch(o){case"a":return{groups:s,errs:[]};case"b":return{...t,errs:s};default:return t}},ot=t=>{const{onDelete:e,msgOnNotSelect:o,useMsEdit:n,getWatchGroups:i,onClose:a}=t,l=(0,s.sO)(null),[r,c,p,u]=((t,e)=>{const[{groups:o,errs:n},i]=(0,s._Y)(et,t,X);return[o,n,t=>i(tt("a",t)),()=>i(tt("b",[e("Group")]))]})(i,o);return n((t=>{t&&!t.messages&&p(i())})),(0,g.jsxs)("div",{children:[(0,g.jsx)($.RowInputSelect,{caption:"Group:",options:r,onSelect:t=>{(0,s.oe)(l,t&&t.caption||null)}}),(0,g.jsx)($.ValidationMessages,{validationMessages:c}),(0,g.jsx)($.RowButtons,{refBtClose:Q(t),caption:"Delete",title:"Delete Group",onPrimary:()=>{const t=(0,s.eA)(l);t?(e({caption:t}),(0,s.oe)(l,null)):u()},withoutClear:!0,onClose:a})]})},st=(0,n.Z)((t=>{let{isShow:e,onClose:o}=t;const[s,n]=(0,Z.Z)();return(0,g.jsx)(d.Z,{refFocusLast:s,caption:"Watch Groups Edit",isShow:e,isWithButton:!1,onClose:o,children:(0,g.jsxs)(I.Z,{id:"egd",width:380,useMsEdit:v.b6,getWatchGroups:v.oq,msgOnNotSelect:B.xW,msgOnIsEmptyName:B.eT,onClose:o,setRefFocusLast:n,children:[(0,g.jsx)(O.Z,{title:"Create",children:(0,g.jsx)(Y,{forActionType:R.R2,onCreate:v.l_})}),(0,g.jsx)(O.Z,{title:"Rename",children:(0,g.jsx)(K,{forActionType:R.Bv,onRename:v.OO})}),(0,g.jsx)(O.Z,{title:"Delete",children:(0,g.jsx)(ot,{forActionType:R.E2,onDelete:v.rc})})]})})})),nt=t=>{const{msgOnNotSelect:e,msgOnIsEmptyName:o,onCreate:n,onClose:i}=t,[a,l,r,c]=b(),p=z(t,l,r),[u,d]=_();return(0,g.jsxs)("div",{children:[(0,g.jsx)($.RowInputSelect,{caption:"In Group:",options:p,onSelect:d}),(0,g.jsx)($.RowInputText,{ref:c,caption:"List:"}),(0,g.jsx)($.ValidationMessages,{validationMessages:a}),(0,g.jsx)($.RowButtons,{refBtClose:Q(t),caption:"Create",title:"Create New List",onPrimary:()=>{const t=(0,s.d9)(c),i=(0,s.eA)(u);if(i&&t)n({captionGroup:i,captionList:t});else{const s=[];i||s.push(e("In Group")),t||s.push(o("List")),l(s)}},onClear:r,onClose:i})]})},it=t=>{const{onRename:e,msgOnIsEmptyName:o,msgOnNotSelect:n,getWatchListsByGroup:i,onClose:a}=t,l=(0,s.sO)(),[r,c,p,u]=b(),d=z(t,c,p);return(0,g.jsxs)("div",{children:[(0,g.jsx)($.SelectGroupList,{ref:l,getWatchListsByGroup:i,groupCaption:"In Group:",groupOptions:d,listCaption:"List From:"}),(0,g.jsx)($.RowInputText,{ref:u,caption:"List To:"}),(0,g.jsx)($.ValidationMessages,{validationMessages:r}),(0,g.jsx)($.RowButtons,{refBtClose:Q(t),caption:"Edit",title:"Edit List Name",onPrimary:()=>{const{captionGroup:t,captionList:i}=(0,s.d9)(l)||{},a=(0,s.d9)(u);if(t&&i&&a)e({captionGroup:t,captionListFrom:i,captionListTo:a});else{const e=[];t||e.push(n("Group")),i||e.push(n("List From")),a||e.push(o("List To")),c(e)}},onClear:p,onClose:a})]})},at=t=>{const{getWatchListsByGroup:e,useMsEdit:o,getWatchGroups:n,forActionType:i,onDelete:a,msgOnNotSelect:l,onClose:r}=t,c=(0,s.sO)(),[p,u,d]=b(),[h,x]=(0,s.eJ)((()=>n()));return o((t=>{t&&(t.messages||(t.forActionType===i&&d(),x(n())))})),(0,g.jsxs)("div",{children:[(0,g.jsx)($.SelectGroupList,{ref:c,getWatchListsByGroup:e,groupCaption:"In Group:",groupOptions:h,listCaption:"List:"}),(0,g.jsx)($.ValidationMessages,{validationMessages:p}),(0,g.jsx)($.RowButtons,{refBtClose:Q(t),caption:"Delete",title:"Delete List",onPrimary:()=>{const{captionGroup:t,captionList:e}=(0,s.d9)(c)||{};if(t&&e)a({captionGroup:t,captionList:e});else{const o=[];t||o.push(l("Group")),e||o.push(l("List")),u(o)}},onClear:d,onClose:r})]})},lt={LoadItem:T,EditGroup:st,EditList:(0,n.Z)((t=>{let{isShow:e,onClose:o}=t;const[s,n]=(0,Z.Z)();return(0,g.jsx)(d.Z,{refFocusLast:s,caption:"Watch Lists Edit",isShow:e,isWithButton:!1,onClose:o,children:(0,g.jsxs)(I.Z,{id:"eld",width:380,useMsEdit:v.b6,getWatchGroups:v.oq,msgOnNotSelect:B.xW,msgOnIsEmptyName:B.eT,onClose:o,setRefFocusLast:n,children:[(0,g.jsx)(O.Z,{title:"Create",children:(0,g.jsx)(nt,{forActionType:R.Nf,onCreate:v._B})}),(0,g.jsx)(O.Z,{title:"Rename",children:(0,g.jsx)(it,{getWatchListsByGroup:v.Sg,forActionType:R.gm,onRename:v.W})}),(0,g.jsx)(O.Z,{title:"Delete",children:(0,g.jsx)(at,{getWatchListsByGroup:v.Sg,forActionType:R.of,onDelete:v.Rs})})]})})}))}}}]);