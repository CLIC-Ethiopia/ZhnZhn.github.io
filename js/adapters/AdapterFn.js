"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _big = _interopRequireDefault(require("big.js"));

var _DateUtils = _interopRequireDefault(require("../utils/DateUtils"));

var _formatAllNumber = _interopRequireDefault(require("../utils/formatAllNumber"));

var _Type = require("../constants/Type");

var _mathFn = _interopRequireDefault(require("../math/mathFn"));

var _seriaFn = _interopRequireDefault(require("../math/seriaFn"));

var _Color = _interopRequireDefault(require("../constants/Color"));

var EMPTY = '';
var M = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var ymdToUTC = _DateUtils["default"].ymdToUTC,
    ymdtToUTC = _DateUtils["default"].ymdtToUTC,
    ymdhmsToUTC = _DateUtils["default"].ymdhmsToUTC,
    mlsToDmy = _DateUtils["default"].mlsToDmy;

var _isNaN = Number && Number.isNaN || isNaN;

var _isArr = Array.isArray;

var _fIsNumber = function _fIsNumber(pn) {
  return function (p) {
    return typeof p[pn] === 'number' && isFinite(p[pn]);
  };
};

var _compareArrByIndex = function _compareArrByIndex(index) {
  return function (arrA, arrB) {
    if (arrA[index] < arrB[index]) return -1;else if (arrA[index] === arrB[index]) return 0;else return 1;
  };
};

var _compareByTwoProp = function _compareByTwoProp(propName1, propName2) {
  return function (a, b) {
    if (a[propName1] < b[propName1]) return -1;else if (a[propName1] > b[propName1]) return 1;else if (a[propName2] < b[propName2]) return -1;else if (a[propName2] > a[propName2]) return 1;else return 0;
  };
};

var _getDate = function _getDate(point) {
  return _isArr(point) ? point[0] : point.x;
};

var _getValue = function _getValue(point) {
  if (_isArr(point)) {
    return point[1] != null ? point[1] : '0.0';
  } else {
    return point && point.y != null && !_isNaN(point.y) ? point.y : '0.0';
  }
};

var AdapterFn = {
  ymdToUTC: ymdToUTC,
  ymdtToUTC: ymdtToUTC,
  ymdhmsToUTC: ymdhmsToUTC,
  volumeColumnPoint: function volumeColumnPoint(_ref) {
    var date = _ref.date,
        open = _ref.open,
        close = _ref.close,
        volume = _ref.volume,
        option = _ref.option;

    var _color;

    if (open && close > open) {
      _color = _Color["default"].GREEN;
    } else if (open && close < open) {
      _color = _Color["default"].RED;
    } else {
      _color = _Color["default"].GRAY;
    }

    return Object.assign({
      x: date,
      y: volume,
      color: _color,
      _open: open,
      _close: close
    }, option);
  },
  athPoint: function athPoint(_ref2) {
    var date = _ref2.date,
        prevClose = _ref2.prevClose,
        open = _ref2.open;

    var _bDelta = open && prevClose ? (0, _big["default"])(prevClose).minus(open) : (0, _big["default"])('0.0'),
        _bPercent = prevClose ? _bDelta.times(100).div(prevClose).abs().toFixed(2) : (0, _big["default"])('0.0');

    var _color;

    if (_bDelta.gt(0.0)) {
      _color = _Color["default"].RED;
    } else if (!_bDelta.gte(0.0)) {
      _color = _Color["default"].GREEN;
    } else {
      _color = open ? _Color["default"].GRAY : _Color["default"].WHITE;
    }

    return {
      x: date,
      y: parseFloat(_bPercent),
      close: prevClose,
      open: open ? open : 'Unknown',
      color: _color
    };
  },
  legendItem: function legendItem(index, color, name, is) {
    if (is === void 0) {
      is = false;
    }

    return {
      index: index,
      color: color,
      name: name,
      isVisible: is
    };
  },
  stockSeriesLegend: function stockSeriesLegend() {
    return [AdapterFn.legendItem(0, _Color["default"].S_STOCK_CLOSE, 'Close', true), AdapterFn.legendItem(1, _Color["default"].S_HIGH, 'High'), AdapterFn.legendItem(2, _Color["default"].S_LOW, 'Low'), AdapterFn.legendItem(3, _Color["default"].S_OPEN, 'Open')];
  },
  formatAllNumber: _formatAllNumber["default"],
  numberFormat: _formatAllNumber["default"],
  isNumberOrNull: function isNumberOrNull(v) {
    return typeof v === 'number' && !isNaN(v) || v === null;
  },
  isYNumber: _fIsNumber('y'),
  toFloatOrNull: function toFloatOrNull(str) {
    var _v = parseFloat(str);

    return _isNaN(_v) ? null : _v;
  },
  compareByDate: _compareArrByIndex(0),
  compareByY: _compareArrByIndex('y'),
  compareByValue: _compareArrByIndex('value'),
  compareByValueId: _compareByTwoProp('value', 'id'),
  crValueMoving: function crValueMoving(_ref3) {
    var _ref3$bNowValue = _ref3.bNowValue,
        bNowValue = _ref3$bNowValue === void 0 ? (0, _big["default"])('0.0') : _ref3$bNowValue,
        _ref3$bPrevValue = _ref3.bPrevValue,
        bPrevValue = _ref3$bPrevValue === void 0 ? (0, _big["default"])('0.0') : _ref3$bPrevValue,
        dfR = _ref3.dfR;
    return _mathFn["default"].crValueMoving({
      nowValue: bNowValue,
      prevValue: bPrevValue,
      Direction: _Type.Direction,
      fnFormat: _formatAllNumber["default"],
      dfR: dfR
    });
  },
  valueMoving: function valueMoving(data, dfR) {
    if (!_isArr(data)) {
      return {
        date: data,
        direction: 'empty'
      };
    }

    var len = data.length,
        _pointNow = len > 0 && data[len - 1] ? data[len - 1] : [EMPTY, 0],
        _nowValue = _getValue(_pointNow),
        bNowValue = (0, _big["default"])(_nowValue),
        _pointPrev = len > 1 && data[len - 2] ? data[len - 2] : _pointNow,
        _prevValue = _getValue(_pointPrev),
        bPrevValue = (0, _big["default"])(_prevValue),
        _nowDate = _getDate(_pointNow),
        date = len > 0 ? mlsToDmy(_nowDate) : EMPTY,
        _prevDate = _getDate(_pointPrev),
        dateTo = len > 1 && _prevDate ? mlsToDmy(_prevDate) : EMPTY;

    return (0, _extends2["default"])({}, AdapterFn.crValueMoving({
      bNowValue: bNowValue,
      bPrevValue: bPrevValue,
      dfR: dfR
    }), {
      valueTo: AdapterFn.numberFormat(bPrevValue),
      date: date,
      dateTo: dateTo
    });
  },
  crId: function crId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 9)).toUpperCase();
  },
  toUpperCaseFirst: function toUpperCaseFirst(str) {
    return typeof str === 'string' && str.length > 0 ? str[0].toUpperCase() + str.substr(1) : EMPTY;
  },
  appendWithColon: function appendWithColon() {
    var str = '';

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.forEach(function (s) {
      if (s) {
        str = str ? str + ": " + s : s;
      }
    });
    return str;
  },
  monthIndex: function monthIndex(str) {
    return M.indexOf(String(str).toLowerCase());
  },
  findMinY: _seriaFn["default"].findMinY,
  findMaxY: _seriaFn["default"].findMaxY,
  crError: function crError(errCaption, message) {
    if (errCaption === void 0) {
      errCaption = '';
    }

    if (message === void 0) {
      message = '';
    }

    return {
      errCaption: errCaption,
      message: message
    };
  },
  crItemLink: function crItemLink(caption, itemUrl) {
    return "<p>\n    <a href=\"" + itemUrl + "\" style=\"padding-top: 4px;\">" + caption + "</a>\n  </p>";
  }
};
var _default = AdapterFn;
exports["default"] = _default;
//# sourceMappingURL=AdapterFn.js.map