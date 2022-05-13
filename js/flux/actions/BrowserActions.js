"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.BAT_UPDATE_WATCH_BROWSER = exports.BAT_UPDATE_BROWSER_MENU = exports.BAT_SHOW_BROWSER_DYNAMIC = exports.BAT_LOAD_BROWSER_FAILED = exports.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = exports.BAT_LOAD_BROWSER_DYNAMIC = exports.BAT_INIT_BROWSER_DYNAMIC = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _ChartStore = _interopRequireDefault(require("../stores/ChartStore"));

var _Factory = _interopRequireDefault(require("../logic/Factory"));

var _BrowserConfig = _interopRequireDefault(require("../../constants/BrowserConfig"));

var _BrowserType = require("../../constants/BrowserType");

var _RouterModalDialog = _interopRequireDefault(require("../../components/dialogs/RouterModalDialog"));

var _RouterDialog = _interopRequireDefault(require("../logic/RouterDialog"));

var _fnFetch = require("../../utils/fnFetch");

var _onCatch = _interopRequireDefault(require("../logic/onCatch"));

const BAT_SHOW_BROWSER_DYNAMIC = 'showBrowserDynamic';
exports.BAT_SHOW_BROWSER_DYNAMIC = BAT_SHOW_BROWSER_DYNAMIC;
const BAT_INIT_BROWSER_DYNAMIC = 'initBrowserDynamic';
exports.BAT_INIT_BROWSER_DYNAMIC = BAT_INIT_BROWSER_DYNAMIC;
const BAT_LOAD_BROWSER_DYNAMIC = 'loadBrowserDynamic';
exports.BAT_LOAD_BROWSER_DYNAMIC = BAT_LOAD_BROWSER_DYNAMIC;
const BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = 'loadBrowserDynamicCompleted';
exports.BAT_LOAD_BROWSER_DYNAMIC_COMPLETED = BAT_LOAD_BROWSER_DYNAMIC_COMPLETED;
const BAT_LOAD_BROWSER_FAILED = 'loadBrowserFailed';
exports.BAT_LOAD_BROWSER_FAILED = BAT_LOAD_BROWSER_FAILED;
const BAT_UPDATE_WATCH_BROWSER = 'updateWatchBrowser';
exports.BAT_UPDATE_WATCH_BROWSER = BAT_UPDATE_WATCH_BROWSER;
const BAT_UPDATE_BROWSER_MENU = 'updateBrowserMenu';
exports.BAT_UPDATE_BROWSER_MENU = BAT_UPDATE_BROWSER_MENU;

const BA = _refluxCore.default.createActions({
  [BAT_SHOW_BROWSER_DYNAMIC]: {
    children: ['done', 'init', 'failed']
  },
  [BAT_INIT_BROWSER_DYNAMIC]: {},
  [BAT_LOAD_BROWSER_DYNAMIC]: {
    children: ['completed', 'failed']
  },
  [BAT_UPDATE_WATCH_BROWSER]: {}
});

const _fnFetchSourceMenu = function (_ref) {
  let {
    json,
    option,
    onCompleted
  } = _ref;
  const {
    browserType
  } = option;
  onCompleted({
    json,
    browserType
  });
};

const ERR_LOAD = "Failed to load browser.",
      ERR_FOUND = "Browser hasn't found.",
      ERR_ITEM = "Browser";

const _crErr = (alertDescr, alertItemId) => ({
  alertDescr,
  alertItemId
});

BA[BAT_SHOW_BROWSER_DYNAMIC].listen(function (option) {
  if (option === void 0) {
    option = {};
  }

  const _option = typeof option === 'string' ? {
    browserType: option
  } : option,
        {
    browserType: bT
  } = _option,
        config = _BrowserConfig.default[bT];

  if (bT && config) {
    if (_ChartStore.default.getBrowserMenu(bT)) {
      this.done(_option);
    } else {
      Promise.all([_RouterModalDialog.default.loadDialogs(bT), _RouterDialog.default.loadDialogs(bT)]).then(() => _Factory.default.crAsyncBrowser(config)).then(elBrowser => {
        this.init(elBrowser, config);
      }).catch(() => {
        this.failed({ ..._option,
          ..._crErr(ERR_LOAD, config.caption)
        });
      });
    }
  } else {
    this.failed({ ..._option,
      ..._crErr(ERR_FOUND, ERR_ITEM)
    });
  }
});
BA[BAT_LOAD_BROWSER_DYNAMIC].listen(function (option) {
  (0, _fnFetch.fetchJson)({
    uri: option.sourceMenuUrl,
    option: option,
    onFetch: _fnFetchSourceMenu,
    onCompleted: this.completed,
    onCatch: _onCatch.default,
    onFailed: this.failed
  });
});
const _show = BA.showBrowserDynamic;
BA.showQuandl = _show.bind(null, _BrowserType.BT_QUANDL);
BA.showEurostat = _show.bind(null, _BrowserType.BT_EUROSTAT);
BA.showWatch = _show.bind(null, _BrowserType.BT_WATCH_LIST);
var _default = BA;
exports.default = _default;
//# sourceMappingURL=BrowserActions.js.map