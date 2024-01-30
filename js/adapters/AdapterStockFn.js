"use strict";

exports.__esModule = true;
exports.toStockSeriesData = void 0;
var _AdapterFn = require("./AdapterFn");
var _pointFn = require("./pointFn");
const _isUndef = v => typeof v === 'undefined';
const _getNotEmptyErr = arr => arr.length === 0 ? void 0 : arr;
const _fAddAthPointTo = () => {
  let _prevClose;
  return (dATH, _date, open, close) => {
    dATH.push(!_isUndef(_prevClose) ? (0, _pointFn.crAthPoint)({
      date: _date,
      close: _prevClose,
      open
    }) : (0, _pointFn.crAthPoint)({
      date: _date,
      close: close,
      open: close
    }));
    _prevClose = close;
  };
};
const toStockSeriesData = _ref => {
  let {
    isAth = true,
    isVolume = true,
    arr = [],
    toDate = _AdapterFn.ymdhmsToUTC,
    seriaOption,
    option
  } = _ref;
  const {
      isAllSeries = true,
      pnDate = 'date'
    } = seriaOption || {},
    {
      isNotZoomToMinMax,
      isDrawDeltaExtrems,
      seriaType,
      seriaColor,
      seriaWidth
    } = option || {},
    dC = [],
    dO = [],
    dH = [],
    dL = [],
    dV = [],
    dVc = [],
    dATH = [],
    dMfi = [],
    _addATHPointTo = isAth ? _fAddAthPointTo() : _AdapterFn.FN_NOOP;
  let minClose = Number.POSITIVE_INFINITY,
    maxClose = Number.NEGATIVE_INFINITY;
  arr.forEach(item => {
    const {
        open,
        high,
        low,
        close,
        volume
      } = item,
      _date = toDate(item[pnDate] || '');
    dC.push([_date, close]);
    if (minClose > close) {
      minClose = close;
    }
    if (maxClose < close) {
      maxClose = close;
    }
    if (isAllSeries) {
      dO.push([_date, open]);
      dH.push([_date, high]);
      dL.push([_date, low]);
      if (isVolume) {
        dV.push([_date, volume]);
        dVc.push((0, _pointFn.crVolumePoint)({
          open,
          close,
          volume,
          date: _date,
          option: {
            _high: high,
            _low: low
          }
        }));
        dMfi.push([_date, close, high, low, close, volume]);
      }
      _addATHPointTo(dATH, _date, open, close);
    }
  });
  return {
    dC,
    dO,
    dH,
    dL,
    minClose,
    maxClose,
    dVc: _getNotEmptyErr(dVc),
    dV: _getNotEmptyErr(dV),
    dATH: _getNotEmptyErr(dATH),
    dMfi: _getNotEmptyErr(dMfi),
    isNotZoomToMinMax,
    isDrawDeltaExtrems,
    seriaType,
    seriaColor,
    seriaWidth
  };
};
exports.toStockSeriesData = toStockSeriesData;
//# sourceMappingURL=AdapterStockFn.js.map