'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _BrowserMenu;

var _Type = require('./Type');

var _DialogType = require('./DialogType');

var _DataQE = require('./DataQE');

var _DataQE2 = _interopRequireDefault(_DataQE);

var _ComponentActions = require('../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _ChartActions = require('../flux/actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fnClick = function fnClick(dialogType, browserType) {
  return _ComponentActions2.default.showDialog.bind(null, dialogType, browserType);
};

var fnBadgeClick = function fnBadgeClick(dialogType, browserType) {
  return _ChartActions2.default.showChart.bind(null, dialogType, browserType);
};
var fnBadgeClose = function fnBadgeClose(chartType) {
  return _ComponentActions2.default.closeChartContainer2.bind(null, chartType);
};

var fnCreateMenu = function fnCreateMenu() {
  var menu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var data = arguments[1];
  var browserType = arguments[2];

  return menu.map(function (menuPart) {
    var caption = menuPart.caption,
        isInitClose = menuPart.isInitClose,
        _menuPart$items = menuPart.items,
        items = _menuPart$items === undefined ? [] : _menuPart$items,
        _items = items.map(function (item, index) {
      var id = item.id,
          _item$isNew = item.isNew,
          isNew = _item$isNew === undefined ? false : _item$isNew;

      return {
        id: id,
        title: data[id].menuTitle,
        isNew: isNew,
        counter: 0,
        isOpen: false,
        onClick: fnClick(id, browserType),
        onBadgeClick: fnBadgeClick(id, browserType),
        onBadgeClose: fnBadgeClose(id)
      };
    });

    return {
      caption: caption,
      isInitClose: isInitClose,
      items: _items
    };
  });
};

var menuQuandl = [{
  caption: 'Economic',
  items: [{ id: _DialogType.Quandl.CURRENCY_HISTORY }, { id: _DialogType.Quandl.GLOBAL_INDICATOR }, { id: _DialogType.Quandl.WORLDBANK_PRICE }, { id: _DialogType.Quandl.IMF_CROSSCOUNTRY }, { id: _DialogType.Quandl.EU_COMMISSION }, { id: _DialogType.Quandl.OECD }, { id: _DialogType.Quandl.USCENSUS_TRADE }]
}, {
  caption: 'Inflation & Prices',
  items: [{ id: _DialogType.Quandl.OECD_CPI }, { id: _DialogType.Quandl.RATE_INFLATION }, { id: _DialogType.Quandl.BLSI }, { id: _DialogType.Quandl.GDT }, { id: _DialogType.Quandl.BIG_MAC }]
}, {
  caption: 'Commodity', isInitClose: true,
  items: [{ id: _DialogType.Quandl.COMMODITY_TRADE }, { id: _DialogType.Quandl.COMMODITY_PRICE }, { id: _DialogType.Quandl.WIKI_COMMODITY_PRICE, isNew: true }, { id: _DialogType.Quandl.LME, isNew: true }, { id: _DialogType.Quandl.PETROLEUM_PRICES }, { id: _DialogType.Quandl.JODI_WORLD_GAS }, { id: _DialogType.Quandl.JODI_WORLD_OIL }, { id: _DialogType.Quandl.BP }, { id: _DialogType.Quandl.EIA_COAL }, { id: _DialogType.Quandl.ROGERS_INDICES }, { id: _DialogType.Quandl.BALTIC_INDICES }]
}, {
  caption: 'World Stocks',
  items: [{ id: _DialogType.Quandl.EURONEXT_STOCK }, { id: _DialogType.Quandl.TOKIO_STOCK }, { id: _DialogType.Quandl.WIKI_STOCK }, { id: _DialogType.Quandl.FREE_US_FUNDAMENTAL, isNew: true }, { id: _DialogType.Quandl.BARCHART_STOCK, isNew: true }, { id: _DialogType.Quandl.ALPHA_INDICATOR, isNew: true }, { id: _DialogType.Quandl.ALPHA_SECTOR, isNew: true }, { id: _DialogType.Quandl.NIKKEI }, { id: _DialogType.Quandl.UNICORN_RESEARCH }]
}, {
  caption: 'Futures', isInitClose: true,
  items: [{ id: _DialogType.Quandl.CHINA_FINANCE_FUTURE }, { id: _DialogType.Quandl.DCE_FUTURE }, { id: _DialogType.Quandl.ZCE_FUTURE }, { id: _DialogType.Quandl.SHANGHAI_FUTURE }, { id: _DialogType.Quandl.LIFFE_FUTURE }, { id: _DialogType.Quandl.ICE_FUTURE }, { id: _DialogType.Quandl.WIKI_FUTURE }]
}, {
  caption: 'Real Estate',
  items: [{ id: _DialogType.Quandl.ZILLOW_REAL_ESTATE }, { id: _DialogType.Quandl.FMAC }]
}];

var BrowserMenu = (_BrowserMenu = {}, (0, _defineProperty3.default)(_BrowserMenu, _Type.BrowserType.ECONOMIC, fnCreateMenu(menuQuandl, _DataQE2.default, _Type.BrowserType.ECONOMIC)), (0, _defineProperty3.default)(_BrowserMenu, 'createMenu', fnCreateMenu), _BrowserMenu);

exports.default = BrowserMenu;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\constants\BrowserMenu.js.map