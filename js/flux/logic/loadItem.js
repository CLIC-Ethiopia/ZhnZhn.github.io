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

var ALERT = {
  CATEGORY_TO_SPLINE: {
    alertCaption: 'Series Error',
    alertDescr: "Adding category seria to not category isn't allowed."
  }
};

var _isArr = Array.isArray;
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _crOptionFetch = function _crOptionFetch(_ref, option) {
  var optionFetch = _ref.optionFetch;
  return _isFn(optionFetch) ? optionFetch(option) : optionFetch;
};

var _fetchToChartComp = function _fetchToChartComp(objImpl, _ref2) {
  var json = _ref2.json,
      option = _ref2.option,
      onCompleted = _ref2.onCompleted;
  var adapter = objImpl.adapter,
      _adapter$toConfig = adapter.toConfig(json, option),
      config = _adapter$toConfig.config;


  if (!_isFn(config.then)) {
    onCompleted(option, config);
  } else {
    config.then(function (config) {
      onCompleted(option, config);
      return;
    });
  }
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
    onFetch: _fetchToChartComp.bind(null, objImpl),
    onCompleted: onCompleted,
    onCatch: _fnCatch.fnCatch,
    onFailed: onFailed
  });
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
    onFetch: _fetchToChart.bind(null, objImpl),
    onCompleted: onAdded,
    onCatch: _fnCatch.fnCatch,
    onFailed: onFailed
  });
};

var _fetchToChart = function _fetchToChart(objImpl, _ref3) {
  var json = _ref3.json,
      option = _ref3.option,
      onCompleted = _ref3.onCompleted;
  var adapter = objImpl.adapter,
      itemCaption = option.itemCaption,
      value = option.value,
      hasSecondYAxis = option.hasSecondYAxis,
      chart = _ChartStore2.default.getActiveChart(),
      series = adapter.toSeries(json, option, chart),
      _ref4 = series || {},
      zhItemCaption = _ref4.zhItemCaption,
      color = _ref4.color,
      zhColor = _ref4.zhColor;


  _ChartFn2.default.addSeriaWithRenderLabel({
    chart: chart, series: series,
    label: zhItemCaption || itemCaption || value,
    color: color || zhColor,
    hasSecondYAxis: !!hasSecondYAxis
  });
  onCompleted(option);
};

var _isAddCategoryToSpline = function _isAddCategoryToSpline(_ref5) {
  var seriaType = _ref5.seriaType;

  var chart = _ChartStore2.default.getActiveChart();
  return seriaType && seriaType.indexOf('_SET') !== -1 && chart && _isArr(chart.xAxis) && !_isArr(chart.xAxis[0].categories);
};

var _loadItem = function _loadItem(objImpl, option, onCompleted, onAdded, onFailed) {
  var parentId = _ChartStore2.default.isLoadToChart();
  if (!parentId) {
    _loadToChartComp(objImpl, option, onCompleted, onFailed);
  } else {
    if (_isAddCategoryToSpline(option)) {
      onFailed(ALERT.CATEGORY_TO_SPLINE);
    } else {
      option.parentId = parentId;
      _loadToChart(objImpl, option, onAdded, onFailed);
    }
  }
};

var fLoadItem = function fLoadItem(objImpl) {
  var _objImpl$fnFetch = objImpl.fnFetch,
      fnFetch = _objImpl$fnFetch === undefined ? _fnFetch.fetchJson : _objImpl$fnFetch,
      api = objImpl.api,
      adapter = objImpl.adapter;

  objImpl.fnFetch = fnFetch;
  return {
    loadItem: _loadItem.bind(null, objImpl),
    //fnFetchToChartComp: _fetchToChartComp.bind(null, objImpl),
    //fnFetchToChart: _fetchToChart.bind(null, objImpl),
    addPropsTo: api.addPropsTo,
    crKey: adapter.crKey
  };
};

exports.default = fLoadItem;
//# sourceMappingURL=loadItem.js.map