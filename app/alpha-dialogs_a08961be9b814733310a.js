(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{iN4m:function(o,t,e){"use strict";e.r(t);var n,a,i,r,s=e("pVnL"),l=e.n(s),c=e("PJYZ"),h=e.n(c),u=e("VbXa"),p=e.n(u),d=e("q1tI"),m=e.n(d),S=e("4Fsi"),_=e("H9NR"),f=e("/plH"),w="SMA",T=30,b=501,g=function(o){return""!==String(o).trim()},D=function(o,t){return function(e){if(""===String(e).trim())return!0;var n=parseInt(String(e).trim(),10);return!Number.isNaN(n)&&n>o&&n<t}},C=D(0,201),v=D(250,2500),y=function(o,t){switch(o){case"MACD":return"MACD(12, 24, 9)";case"STOCH":return"STOCH(5, 3, 3, SMA)";default:return o+" ("+t+")"}},I=(0,_.a.withToolbar)(n=(0,_.a.withLoad)(n=(0,_.a.withInitialState)(n=function(o){function t(t){var e;return(e=o.call(this,t)||this)._handleSelectOne=function(o){e.indicator=o},e._handleLoad=function(){var o=e.periodComp.isValid()&&""!==e.periodComp.getValue()?e.periodComp.getValue():T,t=e.forDaysComp.isValid()&&""!==e.forDaysComp.getValue()?e.forDaysComp.getValue():b,n=e.ticketComp.isValid()?e.ticketComp.getValue():void 0,a=e.indicator?e.indicator.value:w,i={loadId:"AL",indicator:a,ticket:n,period:o,forDays:t,value:y(a,o),hasSecondYAxis:e.hasSecondYAxis};e.props.onLoad(i)},e._handleClose=function(){e.props.onClose()},e._refTicket=function(o){e.ticketComp=o},e._refPeriod=function(o){e.periodComp=o},e._refForDays=function(o){e.forDaysComp=o},e._handleMode=function(o,t){e[o]=t},e._menuMore=Object(f.a)(h()(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar}),e.toolbarButtons=e._createType2WithToolbar(t,{noDate:!0,isShowOptions:!0}),e._commandButtons=e._crCommandsWithLoad(h()(e)),e.state=l()({},e._isWithInitialState(),{isShowOptions:!1}),e}p()(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.isShow,e=o.caption,n=o.oneURI,a=o.oneJsonProp,i=o.oneCaption,r=o.onShow,s=o.onFront,l=this.state,c=l.isToolbar,h=l.isShowLabels,u=l.isShowOptions;return m.a.createElement(S.a.DraggableDialog,{isShow:t,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:r,onFront:s,onClose:this._handleClose},m.a.createElement(S.a.Toolbar,{isShow:c,buttons:this.toolbarButtons}),m.a.createElement(S.a.SelectWithLoad,{isShow:t,isShowLabels:h,uri:n,jsonProp:a,caption:i,optionNames:"Items",onSelect:this._handleSelectOne}),m.a.createElement(S.a.RowPattern,{ref:this._refTicket,isShowLabels:h,caption:"Ticket",placeholder:"Nyse or Nasdaq Ticket",onTest:g,errorMsg:"Not Empty"}),m.a.createElement(S.a.ShowHide,{isShow:u},m.a.createElement(S.a.RowPattern,{ref:this._refPeriod,isShowLabels:h,caption:"Period",placeholder:"Default: "+T,onTest:C,errorMsg:"Number in range 1-200"}),m.a.createElement(S.a.RowPattern,{ref:this._refForDays,isShowLabels:h,caption:"For Days",placeholder:"Default: "+b+" (2 Years)",onTest:v,errorMsg:"Number in range 250-2500"})),m.a.createElement(S.a.RowCheckBox,{initValue:!1,caption:"Add Seria with Second YAxis",onCheck:this._handleMode.bind(null,"hasSecondYAxis",!0),onUnCheck:this._handleMode.bind(null,"hasSecondYAxis",!1)}))},t}(d.Component))||n)||n)||n,A="15min",E="compact",L=function(o){return Boolean((""+o).trim())},k={INTRADAY:{caption:"Interval",placeholder:"Default: 15min",options:[{caption:"1 min",value:"1min"},{caption:"5 min",value:"5min"},{caption:"15 min",value:"15min"},{caption:"30 min",value:"30min"},{caption:"60 min",value:"60min"}]},DAILY:{caption:"Period",placeholder:"Default: Compact",options:[{caption:"Compact (100 days)",value:"compact"},{caption:"Full (of 20+ years, about 1MB)",value:"full"}]}},M={DAILY:{indicator:"TIME_SERIES_DAILY",interval:"Daily"},DAILY_ADJUSTED:{indicator:"TIME_SERIES_DAILY_ADJUSTED",interval:"Daily"}},B=function(o,t){return o?o.value:t},R=(0,_.a.withToolbar)(a=(0,_.a.withLoad)(a=(0,_.a.withInitialState)(a=function(o){function t(t){var e;(e=o.call(this,t)||this)._handleSelectInterval=function(o){e.interval=o},e._handleLoad=function(){var o=e.props,t=o.dfT,n=o.dataSource,a=o.loadId,i=e.ticketComp.isValid()?e.ticketComp.getValue():void 0,r=function(o,t){if("INTRADAY"===o)return{indicator:"TIME_SERIES_INTRADAY",interval:B(t,A),dfT:o};var e=M[o]||M.DAILY;return l()({},e,{outputsize:B(t,E),dfT:o})}(t,e.interval),s=(i||"")+" ("+r.interval+")";e.props.onLoad(l()({loadId:a},r,{ticket:i,value:s,hasDividend:e._hasDividend,hasFilterZero:e._hasFilterZero,dataSource:n}))},e._toggleDividend=function(){e._hasDividend=!e._hasDividend},e._toggleFilterZero=function(){e._hasFilterZero=!e._hasFilterZero},e._handleClose=function(){e.props.onClose()},e._refTicket=function(o){e.ticketComp=o};var n=t.dfT;return e._isDaily=-1!==n.indexOf("DAILY"),e._isDailyAdj=function(o){return"DAILY_ADJUSTED"===o}(n),e._hasDividend=!1,e._hasFilterZero=!1,e._menuMore=Object(f.a)(h()(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar}),e.toolbarButtons=e._createType2WithToolbar(t,{noDate:!0,isToggleOptions:e._isDaily}),e._commandButtons=e._crCommandsWithLoad(h()(e)),e.state=l()({},e._isWithInitialState(),{isToggleOptions:!1}),e}p()(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.isShow,e=o.caption,n=o.onShow,a=o.onFront,i=o.dfT,r=this.state,s=r.isToolbar,c=r.isShowLabels,h=r.isToggleOptions;return m.a.createElement(S.a.DraggableDialog,{isShow:t,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},m.a.createElement(S.a.Toolbar,{isShow:s,buttons:this.toolbarButtons}),m.a.createElement(S.a.RowPattern,{ref:this._refTicket,isShowLabels:c,caption:"Ticket",placeholder:"Nyse or Nasdaq Ticket",onTest:L,errorMsg:"Not Empty"}),m.a.createElement(S.a.RowInputSelect,l()({isShowLabels:c},k[i]||k.DAILY,{onSelect:this._handleSelectInterval})),this._isDaily&&m.a.createElement(S.a.ShowHide,{isShow:h},this._isDailyAdj&&m.a.createElement(S.a.RowCheckBox,{initValue:!1,caption:"With Dividend History",onToggle:this._toggleDividend}),m.a.createElement(S.a.RowCheckBox,{initValue:!1,caption:"Filter Zero Values",onToggle:this._toggleFilterZero})))},t}(d.Component))||a)||a)||a,O={ROW_TEXT:{paddingRight:16}},W=(0,_.a.withToolbar)(i=(0,_.a.withLoad)(i=function(o){function t(t){var e;return(e=o.call(this,t)||this)._handleLoad=function(){var o=e.props,t=o.loadId;(0,o.onLoad)({loadId:t,indicator:"SECTOR"})},e._handleClose=function(){e.props.onClose()},e._menuMore=Object(f.a)(h()(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar}),e.toolbarButtons=e._createType2WithToolbar(t,{noDate:!0,noLabels:!0}),e._commandButtons=e._crCommandsWithLoad(h()(e)),e.state={isToolbar:!0},e}p()(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.isShow,e=o.caption,n=o.onShow,a=o.onFront,i=this.state.isToolbar;return m.a.createElement(S.a.DraggableDialog,{isShow:t,caption:e,menuModel:this._menuMore,commandButtons:this._commandButtons,onShowChart:n,onFront:a,onClose:this._handleClose},m.a.createElement(S.a.Toolbar,{isShow:i,buttons:this.toolbarButtons}),m.a.createElement(S.a.Row.Text,{styleRoot:O.ROW_TEXT,caption:"AV:",text:"Sector Performances"}))},t}(d.Component))||i)||i,F=e("PiNy"),Y=e("anHX"),N=e("fT2z"),V="https://www.alphavantage.co/query/search",P="function=SYMBOL_SEARCH",U={crUrl:function(o,t){var e=t.apiKey;return V+"?"+P+"&keywords="+o+"&apikey="+(void 0===e?"":e)},crOptions:function(o){if(!o||!Array.isArray(o.bestMatches))throw new Error("Response format is not valid");return o.bestMatches.map((function(o){return{value:o["1. symbol"],name:o["2. name"],type:o["3. type"],region:o["4. region"],currency:o["8. currency"]}}))}},x={Indicator:F.a,Intraday:Y.a,Sector:N.a,Search:U},H="API key from Alpha Vantage is required",Z="Without API Key",j={Indicator:I,Intraday:R,Sector:W,Search:(0,_.a.withToolbar)(r=(0,_.a.withInitialState)(r=function(o){function t(t){var e;return(e=o.call(this,t)||this)._crUrlOptions=function(){var o=e.props,t=o.getKey,n=o.loadId,a=o.onError,i=t(n);if(i)return{apiKey:i};a(H,Z)},e._handleClose=function(){e.props.onClose()},e._menuMore=Object(f.a)(h()(e),{toggleToolBar:e._toggleWithToolbar,onAbout:e._clickInfoWithToolbar}),e.toolbarButtons=e._createType2WithToolbar(t,{noDate:!0}),e._searchApi=l()({},x.Search,{crUrlOptions:e._crUrlOptions,onError:e.props.onError}),e.state=l()({},e._isWithInitialState()),e}p()(t,o);var e=t.prototype;return e.shouldComponentUpdate=function(o,t){return this.props===o||this.props.isShow!==o.isShow},e.render=function(){var o=this.props,t=o.isShow,e=o.caption,n=o.onFront,a=this.state,i=a.isToolbar,r=a.isShowLabels;return m.a.createElement(S.a.DraggableDialog,{isShow:t,caption:e,menuModel:this._menuMore,onFront:n,onClose:this._handleClose},m.a.createElement(S.a.Toolbar,{isShow:i,buttons:this.toolbarButtons}),m.a.createElement(S.a.RowInputSearch,{isShowLabels:r,caption:"Token",searchApi:this._searchApi}))},t}(d.Component))||r)||r};t.default=j}}]);