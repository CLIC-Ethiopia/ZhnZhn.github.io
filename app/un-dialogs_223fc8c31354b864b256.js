(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[673],{4376:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>m});var a,n=t(7154),i=t.n(n),r=t(1506),s=t.n(r),l=t(5354),h=t.n(l),u=t(5893),c=t(9679),d=t(82),p=d.Z.Decor,g=d.Z.crMenuMore,w=[{caption:"Export Value",value:{rg:2,measure:"TradeValue"}},{caption:"Export Weight or Quantity",value:{rg:2,measure:"NetWeight"}},{caption:"Export Average Price",value:{rg:2,measure:"avgPrice"}},{caption:"Import Value",value:{rg:1,measure:"TradeValue"}},{caption:"Import Weight or Quantity",value:{rg:1,measure:"NetWeight"}},{caption:"Import Average Price",value:{rg:1,measure:"avgPrice"}}];const m={UnDialog5:(0,p.dialog)(a=function(e){function o(o){var t;return(t=e.call(this,o)||this)._handleSelectOne=function(e){t.one=e},t._handleSelectTradeFlow=function(e){t.tradeFlow=e},t._handleLoad=function(){t._handleWithValidationLoad(t._createValidationMessages(),t._createLoadOption)},t._createValidationMessages=function(){var e=[],o=t.groupItem.getValidation(),a=o.isValid,n=o.msg;a||(e=e.concat(n));var i=t.datesFragment.getValidation(),r=i.isValid,s=i.datesMsg;return r||(e=e.concat(s)),e.isValid=0===e.length,e},t._createLoadOption=function(){var e=t.groupItem.getValues(),o=e.one,a=e.two;return t.props.loadFn(t.props,{one:t.one,two:o,three:a,tradeFlow:t.tradeFlow})},t._handleClose=function(){t._handleWithValidationClose()},t._handleMode=function(e,o){t[e]=o},t._refGroupItem=function(e){return t.groupItem=e},t._refDates=function(e){return t.datesFragment=e},t._menuMore=g(s()(t),{toggleToolBar:t._toggleWithToolbar,onAbout:t._clickInfoWithToolbar}),t.toolbarButtons=t._createType2WithToolbar(o,{isShowOptions:!0}),t._commandButtons=t._crCommandsWithLoad(s()(t)),t.state=i()({},t._isWithInitialState(),{isShowDate:!1,isShowOptions:!1}),t}h()(o,e);var t=o.prototype;return t.shouldComponentUpdate=function(e,o){return this.props===e||this.props.isShow!==e.isShow},t.render=function(){var e=this.props,o=e.caption,t=e.isShow,a=e.onShow,n=e.onFront,i=e.oneCaption,r=e.oneURI,s=e.oneJsonProp,l=e.twoCaption,h=e.twoURI,c=e.twoJsonProp,p=e.threeCaption,g=e.msgOnNotSelected,m=e.initFromDate,S=e.initToDate,_=e.msgOnNotValidFormat,f=e.onTestDate,b=this.state,v=b.isToolbar,V=b.isShowLabels,D=b.isShowDate,T=b.isShowOptions,F=b.validationMessages;return(0,u.jsxs)(d.Z.DraggableDialog,{isShow:t,caption:o,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:a,onFront:n,onClose:this._handleClose,children:[(0,u.jsx)(d.Z.Toolbar,{isShow:v,buttons:this.toolbarButtons}),(0,u.jsx)(d.Z.SelectWithLoad,{isShow:t,isShowLabels:V,uri:r,jsonProp:s,caption:i,placeholder:"Default: All",onSelect:this._handleSelectOne}),(0,u.jsx)(d.Z.SelectOneTwo,{ref:this._refGroupItem,isShow:t,isShowLabels:V,uri:h,oneCaption:l,oneJsonProp:c,twoCaption:p,msgOnNotSelected:g}),(0,u.jsx)(d.Z.ShowHide,{isShow:D,children:(0,u.jsx)(d.Z.DatesFragment,{ref:this._refDates,isShowLabels:V,initFromDate:m,initToDate:S,msgOnNotValidFormat:_,onTestDate:f})}),(0,u.jsx)(d.Z.ShowHide,{isShow:T,children:(0,u.jsx)(d.Z.RowInputSelect,{isShowLabels:V,caption:"Trade Flow",options:w,placeholder:"Default: Export Value",onSelect:this._handleSelectTradeFlow})}),(0,u.jsx)(d.Z.ValidationMessages,{validationMessages:F})]})},o}(c.Component))||a}}}]);