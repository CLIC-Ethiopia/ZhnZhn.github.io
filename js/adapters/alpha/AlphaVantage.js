"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _Api = _interopRequireDefault(require("./Api"));

var _crAdapter = _interopRequireDefault(require("../crAdapter"));

var _IndicatorAdapter = _interopRequireDefault(require("./IndicatorAdapter"));

var _IntradayAdapter = _interopRequireDefault(require("./IntradayAdapter"));

var _SectorAdapter = _interopRequireDefault(require("./SectorAdapter"));

var _SearchAdapter = _interopRequireDefault(require("./SearchAdapter"));

var _FundAdapter = _interopRequireDefault(require("./FundAdapter"));

var _EarnAdapter = _interopRequireDefault(require("./EarnAdapter"));

var _rAdapter = {
  DF: _IndicatorAdapter["default"],
  I: _IntradayAdapter["default"],
  S: _SectorAdapter["default"],
  SR: _SearchAdapter["default"],
  F: _FundAdapter["default"],
  E: _EarnAdapter["default"]
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _getAdapter = function _getAdapter(option) {
  var dfSubId = option.dfSubId,
      _adapter = _rAdapter[dfSubId] || _rAdapter.DF;

  return _isFn(_adapter) ? _adapter() : _adapter;
};

var adapter = (0, _crAdapter["default"])(_getAdapter, {
  isKey: true
});
var AlphaVantage = {
  api: _Api["default"],
  adapter: adapter
};
var _default = AlphaVantage;
exports["default"] = _default;
//# sourceMappingURL=AlphaVantage.js.map