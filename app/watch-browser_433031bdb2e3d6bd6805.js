(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[341],{238:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>at});var n=r(5354),i=r.n(n),o=r(5893),a=r(9679),s=r(3014),d=r(2038),p=r(3218),l=r(8685),c=r(4832),u="bt__watch__bar",h={ROOT:{marginBottom:10},BT_LIST:{marginLeft:20}};const D=function(t){var e=t.isShow,r=t.onClickGroup,n=t.onClickList;return e?(0,o.jsxs)("div",{style:h.ROOT,children:[(0,o.jsx)(c.Z,{caption:"GROUP",isOverwriteClass:!0,className:u,onClick:r}),(0,o.jsx)(c.Z,{caption:"LIST",isOverwriteClass:!0,className:u,style:h.BT_LIST,onClick:n})]}):null};var g=r(7154),f=r.n(g),_=r(2306),v=r(8636),S={ITEM_DIV:{position:"relative",paddingRight:40,paddingTop:5,paddingBottom:5},ITEM_SPAN:{display:"inline-block",width:"100%",maxWidth:250,height:28,verticalAlign:"middle",textOverflow:"ellipsis",overflow:"hidden"},SVG_CLOSE:{position:"absolute",top:10,right:0}};const I=function(t){var e=t.item,r=t.className,n=t.isModeEdit,i=t.option,s=t.onClick,d=t.onClose,p=t.onDragStart,l=t.onDragEnter,c=t.onDragOver,u=t.onDragLeave,h=t.onDrop,D=(e||{}).caption,g=void 0===D?"Not Found":D,I=n?(0,o.jsx)(v.Z,{style:S.SVG_CLOSE,onClose:d.bind(null,i)}):null,T=(0,a.useCallback)((function(){return s(e)}),[e]),L=(0,a.useCallback)((function(t){(0,_.Z)(t)&&T()}),[T]),E=n?{draggable:!0,onDragStart:p.bind(null,i),onDrop:h.bind(null,i),onDragOver:c,onDragEnter:l,onDragLeave:u}:void 0;return(0,o.jsxs)("div",f()({role:"menuitem",tabIndex:"0",className:r,style:S.ITEM_DIV,onClick:T},E,{onKeyUp:L,children:[(0,o.jsx)("span",{style:S.ITEM_SPAN,children:g}),I]}))};var T,L,E,y,b="border-bottom",m="border-left",C=function(t,e){t.persist(),L=t.currentTarget;var r=t.currentTarget.style;E=r.getPropertyValue(b),T=e},O=function(t){var e=L.style;t.currentTarget.style.removeProperty(m),e.removeProperty("border"),e.setProperty(b,E)},w=function(t,e,r){var n=t.currentTarget.style;y=n.getPropertyValue(m),-1!==T.indexOf(e)?n.setProperty(m,function(t){return void 0===t&&(t="green"),"4px solid "+t}(r)):n.setProperty(m,"4px solid red")},x=function(t){var e=t.currentTarget.style;e.removeProperty(m),e.setProperty(m,y)};const G=function(t){Object.assign(t.prototype,{dragStartWithDnDStyle:C,dropWithDnDStyle:O,dragEnterWithDnDStyle:w,dragLeaveWithDnDStyle:x})};const R={setTransferTo:function(t){var e=t.event,r=t.dragId,n=t.xType;Object.assign(e.dataTransfer,{effectAllowed:"move",dropEffect:"move"}).setData("text",JSON.stringify({dragId:r,xType:n}))}};var M=function(t){return function(e,r){var n=e.caption;this.dragStartWithDnDStyle(r,[t.GROUP]),R.setTransferTo({event:r,dragId:n+";",xType:t.GROUP})}},W=function(t,e){return function(r,n){var i=r.caption;this.dropWithDnDStyle(n);var o=JSON.parse(n.dataTransfer.getData("text")),a=o.xType,s=o.dragId,d=i+";";if(a===t.GROUP){if(s===d)return;n.preventDefault(),e.dragDropGroup({dragId:s,dropId:d})}else a===t.LIST&&(n.preventDefault(),e.dragDropList({dragId:s,dropId:d}))}},P=function(t){return function(e){e.preventDefault(),this.dragEnterWithDnDStyle(e,t.GROUP,t.C_GROUP_ENTER)}},j=function(t){t.preventDefault()},k=function(t){t.preventDefault(),this.dragLeaveWithDnDStyle(t)},N=function(t,e){Object.assign(this,{_hDragStartGroup:M(t).bind(this),_hDropGroup:W(t,e).bind(this),_hDragEnterGroup:P(t).bind(this),_hDragOverGroup:j,_hDragLeaveGroup:k.bind(this)})};const Z=function(t){Object.assign(t.prototype,{_bindDnDGroup:N})};var U=function(t){return function(e,r){var n=e.groupCaption,i=e.caption;this.dragStartWithDnDStyle(r,[t.GROUP,t.LIST]),R.setTransferTo({event:r,dragId:n+";"+i,xType:t.LIST})}},B=function(t,e){return function(r,n){var i=r.groupCaption,o=r.caption;this.dropWithDnDStyle(n);var a=JSON.parse(n.dataTransfer.getData("text")),s=a.xType,d=a.dragId,p=i+";"+o+";";if(s===t.LIST){if(d===p)return;n.preventDefault(),e.dragDropList({dragId:d,dropId:p})}else s===t.ITEM&&(n.preventDefault(),e.dragDropItem({dragId:d,dropId:p}))}},V=function(t){return function(e){e.preventDefault(),this.dragEnterWithDnDStyle(e,t.LIST,t.C_LIST_ENTER)}},A=function(t){t.preventDefault()},H=function(t){t.preventDefault(),this.dragLeaveWithDnDStyle(t)},J=function(t,e){Object.assign(this,{_hDragStartList:U(t).bind(this),_hDropList:B(t,e).bind(this),_hDragEnterList:V(t).bind(this),_hDragOverList:A,_hDragLeaveList:H.bind(this)})};const F=function(t){Object.assign(t.prototype,{_bindDnDList:J})};var K=function(t){return function(e,r){var n=e.groupCaption,i=e.listCaption,o=e.caption;this.dragStartWithDnDStyle(r,[t.LIST,t.ITEM]),R.setTransferTo({event:r,dragId:n+";"+i+";"+o,xType:t.ITEM})}},q=function(t,e){return function(r,n){var i=r.groupCaption,o=r.listCaption,a=r.caption;this.dropWithDnDStyle(n);var s=JSON.parse(n.dataTransfer.getData("text")),d=s.xType,p=s.dragId,l=i+";"+o+";"+a;if(d===t.ITEM){if(p===l)return;n.preventDefault(),e.dragDropItem({dragId:p,dropId:l})}}},z=function(t){return function(e){e.preventDefault(),this.dragEnterWithDnDStyle(e,t.ITEM,t.C_LIST_ENTER)}},Q=function(t){t.preventDefault()},X=function(t){t.preventDefault(),this.dragLeaveWithDnDStyle(t)},Y=function(t,e){Object.assign(this,{_hDragStartItem:K(t).bind(this),_hDropItem:q(t,e).bind(this),_hDragEnterItem:z(t).bind(this),_hDragOverItem:Q,_hDragLeaveItem:X.bind(this)})};const $=function(t){Object.assign(t.prototype,{_bindDnDItem:Y})};var tt,et="scroll-container-y scroll-watch",rt="row__type2-topic not-selected",nt="#80c040",it={BROWSER:{paddingRight:0},BT_CIRCLE:{position:"relative",top:3,marginLeft:20},GROUP_DIV:{lineHeight:2},LIST_DIV:{marginLeft:8,paddingLeft:2,borderLeftStyle:"solid",borderLeftWidth:2,borderLeftColor:"inherit",lineHeight:2},ITEM_NOT_SELECTED:{marginRight:10}},ot={GROUP:"GROUP",C_GROUP_ENTER:"#1b75bb",LIST:"LIST",C_LIST_ENTER:nt,ITEM:"ITEM"};const at=function(t){G(t),Z(t),F(t),$(t)}(tt=function(t){function e(e){var r;return(r=t.call(this,e)||this)._onStore=function(t,e){var n=r.props,i=n.browserType,o=n.showAction,a=n.updateAction;t===o&&e===i?r._handlerShow():t===a&&r.setState({watchList:e})},r._handlerHide=function(){r.setState({isShow:!1})},r._handlerShow=function(){r.setState({isShow:!0})},r._handlerToggleEditMode=function(){r.setState({isModeEdit:!r.state.isModeEdit})},r._renderWatchList=function(t){var e=r.state.isModeEdit;return t.groups.map((function(t,n){var i=t.caption,a=t.lists;return(0,o.jsx)(l.Z.OpenClose2,{style:it.GROUP_DIV,caption:i,isDraggable:e,option:{caption:i},onDragStart:r._hDragStartGroup,onDragEnter:r._hDragEnterGroup,onDragOver:r._hDragOverGroup,onDragLeave:r._hDragLeaveGroup,onDrop:r._hDropGroup,children:a&&r._renderLists(a,i)},n)}))},r._renderLists=function(t,e){var n=r.state.isModeEdit;return t.map((function(t,i){var a=t.caption,s=t.items;return(0,o.jsx)(l.Z.OpenClose2,{style:it.LIST_DIV,notSelectedStyle:it.ITEM_NOT_SELECTED,openColor:nt,caption:a,isDraggable:n,option:{groupCaption:e,caption:a},onDragStart:r._hDragStartList,onDragEnter:r._hDragEnterList,onDragOver:r._hDragOverList,onDragLeave:r._hDragLeaveList,onDrop:r._hDropList,children:s&&r._renderItems(s,e,a)},i)}))},r._renderItems=function(t,e,n){var i=r.state.isModeEdit;return t.map((function(t,a){var s=t.id,d=t.caption;return(0,o.jsx)(I,{className:rt,isModeEdit:i,item:t,option:{groupCaption:e,listCaption:n,caption:d},onClick:r._handlerClickItem,onClose:r._handlerRemoveItem,onDragStart:r._hDragStartItem,onDragOver:r._hDragOverItem,onDragEnter:r._hDragEnterItem,onDragLeave:r._hDragLeaveItem,onDrop:r._hDropItem},s)}))},r._bindDnDGroup(ot,p.Z),r._bindDnDList(ot,p.Z),r._bindDnDItem(ot,p.Z),r.state={isShow:!!e.isInitShow,isModeEdit:!1,watchList:e.store.getWatchList()},r}i()(e,t);var r=e.prototype;return r.componentDidMount=function(){this.unsubscribe=this.props.store.listen(this._onStore)},r.componentWillUnmount=function(){this.unsubscribe()},r._handlerSaveWatch=function(){p.Z.saveWatch()},r._handlerEditGroup=function(){d.Z.showModalDialog(s.pL.EDIT_WATCH_GROUP)},r._handlerEditList=function(){d.Z.showModalDialog(s.pL.EDIT_WATCH_LIST)},r._handlerClickItem=function(t){d.Z.showModalDialog(s.pL.LOAD_ITEM,t)},r._handlerRemoveItem=function(t,e){e.stopPropagation(),p.Z.removeItem(t)},r.render=function(){var t=this.props.caption,e=this.state,r=e.isShow,n=e.isModeEdit,i=e.watchList,a=n?"V":"E";return(0,o.jsxs)(l.Z.Browser,{isShow:r,style:it.BROWSER,children:[(0,o.jsxs)(l.Z.BrowserCaption,{caption:t,onClose:this._handlerHide,children:[(0,o.jsx)(l.Z.ButtonCircle,{caption:"S",title:"Save to LocalStorage",style:it.BT_CIRCLE,onClick:this._handlerSaveWatch}),(0,o.jsx)(l.Z.ButtonCircle,{caption:a,title:"Toggle Edit Mode: E/V",style:it.BT_CIRCLE,onClick:this._handlerToggleEditMode})]}),(0,o.jsx)(D,{isShow:n,onClickGroup:this._handlerEditGroup,onClickList:this._handlerEditList}),(0,o.jsx)(l.Z.ScrollPane,{className:et,children:i&&this._renderWatchList(i)})]})},e}(a.Component))||tt}}]);