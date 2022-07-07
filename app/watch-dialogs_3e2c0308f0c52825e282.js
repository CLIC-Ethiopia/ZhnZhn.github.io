"use strict";(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[437],{600:(t,e,o)=>{o.r(e),o.d(e,{default:()=>nt});var s=o(9679),n=o(1398),i=o(7020),a=o(9468),r=o(5606),l=o(3115),c=o(4485),u=o(5138),p=o(6623),d=o(2276),h=o(5893);const m={width:365},g={width:265},C={display:"inline-block",maxWidth:250,height:32,verticalAlign:"middle"};class x extends s.Component{constructor(t){super(t),this._toggleIsShowLabels=()=>{this.setState((t=>({...t,isShowLabels:!t.isShowLabels})))},this._toggleIsValue=()=>{this.setState((t=>({...t,isValue:!t.isValue})))},this._toggleIsShowDate=()=>{this.setState((t=>({...t,isShowDate:!t.isShowDate})))},this._handleLoad=()=>{const t=this._createValidationMessages();if(t.isValid){const{data:t,onClose:e}=this.props,{id:o,title:s,subtitle:n,caption:i,columnName:a,dataColumn:u,seriaColumnNames:p,itemConf:d={}}=t,{fromDate:h,toDate:m}=this.datesFragment.getValues(),g={id:o,title:s,subtitle:n,value:i,item:i,fromDate:h,toDate:m,columnName:a,dataColumn:u,seriaColumnNames:p,loadId:d.loadId||l.O8,...d};r.LX[r.SX]({chartType:l.e9,browserType:c.lx},g),e()}t.isValid?this.state.validationMessages.length>0&&this.setState({validationMessages:t}):this.setState({validationMessages:t})},this._createValidationMessages=()=>{let t=[];const{isValid:e,datesMsg:o}=this.datesFragment.getValidation();return e||(t=t.concat(o)),t.isValid=0===t.length,t},this._handleClose=()=>{this.props.onClose(),this.setState({validationMessages:[]})},this._refDates=t=>this.datesFragment=t;const{fromDate:e,initToDate:o,onTestDate:s,itemConf:i={}}=t.data,u=!!i.x;this.toolbarButtons=[{caption:"L",title:"Click to toggle input labels",onClick:this._toggleIsShowLabels},{caption:"V",title:"Click to toggle row value",onClick:this._toggleIsValue},{caption:"D",title:"Click to toggle date input",onClick:this._toggleIsShowDate}],this._commandButtons=[(0,h.jsx)(p.Z.Button.Load,{onClick:this._handleLoad},"load")],this.state={isToolbar:!0,isShowLabels:a.Z.wideWidth(),validationMessages:[],isShowDate:!1,isValue:u,initFromDate:e||(0,n.QS)(2),initToDate:o||(0,n.TP)(),onTestDate:s||n.RB}}shouldComponentUpdate(t,e){return t===this.props||t.isShow!==this.props.isShow}render(){const{isShow:t,data:e}=this.props,{caption:o,itemConf:s}=e,{dataSource:a,x:r,y:l}=s||{},{isShowLabels:c,isShowDate:x,isValue:S,initFromDate:j,initToDate:f,onTestDate:w,validationMessages:y}=this.state,T=c?m:g,L=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=""),((0,i.Z)(e)+" "+(0,n.P9)(t)).trim()}(r,l);return(0,h.jsxs)(u.Z,{style:T,isShow:t,caption:"Load Item",commandButtons:this._commandButtons,onClose:this._handleClose,children:[(0,h.jsx)(p.Z.Toolbar,{isShow:!0,buttons:this.toolbarButtons}),(0,h.jsx)(p.Z.Row.Text,{isShowLabels:c,styleText:C,caption:"Item:",text:o}),(0,h.jsx)(p.Z.ShowHide,{isShow:S,children:(0,h.jsx)(p.Z.Row.Text,{isShowLabels:c,styleText:C,caption:"Value:",text:L})}),(0,h.jsx)(p.Z.ShowHide,{isShow:x,children:(0,h.jsx)(p.Z.DatesFragment,{ref:this._refDates,isShowLabels:c,initFromDate:j,initToDate:f,onTestDate:w})}),(0,h.jsx)(p.Z.Row.Text,{isShowLabels:c,styleText:C,caption:"Source:",text:a}),(0,h.jsx)(d.Z,{validationMessages:y})]})}}x.defaultProps={data:{}};const S=x;var j=o(6016),f=o(3218),w=o(2125),y=o(5854),T=o(3297),L=o(795),R=o(5313),b=o(7376);const G={...b.UR,lineHeight:2},Z={...b.m9,width:120},v={width:250,height:30,paddingLeft:10,marginLeft:0,marginRight:0},D=(0,s.forwardRef)(((t,e)=>{let{caption:o}=t;return(0,h.jsxs)("div",{style:G,children:[(0,h.jsx)("span",{style:Z,children:o}),(0,h.jsx)(R.Z,{ref:e,style:v})]})}));var I=o(6614);const V={...b.m9,width:120},k=t=>{let{caption:e,options:o,onSelect:s}=t;return(0,h.jsxs)("div",{style:b.UR,children:[(0,h.jsx)("span",{style:V,children:e}),(0,h.jsx)(I.Z,{width:"250",options:o,onSelect:s})]})};var N=o(5868);const M=()=>{const t=(0,s.useRef)(),e=(0,s.useCallback)((e=>{const{caption:o}=e||{};t.current=o}),[]);return[t,e]},B=(0,s.forwardRef)(((t,e)=>{const[o,n]=(0,N.Z)(t),{store:i,groupCaption:a,groupOptions:r,listCaption:l}=t,c=(0,s.useRef)(),[u,p]=M(),[d,m]=(0,s.useState)([]),g=(0,s.useCallback)((t=>{const{caption:e}=t||{};t&&e?(c.current=e,u.current=null,m(t.lists||[])):c.current=null}),[]);return(0,s.useEffect)((()=>{const e=n();if(e!==t){if(e.groupOptions!==r)c.current=null,u.current=null,m([]);else if(c.current){const t=i.getWatchListsByGroup(c.current);t!==d&&(u.current=null,m(t))}o(t)}}),[t]),(0,s.useImperativeHandle)(e,(()=>({getValue:()=>({captionGroup:c.current,captionList:u.current})}))),(0,h.jsxs)("div",{children:[(0,h.jsx)(k,{caption:a,options:r,onSelect:g}),(0,h.jsx)(k,{caption:l,options:d,onSelect:p})]})}));var O=o(481);const A={...o(390).x,margin:"8px 4px 10px 0"},F=t=>{let{Primary:e,withoutClear:o,onClear:s,onClose:n}=t;return(0,h.jsxs)("div",{style:A,children:[e,!o&&(0,h.jsx)(O.Z.Clear,{onClick:s}),(0,h.jsx)(O.Z.Close,{onClick:n})]})},W={RowInputText:D,RowInputSelect:k,SelectGroupList:B,Button:O.Z,RowButtons:F,ValidationMessages:d.Z},_=t=>{let{actionCompleted:e,actionFailed:o,forActionType:n,onCreate:i,msgOnIsEmptyName:a,onClose:r}=t;const l=(0,s.useRef)(),[c,u]=(0,s.useState)([]),p=((t,e,o,s)=>(0,h.jsx)(W.Button.Primary,{caption:"Create",title:"Create New Group",onClick:()=>{const n=t.current.getValue();n?o({caption:n}):(t.current.setValue(""),e([s("Group")]))}}))(l,u,i,a),d=()=>{l.current.setValue(""),u([])};return(0,L.Z)(((t,s)=>{t===e&&s.forActionType===n?d():t===o&&s.forActionType===n&&u(s.messages)})),(0,h.jsxs)("div",{children:[(0,h.jsx)(W.RowInputText,{ref:l,caption:"Group:"}),(0,h.jsx)(W.ValidationMessages,{validationMessages:c}),(0,h.jsx)(W.RowButtons,{Primary:p,onClear:d,onClose:r})]})},E=t=>{const e=(0,s.useRef)(),o=(0,s.useCallback)((()=>{const{current:o}=e;o&&(o.setValue(""),t([]))}),[]);return[e,o]},P=t=>{let{store:e,actionCompleted:o,actionFailed:n,forActionType:i,onRename:a,msgOnNotSelect:r,msgOnIsEmptyName:l,onClose:c}=t;const[u,p]=(0,s.useState)((()=>e.getWatchGroups())),[d,m]=(0,s.useState)([]),[g,C]=E(m),[x,S]=M(),j=(0,s.useCallback)((()=>{const t=g.current.getValue(),e=x.current;if(t&&e)a({captionFrom:e,captionTo:t});else{const o=[];e||o.push(r("Group From")),t||o.push(l("Group To")),m(o)}}),[]),f=(0,s.useMemo)((()=>(0,h.jsx)(W.Button.Primary,{caption:"Edit",title:"Edit Group Name",onClick:j})),[j]);return(0,L.Z)(((t,s)=>{t===o?(s.forActionType===i&&C(),p(e.getWatchGroups())):t===n&&s.forActionType===i&&m(s.messages)})),(0,h.jsxs)("div",{children:[(0,h.jsx)(W.RowInputSelect,{caption:"Group From:",options:u,onSelect:S}),(0,h.jsx)(W.RowInputText,{ref:g,caption:"Group To:"}),(0,h.jsx)(W.ValidationMessages,{validationMessages:d}),(0,h.jsx)(W.RowButtons,{Primary:f,onClear:C,onClose:c})]})},$=t=>({groups:t.getWatchGroups,errs:[]}),H=(t,e)=>({type:t,payload:e}),U=(t,e)=>{let{type:o,payload:s}=e;switch(o){case"a":return{groups:s,errs:[]};case"b":return{...t,errs:s};default:return t}},X=t=>{let{store:e,actionCompleted:o,forActionType:n,onDelete:i,msgOnNotSelect:a,onClose:r}=t;const l=(0,s.useRef)(null),[c,u,p,d]=((t,e)=>{const[{groups:o,errs:n},i]=(0,s.useReducer)(U,t,$);return[o,n,t=>i(H("a",t)),()=>i(H("b",[e("Group")]))]})(e,a),m=((t,e,o)=>(0,h.jsx)(W.Button.Primary,{caption:"Delete",title:"Delete Group",onClick:()=>{const{current:s}=t;s?(e({caption:s}),t.current=null):o()}}))(l,i,d);return(0,L.Z)(((t,s)=>{t===o&&p(e.getWatchGroups())})),(0,h.jsxs)("div",{children:[(0,h.jsx)(W.RowInputSelect,{caption:"Group:",options:c,onSelect:t=>{l.current=t&&t.caption||null}}),(0,h.jsx)(W.ValidationMessages,{validationMessages:u}),(0,h.jsx)(W.RowButtons,{Primary:m,withoutClear:!0,onClose:r})]})},Q=f.e4[f.R2],q=f.e4[f.Bv],z=f.e4[f.E2],J=(0,j.Z)((t=>{let{isShow:e,store:o,onClose:s}=t;return(0,h.jsx)(u.Z,{caption:"Watch Groups Edit",isShow:e,isWithButton:!1,onClose:s,children:(0,h.jsxs)(y.Z,{width:380,children:[(0,h.jsx)(T.Z,{title:"Create",children:(0,h.jsx)(_,{store:o,actionCompleted:f.$0,actionFailed:f.db,forActionType:f.R2,msgOnIsEmptyName:w.eT,onCreate:Q,onClose:s})}),(0,h.jsx)(T.Z,{title:"Rename",children:(0,h.jsx)(P,{store:o,actionCompleted:f.$0,actionFailed:f.db,forActionType:f.Bv,msgOnNotSelect:w.xW,msgOnIsEmptyName:w.eT,onRename:q,onClose:s})}),(0,h.jsx)(T.Z,{title:"Delete",children:(0,h.jsx)(X,{store:o,actionCompleted:f.$0,forActionType:f.E2,msgOnNotSelect:w.xW,onDelete:z,onClose:s})})]})})})),K=t=>{let{store:e,onCreate:o,msgOnNotSelect:n,msgOnIsEmptyName:i,actionCompleted:a,actionFailed:r,forActionType:l,onClose:c}=t;const[u,p]=(0,s.useState)((()=>e.getWatchGroups())),[d,m]=(0,s.useState)([]),[g,C]=E(m),[x,S]=M(),j=(0,s.useCallback)((()=>{const t=g.current.getValue(),e=x.current;if(e&&t)o({captionGroup:e,captionList:t});else{const o=[];e||o.push(n("In Group")),t||o.push(i("List")),m(o)}}),[]),f=(0,s.useMemo)((()=>(0,h.jsx)(W.Button.Primary,{caption:"Create",title:"Create New List",onClick:j})),[j]);return(0,L.Z)(((t,o)=>{t===a?(o.forActionType===l&&C(),p(e.getWatchGroups())):t===r&&o.forActionType===l&&m(o.messages)})),(0,h.jsxs)("div",{children:[(0,h.jsx)(W.RowInputSelect,{caption:"In Group:",options:u,onSelect:S}),(0,h.jsx)(W.RowInputText,{ref:g,caption:"List:"}),(0,h.jsx)(W.ValidationMessages,{validationMessages:d}),(0,h.jsx)(W.RowButtons,{Primary:f,onClear:C,onClose:c})]})},Y=t=>{let{store:e,onRename:o,msgOnIsEmptyName:n,msgOnNotSelect:i,actionCompleted:a,actionFailed:r,forActionType:l,onClose:c}=t;const[u,p]=(0,s.useState)((()=>e.getWatchGroups())),[d,m]=(0,s.useState)([]),g=(0,s.useRef)(),[C,x]=E(m),S=(0,s.useCallback)((()=>{const{captionGroup:t,captionList:e}=g.current.getValue(),s=C.current.getValue();if(t&&e&&s)o({captionGroup:t,captionListFrom:e,captionListTo:s});else{const o=[];t||o.push(i("Group")),e||o.push(i("List From")),s||o.push(n("List To")),m(o)}}),[]),j=(0,s.useMemo)((()=>(0,h.jsx)(W.Button.Primary,{caption:"Edit",title:"Edit List Name",onClick:S})),[S]);return(0,L.Z)(((t,o)=>{t===a?(o.forActionType===l&&x(),p(e.getWatchGroups())):t===r&&o.forActionType===l&&m(o.messages)})),(0,h.jsxs)("div",{children:[(0,h.jsx)(W.SelectGroupList,{ref:g,store:e,groupCaption:"In Group:",groupOptions:u,listCaption:"List From:"}),(0,h.jsx)(W.RowInputText,{ref:C,caption:"List To:"}),(0,h.jsx)(W.ValidationMessages,{validationMessages:d}),(0,h.jsx)(W.RowButtons,{Primary:j,onClear:x,onClose:c})]})},tt=t=>{let{store:e,actionCompleted:o,forActionType:n,onDelete:i,msgOnNotSelect:a,onClose:r}=t;const[l,c]=(0,s.useState)((()=>e.getWatchGroups())),[u,p]=(0,s.useState)([]),d=(0,s.useRef)(),m=(0,s.useCallback)((()=>p([])),[]),g=(0,s.useCallback)((()=>{const{captionGroup:t,captionList:e}=d.current.getValue();if(t&&e)i({captionGroup:t,captionList:e});else{const o=[];t||o.push(a("Group")),e||o.push(a("List")),p(o)}}),[]),C=(0,s.useMemo)((()=>(0,h.jsx)(W.Button.Primary,{caption:"Delete",title:"Delete List",onClick:g})),[g]);return(0,L.Z)(((t,s)=>{t===o&&(s.forActionType===n&&m(),c(e.getWatchGroups()))})),(0,h.jsxs)("div",{children:[(0,h.jsx)(W.SelectGroupList,{ref:d,store:e,groupCaption:"In Group:",groupOptions:l,listCaption:"List:"}),(0,h.jsx)(W.ValidationMessages,{validationMessages:u}),(0,h.jsx)(W.RowButtons,{Primary:C,onClear:m,onClose:r})]})},et=f.e4[f.Nf],ot=f.e4[f.gm],st=f.e4[f.of],nt={LoadItem:S,EditGroup:J,EditList:(0,j.Z)((t=>{let{isShow:e,store:o,onClose:s}=t;return(0,h.jsx)(u.Z,{caption:"Watch Lists Edit",isShow:e,isWithButton:!1,onClose:s,children:(0,h.jsxs)(y.Z,{width:380,children:[(0,h.jsx)(T.Z,{title:"Create",children:(0,h.jsx)(K,{store:o,actionCompleted:f.$0,actionFailed:f.db,forActionType:f.Nf,msgOnNotSelect:w.xW,msgOnIsEmptyName:w.eT,onCreate:et,onClose:s})}),(0,h.jsx)(T.Z,{title:"Rename",children:(0,h.jsx)(Y,{store:o,actionCompleted:f.$0,actionFailed:f.db,forActionType:f.gm,msgOnNotSelect:w.xW,msgOnIsEmptyName:w.eT,onRename:ot,onClose:s})}),(0,h.jsx)(T.Z,{title:"Delete",children:(0,h.jsx)(tt,{store:o,actionCompleted:f.$0,actionFailed:f.db,forActionType:f.of,msgOnNotSelect:w.xW,onDelete:st,onClose:s})})]})})}))}}}]);