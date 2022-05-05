"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _ChartConfig = _interopRequireDefault(require("../../charts/ChartConfig"));

var _ConfigBuilder = _interopRequireDefault(require("../../charts/ConfigBuilder"));

var _AdapterFn = require("../AdapterFn");

var _pointFn = require("../pointFn");

var _IntradayFns = require("../IntradayFns");

var _fnAdapter = _interopRequireDefault(require("./fnAdapter"));

const {
  crIntradayConfigOption
} = _fnAdapter.default;
const INTRADAY = 'INTRADAY';
const DAILY_ADJUSTED = 'DAILY_ADJUSTED';
const _getKeys = Object.keys;

const _crSeriaOptions = (_ref, dfT) => {
  let {
    isFilterZero
  } = _ref;

  const _isAdjusted = dfT === DAILY_ADJUSTED;

  return {
    notFilterZero: !isFilterZero,
    isDividend: _isAdjusted,
    toUTC: _AdapterFn.ymdhmsToUTC,
    pnClose: _isAdjusted ? '5. adjusted close' : '4. close',
    pnVolume: _isAdjusted ? '6. volume' : '5. volume'
  };
};

const PN_DIVIDENT = '7. dividend amount';
const PN_ADJ_CLOSE = '5. adjusted close';

const _addDividendPointTo = (arr, dateMs, p) => {
  const _strDivident = p[PN_DIVIDENT],
        _exValue = _strDivident && parseFloat(_strDivident);

  if (_exValue) {
    arr.push({ ..._ChartConfig.default.crMarkerExDividend(),
      ...{
        x: dateMs,
        exValue: _exValue,
        price: parseFloat(p[PN_ADJ_CLOSE])
      }
    });
  }
};

const _notZeros = (v1, v2) => v1 !== 0 && v2 !== 0;

const _getObjValues = (json, option) => {
  const {
    interval
  } = option,
        _propName = "Time Series (" + interval + ")";

  return json[_propName];
};

const _crSeriaData = (json, option, dfT) => {
  const _objValues = _getObjValues(json, option),
        _dateKeys = _objValues ? _getKeys(_objValues).sort() : [],
        dC = [],
        dH = [],
        dL = [],
        dO = [],
        dDividend = [],
        dVc = [],
        dV = [],
        {
    notFilterZero,
    isDividend,
    toUTC,
    pnClose,
    pnVolume
  } = _crSeriaOptions(option, dfT);

  let i = 0,
      _max = _dateKeys.length,
      minClose = Number.POSITIVE_INFINITY,
      maxClose = Number.NEGATIVE_INFINITY,
      _dateMs,
      _date,
      _point,
      _open,
      _high,
      _low,
      _closeV,
      _close,
      _volume;

  for (i; i < _max; i++) {
    _date = _dateKeys[i];
    _point = _objValues[_date];
    _closeV = parseFloat(_point['4. close']);
    _close = parseFloat(_point[pnClose]);

    if (notFilterZero || _notZeros(_closeV, _close)) {
      _open = parseFloat(_point['1. open']);
      _high = parseFloat(_point['2. high']);
      _low = parseFloat(_point['3. low']);
      _volume = parseFloat(_point[pnVolume]);
      _dateMs = toUTC(_date);
      dC.push({
        x: _dateMs,
        y: _close,
        ...(0, _IntradayFns.crMarkerColor)(_date)
      });
      dH.push([_dateMs, _high]);
      dL.push([_dateMs, _low]);
      dO.push([_dateMs, _open]);
      dV.push([_dateMs, _volume]);
      dVc.push((0, _pointFn.crVolumePoint)({
        open: _open,
        close: _closeV,
        volume: _volume,
        date: _dateMs,
        option: {
          _high: _high,
          _low: _low
        }
      }));

      if (isDividend) {
        _addDividendPointTo(dDividend, _dateMs, _point);
      }

      if (minClose > _close) {
        minClose = _close;
      }

      if (maxClose < _close) {
        maxClose = _close;
      }
    }
  }

  return {
    dC,
    dH,
    dL,
    dO,
    dDividend,
    minClose,
    maxClose,
    dVc,
    dV
  };
};

const _crDataDaily = (dfT, data) => dfT === INTRADAY ? (0, _IntradayFns.crDataDaily)(data) : data;

const IntradayAdapter = {
  crKey: _ref2 => {
    let {
      _itemKey
    } = _ref2;
    return _itemKey;
  },

  toConfig(json, option) {
    const {
      _itemKey,
      title,
      dfFn,
      dataSource,
      isNotZoomToMinMax,
      isDrawDeltaExtrems,
      seriaType,
      seriaColor,
      seriaWidth
    } = option,
          dfT = dfFn.replace('TIME_SERIES_', ''),
          {
      dC,
      dH,
      dL,
      dO,
      minClose,
      maxClose,
      dDividend,
      dVc,
      dV
    } = _crSeriaData(json, option, dfT),
          dataDaily = _crDataDaily(dfT, dC);

    const config = (0, _ConfigBuilder.default)().stockConfig(_itemKey, {
      dC,
      dO,
      dH,
      dL,
      minClose,
      maxClose,
      dVc,
      dV,
      isNotZoomToMinMax,
      isDrawDeltaExtrems,
      seriaType,
      seriaColor,
      seriaWidth
    }).addCaption(title).add(crIntradayConfigOption({
      id: _itemKey,
      data: dataDaily,
      dataSource
    }, option)).addDividend(dDividend, minClose, maxClose).toConfig();
    return {
      config
    };
  },

  toSeries(json, option) {
    return _ConfigBuilder.default.crSeria({
      adapter: IntradayAdapter,
      json,
      option,
      type: 'line'
    });
  }

};
var _default = IntradayAdapter;
exports.default = _default;
//# sourceMappingURL=IntradayAdapter.js.map