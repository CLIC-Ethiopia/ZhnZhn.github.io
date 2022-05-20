"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _seriaFn = require("../math/seriaFn");

var _Chart = _interopRequireDefault(require("./Chart"));

var _ChartConfigFn = require("./ChartConfigFn");

var _TreeMapConfigFn = require("./TreeMapConfigFn");

const CONFIG_SERIA = {
  //type: 'spline',
  visible: true,
  marker: {
    symbol: 'circle'
  }
},
      CONFIG_SCATTER = {
  type: 'scatter'
};

const _isArr = Array.isArray,
      _assign = Object.assign,
      _isObj = obj => obj && typeof obj === 'object';

const _crLegendItem = _ref => {
  let {
    index,
    color,
    name = '',
    is = false
  } = _ref;
  return {
    index,
    color,
    name,
    isVisible: is
  };
};

const _addSeriesImpl = (to, series) => {
  const _legend = [];
  series.forEach((seria, index) => {
    const {
      color,
      zhValueText,
      name,
      visible
    } = seria;
    to.push(seria);

    _legend.push(_crLegendItem({
      index,
      color,
      name: zhValueText || name,
      is: visible
    }));
  });
  return _legend;
};

const SeriaBuilder = {
  initSeria(option) {
    this._type = 'S';
    this.config = (0, _ChartConfigFn.crSeriaConfig)(option);
    return this;
  },

  splineSeria(option) {
    return this.initSeria({ ...CONFIG_SERIA,
      ...option
    });
  },

  _seria(CONFIG, tooltip, option) {
    this._type = 'S';
    this.config = { ...CONFIG,
      ...option
    };
    this.add('tooltip', _Chart.default.fTooltip(tooltip));
    return this;
  },

  treeMapSeria(tooltip, option) {
    return this._seria(_TreeMapConfigFn.CONFIG_TREE_MAP, tooltip, option);
  },

  scatterSeria(tooltip, option) {
    return this._seria(CONFIG_SCATTER, tooltip, option);
  },

  stockSeria(id, data) {
    return this.initSeria({
      minY: (0, _seriaFn.findMinY)(data)
    }).addPoints(id, data);
  },

  addSeriaBy(index, obj) {
    if (this.config.series[index]) {
      _assign(this.config.series[index], obj);
    } else {
      this.config.series.push(obj);
    }

    return this;
  },

  addSeriaTo(index, seria) {
    this.config.series[index] = seria;
    return this;
  },

  _addSeriaPoints(points, _temp) {
    let {
      maxVisible = 6
    } = _temp === void 0 ? {} : _temp;
    const _legend = [];
    points.forEach((data, index) => {
      const is = index < maxVisible ? true : false,
            color = (0, _ChartConfigFn.getSeriaColorByIndex)(index),
            {
        seriaName
      } = data;

      _legend.push(_crLegendItem({
        index,
        color,
        name: seriaName,
        is
      }));

      this.addSeriaBy(index, {
        type: 'spline',
        data: data,
        name: seriaName,
        zhValueText: seriaName,
        visible: is
      });
    });

    if (_legend.length !== 0) {
      this.addLegend(_legend);
    }

    return this;
  },

  _addPointsToConfig(points) {
    if (points[0] && _isArr(points[0]) && points[0][0] && typeof points[0][0] !== 'number') {
      this._addSeriaPoints(points);
    } else {
      this.addSeriaBy(0, {
        type: 'spline',
        data: points
      });
    }
  },

  addPoints(id, points, text) {
    if (this._type !== 'S') {
      this._addPointsToConfig(points);
    } else {
      this.add({
        data: points,
        zhValueText: text ? text : id
      });
    }

    return this;
  },

  addSeries(series, isWithoutLegend) {
    if (isWithoutLegend === void 0) {
      isWithoutLegend = false;
    }

    const _to = _isArr(this.config.series) ? this.config.series : this.config.series = [];

    if (_isArr(series)) {
      const _legend = _addSeriesImpl(_to, series);

      if (!isWithoutLegend) {
        this.addLegend(_legend);
      }
    } else if (_isObj(series)) {
      _to[0] = series;
    }

    return this;
  },

  toSeria() {
    return this.config;
  }

};
var _default = SeriaBuilder;
exports.default = _default;
//# sourceMappingURL=SeriaBuilder.js.map