'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fnFetch = require('../../utils/fnFetch');

var _ChartStore = require('../stores/ChartStore');

var _ChartStore2 = _interopRequireDefault(_ChartStore);

var _ChartFn = require('../../charts/ChartFn');

var _ChartFn2 = _interopRequireDefault(_ChartFn);

var _fnCatch = require('./fnCatch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crOptionFetch = function _crOptionFetch(objImpl, option) {
  var optionFetch = objImpl.optionFetch;

  return typeof optionFetch === 'function' ? optionFetch(option) : optionFetch;
};

var _loadToChartComp = function _loadToChartComp(objImpl, option, onCompleted, onFailed) {
  var fnFetch = objImpl.fnFetch,
      api = objImpl.api,
      optionFetch = _crOptionFetch(objImpl, option);

  fnFetch({
    uri: api.getRequestUrl(option),
    option: option,
    optionFetch: optionFetch,
    onCheckResponse: api.checkResponse,
    onFetch: _fnFetchToChartComp.bind(null, objImpl),
    onCompleted: onCompleted,
    onCatch: _fnCatch.fnCatch,
    onFailed: onFailed
  });
};

var _fnFetchToChartComp = function _fnFetchToChartComp(objImpl, _ref) {
  var json = _ref.json,
      option = _ref.option,
      onCompleted = _ref.onCompleted;
  var adapter = objImpl.adapter,
      _adapter$toConfig = adapter.toConfig(json, option),
      config = _adapter$toConfig.config;


  if (typeof config.then !== 'function') {
    onCompleted(option, config);
  } else {
    config.then(function (config) {
      onCompleted(option, config);
      return undefined;
    });
  }
};

var _loadToChart = function _loadToChart(objImpl, option, onAdded, onFailed) {
  var fnFetch = objImpl.fnFetch,
      api = objImpl.api,
      optionFetch = _crOptionFetch(objImpl, option);

  fnFetch({
    uri: api.getRequestUrl(option),
    option: option,
    optionFetch: optionFetch,
    onCheckResponse: api.checkResponse,
    onFetch: _fnFetchToChart.bind(null, objImpl),
    onCompleted: onAdded,
    onCatch: _fnCatch.fnCatch,
    onFailed: onFailed
  });
};

var _fnFetchToChart = function _fnFetchToChart(objImpl, _ref2) {
  var json = _ref2.json,
      option = _ref2.option,
      onCompleted = _ref2.onCompleted;
  var adapter = objImpl.adapter,
      itemCaption = option.itemCaption,
      value = option.value,
      hasSecondYAxis = option.hasSecondYAxis,
      chart = _ChartStore2.default.getActiveChart(),
      series = adapter.toSeries(json, option, chart),
      _ref3 = series || {},
      zhItemCaption = _ref3.zhItemCaption,
      zhColor = _ref3.zhColor;


  _ChartFn2.default.addSeriaWithRenderLabel({
    chart: chart, series: series,
    label: zhItemCaption || itemCaption || value,
    color: zhColor,
    hasSecondYAxis: !!hasSecondYAxis
  });
  onCompleted(option);
};

var _fnLoadItem = function _fnLoadItem(objImpl, option, onCompleted, onAdded, onFailed) {
  var parentId = _ChartStore2.default.isLoadToChart();
  if (!parentId) {
    _loadToChartComp(objImpl, option, onCompleted, onFailed);
  } else {
    option.parentId = parentId;
    _loadToChart(objImpl, option, onAdded, onFailed);
  }
};

var fLoadItem = function fLoadItem(objImpl) {
  var _objImpl$fnFetch = objImpl.fnFetch,
      fnFetch = _objImpl$fnFetch === undefined ? _fnFetch.fetchJson : _objImpl$fnFetch,
      api = objImpl.api;

  objImpl.fnFetch = fnFetch;
  return {
    loadItem: _fnLoadItem.bind(null, objImpl),
    fnFetchToChartComp: _fnFetchToChartComp.bind(null, objImpl),
    fnFetchToChart: _fnFetchToChart.bind(null, objImpl),
    addPropsTo: api.addPropsTo
  };
};

exports.default = fLoadItem;
//# sourceMappingURL=loadItem.js.map