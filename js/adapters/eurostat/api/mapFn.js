"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeI = {
  createMapValue: function createMapValue(props, item) {
    var _props$mapPropName = props.mapPropName,
        mapPropName = _props$mapPropName === void 0 ? "indic" : _props$mapPropName;
    return "?" + mapPropName + "=" + item.value;
  },
  createMapSlice: function createMapSlice(props, item) {
    var _extends2;

    var mapSlice = props.mapSlice,
        _props$mapPropName2 = props.mapPropName,
        mapPropName = _props$mapPropName2 === void 0 ? "indic" : _props$mapPropName2;
    return (0, _extends3["default"])({}, mapSlice, (_extends2 = {}, _extends2[mapPropName] = item.value, _extends2));
  }
};
var _typeZ = {
  createMapValue: function createMapValue(props, item) {
    return item.value + "?";
  },
  createMapSlice: function createMapSlice() {
    return {};
  }
};
var _typeV = {
  createMapValue: function createMapValue(props, item) {
    return item.value;
  },
  createMapSlice: function createMapSlice(props, item) {
    var value = item.value,
        mapSlice = {};

    if (typeof value !== 'string' || value.indexOf('?') === -1) {
      return mapSlice;
    }

    value.substr(value.indexOf('?')).split('&').forEach(function (pStr) {
      var _arr = pStr.split('=');

      if (_arr[0] && _arr[1]) {
        mapSlice[_arr[0]] = _arr[1];
      }
    });
    return mapSlice;
  }
};
var R_MAP_VALUE = {
  "I": _typeI.createMapValue,
  "Z": _typeZ.createMapValue,
  "V": _typeV.createMapValue
};
var R_MAP_SLICE = {
  "I": _typeI.createMapSlice,
  "Z": _typeZ.createMapSlice,
  "V": _typeV.createMapSlice
};

var _addParamTo = function _addParamTo(q, p) {
  return q ? q + '&' + p : p;
};

var mapFn = {
  toQuery: function toQuery(_ref) {
    var dfParams = _ref.dfParams,
        items = _ref.items,
        dfTail = _ref.dfTail;

    var _q = '',
        i = 0,
        _v;

    for (; i < dfParams.length; i++) {
      _v = items[i] && items[i].value || '';

      if (_v) {
        _q = _addParamTo(_q, dfParams[i] + "=" + _v);
      }
    }

    return dfTail ? _addParamTo(_q, dfTail) : _q;
  },
  toMapSlice: function toMapSlice(tail, option) {
    var dfParams = option.dfParams,
        items = option.items,
        time = option.time,
        dfSlice = option.dfSlice,
        dfTail = option.dfTail,
        zhMapSlice = (0, _extends3["default"])({}, dfSlice, {
      time: time
    });
    var query = '',
        i;

    for (i = 1; i < dfParams.length; i++) {
      query = _addParamTo(query, dfParams[i] + "=" + items[i].value);
      zhMapSlice[dfParams[i]] = items[i].value;
    }

    var _tail = _addParamTo(dfTail, tail);

    query = _addParamTo(query, _tail);
    return {
      query: query,
      zhMapSlice: zhMapSlice
    };
  },
  createMapValue: function createMapValue(props, item) {
    var _mapType = props.mapType || item.mapType,
        _fnCreate = R_MAP_VALUE[_mapType];

    return _fnCreate ? _fnCreate(props, item) : undefined;
  },
  createMapSlice: function createMapSlice(props, item) {
    var _mapType = props.mapType || item.mapType,
        _fnCreate = R_MAP_SLICE[_mapType];

    return _fnCreate ? _fnCreate(props, item) : undefined;
  }
};
var _default = mapFn;
exports["default"] = _default;
//# sourceMappingURL=mapFn.js.map