(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IY4K:function(e,t,a){"use strict";a.r(t);var o,n,i,r,l=a("pVnL"),s=a.n(l),c=a("PJYZ"),d=a.n(c),p=a("VbXa"),u=a.n(p),h=a("q1tI"),m=a.n(h),S=a("0TwO"),T=a("4Fsi"),_=a("/plH"),g=a("H9NR"),f={BT_ROOT:{color:"rgb(35, 47, 59)"}},w={INIT:"First Load Meta",SELECT:"Select..."},C="Default Empty",v="Import - Trade (USD)",D="Export - Trade (USD)",b="Re-Import - Trade (USD)",F="Re-Export - Trade (USD)",y=[{caption:"Default : Empty Filter",value:C},{caption:"Import - Trade (USD)",value:"Import - Trade (USD)"},{caption:"Import - Weight (Kg)",value:"Import - Weight (Kg)"},{caption:"Export - Trade (USD)",value:"Export - Trade (USD)"},{caption:"Export - Weight (Kg)",value:"Export - Weight (Kg)"},{caption:"Re-Import - Trade (USD)",value:"Re-Import - Trade (USD)"},{caption:"Re-Export - Trade (USD)",value:"Re-Export - Trade (USD)"}],E=[{caption:"Default : Area",value:S.b.AREA},{caption:"Semi Donut : Total Top90, On Every Year : Recent 2 Years",value:S.b.SEMI_DONUT},{caption:"Stacked Area : Total Top90, On Recent Year",value:S.b.STACKED_AREA},{caption:"Stacked Area Percent : Total Top90, On Recent Year",value:S.b.STACKED_AREA_PERCENT},{caption:"Stacked Column : Total Top90, On Recent Year",value:S.b.STACKED_COLUMN},{caption:"Stacked Column Percent : Total Top90, On Recent Year",value:S.b.STACKED_COLUMN_PERCENT},{caption:"Tree Map : On Recent Year",value:S.b.TREE_MAP}],L=(0,g.a.withToolbar)(o=(0,g.a.withValidationLoad)(o=(0,g.a.withInitialState)(o=function(e){function t(t){var a;return(a=e.call(this,t)||this)._initTrade=function(){a.subheading=void 0,a.optionTrades=void 0,a.setState({optionTrades:[],placeholderTrade:w.INIT,isLoadingTradeFailed:!1})},a._filterTrade=function(){var e;if(a.tradeFilter&&a.optionTrades){var t=a.tradeFilter.value;t!==C?(e=a.optionTrades.filter((function(e,a){return-1!==e.caption.indexOf(t)})),t===v&&(e=e.filter((function(e,t){return-1===e.caption.indexOf(b)}))),t===D&&(e=e.filter((function(e,t){return-1===e.caption.indexOf(F)})))):e=a.optionTrades}else e=a.optionTrades;return e},a._handlerClickAll=function(){var e=a.state,t=e.isShowFilter,o=e.isShowDate,n=e.isShowChartType,i=!(t||o||n);a.setState({isShowFilter:i,isShowDate:i,isShowChartType:i})},a._handlerClickFilter=function(){a.setState({isShowFilter:!a.state.isShowFilter})},a._handlerClickDate=function(){a.setState({isShowDate:!a.state.isShowDate})},a._handlerClickChartType=function(){a.setState({isShowChartType:!a.state.isShowChartType})},a._handlerSelectCountry=function(e){a.country=e,a._initTrade()},a._handlerSelectChapter=function(e){a.chapter=e,a._initTrade()},a._handlerSelectTradeFilter=function(e){a.tradeFilter=e,a.setState({optionTrades:a._filterTrade()})},a._handlerSelectTrade=function(e){a.subheading=e},a._handlerSelectChartType=function(e){a.chartType=e},a._handlerLoadMeta=function(){a._handleWithValidationLoad(a._createMetaValidationMessages(),a._createLoadMetaOption,a._loadMeta)},a._loadMeta=function(e){a.props.onLoad(e),a.setState({isLoadingTrade:!0})},a._createMetaValidationMessages=function(){var e=[];a.country||e.push(a.props.msgOnNotSelected("Country")),a.chapter||e.push(a.props.msgOnNotSelected("Subheading"));var t=a.datesFragment.getValidation(),o=t.isValid,n=t.datesMsg;return o||(e=e.concat(n)),e.isValid=0===e.length,e},a._createLoadMetaOption=function(){var e=a.datesFragment.getValues(),t=e.fromDate,o=e.toDate,n=a.props,i=n.loadId;return{value:(0,n.fnValue)(a.chapter.value,a.country.value),fromDate:t,toDate:o,isLoadMeta:!0,onLoad:a._setOptionTrades,onCancel:a._loadMetaOptionCancel,onFailed:a._loadMetaOptionFailed,loadId:i}},a._setOptionTrades=function(e){a.optionTrades=e,a.setState({optionTrades:a._filterTrade(),isLoadingTrade:!1,isLoadingTradeFailed:!1,placeholderTrade:w.SELECT})},a._loadMetaOptionCancel=function(){a.setState({isLoadingTrade:!1,isLoadingTradeFailed:!1,placeholderTrade:w.SELECT})},a._loadMetaOptionFailed=function(){a.setState({isLoadingTrade:!1,isLoadingTradeFailed:!0})},a._handlerLoadData=function(){a._handleWithValidationLoad(a._createDataValidationMessages(),a._createLoadDataOption)},a._createDataValidationMessages=function(){var e=[];a.chartType&&a.chartType.value!==S.b.AREA?(a.state.placeholderTrade===w.INIT&&e.push(w.INIT),a.tradeFilter||e.push(a.props.msgOnNotSelected("Trade Filter"))):a.subheading||e.push(a.props.msgOnNotSelected("Subheading"));return e.isValid=0===e.length,e},a._createLoadDataOption=function(){var e=a.datesFragment.getValues(),t=e.fromDate,o=e.toDate,n=a.subheading?a.subheading.value:a.props.dataColumn,i=a.props,r=i.loadId,l=i.fnValue,s=i.dataSource,c=a.chartType?a.chartType.value:S.b.AREA,d=a.tradeFilter?a.country.caption+":"+a.tradeFilter.caption:""+a.country.caption,p=a.chartType&&a.chartType.value!==S.b.AREA?a._createSpliceItems():void 0;return{value:l(a.chapter.value,a.country.value),fromDate:t,toDate:o,dataColumn:n,seriaType:c,sliceItems:p,title:d,subtitle:a.chapter.caption,loadId:r,dataSource:s}},a._createSpliceItems=function(){var e=a.tradeFilter.value.length+2;return a.state.optionTrades.map((function(t,a){var o=t.value,n=t.caption;return{caption:n=n.substring(0,n.length-e),value:o}}))},a._handlerClose=function(){a._handleWithValidationClose()},a._refDates=function(e){return a.datesFragment=e},a._menuMore=Object(_.a)(d()(a),{toggleToolBar:a._toggleWithToolbar,onAbout:a._clickInfoWithToolbar}),a.toolbarButtons=a._createType2WithToolbar(t,{noDate:!0}),a.toolbarButtons.push({caption:"A",title:"Toggle All Input",onClick:a._handlerClickAll},{caption:"F",title:"Toggle Filter Input",onClick:a._handlerClickFilter},{caption:"D",title:"Toggle Date Input",onClick:a._handlerClickDate},{caption:"C",title:"Toggle ChartType Input",onClick:a._handlerClickChartType}),a._commandButtons=[m.a.createElement(T.a.Button.Flat,{key:"meta",rootStyle:f.BT_ROOT,caption:"Load Meta",title:"First Load Meta, then Load Item",onClick:a._handlerLoadMeta}),m.a.createElement(T.a.Button.Load,{key:"load",onClick:a._handlerLoadData})],a.state=s()({},a._isWithInitialState(),{isShowFilter:!1,isShowChartType:!1,isLoadingTrade:!1,isLoadingTradeFailed:!1,optionTrades:[],placeholderTrade:w.INIT}),a}u()(t,e);var a=t.prototype;return a.shouldComponentUpdate=function(e,t){return this.props===e||this.props.isShow!==e.isShow},a.render=function(){var e=this.props,t=e.isShow,a=e.onShow,o=e.onFront,n=e.countryURI,i=e.countryJsonProp,r=e.commodityURI,l=e.commodityJsonProp,s=e.initFromDate,c=e.initToDate,d=e.msgOnNotValidFormat,p=e.onTestDate,u=this.state,h=u.isToolbar,S=u.isShowLabels,_=u.isShowFilter,g=u.isShowDate,f=u.isShowChartType,w=u.isLoadingTrade,C=u.isLoadingTradeFailed,v=u.optionTrades,D=u.placeholderTrade,b=u.validationMessages;return m.a.createElement(T.a.DraggableDialog,{isShow:t,caption:"United Nations Commodity Trade",menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:a,onFront:o,onClose:this._handlerClose},m.a.createElement(T.a.Toolbar,{isShow:h,buttons:this.toolbarButtons}),m.a.createElement(T.a.SelectWithLoad,{isShow:t,isShowLabels:S,uri:n,jsonProp:i,caption:"Country:",optionNames:"Countries",onSelect:this._handlerSelectCountry}),m.a.createElement(T.a.SelectWithLoad,{isShow:t,isShowLabels:S,uri:r,jsonProp:l,caption:"Chapter:",optionNames:"Chapters",onSelect:this._handlerSelectChapter}),m.a.createElement(T.a.ShowHide,{isShow:_},m.a.createElement(T.a.RowInputSelect,{isShowLabels:S,caption:"Filter Trade:",options:y,placeholder:"Filter...",onSelect:this._handlerSelectTradeFilter})),m.a.createElement(T.a.RowInputSelect,{isShowLabels:S,caption:"Subheading:",options:v,optionNames:"Meta",isLoading:w,isLoadingFailed:C,placeholder:D,onLoadOption:this._handlerLoadMeta,onSelect:this._handlerSelectTrade}),m.a.createElement(T.a.ShowHide,{isShow:g},m.a.createElement(T.a.DatesFragment,{ref:this._refDates,isShowLabels:S,initFromDate:s,initToDate:c,msgOnNotValidFormat:d,onTestDate:p})),m.a.createElement(T.a.ShowHide,{isShow:f},m.a.createElement(T.a.RowInputSelect,{isShowLabels:S,caption:"Chart Type:",options:E,onSelect:this._handlerSelectChartType})),m.a.createElement(T.a.ValidationMessages,{validationMessages:b}))},t}(h.Component))||o)||o)||o,O=[{caption:"2020",value:2020},{caption:"2019",value:2019},{caption:"2018",value:2018},{caption:"2017",value:2017},{caption:"2016",value:2016},{caption:"2015",value:2015},{caption:"2014",value:2014},{caption:"2013",value:2013},{caption:"2012",value:2012}],M=(0,g.a.dialog)(n=function(e){function t(t){var a;return(a=e.call(this,t)||this)._handleSelectYear=function(e){a.year=e},a._handleLoad=function(){a._handleWithValidationLoad(a._createValidationMessages(),a._createLoadOption)},a._createValidationMessages=function(){var e=a.props,t=e.msgOnNotSelected,o=e.msgOnNotValidFormat,n=e.isFd,i=[],r=a._refItemMonth.current.getValidation(),l=r.isValid,s=r.msg;return l||(i=i.concat(s)),a.year||i.push(t("Year")),n&&!a._refFromDate.current.isValid()&&i.push(o("From Date")),i.isValid=0===i.length,i},a._createLoadOption=function(){var e=a._refItemMonth.current.getValues(),t=e.one,o=e.two,n=a.props.isFd?a._refFromDate.current.getValue():void 0;return a.props.loadFn(a.props,{item:t,month:o,year:a.year,fromDate:n})},a._handleClose=function(){a._handleWithValidationClose()},a._menuMore=Object(_.a)(d()(a),{toggleToolBar:a._toggleWithToolbar,onAbout:a._clickInfoWithToolbar}),a.toolbarButtons=a._createType2WithToolbar(t,{noDate:!0}),a._refItemMonth=m.a.createRef(),a._refFromDate=m.a.createRef(),a._commandButtons=a._crCommandsWithLoad(d()(a)),a.state=s()({},a._isWithInitialState()),a}u()(t,e);var a=t.prototype;return a.shouldComponentUpdate=function(e,t){return this.props===e||this.props.isShow!==e.isShow},a.render=function(){var e=this.props,t=e.isShow,a=e.caption,o=e.onShow,n=e.onFront,i=e.futuresURI,r=e.msgOnNotSelected,l=e.isFd,s=e.initFromDate,c=e.isYmdOrEmpty,d=e.errNotYmdOrEmpty,p=this.state,u=p.isToolbar,h=p.isShowLabels,S=p.validationMessages;return m.a.createElement(T.a.DraggableDialog,{isShow:t,caption:a,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:o,onFront:n,onClose:this._handleClose},m.a.createElement(T.a.Toolbar,{isShow:u,buttons:this.toolbarButtons}),m.a.createElement(T.a.SelectOneTwo,{ref:this._refItemMonth,isShow:t,isShowLabels:h,uri:i,oneCaption:"Futures",oneOptionNames:"Futures",oneJsonProp:"futures",twoCaption:"Month",msgOnNotSelected:r}),m.a.createElement(T.a.RowInputSelect,{isShowLabels:h,caption:"Year",options:O,onSelect:this._handleSelectYear}),l&&m.a.createElement(T.a.RowDate,{innerRef:this._refFromDate,isShowLabels:h,labelTitle:"From Date:",initValue:s,errorMsg:d,onTestDate:c}),m.a.createElement(T.a.ValidationMessages,{validationMessages:S}))},t}(h.Component))||n,I=[{caption:"Continuous Contract #1",value:1},{caption:"Continuous Contract #2",value:2},{caption:"Continuous Contract #3",value:3},{caption:"Continuous Contract #4",value:4},{caption:"Continuous Contract #5",value:5}],V=(0,g.a.dialog)(i=function(e){function t(t){var a;return(a=e.call(this,t)||this)._handleSelectType=function(e){a.type=e},a._handleLoad=function(){a._handleWithValidationLoad(a._createValidationMessages(),a._createLoadOption)},a._createValidationMessages=function(){var e=a.props,t=e.msgOnNotSelected,o=e.msgOnNotValidFormat,n=e.isFd,i=[],r=a._refExchangeItem.current.getValidation(),l=r.isValid,s=r.msg;return l||(i=i.concat(s)),a.type||i.push(t("Type")),n&&!a._refFromDate.current.isValid()&&i.push(o("From Date")),i.isValid=0===i.length,i},a._createLoadOption=function(){var e=a._refExchangeItem.current.getValues(),t=e.one,o=e.two,n=a.props.isFd?a._refFromDate.current.getValue():void 0;return a.props.loadFn(a.props,{exchange:t,item:o,type:a.type,fromDate:n})},a._handleClose=function(){a._handleWithValidationClose()},a._menuMore=Object(_.a)(d()(a),{toggleToolBar:a._toggleWithToolbar,onAbout:a._clickInfoWithToolbar}),a.toolbarButtons=a._createType2WithToolbar(t,{noDate:!0}),a._refExchangeItem=m.a.createRef(),a._refFromDate=m.a.createRef(),a._commandButtons=a._crCommandsWithLoad(d()(a)),a.state=s()({},a._isWithInitialState()),a}u()(t,e);var a=t.prototype;return a.shouldComponentUpdate=function(e,t){return this.props===e||this.props.isShow!==e.isShow},a.render=function(){var e=this.props,t=e.isShow,a=e.caption,o=e.onShow,n=e.onFront,i=e.futuresURI,r=e.msgOnNotSelected,l=e.isFd,s=e.initFromDate,c=e.isYmdOrEmpty,d=e.errNotYmdOrEmpty,p=this.state,u=p.isToolbar,h=p.isShowLabels,S=p.validationMessages;return m.a.createElement(T.a.DraggableDialog,{isShow:t,caption:a,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:o,onFront:n,onClose:this._handleClose},m.a.createElement(T.a.Toolbar,{isShow:u,buttons:this.toolbarButtons}),m.a.createElement(T.a.SelectOneTwo,{ref:this._refExchangeItem,isShow:t,isShowLabels:h,uri:i,oneCaption:"Exchange",oneOptionNames:"Exchanges",oneJsonProp:"futures",twoCaption:"Asset",msgOnNotSelected:r}),m.a.createElement(T.a.RowInputSelect,{isShowLabels:h,caption:"Type",options:I,onSelect:this._handleSelectType}),l&&m.a.createElement(T.a.RowDate,{innerRef:this._refFromDate,isShowLabels:h,labelTitle:"From Date:",initValue:s,errorMsg:d,onTestDate:c}),m.a.createElement(T.a.ValidationMessages,{validationMessages:S}))},t}(h.Component))||i,R=[{caption:"Thousand Barrels per day (kb/d)",value:"KD"},{caption:"Thousand Barrels (kbbl)",value:"KB"},{caption:"Thousand Kilolitres (kl)",value:"KL"},{caption:"Thousand Metric Tons (kmt)",value:"KT"},{caption:"Conversion factor barrels/ktons",value:"BK"}],N=[{caption:"AreaSpline",value:"AREA"},{caption:"Yearly by Month",value:"YEARLY"}],W={UNCommodityTrade:L,Futures3:M,FuturesWiki:V,JodiWorldOil:(0,g.a.dialog)(r=function(e){function t(t){var a;return(a=e.call(this,t)||this)._hSelectCountry=function(e){a.country=e},a._hSelectUnits=function(e){a.units=e},a._hSelectChartType=function(e){a.chartType=e},a._handleLoad=function(){a._handleWithValidationLoad(a._createValidationMessages(),a._createLoadOption)},a._createValidationMessages=function(){var e=a.props.msgOnNotSelected,t=[];a.country||t.push(e("Country"));var o=a.productFlow.getValidation(),n=o.isValid,i=o.msg;n||(t=t.concat(i)),a.units||(a.units=R[0]);var r=a.datesFragment.getValidation(),l=r.isValid,s=r.datesMsg;return l||(t=t.concat(s)),t.isValid=0===t.length,t},a._createLoadOption=function(){var e=a.productFlow.getValues(),t=e.one,o=e.two,n=a.datesFragment.getValues(),i=n.fromDate,r=n.toDate,l=a.chartType?a.chartType.value:void 0,s=a.props,c=s.fnValue,d=s.dataColumn,p=s.loadId,u=s.dataSource;return{value:c(a.country.value,t.value,o.value,a.units.value),title:a.country.caption+": "+t.caption,subtitle:o.caption+": "+a.units.caption,fromDate:i,toDate:r,dataColumn:d,seriaType:l,loadId:p,dataSource:u}},a._handleClose=function(){a._handleWithValidationClose()},a._refProductFlow=function(e){return a.productFlow=e},a._refDates=function(e){return a.datesFragment=e},a._menuMore=Object(_.a)(d()(a),{toggleToolBar:a._toggleWithToolbar,onAbout:a._clickInfoWithToolbar}),a.toolbarButtons=a._createType2WithToolbar(t,{isShowOptions:!0}),a._commandButtons=a._crCommandsWithLoad(d()(a)),a.state=s()({},a._isWithInitialState(),{isShowDate:!1,isShowOptions:!1}),a}u()(t,e);var a=t.prototype;return a.shouldComponentUpdate=function(e,t){return this.props===e||this.props.isShow!==e.isShow},a.render=function(){var e=this.props,t=e.caption,a=e.isShow,o=e.onShow,n=e.onFront,i=e.oneCaption,r=e.oneURI,l=e.oneJsonProp,s=e.parentCaption,c=e.parentChildURI,d=e.parentJsonProp,p=e.childCaption,u=e.msgOnNotSelected,h=e.initFromDate,S=e.initToDate,_=e.msgOnNotValidFormat,g=e.onTestDate,f=this.state,w=f.isToolbar,C=f.isShowLabels,v=f.isShowDate,D=f.isShowOptions,b=f.validationMessages;return m.a.createElement(T.a.DraggableDialog,{isShow:a,caption:t,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:o,onFront:n,onClose:this._handleClose},m.a.createElement(T.a.Toolbar,{isShow:w,buttons:this.toolbarButtons}),m.a.createElement(T.a.SelectWithLoad,{isShow:a,isShowLabels:C,uri:r,jsonProp:l,caption:i,optionNames:"Items",onSelect:this._hSelectCountry}),m.a.createElement(T.a.SelectOneTwo,{ref:this._refProductFlow,isShow:a,isShowLabels:C,uri:c,oneCaption:s,oneJsonProp:d,twoCaption:p,msgOnNotSelected:u}),m.a.createElement(T.a.RowInputSelect,{isShowLabels:C,caption:"Units",options:R,onSelect:this._hSelectUnits}),m.a.createElement(T.a.ShowHide,{isShow:v},m.a.createElement(T.a.DatesFragment,{ref:this._refDates,isShowLabels:C,initFromDate:h,initToDate:S,msgOnNotValidFormat:_,onTestDate:g})),m.a.createElement(T.a.ShowHide,{isShow:D},m.a.createElement(T.a.RowInputSelect,{isShowLabels:C,caption:"Chart Type",placeholder:"Default: AreaSpline",options:N,onSelect:this._hSelectChartType})),m.a.createElement(T.a.ValidationMessages,{validationMessages:b}))},t}(h.Component))||r};t.default=W}}]);