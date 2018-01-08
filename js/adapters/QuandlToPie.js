'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fCreatePieConfig = undefined;

var _big = require('big.js');

var _big2 = _interopRequireDefault(_big);

var _AdapterFn = require('./AdapterFn');

var _AdapterFn2 = _interopRequireDefault(_AdapterFn);

var _Type = require('../constants/Type');

var _Chart = require('../charts/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _ChartConfig = require('../charts/ChartConfig');

var _ChartConfig2 = _interopRequireDefault(_ChartConfig);

var _QuandlFn = require('./QuandlFn2');

var _QuandlFn2 = _interopRequireDefault(_QuandlFn);

var _StackedFn = require('./StackedFn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fnCalcPieLegendHeight = function _fnCalcPieLegendHeight(length) {
  if (length !== 0) {
    return _Chart2.default.HEIGHT + _Chart2.default.LEGEND_ROW_HEIGHT * (Math.ceil(length / 4) - 1);
  } else {
    return _Chart2.default.HEIGHT;
  }
};

var _fnAddPercentToItem = function _fnAddPercentToItem(item, bTotal) {
  var _bPercent = _QuandlFn2.default.createPercent({ bValue: (0, _big2.default)(item.y), bTotal: bTotal });
  if ((0, _big2.default)(_bPercent).gte('10.00')) {
    item.name = item.name + ' ' + _bPercent;
  } else {
    item.name = item.name + '  ' + _bPercent;
  }
};

var _fnCreateTopDonutData = function _fnCreateTopDonutData(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$bTotal = _ref.bTotal,
      bTotal = _ref$bTotal === undefined ? (0, _big2.default)('0.0') : _ref$bTotal,
      _ref$isPercent = _ref.isPercent,
      isPercent = _ref$isPercent === undefined ? false : _ref$isPercent;

  var arr = [],
      _bTotal90 = bTotal.times(0.9);
  var bArrTotal = (0, _big2.default)('0.0');
  for (var i = 0, max = data.length; i < max; i++) {
    var item = data[i];
    if (i === 0 || !bArrTotal.gte(_bTotal90) || i === max - 1) {
      if (isPercent) {
        _fnAddPercentToItem(item, bTotal);
      }
      arr.push(item);
    } else {
      break;
    }

    bArrTotal = bArrTotal.plus(item.y);
  }
  if (!bArrTotal.eq(bTotal)) {
    bArrTotal = bTotal.minus(bArrTotal);
    arr.push({
      name: 'Other ' + _QuandlFn2.default.createPercent({ bValue: bArrTotal, bTotal: bTotal }),
      nameFull: 'Other',
      color: 'gray',
      y: parseFloat(bArrTotal)
    });
  }
  return arr;
};

var fCreatePieConfig = exports.fCreatePieConfig = function fCreatePieConfig(json, option) {
  var config = _ChartConfig2.default.fBasePieConfig(),
      _option$sliceItems = option.sliceItems,
      items = _option$sliceItems === undefined ? [] : _option$sliceItems,
      _option$value = option.value,
      value = _option$value === undefined ? '' : _option$value,
      zhSeriaId = value + '_' + _Type.ChartType.SEMI_DONUT,
      jsonData = json.dataset && json.dataset.data ? json.dataset.data : [],
      jsonData1 = jsonData[0],
      jsonData2 = jsonData[1],
      _year1 = jsonData1[0] ? jsonData1[0].split('-')[0] : '',
      _year2 = jsonData2[0] ? jsonData2[0].split('-')[0] : '',
      _data1 = [],
      _data2 = [];


  var _bTotal1 = (0, _big2.default)('0.0');
  var _bTotal2 = (0, _big2.default)('0.0');

  items.forEach(function (item, index) {
    var y1 = jsonData1[item.value];
    var y2 = jsonData2[item.value];
    if (y1) {
      //const _nameFull = item.caption.replace(/;/g, '<br/>')
      var _name = item.caption.split(';')[0].substring(0, 9);
      _data1.push({ name: _name, nameFull: item.caption, y: y1 });
      _bTotal1 = _bTotal1.plus(y1);
    }
    if (y2) {
      _data2.push({ nameFull: item.caption, y: y2 });
      _bTotal2 = _bTotal2.plus(y2);
    }
  });

  var _dataTop1 = _fnCreateTopDonutData({
    data: _data1.sort(_AdapterFn2.default.compareByY).reverse(),
    bTotal: _bTotal1,
    isPercent: true
  });
  var _dataTop2 = _fnCreateTopDonutData({
    data: _data2.sort(_AdapterFn2.default.compareByY).reverse(),
    bTotal: _bTotal2
  });

  config.series = [_ChartConfig2.default.fInnerPieSeria({
    center: ['20%', '80%'],
    year: _year1,
    bTotal: _ChartConfig2.default.fnNumberFormat(_bTotal1)
  }), _ChartConfig2.default.fOuterPieSeria({
    zhSeriaId: zhSeriaId,
    center: ['20%', '80%'],
    data: _dataTop1,
    isShowInLegend: true
  }), _ChartConfig2.default.fInnerPieSeria({
    center: ['70%', '80%'],
    year: _year2,
    bTotal: _ChartConfig2.default.fnNumberFormat(_bTotal2)
  }), _ChartConfig2.default.fOuterPieSeria({
    zhSeriaId: zhSeriaId,
    center: ['70%', '80%'],
    data: _dataTop2
  })];

  _QuandlFn2.default.setTitleToConfig(config, option);

  Object.assign(config, {
    chart: {
      height: _fnCalcPieLegendHeight(_dataTop1.length)
    },
    valueMoving: (0, _StackedFn.crValueMoving)(_bTotal1, _year1, _bTotal2, _year2),
    zhConfig: (0, _StackedFn.crZhConfig)(option, zhSeriaId),
    info: _QuandlFn2.default.createDatasetInfo(json)
  });

  return { config: config };
};
//# sourceMappingURL=QuandlToPie.js.map