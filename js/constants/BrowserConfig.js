'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _BrowserConfig;

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserConfig = (_BrowserConfig = {}, (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.EUROSTAT, {
  browserType: _Type.BrowserType.EUROSTAT,
  isDynamic: true,
  caption: 'European Statistics',
  sourceMenuUrl: './data/eurostat/source-menu.json'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.ECONOMIC, {
  browserType: _Type.BrowserType.ECONOMIC,
  isDynamic: false
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.GOOGLE, {
  browserType: _Type.BrowserType.GOOGLE,
  isDynamic: true,
  caption: 'Quandl : Google Stocks',
  sourceMenuUrl: './data/google/source-menu.json'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.YAHOO, {
  browserType: _Type.BrowserType.YAHOO,
  isDynamic: true,
  caption: 'Quandl : Yahoo Stocks',
  sourceMenuUrl: './data/yahoo/source-menu.json'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.PREMIUM_SAMPLE, {
  browserType: _Type.BrowserType.PREMIUM_SAMPLE,
  isDynamic: true,
  caption: 'Quandl Premium Sample',
  sourceMenuUrl: './data/quandl-sample/source-menu.json'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.FRANCE_STATISTICS, {
  browserType: _Type.BrowserType.FRANCE_STATISTICS,
  isDynamic: true,
  caption: 'Quandl : France Statistics',
  sourceMenuUrl: './data/france-statistics/source-menu.json'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.US_STOCKS, {
  browserType: _Type.BrowserType.US_STOCKS,
  isDynamic: true,
  caption: 'Stocks by Sectors',
  sourceMenuUrl: './data/us-stocks/source-menu.json',
  withoutItemCounter: true,
  modalDialogType: _Type.ModalDialog.US_STOCK_BY_SECTOR,
  chartContainerType: _Type.BrowserType.US_STOCKS + '_' + _Type.BrowserType.STOCKS_BY_SECTORS,
  chartContainerCaption: 'Quandl : Stocks by Sectors',
  itemOptionType: 'ItemTopicOption',
  itemType: 'Item',
  descrUrl: './data/us-stocks/description.html'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.NYSE_STOCKS, {
  browserType: _Type.BrowserType.NYSE_STOCKS,
  isDynamic: true,
  caption: 'US NYSE by Sectors',
  sourceMenuUrl: './data/nyse-stocks/source-menu.json',
  withoutItemCounter: true,
  modalDialogType: _Type.ModalDialog.STOCKS_BY_SECTOR,
  chartContainerType: _Type.BrowserType.NYSE_STOCKS + '_' + _Type.BrowserType.STOCKS_BY_SECTORS,
  chartContainerCaption: 'Quandl : US NYSE by Sectors',
  itemOptionType: 'ItemTopicOption',
  itemType: 'ItemWithCap',
  descrUrl: './data/nyse-stocks/nyse-stocks.html'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.NASDAQ_STOCKS, {
  browserType: _Type.BrowserType.NASDAQ_STOCKS,
  isDynamic: true,
  caption: 'US NASDAQ by Sectors',
  sourceMenuUrl: './data/nasdaq-stocks/source-menu.json',
  withoutItemCounter: true,
  modalDialogType: _Type.ModalDialog.STOCKS_BY_SECTOR,
  chartContainerType: _Type.BrowserType.NASDAQ_STOCKS + '_' + _Type.BrowserType.STOCKS_BY_SECTORS,
  chartContainerCaption: 'Quandl : US NASDAQ by Sectors',
  itemOptionType: 'ItemTopicOption',
  itemType: 'ItemWithCap',
  descrUrl: './data/nasdaq-stocks/nasdaq-stocks.html'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.LONDON_STOCKS, {
  browserType: _Type.BrowserType.LONDON_STOCKS,
  isDynamic: true,
  caption: 'London Stocks by Sectors',
  sourceMenuUrl: './data/london-stocks/source-menu.json',
  withoutItemCounter: true,
  modalDialogType: _Type.ModalDialog.STOCKS_BY_SECTOR,
  chartContainerType: _Type.BrowserType.LONDON_STOCKS + '_' + _Type.BrowserType.STOCKS_BY_SECTORS,
  chartContainerCaption: 'Quandl : London Stock Exchange by Sectors',
  itemOptionType: 'ItemTopicOption',
  itemType: 'ItemLse',
  descrUrl: './data/london-stocks/lse-stocks.html'
}), (0, _defineProperty3.default)(_BrowserConfig, _Type.BrowserType.WATCH_LIST, {
  browserType: _Type.BrowserType.WATCH_LIST,
  isDynamic: false,
  withoutItemCounter: true
}), _BrowserConfig);

exports.default = BrowserConfig;
//# sourceMappingURL=BrowserConfig.js.map