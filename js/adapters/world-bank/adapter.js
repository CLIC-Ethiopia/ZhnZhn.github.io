"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ConfigBuilder = _interopRequireDefault(require("../../charts/ConfigBuilder"));

var _fnAdapter = _interopRequireDefault(require("./fnAdapter"));

var crId = _fnAdapter["default"].crId,
    crData = _fnAdapter["default"].crData,
    crConfigOptions = _fnAdapter["default"].crConfigOptions;
var adapter = {
  crKey: crId,
  toConfig: function toConfig(json, option) {
    var title = option.title,
        subtitle = option.subtitle,
        data = crData(json[1]),
        seria = (0, _ConfigBuilder["default"])().splineSeria({
      data: data
    }).toSeria(),
        config = (0, _ConfigBuilder["default"])().areaConfig({
      spacingTop: 25
    }).addCaption(title, subtitle).addSeries(seria).addMinMax(data, option).add((0, _extends2["default"])({}, crConfigOptions(option, data))).toConfig();
    return {
      config: config
    };
  },
  toSeries: function toSeries(json, option) {
    var _adapter$toConfig = adapter.toConfig(json, option),
        config = _adapter$toConfig.config;

    return config.series[0];
  }
};
var _default = adapter;
exports["default"] = _default;
//# sourceMappingURL=adapter.js.map