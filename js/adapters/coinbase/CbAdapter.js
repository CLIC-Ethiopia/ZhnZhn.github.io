"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crAdapterRouter = _interopRequireDefault(require("../crAdapterRouter"));
var _toKline = _interopRequireDefault(require("./toKline"));
const _rAdapter = {
    DF: _toKline.default
  },
  CbAdapter = (0, _crAdapterRouter.default)(_rAdapter);
var _default = exports.default = CbAdapter;
//# sourceMappingURL=CbAdapter.js.map