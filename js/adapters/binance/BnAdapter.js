"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crAdapterOHLCV = _interopRequireDefault(require("../crAdapterOHLCV"));

var _crZhConfig = function _crZhConfig(_ref) {
  var _itemKey = _ref._itemKey,
      itemCaption = _ref.itemCaption,
      dataSource = _ref.dataSource;
  return {
    id: _itemKey,
    key: _itemKey,
    itemCaption: itemCaption,
    dataSource: dataSource
  };
};

var _crInfo = function _crInfo(_ref2) {
  var title = _ref2.title;
  return {
    name: title,
    description: 'Data from Binance cryptocurrency exchange API'
  };
};

var _crAddConfig = function _crAddConfig(_ref3) {
  var option = _ref3.option;
  return {
    zhConfig: _crZhConfig(option),
    info: _crInfo(option)
  };
};
/*
From Binance API Documentation
[
    1499040000000,      // Open time
    "0.01634790",       // Open
    "0.80000000",       // High
    "0.01575800",       // Low
    "0.01577100",       // Close
    "148976.11427815",  // Volume
    1499644799999,      // Close time
    "2434.19055334",    // Quote asset volume
    308,                // Number of trades
    "1756.87402397",    // Taker buy base asset volume
    "28.46694368",      // Taker buy quote asset volume
    "17928899.62484339" // Ignore.
  ]
*/


var _crDataOHLCV = function _crDataOHLCV(json) {
  return json.map(function (item) {
    return {
      date: item[6],
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
      volume: parseFloat(item[5])
    };
  });
};

var BnAdapter = (0, _crAdapterOHLCV["default"])({
  getArr: _crDataOHLCV,
  toDate: function toDate(date) {
    return date;
  },
  crAddConfig: _crAddConfig
});
var _default = BnAdapter;
exports["default"] = _default;
//# sourceMappingURL=BnAdapter.js.map