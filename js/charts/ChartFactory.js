"use strict";

exports.__esModule = true;
exports.crColumnConfig = exports.crBarConfig = void 0;
const DF_COLOR = '#8085e9';

const _assign = Object.assign,
      _crPlotOption = function (color, pointWidth) {
  if (color === void 0) {
    color = DF_COLOR;
  }

  return {
    color,
    pointWidth,
    minPointLength: 5,
    pointPadding: 0,
    borderWidth: 0,
    groupPadding: 0.2,
    shadow: false
  };
};

const _crCategoryConfig = () => ({
  chart: {
    panKey: void 0,
    panning: false
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [],
    type: "category",
    crosshair: true,
    gridLineWidth: 0
  },
  yAxis: {
    //min: 0,
    opposite: true,
    lineWidth: 0,
    tickLength: 0,
    gridLineDashStyle: 'Dot',
    labels: {
      x: 3
    },
    title: {
      text: ''
    }
  },
  legend: {
    enabled: false,
    align: 'right',
    verticalAlign: 'top',
    layout: 'horizontal',
    x: 0,
    y: -25
  },
  plotOptions: {},
  series: [{
    name: 'Column'
  }]
});

const crColumnConfig = function (_temp) {
  let {
    seriaColor
  } = _temp === void 0 ? {} : _temp;

  const config = _crCategoryConfig();

  _assign(config.chart, {
    type: "column",
    marginTop: 60,
    marginBottom: 100
  });

  _assign(config.plotOptions, {
    column: _crPlotOption(seriaColor, 6)
  });

  return config;
};

exports.crColumnConfig = crColumnConfig;

const crBarConfig = _ref => {
  let {
    seriaColor
  } = _ref;

  const config = _crCategoryConfig();

  _assign(config.chart, {
    type: 'bar',
    height: 450,
    marginTop: 50,
    marginBottom: 35
  });

  _assign(config.yAxis, {
    labels: {
      x: 0,
      y: 14
    },
    opposite: false,
    gridLineDashStyle: 'ShortDot'
  });

  _assign(config.plotOptions, {
    bar: _crPlotOption(seriaColor, 4)
  });

  return config;
};

exports.crBarConfig = crBarConfig;
//# sourceMappingURL=ChartFactory.js.map