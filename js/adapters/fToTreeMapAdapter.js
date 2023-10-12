"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fToTreeMapAdapter = exports.crRoundedSubTotal = exports.crItemColor = void 0;
var _pipe = _interopRequireDefault(require("../utils/pipe"));
var _formatNumber = _interopRequireDefault(require("../utils/formatNumber"));
var _domSanitize = _interopRequireDefault(require("../utils/domSanitize"));
var _configBuilderFn = require("../charts/configBuilderFn");
var _AdapterFn = require("./AdapterFn");
var _CL = require("./CL");
const COLOR_FOSSIL_FUEL = "#658fb9",
  COLOR_NOT_FOSSIL_FUEL = "#6ea3d7";
const _isFossilFuel = label => label === "Coal" || label === "Natural gas" || label === "Oil"
// Ember
|| label === "Gas" || label === "Other Fossil";
const crItemColor = label => _isFossilFuel(label) ? COLOR_FOSSIL_FUEL : COLOR_NOT_FOSSIL_FUEL;
exports.crItemColor = crItemColor;
const _fSumBy = propName => (total, item) => total + item[propName],
  _sumByPerc = _fSumBy('_perc'),
  _fCrTotal = sumBy => data => data.reduce(sumBy, 0),
  _crTotalPerc = _fCrTotal(_sumByPerc);
const _crTotalConfig = total => {
  const onePercent = total / 100,
    _totalRt = onePercent > 1 ? 0 : 2,
    _total = (0, _AdapterFn.roundBy)(total, _totalRt),
    _onePercent = _total / 100;
  return [_total, _totalRt, _onePercent];
};
const _crItemRt = (value, rt) => value >= 10 ? rt : value >= 0.01 ? 2 : value >= 0.0001 ? 4 : 6;
const _crValue = (value, totalRt) => (0, _AdapterFn.roundBy)(value, _crItemRt(value, totalRt));
const _crDataImpl = (data, option, totalRt, onePercent, percRt) => {
  const {
    title
  } = option;
  return data.map(item => {
    const value = item.value,
      label = item.label,
      _value = _crValue(value, totalRt),
      _percent = (0, _AdapterFn.roundBy)(value / onePercent, percRt);
    return {
      color: item.color,
      value: _value,
      _value: value,
      _perc: _percent,
      title: (0, _domSanitize.default)(title),
      _label: (0, _domSanitize.default)(label),
      label: (0, _domSanitize.default)(label + " (" + _percent + "%)"),
      name: (0, _domSanitize.default)(label + "<br/><span class=\"" + _CL.CL_TREE_MAP_PERCENT_BLACK + "\">" + (0, _formatNumber.default)(_value) + " (" + _percent + "%)</span>")
    };
  }, []);
};
const _crData = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  const _data = _crDataImpl(...args, 0);
  return _crTotalPerc(_data) === 100 ? _data : _crDataImpl(...args, 1);
};
const _crTotalToken = (title, value, perc) => title + " " + (0, _formatNumber.default)(value, true) + " (" + perc + "%)";
const _crSubTotalRt = (value, rt) => (0, _AdapterFn.isNumber)(rt) ? _crItemRt(value, rt) : 0;
const crRoundedSubTotal = (v1, v2, total, totalRt) => {
  const _rtFf = _crSubTotalRt(v1, totalRt),
    _rtNff = _crSubTotalRt(v2, totalRt),
    _ffTotal = (0, _AdapterFn.roundBy)(v1, _rtFf),
    _nffTotal = (0, _AdapterFn.roundBy)(v2, _rtNff);
  return _ffTotal + _nffTotal > total ? [(0, _AdapterFn.roundBy)(v1, _rtFf + 1), (0, _AdapterFn.roundBy)(v2, _rtNff + 1)] : [_ffTotal, _nffTotal];
};
exports.crRoundedSubTotal = crRoundedSubTotal;
const _crCaption = (data, option, total, totalRt, onePercent) => {
  const _arrTotal = data.reduce((arrTotal, _ref) => {
      let {
        _label,
        _value
      } = _ref;
      const _isFf = _isFossilFuel(_label);
      arrTotal[_isFf ? 0 : 1] += _value;
      return arrTotal;
    }, [0, 0]),
    [ffTotal, nffTotal] = crRoundedSubTotal(_arrTotal[0], _arrTotal[1], total, totalRt),
    [ffPerc, nffPerc] = crRoundedSubTotal(ffTotal / onePercent, nffTotal / onePercent, 100),
    _titleF = _crTotalToken("Fossil Fuels", ffTotal, ffPerc),
    _titleNf = _crTotalToken('Not Fossil Fuels', nffTotal, nffPerc);
  return [(0, _AdapterFn.joinBy)(": ", option.title, option.dfTmTitle), _arrTotal[0] > _arrTotal[1] ? _titleF + ", " + _titleNf : _titleNf + ", " + _titleF];
};
const fToTreeMapAdapter = function (getDataTotalTuple, crCaption) {
  if (crCaption === void 0) {
    crCaption = _crCaption;
  }
  return () => {
    const adapter = {
      toConfig: (json, option) => {
        const [data, total] = getDataTotalTuple(json),
          {
            _itemKey
          } = option,
          [_total, _totalRt, _onePercent] = _crTotalConfig(total),
          _data = _crData(data, option, _totalRt, _onePercent),
          [captionTitle, captionSubtitle] = crCaption(_data, option, _total, _totalRt, _onePercent);
        return {
          config: (0, _pipe.default)((0, _configBuilderFn.crTreeMapConfig)(_data), (0, _configBuilderFn.fAddCaption)(captionTitle, captionSubtitle), (0, _configBuilderFn.fAdd)({
            zhConfig: {
              id: _itemKey,
              key: _itemKey,
              itemCaption: option.title,
              itemTime: option.time,
              itemValue: (0, _formatNumber.default)(_total),
              dataSource: option.dataSource
            }
          }), _configBuilderFn.toConfig)
        };
      }
    };
    return adapter;
  };
};
exports.fToTreeMapAdapter = fToTreeMapAdapter;
//# sourceMappingURL=fToTreeMapAdapter.js.map