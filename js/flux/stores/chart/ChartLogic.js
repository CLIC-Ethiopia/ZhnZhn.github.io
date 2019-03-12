'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _Type = require('../../../constants/Type');

var _ComponentActions = require('../../actions/ComponentActions');

var _Factory = require('../../logic/Factory');

var _Factory2 = _interopRequireDefault(_Factory);

var _fCompareBy = require('./fCompareBy');

var _fCompareBy2 = _interopRequireDefault(_fCompareBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createChartContainer = _Factory2.default.createChartContainer;


var _isArr = Array.isArray;

var _getSlice = function _getSlice(slice, chartType) {
  var activeContChb = slice.activeContChb,
      _cT = activeContChb ? activeContChb.chartType || chartType : chartType,
      chartSlice = slice[_cT],
      _ref = chartSlice || {},
      configs = _ref.configs;

  return { chartSlice: chartSlice, configs: configs };
};

var _notConfById = function _notConfById(id) {
  return function (c) {
    return c.zhConfig.id !== id;
  };
};
var _confById = function _confById(id) {
  return function (c) {
    return c.zhConfig.id === id;
  };
};

var _isSecondDotCase = function _isSecondDotCase(series, _ref2) {
  var seriaType = _ref2.seriaType;
  return seriaType === 'DOT_SET' && _isArr(series) && series[0].type === 'scatter' && series.length === 2;
};

var ChartLogic = {
  _initChartSlice: function _initChartSlice(slice, chartType, config) {
    if (!slice[chartType]) {
      slice[chartType] = {
        chartType: chartType,
        configs: config ? [config] : [],
        isShow: true
      };
    }
  },
  isChartExist: function isChartExist(slice, chartType, key) {
    var _getSlice2 = _getSlice(slice, chartType),
        chartSlice = _getSlice2.chartSlice,
        configs = _getSlice2.configs;

    if (!chartSlice) {
      return false;
    }
    var _max = configs.length;
    var i = 0;
    for (; i < _max; i++) {
      if (configs[i].zhConfig.key === key) {
        return true;
      }
    }
    return false;
  },
  loadConfig: function loadConfig(slice, config, option) {
    var chartType = option.chartType,
        _getSlice3 = _getSlice(slice, chartType),
        chartSlice = _getSlice3.chartSlice,
        configs = _getSlice3.configs;

    if (chartSlice) {
      configs.unshift(config);
      chartSlice.isShow = true;
      return { chartSlice: chartSlice };
    } else {
      ChartLogic._initChartSlice(slice, chartType, config);
      return {
        Comp: createChartContainer(option)
      };
    }
  },
  showChart: function showChart(slice, chartType, browserType, conf) {
    var _getSlice4 = _getSlice(slice, chartType),
        chartSlice = _getSlice4.chartSlice;

    if (chartSlice) {
      chartSlice.isShow = true;
      return { chartSlice: chartSlice };
    } else {
      ChartLogic._initChartSlice(slice, chartType);
      return {
        Comp: createChartContainer({ chartType: chartType, browserType: browserType, conf: conf })
      };
    }
  },
  removeConfig: function removeConfig(slice, chartType, id) {
    var _getSlice5 = _getSlice(slice, chartType),
        chartSlice = _getSlice5.chartSlice,
        configs = _getSlice5.configs;

    chartSlice.configs = configs.filter(_notConfById(id));

    return {
      chartSlice: chartSlice,
      isRemoved: configs.length > chartSlice.configs.length
    };
  },
  toTop: function toTop(slice, chartType, id) {
    var _getSlice6 = _getSlice(slice, chartType),
        chartSlice = _getSlice6.chartSlice,
        configs = _getSlice6.configs,
        _conf = configs.find(_confById(id));

    if (_conf) {
      var withoutArr = configs.filter(_notConfById(id));
      chartSlice.configs = [_conf].concat((0, _toConsumableArray3.default)(withoutArr));
    }

    return chartSlice;
  },
  sortBy: function sortBy(slice, chartType, by) {
    var _getSlice7 = _getSlice(slice, chartType),
        chartSlice = _getSlice7.chartSlice,
        configs = _getSlice7.configs;

    if (by) {
      configs.sort((0, _fCompareBy2.default)(by));
    } else {
      configs.reverse();
    }
    return chartSlice;
  },
  checkBrowserChartTypes: function checkBrowserChartTypes(slice, option) {
    var chb = slice.activeContChb;

    if (chb) {
      option.chartType = chb.chartType;
      option.browserType = chb.browserType;
    }
  },
  scanPostAdded: function scanPostAdded(store, option) {
    var chart = store.getActiveChart();
    if (chart && _isSecondDotCase(chart.series, option)) {
      store.trigger(_ComponentActions.ComponentActionTypes.SHOW_MODAL_DIALOG, {
        modalDialogType: _Type.ModalDialog.COLUMN_RANGE,
        chart: chart
      });
    }
  }
};

exports.default = ChartLogic;
//# sourceMappingURL=ChartLogic.js.map