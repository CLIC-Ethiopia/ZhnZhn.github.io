"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ChartType = require("../../constants/ChartType");
var _ChartConfigFn = require("../../charts/ChartConfigFn");
var _AdapterFn = require("../AdapterFn");
var _compareByFn = require("../compareByFn");
var _NdlFn = require("./NdlFn");
var _toArea = _interopRequireDefault(require("./toArea"));
var _toSemiDonut = _interopRequireDefault(require("./toSemiDonut"));
var _toStackedArea = _interopRequireDefault(require("./toStackedArea"));
var _toStackedColumn = _interopRequireDefault(require("./toStackedColumn"));
var _toTreeMap = _interopRequireDefault(require("./toTreeMap"));
var _toYearsByMonths = _interopRequireDefault(require("../toYearsByMonths"));
var _toScatter = require("./toScatter");
const _fToConfig = crConfig => (json, option) => ({
  config: crConfig((0, _NdlFn.getData)(json), option)
});
const _fToSeria = crSeria => (json, option, chart) => crSeria((0, _NdlFn.getData)(json), option, chart);
const _crScatterConfig = _fToConfig(_toScatter.toScatterConfig);
const _rToConfig = {
  [_ChartType.CHT_AREA]: _toArea.default,
  [_ChartType.CHT_SEMI_DONUT]: _toSemiDonut.default,
  [_ChartType.CHT_STACKED_AREA]: _toStackedArea.default,
  [_ChartType.CHT_STACKED_AREA_PERCENT]: _toStackedArea.default,
  [_ChartType.CHT_STACKED_COLUMN]: _toStackedColumn.default,
  [_ChartType.CHT_STACKED_COLUMN_PERCENT]: _toStackedColumn.default,
  [_ChartType.CHT_TREE_MAP]: _toTreeMap.default,
  [_ChartType.CHT_YEARLY]: _fToConfig(_toYearsByMonths.default),
  [_ChartType.CHT_SCATTER]: _crScatterConfig,
  [_ChartType.CHT_SCATTER_UP]: _crScatterConfig,
  [_ChartType.CHT_SCATTER_DOWN]: _crScatterConfig
};
const _crSeriaData = (data, yIndex) => data.map(p => [(0, _AdapterFn.ymdToUTC)(p[0]), p[yIndex]]).sort(_compareByFn.compareByDate);
const _toSeria = (json, option) => {
  const {
      value: chartId
    } = option,
    yPointIndex = (0, _NdlFn.getDataColumnIndex)(json, option),
    data = _crSeriaData((0, _NdlFn.getData)(json), yPointIndex);
  return (0, _ChartConfigFn.crSeriaConfig)({
    name: chartId.substring(0, 12),
    data: data,
    minY: (0, _AdapterFn.findMinY)(data)
  });
};
const _crScatterSeria = _fToSeria(_toScatter.toScatterSeria);
const _rToSeria = {
  DF: _toSeria,
  [_ChartType.CHT_SCATTER]: _crScatterSeria,
  [_ChartType.CHT_SCATTER_UP]: _crScatterSeria,
  [_ChartType.CHT_SCATTER_DOWN]: _crScatterSeria
};
const NdlAdapter = {
  toConfig(json, option) {
    const {
      seriaType = _ChartType.CHT_AREA
    } = option;
    return _rToConfig[seriaType](json, option);
  },
  toSeries(json, option, chart) {
    const {
        seriaType
      } = option,
      _toSeria = _rToSeria[seriaType] || _rToSeria.DF;
    return _toSeria(json, option, chart);
  }
};
var _default = NdlAdapter;
exports.default = _default;
//# sourceMappingURL=NdlAdapter.js.map