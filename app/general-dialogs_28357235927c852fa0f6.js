(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[146],{7317:(o,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>v});var n,i=e(7866),a=e(3552),s=e(5893),r=e(9679),h=e(7728),l=e(377),c=h.Z.crOptions,d=l.Z.Decor,p=l.Z.crMenuMore,u={ID_CAPTION:{width:85},ID_ROOT:{width:270}},S=function(o){return"string"==typeof o&&o.trim()},w=function(o){return!(!S(o)||!S(o.split("/")[2]))};const _=(0,d.withToolbar)(n=(0,d.withLoad)(n=function(o){function t(t){var e;(e=o.call(this,t)||this)._hSelectChartType=function(o){e.setState({chartType:o})},e._onRegColor=function(o){e.colorComp=o},e._handleLoad=function(){if(e._idInput)if(e._idInput.isValid()){var o=e._idInput.getValue(),t=(0,i.Z)(e),n=t.props,a=t.state,s=t.colorComp,r=t.dialogOptions,h=n.onLoad,l=n.loadFn,c=a.chartType,d=s?s.getConf():{},p=d.seriaColor,u=d.seriaWidth;h(l(e.props,{items:[{c:o,v:o}],chartType:c,seriaColor:p,seriaWidth:u,dialogOptions:r}))}else e._idInput.showErrMsg()},e._refIdInput=function(o){return e._idInput=o},e._refDates=function(o){return e.datesFragment=o},e._menuMore=p((0,i.Z)(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar});var n=t.noDate;return e.toolbarButtons=e._createType2WithToolbar(t,{noDate:n,isOptions:!0}),e._chartOptions=c({chartsType:"t2"}),e._commandButtons=e._crCommandsWithLoad((0,i.Z)(e)),e.state={isToolbar:!0,isShowLabels:!0,isShowDate:!0,isOptions:!1,chartType:"SPLINE"},e}(0,a.Z)(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.caption,e=o.isShow,n=o.onShow,i=o.onFront,a=o.onClose,r=o.oneCaption,h=o.onePlaceholder,c=o.noDate,d=o.initFromDate,p=o.initToDate,S=o.msgOnNotValidFormat,_=o.onTestDate,m=this.state,g=m.isToolbar,T=m.isShowLabels,C=m.isShowDate,f=m.isOptions,D=m.chartType;return(0,s.jsxs)(l.Z.DraggableDialog,{isShow:e,menuModel:this._menuMore,caption:t,commandButtons:this._commandButtons,onShowChart:n,onFront:i,onClose:a,children:[(0,s.jsx)(l.Z.Toolbar,{isShow:g,buttons:this.toolbarButtons}),(0,s.jsx)(l.Z.ModalOptions,{isShow:f,toggleOption:this._toggleOptionWithToolbar,onClose:this._hideOptionsWithToolbar}),(0,s.jsx)(l.Z.RowPattern,{ref:this._refIdInput,isShow:e,isShowLabels:T,captionStyle:u.ID_CAPTION,rootStyle:u.ID_ROOT,placeholder:h,caption:r,onTest:w,errorMsg:"Empty or Id format is not valid"}),(0,s.jsx)(l.Z.RowChartDate,{chartType:D,isShowLabels:T,isShowChart:!0,labelStyle:u.ID_CAPTION,selectWidth:u.ID_ROOT.width,chartOptions:this._chartOptions,onSelectChart:this._hSelectChartType,onRegColor:this._onRegColor,noDate:c}),!c&&(0,s.jsx)(l.Z.ShowHide,{isShow:C,children:(0,s.jsx)(l.Z.DatesFragment,{ref:this._refDates,isShowLabels:T,initFromDate:d,initToDate:p,msgOnNotValidFormat:S,onTestDate:_})})]})},t}(r.Component))||n)||n;var m,g=e(2122),T=l.Z.Decor,C=l.Z.crMenuMore;const f=(0,T.dialog)(m=function(o){function t(t){var e;(e=o.call(this,t)||this)._handleSelectOne=function(o){e.one=o},e._handleSelectTwo=function(o){e.two=o},e._handleSelectThree=function(o){e.three=o},e._handleLoad=function(){e._handleWithValidationLoad(e._createValidationMessages(),e._createLoadOption)},e._createValidationMessages=function(){var o=e.props,t=o.oneCaption,n=o.twoCaption,i=o.threeURI,a=o.threeCaption,s=o.msgOnNotSelected,r=[];if(e.one||r.push(s(t)),e.two||r.push(s(n)),i&&!e.three&&r.push(s(a)),e.datesFragment){var h=e.datesFragment.getValidation(),l=h.isValid,c=h.datesMsg;l||(r=r.concat(c))}return r.isValid=0===r.length,r},e._createLoadOption=function(){var o=e.datesFragment?e.datesFragment.getValues():{},t=o.fromDate,n=o.toDate;return e.props.loadFn(e.props,{one:e.one,two:e.two,three:e.three,fromDate:t,toDate:n,hasSecondYAxis:e.hasSecondYAxis})},e._handleClose=function(){e._handleWithValidationClose()},e._hCheckSecondYAxis=function(){e.hasSecondYAxis=!0},e._hUnCheckSecondYAxis=function(){e.hasSecondYAxis=!1},e._refDates=function(o){return e.datesFragment=o},e._menuMore=C((0,i.Z)(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar});var n=t.noDate,a=t.noOptions;return e.toolbarButtons=e._createType2WithToolbar(t,{noDate:n,isShowOptions:!a}),e._commandButtons=e._crCommandsWithLoad((0,i.Z)(e)),e.state=(0,g.Z)({},e._isWithInitialState(),{isShowOptions:!1}),e}(0,a.Z)(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.caption,e=o.isShow,n=o.onShow,i=o.onFront,a=o.oneCaption,r=o.oneNames,h=o.oneURI,c=o.oneJsonProp,d=o.isWithOneInput,p=o.twoCaption,u=o.twoNames,S=o.twoURI,w=o.twoJsonProp,_=o.isWithInputTwo,m=o.threeCaption,g=o.threeNames,T=o.threeURI,C=o.threeJsonProp,f=o.isWithInputThree,D=o.initFromDate,b=o.initToDate,x=o.msgOnNotValidFormat,O=o.onTestDate,Z=o.noDate,V=o.noOptions,A=this.state,F=A.isToolbar,L=A.isShowLabels,v=A.isShowDate,I=A.isShowOptions,M=A.validationMessages;return(0,s.jsxs)(l.Z.DraggableDialog,{isShow:e,caption:t,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:i,onClose:this._handleClose,children:[(0,s.jsx)(l.Z.Toolbar,{isShow:F,buttons:this.toolbarButtons}),(0,s.jsx)(l.Z.SelectWithLoad,{isShow:e,isShowLabels:L,uri:h,jsonProp:c,caption:a,optionNames:r,isWithInput:d,onSelect:this._handleSelectOne}),(0,s.jsx)(l.Z.SelectWithLoad,{isShow:e,isShowLabels:L,uri:S,jsonProp:w,caption:p,optionNames:u,isWithInput:_,onSelect:this._handleSelectTwo}),T&&(0,s.jsx)(l.Z.SelectWithLoad,{isShow:e,isShowLabels:L,uri:T,jsonProp:C,caption:m,optionNames:g,isWithInput:f,onSelect:this._handleSelectThree}),!0!==Z&&(0,s.jsx)(l.Z.ShowHide,{isShow:v,children:(0,s.jsx)(l.Z.DatesFragment,{ref:this._refDates,isShowLabels:L,initFromDate:D,initToDate:b,msgOnNotValidFormat:x,onTestDate:O})}),!0!==V&&(0,s.jsx)(l.Z.ShowHide,{isShow:I,children:(0,s.jsx)(l.Z.RowCheckBox,{initValue:!1,caption:"Add Seria with Second YAxis",onCheck:this._hCheckSecondYAxis,onUnCheck:this._hUnCheckSecondYAxis})}),(0,s.jsx)(l.Z.ValidationMessages,{validationMessages:M})]})},t}(r.Component))||m;var D,b=l.Z.Decor,x=l.Z.crMenuMore;const O=(0,b.dialog)(D=function(o){function t(t){var e;return(e=o.call(this,t)||this)._handleLoad=function(){e._handleWithValidationLoad(e._createValidationMessages(),e._createLoadOption)},e._createValidationMessages=function(){var o=[],t=e.oneTwo.getValidation(),n=t.isValid,i=t.msg;n||(o=o.concat(i));var a=e.datesFragment.getValidation(),s=a.isValid,r=a.datesMsg;return s||(o=o.concat(r)),o.isValid=0===o.length,o},e._createLoadOption=function(){var o=e.oneTwo.getValues(),t=o.one,n=o.two,i=e.datesFragment.getValues(),a=i.fromDate,s=i.toDate;return e.props.loadFn(e.props,{one:t,two:n,fromDate:a,toDate:s,hasSecondYAxis:e.hasSecondYAxis})},e._handleClose=function(){e._handleWithValidationClose()},e._hCheckSecondYAxis=function(){e.hasSecondYAxis=!0},e._hUnCheckSecondYAxis=function(){e.hasSecondYAxis=!1},e._refOneTwo=function(o){return e.oneTwo=o},e._refDates=function(o){return e.datesFragment=o},e._menuMore=x((0,i.Z)(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar}),e.toolbarButtons=e._createType2WithToolbar(t,{isShowOptions:!0}),e.hasSecondYAxis=!1,e._commandButtons=e._crCommandsWithLoad((0,i.Z)(e)),e.state=(0,g.Z)({},e._isWithInitialState(),{isShowOptions:!1}),e}(0,a.Z)(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.caption,e=o.oneCaption,n=o.oneURI,i=o.oneJsonProp,a=o.twoCaption,r=o.msgOnNotSelected,h=o.isShow,c=o.onShow,d=o.onFront,p=o.initFromDate,u=o.initToDate,S=o.msgOnNotValidFormat,w=o.onTestDate,_=this.state,m=_.isToolbar,g=_.isShowLabels,T=_.isShowDate,C=_.isShowOptions,f=_.validationMessages;return(0,s.jsxs)(l.Z.DraggableDialog,{isShow:h,caption:t,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:c,onFront:d,onClose:this._handleClose,children:[(0,s.jsx)(l.Z.Toolbar,{isShow:m,buttons:this.toolbarButtons}),(0,s.jsx)(l.Z.SelectOneTwo,{ref:this._refOneTwo,isShow:h,isShowLabels:g,uri:n,oneCaption:e,oneJsonProp:i,twoCaption:a,msgOnNotSelected:r}),(0,s.jsx)(l.Z.ShowHide,{isShow:T,children:(0,s.jsx)(l.Z.DatesFragment,{ref:this._refDates,isShowLabels:g,initFromDate:p,initToDate:u,msgOnNotValidFormat:S,onTestDate:w})}),(0,s.jsx)(l.Z.ShowHide,{isShow:C,children:(0,s.jsx)(l.Z.RowCheckBox,{initValue:!1,caption:"Add Seria with Second YAxis",onCheck:this._hCheckSecondYAxis,onUnCheck:this._hUnCheckSecondYAxis})}),(0,s.jsx)(l.Z.ValidationMessages,{validationMessages:f})]})},t}(r.Component))||D;var Z,V=e(3014),A=l.Z.Decor,F=l.Z.crMenuMore,L=[{caption:"Default: Area",value:V.oX.AREA},{caption:"Scatter: Label Up",value:V.oX.SCATTER_UP},{caption:"Scatter: Label Down",value:V.oX.SCATTER_DOWN}];const v={Query:_,Type4:f,Type4A:O,Type5:(0,A.dialog)(Z=function(o){function t(t){var e;return(e=o.call(this,t)||this)._handleSelectOne=function(o){e.one=o},e._handleLoad=function(){e._handleWithValidationLoad(e._createValidationMessages(),e._createLoadOption)},e._createValidationMessages=function(){var o=e.props.oneCaption,t=[];e.one||t.push(e.props.msgOnNotSelected(o));var n=e.twoThree.getValidation(),i=n.isValid,a=n.msg;i||(t=t.concat(a));var s=e.datesFragment.getValidation(),r=s.isValid,h=s.datesMsg;return r||(t=t.concat(h)),t.isValid=0===t.length,t},e._createLoadOption=function(){var o=e.twoThree.getValues(),t=o.one,n=o.two,i=e.datesFragment.getValues(),a=i.fromDate,s=i.toDate,r=e.chartType?e.chartType.value:void 0;return e.props.loadFn(e.props,{one:e.one,two:t,three:n,fromDate:a,toDate:s,hasSecondYAxis:e.hasSecondYAxis,seriaType:r})},e._handleClose=function(){e._handleWithValidationClose()},e._hCheckSecondYAxis=function(){e.hasSecondYAxis=!0},e._hUnCheckSecondYAxis=function(){e.hasSecondYAxis=!1},e._handlerSelectChartType=function(o){e.chartType=o},e._refTwoThree=function(o){return e.twoThree=o},e._refDates=function(o){return e.datesFragment=o},e._menuMore=F((0,i.Z)(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar}),e.toolbarButtons=e._createType2WithToolbar(t,{isShowOptions:!0}),e._commandButtons=e._crCommandsWithLoad((0,i.Z)(e)),e.state=(0,g.Z)({},e._isWithInitialState(),{isShowDate:!1,isShowOptions:!1}),e}(0,a.Z)(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.caption,e=o.isShow,n=o.onShow,i=o.onFront,a=o.oneCaption,r=o.oneURI,h=o.oneJsonProp,c=o.twoCaption,d=o.twoURI,p=o.twoJsonProp,u=o.threeCaption,S=o.msgOnNotSelected,w=o.initFromDate,_=o.initToDate,m=o.msgOnNotValidFormat,g=o.onTestDate,T=o.isChartType,C=this.state,f=C.isToolbar,D=C.isShowLabels,b=C.isShowDate,x=C.isShowOptions,O=C.validationMessages;return(0,s.jsxs)(l.Z.DraggableDialog,{isShow:e,caption:t,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:i,onClose:this._handleClose,children:[(0,s.jsx)(l.Z.Toolbar,{isShow:f,buttons:this.toolbarButtons}),(0,s.jsx)(l.Z.SelectWithLoad,{isShow:e,isShowLabels:D,uri:r,jsonProp:h,caption:a,optionNames:"Items",onSelect:this._handleSelectOne}),(0,s.jsx)(l.Z.SelectOneTwo,{ref:this._refTwoThree,isShow:e,isShowLabels:D,uri:d,oneCaption:c,oneJsonProp:p,twoCaption:u,msgOnNotSelected:S}),(0,s.jsx)(l.Z.ShowHide,{isShow:b,children:(0,s.jsx)(l.Z.DatesFragment,{ref:this._refDates,isShowLabels:D,initFromDate:w,initToDate:_,msgOnNotValidFormat:m,onTestDate:g})}),(0,s.jsxs)(l.Z.ShowHide,{isShow:x,children:[T&&(0,s.jsx)(l.Z.RowInputSelect,{isShowLabels:D,caption:"Chart Type:",options:L,onSelect:this._handlerSelectChartType}),(0,s.jsx)(l.Z.RowCheckBox,{initValue:!1,caption:"Add Seria with Second YAxis",onCheck:this._hCheckSecondYAxis,onUnCheck:this._hUnCheckSecondYAxis})]}),(0,s.jsx)(l.Z.ValidationMessages,{validationMessages:O})]})},t}(r.Component))||Z}}}]);