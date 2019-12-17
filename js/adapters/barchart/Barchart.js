"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _BarchartApi = _interopRequireDefault(require("./BarchartApi"));

var _BarchartAdapter = _interopRequireDefault(require("./BarchartAdapter"));

var Barchart = {
  optionFetch: {
    jsonpCallbackFunction: 'BarchartAPIcallback'
  },
  api: _BarchartApi["default"],
  adapter: _BarchartAdapter["default"]
};
var _default = Barchart;
exports["default"] = _default;
//# sourceMappingURL=Barchart.js.map