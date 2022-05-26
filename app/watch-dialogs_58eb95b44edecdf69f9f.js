"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[437],{7147:(t,e,o)=>{o.r(e),o.d(e,{default:()=>at});var s,n,i,a=o(9679),r=o(1398),l=o(7020),c=o(6420),u=o(3115),p=o(4485),d=o(5138),h=o(3322),m=o(2276),x=o(837),C=o(5893);const g={width:365},f={width:265},j={display:"inline-block",maxWidth:250,height:32,verticalAlign:"middle",textOverflow:"ellipsis",overflow:"hidden"};const y=(0,x.Z.dialog)((i=n=class extends a.Component{constructor(t){super(t),this._handleLoad=()=>{const t=this._createValidationMessages();if(t.isValid){const{data:t,onClose:e}=this.props,{id:o,title:s,subtitle:n,caption:i,columnName:a,dataColumn:r,seriaColumnNames:l,itemConf:d={}}=t,{fromDate:h,toDate:m}=this.datesFragment.getValues(),x={id:o,title:s,subtitle:n,value:i,item:i,fromDate:h,toDate:m,columnName:a,dataColumn:r,seriaColumnNames:l,loadId:d.loadId||u.O8,...d};c.LX[c.SX]({chartType:u.e9,browserType:p.lx},x),e()}this._updateValidationMessages(t)},this._createValidationMessages=()=>{let t=[];const{isValid:e,datesMsg:o}=this.datesFragment.getValidation();return e||(t=t.concat(o)),t.isValid=0===t.length,t},this._handleClose=()=>{this._handleWithValidationClose(this._createValidationMessages),this.props.onClose()},this._refDates=t=>this.datesFragment=t;const{fromDate:e,initToDate:o,onTestDate:s,itemConf:n={}}=t.data,i=!!n.x;this.toolbarButtons=this._createType2WithToolbar(t,{isValue:i}),this._commandButtons=[(0,C.jsx)(h.Z.Button.Load,{onClick:this._handleLoad},"load")],this.state={...this._isWithInitialState(),isShowDate:!1,isValue:i,initFromDate:e||(0,r.QS)(2),initToDate:o||(0,r.TP)(),onTestDate:s||r.RB}}shouldComponentUpdate(t,e){return t===this.props||t.isShow!==this.props.isShow}render(){const{isShow:t,data:e}=this.props,{caption:o,itemConf:s={}}=e,{dataSource:n,x:i,y:a}=s,{isShowLabels:c,isShowDate:u,isValue:p,initFromDate:x,initToDate:y,onTestDate:w,validationMessages:S}=this.state,T=c?g:f,R=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=""),((0,l.Z)(e)+" "+(0,r.P9)(t)).trim()}(i,a);return(0,C.jsxs)(d.Z,{style:T,isShow:t,caption:"Load Item",commandButtons:this._commandButtons,onClose:this._handleClose,children:[(0,C.jsx)(h.Z.Toolbar,{isShow:!0,buttons:this.toolbarButtons}),(0,C.jsx)(h.Z.Row.Text,{isShowLabels:c,styleText:j,caption:"Item:",text:o}),(0,C.jsx)(h.Z.ShowHide,{isShow:p,children:(0,C.jsx)(h.Z.Row.Text,{isShowLabels:c,styleText:j,caption:"Value:",text:R})}),(0,C.jsx)(h.Z.ShowHide,{isShow:u,children:(0,C.jsx)(h.Z.DatesFragment,{ref:this._refDates,isShowLabels:c,initFromDate:x,initToDate:y,onTestDate:w})}),(0,C.jsx)(h.Z.Row.Text,{isShowLabels:c,styleText:j,caption:"Source:",text:n}),(0,C.jsx)(m.Z,{validationMessages:S})]})}},n.defaultProps={data:{}},s=i))||s;var w=o(6016),S=o(3218),T=o(2125),R=o(5854),G=o(3297),L=o(795),Z=o(5313),D=o(7376);const b={...D.UR,lineHeight:2},V={...D.m9,width:120},v={width:250,height:30,paddingLeft:10,marginLeft:0,marginRight:0},I=(0,a.forwardRef)(((t,e)=>{let{caption:o}=t;return(0,C.jsxs)("div",{style:b,children:[(0,C.jsx)("span",{style:V,children:o}),(0,C.jsx)(Z.Z,{ref:e,style:v})]})}));var N=o(6614);const M={...D.m9,width:120},B=t=>{let{caption:e,options:o,onSelect:s}=t;return(0,C.jsxs)("div",{style:D.UR,children:[(0,C.jsx)("span",{style:M,children:e}),(0,C.jsx)(N.Z,{width:"250",options:o,onSelect:s})]})};var O=o(5868);const A=()=>{const t=(0,a.useRef)(),e=(0,a.useCallback)((e=>{const{caption:o}=e||{};t.current=o}),[]);return[t,e]},W=(0,a.forwardRef)(((t,e)=>{const[o,s]=(0,O.Z)(t),{store:n,groupCaption:i,groupOptions:r,listCaption:l}=t,c=(0,a.useRef)(),[u,p]=A(),[d,h]=(0,a.useState)([]),m=(0,a.useCallback)((t=>{const{caption:e}=t||{};t&&e?(c.current=e,u.current=null,h(t.lists||[])):c.current=null}),[]);return(0,a.useEffect)((()=>{const e=s();if(e!==t){if(e.groupOptions!==r)c.current=null,u.current=null,h([]);else if(c.current){const t=n.getWatchListsByGroup(c.current);t!==d&&(u.current=null,h(t))}o(t)}}),[t]),(0,a.useImperativeHandle)(e,(()=>({getValue:()=>({captionGroup:c.current,captionList:u.current})}))),(0,C.jsxs)("div",{children:[(0,C.jsx)(B,{caption:i,options:r,onSelect:m}),(0,C.jsx)(B,{caption:l,options:d,onSelect:p})]})}));var k=o(481);const F={COMMAND_DIV:{cursor:"default",float:"right",marginTop:"8px",marginBottom:"10px",marginRight:"4px"}},_=t=>{let{Primary:e,withoutClear:o,onClear:s,onClose:n}=t;return(0,C.jsxs)("div",{style:F.COMMAND_DIV,children:[e,!o&&(0,C.jsx)(k.Z.Clear,{onClick:s}),(0,C.jsx)(k.Z.Close,{onClick:n})]})},E={RowInputText:I,RowInputSelect:B,SelectGroupList:W,Button:k.Z,RowButtons:_,ValidationMessages:m.Z},P=t=>{let{actionCompleted:e,actionFailed:o,forActionType:s,onCreate:n,msgOnIsEmptyName:i,onClose:r}=t;const l=(0,a.useRef)(),[c,u]=(0,a.useState)([]),p=((t,e,o,s)=>(0,C.jsx)(E.Button.Primary,{caption:"Create",title:"Create New Group",onClick:()=>{const n=t.current.getValue();n?o({caption:n}):(t.current.setValue(""),e([s("Group")]))}}))(l,u,n,i),d=()=>{l.current.setValue(""),u([])};return(0,L.Z)(((t,n)=>{t===e&&n.forActionType===s?d():t===o&&n.forActionType===s&&u(n.messages)})),(0,C.jsxs)("div",{children:[(0,C.jsx)(E.RowInputText,{ref:l,caption:"Group:"}),(0,C.jsx)(E.ValidationMessages,{validationMessages:c}),(0,C.jsx)(E.RowButtons,{Primary:p,onClear:d,onClose:r})]})},$=t=>{const e=(0,a.useRef)(),o=(0,a.useCallback)((()=>{const{current:o}=e;o&&(o.setValue(""),t([]))}),[]);return[e,o]},H=t=>{let{store:e,actionCompleted:o,actionFailed:s,forActionType:n,onRename:i,msgOnNotSelect:r,msgOnIsEmptyName:l,onClose:c}=t;const[u,p]=(0,a.useState)((()=>e.getWatchGroups())),[d,h]=(0,a.useState)([]),[m,x]=$(h),[g,f]=A(),j=(0,a.useCallback)((()=>{const t=m.current.getValue(),e=g.current;if(t&&e)i({captionFrom:e,captionTo:t});else{const o=[];e||o.push(r("Group From")),t||o.push(l("Group To")),h(o)}}),[]),y=(0,a.useMemo)((()=>(0,C.jsx)(E.Button.Primary,{caption:"Edit",title:"Edit Group Name",onClick:j})),[j]);return(0,L.Z)(((t,i)=>{t===o?(i.forActionType===n&&x(),p(e.getWatchGroups())):t===s&&i.forActionType===n&&h(i.messages)})),(0,C.jsxs)("div",{children:[(0,C.jsx)(E.RowInputSelect,{caption:"Group From:",options:u,onSelect:f}),(0,C.jsx)(E.RowInputText,{ref:m,caption:"Group To:"}),(0,C.jsx)(E.ValidationMessages,{validationMessages:d}),(0,C.jsx)(E.RowButtons,{Primary:y,onClear:x,onClose:c})]})},U=t=>({groups:t.getWatchGroups,errs:[]}),X=(t,e)=>({type:t,payload:e}),Q=(t,e)=>{let{type:o,payload:s}=e;switch(o){case"a":return{groups:s,errs:[]};case"b":return{...t,errs:s};default:return t}},q=t=>{let{store:e,actionCompleted:o,forActionType:s,onDelete:n,msgOnNotSelect:i,onClose:r}=t;const l=(0,a.useRef)(null),[c,u,p,d]=((t,e)=>{const[{groups:o,errs:s},n]=(0,a.useReducer)(Q,t,U);return[o,s,t=>n(X("a",t)),()=>n(X("b",[e("Group")]))]})(e,i),h=((t,e,o)=>(0,C.jsx)(E.Button.Primary,{caption:"Delete",title:"Delete Group",onClick:()=>{const{current:s}=t;s?(e({caption:s}),t.current=null):o()}}))(l,n,d);return(0,L.Z)(((t,s)=>{t===o&&p(e.getWatchGroups())})),(0,C.jsxs)("div",{children:[(0,C.jsx)(E.RowInputSelect,{caption:"Group:",options:c,onSelect:t=>{l.current=t&&t.caption||null}}),(0,C.jsx)(E.ValidationMessages,{validationMessages:u}),(0,C.jsx)(E.RowButtons,{Primary:h,withoutClear:!0,onClose:r})]})},z=S.e4[S.R2],J=S.e4[S.Bv],K=S.e4[S.E2],Y=(0,w.Z)((t=>{let{isShow:e,store:o,onClose:s}=t;return(0,C.jsx)(d.Z,{caption:"Watch Groups Edit",isShow:e,isWithButton:!1,onClose:s,children:(0,C.jsxs)(R.Z,{width:380,children:[(0,C.jsx)(G.Z,{title:"Create",children:(0,C.jsx)(P,{store:o,actionCompleted:S.$0,actionFailed:S.db,forActionType:S.R2,msgOnIsEmptyName:T.eT,onCreate:z,onClose:s})}),(0,C.jsx)(G.Z,{title:"Rename",children:(0,C.jsx)(H,{store:o,actionCompleted:S.$0,actionFailed:S.db,forActionType:S.Bv,msgOnNotSelect:T.xW,msgOnIsEmptyName:T.eT,onRename:J,onClose:s})}),(0,C.jsx)(G.Z,{title:"Delete",children:(0,C.jsx)(q,{store:o,actionCompleted:S.$0,forActionType:S.E2,msgOnNotSelect:T.xW,onDelete:K,onClose:s})})]})})})),tt=t=>{let{store:e,onCreate:o,msgOnNotSelect:s,msgOnIsEmptyName:n,actionCompleted:i,actionFailed:r,forActionType:l,onClose:c}=t;const[u,p]=(0,a.useState)((()=>e.getWatchGroups())),[d,h]=(0,a.useState)([]),[m,x]=$(h),[g,f]=A(),j=(0,a.useCallback)((()=>{const t=m.current.getValue(),e=g.current;if(e&&t)o({captionGroup:e,captionList:t});else{const o=[];e||o.push(s("In Group")),t||o.push(n("List")),h(o)}}),[]),y=(0,a.useMemo)((()=>(0,C.jsx)(E.Button.Primary,{caption:"Create",title:"Create New List",onClick:j})),[j]);return(0,L.Z)(((t,o)=>{t===i?(o.forActionType===l&&x(),p(e.getWatchGroups())):t===r&&o.forActionType===l&&h(o.messages)})),(0,C.jsxs)("div",{children:[(0,C.jsx)(E.RowInputSelect,{caption:"In Group:",options:u,onSelect:f}),(0,C.jsx)(E.RowInputText,{ref:m,caption:"List:"}),(0,C.jsx)(E.ValidationMessages,{validationMessages:d}),(0,C.jsx)(E.RowButtons,{Primary:y,onClear:x,onClose:c})]})},et=t=>{let{store:e,onRename:o,msgOnIsEmptyName:s,msgOnNotSelect:n,actionCompleted:i,actionFailed:r,forActionType:l,onClose:c}=t;const[u,p]=(0,a.useState)((()=>e.getWatchGroups())),[d,h]=(0,a.useState)([]),m=(0,a.useRef)(),[x,g]=$(h),f=(0,a.useCallback)((()=>{const{captionGroup:t,captionList:e}=m.current.getValue(),i=x.current.getValue();if(t&&e&&i)o({captionGroup:t,captionListFrom:e,captionListTo:i});else{const o=[];t||o.push(n("Group")),e||o.push(n("List From")),i||o.push(s("List To")),h(o)}}),[]),j=(0,a.useMemo)((()=>(0,C.jsx)(E.Button.Primary,{caption:"Edit",title:"Edit List Name",onClick:f})),[f]);return(0,L.Z)(((t,o)=>{t===i?(o.forActionType===l&&g(),p(e.getWatchGroups())):t===r&&o.forActionType===l&&h(o.messages)})),(0,C.jsxs)("div",{children:[(0,C.jsx)(E.SelectGroupList,{ref:m,store:e,groupCaption:"In Group:",groupOptions:u,listCaption:"List From:"}),(0,C.jsx)(E.RowInputText,{ref:x,caption:"List To:"}),(0,C.jsx)(E.ValidationMessages,{validationMessages:d}),(0,C.jsx)(E.RowButtons,{Primary:j,onClear:g,onClose:c})]})},ot=t=>{let{store:e,actionCompleted:o,forActionType:s,onDelete:n,msgOnNotSelect:i,onClose:r}=t;const[l,c]=(0,a.useState)((()=>e.getWatchGroups())),[u,p]=(0,a.useState)([]),d=(0,a.useRef)(),h=(0,a.useCallback)((()=>p([])),[]),m=(0,a.useCallback)((()=>{const{captionGroup:t,captionList:e}=d.current.getValue();if(t&&e)n({captionGroup:t,captionList:e});else{const o=[];t||o.push(i("Group")),e||o.push(i("List")),p(o)}}),[]),x=(0,a.useMemo)((()=>(0,C.jsx)(E.Button.Primary,{caption:"Delete",title:"Delete List",onClick:m})),[m]);return(0,L.Z)(((t,n)=>{t===o&&(n.forActionType===s&&h(),c(e.getWatchGroups()))})),(0,C.jsxs)("div",{children:[(0,C.jsx)(E.SelectGroupList,{ref:d,store:e,groupCaption:"In Group:",groupOptions:l,listCaption:"List:"}),(0,C.jsx)(E.ValidationMessages,{validationMessages:u}),(0,C.jsx)(E.RowButtons,{Primary:x,onClear:h,onClose:r})]})},st=S.e4[S.Nf],nt=S.e4[S.gm],it=S.e4[S.of],at={LoadItem:y,EditGroup:Y,EditList:(0,w.Z)((t=>{let{isShow:e,store:o,onClose:s}=t;return(0,C.jsx)(d.Z,{caption:"Watch Lists Edit",isShow:e,isWithButton:!1,onClose:s,children:(0,C.jsxs)(R.Z,{width:380,children:[(0,C.jsx)(G.Z,{title:"Create",children:(0,C.jsx)(tt,{store:o,actionCompleted:S.$0,actionFailed:S.db,forActionType:S.Nf,msgOnNotSelect:T.xW,msgOnIsEmptyName:T.eT,onCreate:st,onClose:s})}),(0,C.jsx)(G.Z,{title:"Rename",children:(0,C.jsx)(et,{store:o,actionCompleted:S.$0,actionFailed:S.db,forActionType:S.gm,msgOnNotSelect:T.xW,msgOnIsEmptyName:T.eT,onRename:nt,onClose:s})}),(0,C.jsx)(G.Z,{title:"Delete",children:(0,C.jsx)(ot,{store:o,actionCompleted:S.$0,actionFailed:S.db,forActionType:S.of,msgOnNotSelect:T.xW,onDelete:it,onClose:s})})]})})}))}}}]);