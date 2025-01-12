"use strict";

exports.__esModule = true;
exports.default = void 0;
var _toSpline = require("./toSpline");
var _toAreaYearly = require("./toAreaYearly");
var _toCategory = require("./toCategory");
var _toMap = require("./toMap");
const DF_TYPE = 'SPLINE';
const _rToConfig = {
  AREA: _toSpline.crSplineConfig,
  SPLINE: _toSpline.crSplineConfig,
  COLUMN: _toSpline.crSplineConfig,
  AREA_YEARLY: _toAreaYearly.crAreaYearlyConfig,
  MAP: _toMap.crMapConfig,
  COLUMN_SET: _toCategory.crCategoryConfig,
  BAR_SET: _toCategory.crCategoryConfig,
  BAR_WITH_LABELS: _toCategory.crCategoryConfig,
  DOT_SET: _toCategory.crCategoryConfig
};
const _rToSeria = {
  AREA: _toSpline.crSplineSeria,
  SPLINE: _toSpline.crSplineSeria,
  COLUMN: _toSpline.crSplineSeria,
  COLUMN_SET: _toCategory.crCategorySeria,
  BAR_SET: _toCategory.crCategorySeria,
  BAR_WITH_LABELS: _toCategory.crCategorySeria,
  DOT_SET: _toCategory.crCategorySeria
};
const _checkSeriaType = function (router, option, dfType) {
  if (dfType === void 0) {
    dfType = DF_TYPE;
  }
  const {
    seriaType
  } = option;
  if (!seriaType || !router[seriaType]) {
    option.seriaType = dfType;
  }
};
const EuroStatAdapter = {
  toConfig(json, option) {
    _checkSeriaType(_rToConfig, option);
    const {
        seriaType,
        zhCompType
      } = option,
      _crConfig = _rToConfig[seriaType],
      config = _crConfig ? _crConfig(json, option) : {};
    config.zhCompType = zhCompType;
    return {
      config
    };
  },
  toSeries(json, option, chart) {
    _checkSeriaType(_rToConfig, option);
    const {
        seriaType
      } = option,
      _crSeria = _rToSeria[seriaType],
      seria = _crSeria ? _crSeria(json, option, chart) : void 0;
    return seria;
  }
};
var _default = EuroStatAdapter;
exports.default = _default;
//# sourceMappingURL=EuroStatAdapter.js.map