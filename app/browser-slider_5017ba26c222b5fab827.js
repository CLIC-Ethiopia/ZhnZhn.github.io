(self.webpackChunkweb_app_erc=self.webpackChunkweb_app_erc||[]).push([[30],{3302:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(7154),o=r.n(n),i=r(5893),s=r(9679),a=r(795),l=r(8685),c=r(1506),u=r.n(c),d=r(5354),f=r.n(d),p=r(6462),m=r(2038),g={dialogConf:!0,dialogType:"DialogStatN",dialogProps:{chartsType:"t2a",dfProps:{},isProxy:!0}};const x=function(e){return function(){var t=e.rootUrl,r=e.id,n=e.proxy,i=e.bT,s=e.lT,a=e.dU,l=e.noTime,c=e.dS,u=function(e){var t=e.rootUrl,r=e.id,n=e.proxy,o=t+"/"+r;return n?""+n+o:o}(e),d=Object.assign({},g,o()({type:i+"_"+r},function(e){var t=e.text||"",r=t.length>35?t.substring(0,35)+"...":t;return{menuTitle:t.substring(0,27),contFullCaption:e.sP+": "+r}}(e)));Object.assign(d.dialogProps,{loadId:s,descrUrl:a,dataSource:c,dfProps:{metaUrl:u,baseMeta:t,dfId:r,proxy:n,noTime:l}}),m.Z.showDialog(i+"_"+r,i,d)}};var h=function(e,t){return e.text<t.text?-1:e.text>t.text?1:0};const v=function(e,t){return fetch(t?t+e:e,{cache:"default"}).then((function(e){return e.json()})).then((function(e){return Array.isArray(e)&&e.sort(h),e}))};var y=r(2306);const _={MSG_ERR:{paddingLeft:"12px",color:"#f44336",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px"},TITLE:{position:"relative",color:"silver",paddingLeft:"32px",paddingTop:"8px",paddingBottom:"4px",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",cursor:"pointer"},TITLE_ARROW:{position:"absolute",top:"8px",left:"16px"},ITEM_L:{color:"#1b2836",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",padding:"8px",paddingLeft:"12px",cursor:"pointer"},ITEM_T:{color:"black",fontFamily:'Roboto, "Arial Unicode MS", Arial, sans-serif',fontWeight:"bold",fontSize:"16px",padding:"8px",cursor:"pointer"}};var C="menu-item";const P=function(e){var t=e.innerRef,r=e.title,n=e.onClick;return(0,i.jsxs)("div",{ref:t,className:C,style:_.TITLE,role:"menuitem",tabIndex:"0",onClick:n,onKeyDown:function(e){(0,y.Z)(e)&&(e.preventDefault(),n())},children:[r,(0,i.jsx)("span",{style:_.TITLE_ARROW,children:"<"})]})};var b="menu-item";const I=function(e){var t=e.innerRef,r=e.item,n=e.onClick,o=r.text,a="l"===r.type?_.ITEM_L:_.ITEM_T,l=(0,s.useCallback)((function(e){(0,y.Z)(e)&&(e.preventDefault(),n())}),[n]);return(0,i.jsx)("div",{ref:t,className:b,style:a,tabIndex:"0",role:"menuitem",onClick:n,onKeyDown:l,children:o})};const T=(0,s.memo)((function(e){var t=e.refFirstItem,r=e.model,n=void 0===r?[]:r,o=e.fOnClickItem;return(0,i.jsx)("div",{children:n.map((function(e,r){return(0,i.jsx)(I,{innerRef:0===r?t:void 0,item:e,onClick:o(e)},e.id)}))})}));const R=function(e){var t=e.errMsg;return t?(0,i.jsx)("div",{style:_.MSG_ERR,children:t}):null};var S=Array.isArray,k=function(e,t,r,n,i,s,a){var l=a.text,c=a.id;return"l"===a.type?i.bind(null,t+"/"+c,l,n):s(o()({id:t+"/"+c},r,{text:l,proxy:e}))};const w=function(e){var t=e.refFirstItem,r=e.style,n=e.store,o=e.title,a=e.id,l=void 0===a?"":a,c=e.dfProps,u=void 0===c?{}:c,d=e.pageNumber,f=e.pageCurrent,p=e.onClickPrev,m=e.onClickNext,g=e.fOnClickItem,x=e.loadItems,h=(0,s.useRef)(),v=(0,s.useRef)(),y=(0,s.useState)({model:[],errMsg:null}),_=y[0],C=y[1],b=_.model,I=_.errMsg,w=function(e,t){return e.getProxy(t.lT)}(n,u),j=(0,s.useCallback)(k.bind(null,w,l,u,d,m,g),[w]);(0,s.useEffect)((function(){return o&&x(u.rootUrl+"/"+l,w).then((function(e){if(!S(e))throw new Error("Response is not array");C({model:e,errMsg:null})})).catch((function(e){return C({model:[],errMsg:e.message})})),function(){clearTimeout(v.current),h.current=null}}),[]),(0,s.useEffect)((function(){d===f&&(v.current=setTimeout((function(){var e=h.current;e&&e.focus()}),1e3))}),[d,f]);var A=o&&p;return(0,i.jsxs)("div",{style:r,children:[A&&(0,i.jsx)(P,{innerRef:h,title:o,onClick:p.bind(null,d)}),(0,i.jsx)(T,{refFirstItem:t,model:b,fOnClickItem:j}),(0,i.jsx)(R,{errMsg:I})]})};const j=function(e){var t=e.pages,r=e.pageCurrent;return t.map((function(e,t){return(0,s.cloneElement)(e,{pageCurrent:r,pageNumber:t+1})}))};var A={ROOT:{width:300,overflow:"hidden"},PAGES:{width:1500,overflowX:"hidden",display:"flex",flexFlow:"row nowrap",alignItems:"flex-start",transition:"all 750ms ease-out"},PAGE:{width:300}},E=function(e){var t=e.style.transform.substring(11).replace("px","").replace(")","");return parseInt(t,10)};const M=function(e){function t(t){var r;return(r=e.call(this,t)||this)._loadItems=function(){var e=r.props,t=e.dfProps,n=void 0===t?{}:t,o=e.store,i=n.lT,s=o.getProxy(i);v(n.rootUrl,s).then((function(e){if(!Array.isArray(e))throw new Error("Response is not array");r.setState({model:e,errMsg:void 0})})).catch((function(e){r.setState({errMsg:e.message})}))},r.hPrevPage=function(e){r.setState((function(t){var n=t.pageCurrent;return 0===n||n!==e?null:(r._direction=-1,{pageCurrent:e-1})}))},r._addPage=function(e,t,n){var o=r.props,s=o.dfProps,a=o.store;e.push((0,i.jsx)(w,{id:t,style:A.PAGE,store:a,title:n,dfProps:s,onClickPrev:r.hPrevPage,onClickNext:r.hNextPage,loadItems:v,fOnClickItem:x},t))},r.hNextPage=function(e,t,n){r.setState((function(o){var i=o.pageCurrent,s=o.pages;return n!==i?null:(n<s.length?s[n]&&s[n].key!==e&&(n>0?s.splice(n):s=[],r._addPage(s,e,t)):r._addPage(s,e,t),r._direction=1,{pages:s,pageCurrent:n+1})}))},r._crTransform=function(){var e="0";if(0!==r._direction&&r._menuNode){var t=E(r._menuNode);e=1===r._direction?t-300:t+300,r._direction=0}else 0===r._direction&&r._menuNode&&(e=E(r._menuNode));return{transform:"translateX("+e+"px)"}},r._refMenu=function(e){return r._menuNode=e},r.focusFirst=function(){var e=r._refFirstItem.current;e&&e.focus()},r.hNextPage=(0,p.Z)(r.hNextPage.bind(u()(r))),r.hPrevPage=(0,p.Z)(r.hPrevPage.bind(u()(r))),r._direction=0,r._refFirstItem=(0,s.createRef)(),r._fOnClickItem=function(e){var t=e.id,n=e.text;return r.hNextPage.bind(null,t,n,0)},r.state={model:[],pageCurrent:0,pages:[]},r}f()(t,e);var r=t.prototype;return r.componentDidMount=function(){this._loadItems()},r.render=function(){var e=this.state,t=e.model,r=e.errMsg,n=e.pages,s=e.pageCurrent,a=this._crTransform(),l=o()({},A.PAGES,a);return(0,i.jsx)("div",{style:A.ROOT,children:(0,i.jsxs)("div",{ref:this._refMenu,style:l,children:[(0,i.jsxs)("div",{style:A.PAGE,children:[(0,i.jsx)(T,{refFirstItem:this._refFirstItem,model:t,fOnClickItem:this._fOnClickItem}),(0,i.jsx)(R,{errMsg:r})]}),(0,i.jsx)(j,{pages:n,pageCurrent:s})]})})},r.componentDidUpdate=function(){0===this.state.pageCurrent&&setTimeout(this.focusFirst,1e3)},t}(s.Component);var N={BROWSER:{paddingRight:0},SCROLL_PANE:{height:"92%"}};const O=(0,s.memo)((function(e){var t=e.isInitShow,r=e.caption,n=e.store,c=e.browserType,u=e.showAction,d=(0,s.useState)(!!t),f=d[0],p=d[1],m=(0,s.useCallback)((function(){p(!1)}),[]);return(0,a.Z)(n,(function(e,t){e===u&&t===c&&p(!0)})),(0,i.jsxs)(l.Z.Browser,{isShow:f,style:N.BROWSER,children:[(0,i.jsx)(l.Z.BrowserCaption,{caption:r,onClose:m}),(0,i.jsx)(l.Z.ScrollPane,{className:"scroll-container-y",style:N.SCROLL_PANE,children:(0,i.jsx)(M,o()({},e))})]})}))}}]);