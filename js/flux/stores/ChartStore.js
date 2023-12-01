"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _refluxCore = _interopRequireDefault(require("reflux-core"));
var _Actions = _interopRequireDefault(require("../actions/Actions"));
var _ChartSlice = _interopRequireDefault(require("./ChartSlice"));
var _watchListStore = require("../watch-list/watchListStore");
const ChartStore = _refluxCore.default.createStore({
  listenables: [..._Actions.default],
  init() {
    (0, _watchListStore.initWatchList)();
  },
  ..._ChartSlice.default
});
var _default = exports.default = ChartStore;
//# sourceMappingURL=ChartStore.js.map