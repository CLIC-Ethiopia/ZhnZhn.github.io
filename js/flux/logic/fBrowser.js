"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.crAsyncBrowser = void 0;

var _react = require("react");

var _ChartStore = _interopRequireDefault(require("../stores/ChartStore"));

var _ComponentActions = require("../actions/ComponentActions");

var _ChartActions = _interopRequireWildcard(require("../actions/ChartActions"));

var _BrowserActions = _interopRequireWildcard(require("../actions/BrowserActions"));

var _BrowserType = require("../../constants/BrowserType");

var _RouterBrowser = _interopRequireDefault(require("./RouterBrowser"));

var _RouterItemOption = _interopRequireDefault(require("../../components/zhn-select/RouterItemOption"));

var _RouterBrowserItem = _interopRequireDefault(require("../../components/browser-items/RouterBrowserItem"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const _crBrowserWatchList = Comp => /*#__PURE__*/(0, _react.createElement)(Comp, {
  key: _BrowserType.BT_WATCH_LIST,
  browserType: _BrowserType.BT_WATCH_LIST,
  caption: "Watch List",
  isInitShow: true,
  store: _ChartStore.default,
  showAction: _BrowserActions.BAT_SHOW_BROWSER_DYNAMIC,
  updateAction: _BrowserActions.BAT_UPDATE_WATCH_BROWSER
});

const _crBrowserDynamic = (Comp, option) => {
  const {
    browserType,
    caption = 'Source Browser',
    sourceMenuUrl,
    chartContainerType,
    modalDialogType,
    itemOptionType,
    itemType,
    descrUrl,
    dfProps
  } = option,
        ItemOptionComp = itemOptionType ? _RouterItemOption.default[itemOptionType] || _RouterBrowserItem.default.DF : _RouterBrowserItem.default.DF,
        ItemComp = itemType ? _RouterBrowserItem.default[itemType] || _RouterBrowserItem.default.DEFAULT : void 0,
        onClickInfo = typeof ItemComp !== "undefined" ? _ComponentActions.ComponentActions.showDescription : void 0 //for Type2
  ,
        onShowLoadDialog = chartContainerType ? item => _ComponentActions.ComponentActions.showModalDialog(modalDialogType, {
    item,
    browserType,
    chartContainerType,
    onShow: _ChartActions.default[_ChartActions.CHAT_SHOW].bind(null, chartContainerType, browserType)
  }) : void 0;
  return /*#__PURE__*/(0, _react.createElement)(Comp, {
    dfProps,
    key: browserType,
    browserType,
    store: _ChartStore.default,
    isInitShow: true,
    caption,
    ItemOptionComp,
    ItemComp,
    descrUrl,
    onClickInfo,
    showAction: _BrowserActions.BAT_SHOW_BROWSER_DYNAMIC,
    loadedAction: _BrowserActions.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
    failedAction: _BrowserActions.BAT_LOAD_BROWSER_FAILED,
    updateAction: _BrowserActions.BAT_UPDATE_BROWSER_MENU,
    //for Type
    onLoadMenu: _BrowserActions.default.loadBrowserDynamic.bind(null, {
      browserType,
      caption,
      sourceMenuUrl
    }),
    onShowLoadDialog //for Type2

  });
};

const STAT_ALL_TYPES = [_BrowserType.BT_SWEDEN_STAT_ALL, _BrowserType.BT_NORWAY_STAT_ALL, _BrowserType.BT_FINLAND_STAT_ALL, _BrowserType.BT_DENMARK_STAT_ALL, _BrowserType.BT_IRELAND_STAT_ALL];

const _isStatAll = browserType => STAT_ALL_TYPES.indexOf(browserType) !== -1;

const crAsyncBrowser = option => {
  const bT = option.browserType;

  if (bT === _BrowserType.BT_WATCH_LIST) {
    return _RouterBrowser.default[_BrowserType.BT_WATCH_LIST].then(_crBrowserWatchList);
  }

  if (_isStatAll(bT)) {
    return _RouterBrowser.default.STAT_ALL.then(Comp => _crBrowserDynamic(Comp, option));
  }

  return Promise.resolve(_crBrowserDynamic(_RouterBrowser.default[bT] || _RouterBrowser.default.DEFAULT, option));
};

exports.crAsyncBrowser = crAsyncBrowser;
//# sourceMappingURL=fBrowser.js.map