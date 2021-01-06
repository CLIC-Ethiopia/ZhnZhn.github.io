"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crAdapterRouter = _interopRequireDefault(require("../crAdapterRouter"));

var _toChartConfig = _interopRequireDefault(require("./toChartConfig"));

var _toTwConfig = _interopRequireDefault(require("./toTwConfig"));

var _toCiConfig = _interopRequireDefault(require("./toCiConfig"));

var _rAdapter = {
  DF: _toChartConfig["default"],
  TW: _toTwConfig["default"],
  CI: _toCiConfig["default"]
},
    CpAdapter = (0, _crAdapterRouter["default"])(_rAdapter, {
  isKey: true
});
var _default = CpAdapter;
exports["default"] = _default;
//# sourceMappingURL=CpAdapter.js.map