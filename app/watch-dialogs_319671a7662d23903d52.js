(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[437],{3662:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>gt});var n,s,i,a=o(7154),r=o.n(a),l=o(5354),p=o.n(l),u=o(5893),c=o(9679),h=o(1398),d=o(6513),m=o(3014),g=o(6485),C=o(5138),f=o(82),v=o(2276),T=o(8806),_=h.Z.getFromDate,x=h.Z.getToDate,S=h.Z.isYmd,y=h.Z.mlsToDmy,M={DIALOG:{width:365},DIALOG_SHORT:{width:265},ITEM_TEXT:{display:"inline-block",maxWidth:250,height:32,verticalAlign:"middle",textOverflow:"ellipsis",overflow:"hidden"}};const j=(0,T.Z.dialog)((i=s=function(t){function e(e){var o;(o=t.call(this,e)||this)._handleLoad=function(){var t=o._createValidationMessages();if(t.isValid){var e=o.props,n=e.data,s=e.onClose,i=n.id,a=n.title,l=n.subtitle,p=n.caption,u=n.columnName,c=n.dataColumn,h=n.seriaColumnNames,C=n.itemConf,f=void 0===C?{}:C,v=o.datesFragment.getValues(),T=v.fromDate,_=v.toDate,x=r()({id:i,title:a,subtitle:l,value:p,item:p,fromDate:T,toDate:_,columnName:u,dataColumn:c,seriaColumnNames:h,loadId:f.loadId||m.L2.WL},f);d.Z.loadStock({chartType:g.Z.WATCH_LIST,browserType:m.Aq.WATCH_LIST},x),s()}o._updateValidationMessages(t)},o._createValidationMessages=function(){var t=[],e=o.datesFragment.getValidation(),n=e.isValid,s=e.datesMsg;return n||(t=t.concat(s)),t.isValid=0===t.length,t},o._handleClose=function(){o._handleWithValidationClose(o._createValidationMessages),o.props.onClose()},o._refDates=function(t){return o.datesFragment=t};var n=e.data,s=n.fromDate,i=n.initToDate,a=n.onTestDate,l=n.itemConf,p=!!(void 0===l?{}:l).x;return o.toolbarButtons=o._createType2WithToolbar(e,{isValue:p}),o._commandButtons=[(0,u.jsx)(f.Z.Button.Load,{onClick:o._handleLoad},"load")],o.state=r()({},o._isWithInitialState(),{isShowDate:!1,isValue:p,initFromDate:s||_(2),initToDate:i||x(),onTestDate:a||S}),o}p()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return t===this.props||t.isShow!==this.props.isShow},o.render=function(){var t=this.props,e=t.isShow,o=t.data,n=o.caption,s=o.itemConf,i=void 0===s?{}:s,a=i.dataSource,r=i.x,l=i.y,p=this.state,c=p.isShowLabels,h=p.isShowDate,d=p.isValue,m=p.initFromDate,g=p.initToDate,T=p.onTestDate,_=p.validationMessages,x=c?M.DIALOG:M.DIALOG_SHORT,S=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=""),(e+" "+y(t)).trim()}(r,l);return(0,u.jsxs)(C.Z,{style:x,isShow:e,caption:"Load Item",commandButtons:this._commandButtons,onClose:this._handleClose,children:[(0,u.jsx)(f.Z.Toolbar,{isShow:!0,buttons:this.toolbarButtons}),(0,u.jsx)(f.Z.Row.Text,{isShowLabels:c,styleText:M.ITEM_TEXT,caption:"Item:",text:n}),(0,u.jsx)(f.Z.ShowHide,{isShow:d,children:(0,u.jsx)(f.Z.Row.Text,{isShowLabels:c,styleText:M.ITEM_TEXT,caption:"Value:",text:S})}),(0,u.jsx)(f.Z.ShowHide,{isShow:h,children:(0,u.jsx)(f.Z.DatesFragment,{ref:this._refDates,isShowLabels:c,initFromDate:m,initToDate:g,onTestDate:T})}),(0,u.jsx)(f.Z.Row.Text,{isShowLabels:c,styleText:M.ITEM_TEXT,caption:"Source:",text:a}),(0,u.jsx)(v.Z,{validationMessages:_})]})},e}(c.Component),s.defaultProps={data:{}},n=i))||n;var O=o(3218),G=o(2125),D=o(8580),w=o(2302),L=o(5313),I=o(7376),A={ROW:r()({},I.Z.ROW,{lineHeight:2}),CAPTION:r()({},I.Z.CAPTION,{width:120}),INPUT_TEXT:{width:250,height:30,paddingLeft:10,marginLeft:0,marginRight:0}};const E=(0,c.forwardRef)((function(t,e){var o=t.caption;return(0,u.jsxs)("div",{style:A.ROW,children:[(0,u.jsx)("span",{style:A.CAPTION,children:o}),(0,u.jsx)(L.Z,{ref:e,style:A.INPUT_TEXT})]})}));var Z=o(4298),R={CAPTION:r()({},I.Z.CAPTION,{width:120})};const b=function(t){var e=t.caption,o=t.options,n=t.onSelect;return(0,u.jsxs)("div",{style:I.Z.ROW,children:[(0,u.jsx)("span",{style:R.CAPTION,children:e}),(0,u.jsx)(Z.Z,{width:"250",options:o,onSelect:n})]})};const N=function(t){function e(e){var o;return(o=t.call(this)||this)._handleSelectGroup=function(t){t&&t.caption?(o.groupCaption=t.caption,t.lists?o.setState({listOptions:t.lists}):o.setState({listOptions:[]})):o.groupCaption=null},o._handleSelectList=function(t){o.listCaption=t&&t.caption||null},o.groupCaption=null,o.listCaption=null,o.state={listOptions:[]},o}p()(e,t);var o=e.prototype;return o.UNSAFE_componentWillReceiveProps=function(t){if(t!==this.props)if(t.groupOptions!==this.props.groupOptions)this.groupCaption=null,this.listCaption=null,this.setState({listOptions:[]});else if(this.groupCaption){var e=this.props.store.getWatchListsByGroup(this.groupCaption);e!==this.state.listOptions&&(this.listCaption=null),this.setState({listOptions:e})}},o.render=function(){var t=this.props,e=t.groupCaption,o=t.groupOptions,n=t.listCaption,s=this.state.listOptions;return(0,u.jsxs)("div",{children:[(0,u.jsx)(b,{caption:e,options:o,onSelect:this._handleSelectGroup}),(0,u.jsx)(b,{caption:n,options:s,onSelect:this._handleSelectList})]})},o.getValue=function(){return{captionGroup:this.groupCaption,captionList:this.listCaption}},o.setValueNull=function(){this.groupCaption=null,this.listCaption=null},e}(c.Component);var W=o(481);const B={COMMAND_DIV:{cursor:"default",float:"right",marginTop:"8px",marginBottom:"10px",marginRight:"4px"}};const V=function(t){var e=t.Primary,o=t.withoutClear,n=t.onClear,s=t.onClose;return(0,u.jsxs)("div",{style:B.COMMAND_DIV,children:[e,!o&&(0,u.jsx)(W.Z.Clear,{onClick:n}),(0,u.jsx)(W.Z.Close,{onClick:s})]})};const F={RowInputText:E,RowInputSelect:b,FragmentSelectGroupList:N,Button:W.Z,RowButtons:V,ValidationMessages:v.Z};const P=function(t){function e(e){var o;return(o=t.call(this)||this)._onStore=function(t,e){var n=o.props,s=n.actionCompleted,i=n.actionFailed,a=n.forActionType;t===s&&e.forActionType===a?o._handleClear():t===i&&e.forActionType===a&&o.setState({validationMessages:e.messages})},o._handleClear=function(){o.inputText.setValue(""),o.state.validationMessages.length>0&&o.setState({validationMessages:[]})},o._handleCreate=function(){var t=o.props,e=t.onCreate,n=t.msgOnIsEmptyName,s=o.inputText.getValue();s?e({caption:s}):(o.inputText.setValue(""),o.setState({validationMessages:[n("Group")]}))},o._primaryBt=(0,u.jsx)(F.Button.Primary,{caption:"Create",title:"Create New Group",onClick:o._handleCreate}),o.state={validationMessages:[]},o}p()(e,t);var o=e.prototype;return o.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},o.componentWillUnmount=function(){this.unsubscribe()},o.render=function(){var t=this,e=this.props.onClose,o=this.state.validationMessages;return(0,u.jsxs)("div",{children:[(0,u.jsx)(F.RowInputText,{ref:function(e){return t.inputText=e},caption:"Group:"}),(0,u.jsx)(F.ValidationMessages,{validationMessages:o}),(0,u.jsx)(F.RowButtons,{Primary:this._primaryBt,onClear:this._handleClear,onClose:e})]})},e}(c.Component);const k=function(t){function e(e){var o;return(o=t.call(this)||this)._onStore=function(t,e){var n=o.props,s=n.actionCompleted,i=n.actionFailed,a=n.forActionType,r=n.store;t===s?(e.forActionType===a&&o._handleClear(),o.setState({groupOptions:r.getWatchGroups()})):t===i&&e.forActionType===a&&o.setState({validationMessages:e.messages})},o._handleSelectGroup=function(t){o.captionFrom=t&&t.caption||null},o._handleClear=function(){o.inputText.setValue(""),o.state.validationMessages.length>0&&o.setState({validationMessages:[]})},o._handleRename=function(){var t=o.props,e=t.onRename,n=t.msgOnNotSelect,s=t.msgOnIsEmptyName,i=o.inputText.getValue();if(i&&o.captionFrom)e({captionFrom:o.captionFrom,captionTo:i});else{var a=[];o.captionFrom||a.push(n("Group From")),i||a.push(s("Group To")),o.setState({validationMessages:a})}},o._refInputText=function(t){return o.inputText=t},o.captionFrom=null,o._primaryBt=(0,u.jsx)(F.Button.Primary,{caption:"Edit",title:"Edit Group Name",onClick:o._handleRename}),o.state={groupOptions:e.store.getWatchGroups(),validationMessages:[]},o}p()(e,t);var o=e.prototype;return o.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},o.componentWillUnmount=function(){this.unsubscribe()},o.render=function(){var t=this.props.onClose,e=this.state,o=e.groupOptions,n=e.validationMessages;return(0,u.jsxs)("div",{children:[(0,u.jsx)(F.RowInputSelect,{caption:"Group From:",options:o,onSelect:this._handleSelectGroup}),(0,u.jsx)(F.RowInputText,{ref:this._refInputText,caption:"Group To:"}),(0,u.jsx)(F.ValidationMessages,{validationMessages:n}),(0,u.jsx)(F.RowButtons,{Primary:this._primaryBt,onClear:this._handleClear,onClose:t})]})},e}(c.Component);const U=function(t){function e(e){var o;return(o=t.call(this)||this)._onStore=function(t,e){var n=o.props,s=n.actionCompleted,i=n.forActionType,a=n.store;t===s&&(e.forActionType===i&&o._handleClear(),o.setState({groupOptions:a.getWatchGroups()}))},o._handleSelectGroup=function(t){o.caption=t&&t.caption||null},o._handleClear=function(){o.state.validationMessages.length>0&&o.setState({validationMessages:[]})},o._handleDeleteGroup=function(){var t=o.props,e=t.onDelete,n=t.msgOnNotSelect;o.caption?e({caption:o.caption}):o.setState({validationMessages:[n("Group")]})},o.caption=null,o._primaryBt=(0,u.jsx)(F.Button.Primary,{caption:"Delete",title:"Delete Group",onClick:o._handleDeleteGroup}),o.state={groupOptions:e.store.getWatchGroups(),validationMessages:[]},o}p()(e,t);var o=e.prototype;return o.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},o.componentWillUnmount=function(){this.unsubscribe()},o.render=function(){var t=this.props.onClose,e=this.state,o=e.groupOptions,n=e.validationMessages;return(0,u.jsxs)("div",{children:[(0,u.jsx)(F.RowInputSelect,{caption:"Group:",options:o,onSelect:this._handleSelectGroup}),(0,u.jsx)(F.ValidationMessages,{validationMessages:n}),(0,u.jsx)(F.RowButtons,{Primary:this._primaryBt,withoutClear:!0,onClose:t})]})},e}(c.Component);var H=O.Z.addGroup,J=O.Z.renameGroup,X=O.Z.deleteGroup,q=O.J.EDIT_WATCH_COMPLETED,Y=O.J.EDIT_WATCH_FAILED,z=O.J.ADD_GROUP,K=O.J.RENAME_GROUP,Q=O.J.DELETE_GROUP,$=G.Z.notSelected,tt=G.Z.emptyName;const et=function(t){function e(){return t.apply(this,arguments)||this}p()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return t===this.props||t.isShow!==this.props.isShow},o.render=function(){var t=this.props,e=t.isShow,o=t.store,n=t.onClose;return(0,u.jsx)(C.Z,{caption:"Watch Groups Edit",isShow:e,isWithButton:!1,onClose:n,children:(0,u.jsxs)(D.Z,{width:380,children:[(0,u.jsx)(w.Z,{title:"Create",children:(0,u.jsx)(P,{store:o,actionCompleted:q,actionFailed:Y,forActionType:z,msgOnIsEmptyName:tt,onCreate:H,onClose:n})}),(0,u.jsx)(w.Z,{title:"Rename",children:(0,u.jsx)(k,{store:o,actionCompleted:q,actionFailed:Y,forActionType:K,msgOnNotSelect:$,msgOnIsEmptyName:tt,onRename:J,onClose:n})}),(0,u.jsx)(w.Z,{title:"Delete",children:(0,u.jsx)(U,{store:o,actionCompleted:q,forActionType:Q,msgOnNotSelect:$,onDelete:X,onClose:n})})]})})},e}(c.Component);const ot=function(t){function e(e){var o;return(o=t.call(this)||this)._onStore=function(t,e){var n=o.props,s=n.actionCompleted,i=n.actionFailed,a=n.forActionType,r=n.store;t===s?(e.forActionType===a&&o._handleClear(),o.setState({groupOptions:r.getWatchGroups()})):t===i&&e.forActionType===a&&o.setState({validationMessages:e.messages})},o._handleSelectGroup=function(t){o.captionGroup=t&&t.caption||null},o._handleClear=function(){o.inputText.setValue(""),o.state.validationMessages.length>0&&o.setState({validationMessages:[]})},o._handleCreate=function(){var t=o.props,e=t.onCreate,n=t.msgOnNotSelect,s=t.msgOnIsEmptyName,i=o.inputText.getValue();if(o.captionGroup&&i)e({captionGroup:o.captionGroup,captionList:i});else{var a=[];o.captionGroup||a.push(n("In Group")),i||a.push(s("List")),o.setState({validationMessages:a})}},o._refInputText=function(t){return o.inputText=t},o.captionGroup=null,o._primaryBt=(0,u.jsx)(F.Button.Primary,{caption:"Create",title:"Create New List",onClick:o._handleCreate}),o.state={groupOptions:e.store.getWatchGroups(),validationMessages:[]},o}p()(e,t);var o=e.prototype;return o.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},o.componentWillUnmount=function(){this.unsubscribe()},o.render=function(){var t=this.props.onClose,e=this.state,o=e.groupOptions,n=e.validationMessages;return(0,u.jsxs)("div",{children:[(0,u.jsx)(F.RowInputSelect,{caption:"In Group:",options:o,onSelect:this._handleSelectGroup}),(0,u.jsx)(F.RowInputText,{ref:this._refInputText,caption:"List:"}),(0,u.jsx)(F.ValidationMessages,{validationMessages:n}),(0,u.jsx)(F.RowButtons,{Primary:this._primaryBt,onClear:this._handleClear,onClose:t})]})},e}(c.Component);const nt=function(t){function e(e){var o;return(o=t.call(this)||this)._onStore=function(t,e){var n=o.props,s=n.actionCompleted,i=n.actionFailed,a=n.forActionType,r=n.store;t===s?(e.forActionType===a&&o._handleClear(),o.setState({groupOptions:r.getWatchGroups()})):t===i&&e.forActionType===a&&o.setState({validationMessages:e.messages})},o._handleClear=function(){o.inputText.setValue(""),o.state.validationMessages.length>0&&o.setState({validationMessages:[]})},o._handleRename=function(){var t=o.props,e=t.onRename,n=t.msgOnIsEmptyName,s=t.msgOnNotSelect,i=o.selectGroupList.getValue(),a=i.captionGroup,r=i.captionList,l=o.inputText.getValue();if(a&&r&&l)e({captionGroup:a,captionListFrom:r,captionListTo:l});else{var p=[];a||p.push(s("Group")),r||p.push(s("List From")),l||p.push(n("List To")),o.setState({validationMessages:p})}},o._primaryBt=(0,u.jsx)(F.Button.Primary,{caption:"Edit",title:"Edit List Name",onClick:o._handleRename}),o.state={groupOptions:e.store.getWatchGroups(),listOptions:[],validationMessages:[]},o}p()(e,t);var o=e.prototype;return o.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},o.componentWillUnmount=function(){this.unsubscribe()},o.render=function(){var t=this,e=this.props,o=e.store,n=e.onClose,s=this.state,i=s.groupOptions,a=s.validationMessages;return(0,u.jsxs)("div",{children:[(0,u.jsx)(F.FragmentSelectGroupList,{ref:function(e){return t.selectGroupList=e},store:o,groupCaption:"In Group:",groupOptions:i,listCaption:"List From:"}),(0,u.jsx)(F.RowInputText,{ref:function(e){return t.inputText=e},caption:"List To:"}),(0,u.jsx)(F.ValidationMessages,{validationMessages:a}),(0,u.jsx)(F.RowButtons,{Primary:this._primaryBt,onClear:this._handleClear,onClose:n})]})},e}(c.Component);const st=function(t){function e(e){var o;return(o=t.call(this)||this)._onStore=function(t,e){var n=o.props,s=n.actionCompleted,i=n.forActionType,a=n.store;t===s&&(e.forActionType===i&&o._handleClear(),o.setState({groupOptions:a.getWatchGroups()}))},o._handleClear=function(){o.state.validationMessages.length>0&&o.setState({validationMessages:[]})},o._handleDelete=function(){var t=o.props,e=t.onDelete,n=t.msgOnNotSelect,s=o.selectGroupList.getValue(),i=s.captionGroup,a=s.captionList;if(i&&a)e({captionGroup:i,captionList:a});else{var r=[];i||r.push(n("Group")),a||r.push(n("List")),o.setState({validationMessages:r})}},o._primaryBt=(0,u.jsx)(F.Button.Primary,{caption:"Delete",title:"Delete List",onClick:o._handleDelete}),o.state={groupOptions:e.store.getWatchGroups(),validationMessages:[]},o}p()(e,t);var o=e.prototype;return o.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},o.componentWillUnmount=function(){this.unsubscribe()},o.render=function(){var t=this,e=this.props,o=e.store,n=e.onClose,s=this.state,i=s.groupOptions,a=s.validationMessages;return(0,u.jsxs)("div",{children:[(0,u.jsx)(F.FragmentSelectGroupList,{ref:function(e){return t.selectGroupList=e},store:o,groupCaption:"In Group:",groupOptions:i,listCaption:"List:"}),(0,u.jsx)(F.ValidationMessages,{validationMessages:a}),(0,u.jsx)(F.RowButtons,{Primary:this._primaryBt,onClear:this._handleClear,onClose:n})]})},e}(c.Component);var it=O.Z.createList,at=O.Z.renameList,rt=O.Z.deleteList,lt=O.J.EDIT_WATCH_COMPLETED,pt=O.J.EDIT_WATCH_FAILED,ut=O.J.CREATE_LIST,ct=O.J.RENAME_LIST,ht=O.J.DELETE_LIST,dt=G.Z.notSelected,mt=G.Z.emptyName;const gt={LoadItem:j,EditGroup:et,EditList:function(t){function e(){return t.apply(this,arguments)||this}p()(e,t);var o=e.prototype;return o.shouldComponentUpdate=function(t,e){return t===this.props||t.isShow!==this.props.isShow},o.render=function(){var t=this.props,e=t.isShow,o=t.store,n=t.onClose;return(0,u.jsx)(C.Z,{caption:"Watch Lists Edit",isShow:e,isWithButton:!1,onClose:n,children:(0,u.jsxs)(D.Z,{width:380,children:[(0,u.jsx)(w.Z,{title:"Create",children:(0,u.jsx)(ot,{store:o,actionCompleted:lt,actionFailed:pt,forActionType:ut,msgOnNotSelect:dt,msgOnIsEmptyName:mt,onCreate:it,onClose:n})}),(0,u.jsx)(w.Z,{title:"Rename",children:(0,u.jsx)(nt,{store:o,actionCompleted:lt,actionFailed:pt,forActionType:ct,msgOnNotSelect:dt,msgOnIsEmptyName:mt,onRename:at,onClose:n})}),(0,u.jsx)(w.Z,{title:"Delete",children:(0,u.jsx)(st,{store:o,actionCompleted:lt,actionFailed:pt,forActionType:ht,msgOnNotSelect:dt,onDelete:rt,onClose:n})})]})})},e}(c.Component)}}}]);