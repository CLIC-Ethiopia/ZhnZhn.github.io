"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ymdToUTC = exports.valueMoving = exports.roundBy = exports.isTotalByAll = exports.isPositiveNumber = exports.isAggrByTotalWorld = exports.isAggr = exports.getItemTradeValue = exports.getItemPeriod = exports.getItemCmdDescE = exports.getItemCmdCode = exports.getHmTradePartners = exports.crZhConfig = exports.crInfo = exports.crChartId = exports.crCategoryTitle = exports.crCategoryData = void 0;
var _AdapterFn = require("../AdapterFn");
exports.ymdToUTC = _AdapterFn.ymdToUTC;
exports.valueMoving = _AdapterFn.valueMoving;
exports.roundBy = _AdapterFn.roundBy;
var _domSanitize = _interopRequireDefault(require("../../utils/domSanitize"));
var _formatNumber = _interopRequireDefault(require("../../utils/formatNumber"));
var _fnDescr = require("./fnDescr");
var _conf = require("./conf");
const _isArr = Array.isArray,
  _crEmptyHmObject = () => Object.create(null),
  _isNumber = n => typeof n === 'number' && n - n === 0,
  _sanitizeNumber = v => _isNumber(v) ? '' + v : (0, _domSanitize.default)(v);
const isPositiveNumber = n => _isNumber(n) && n > 0;
exports.isPositiveNumber = isPositiveNumber;
const isAggr = v => v === 'AG2';
exports.isAggr = isAggr;
const isTotalByAll = option => option.two === 'TOTAL';
exports.isTotalByAll = isTotalByAll;
const isAggrByTotalWorld = option => isTotalByAll(option) && (!option.tp || option.tp === '0');
exports.isAggrByTotalWorld = isAggrByTotalWorld;
const getItemTradeValue = item => Math.round((item || {}).primaryValue || 0) || 0;
exports.getItemTradeValue = getItemTradeValue;
const getItemCmdCode = item => {
  const {
    cmdCode
  } = item || {};
  return (cmdCode || '').length < 4 ? cmdCode : (0, _domSanitize.default)(cmdCode);
};
exports.getItemCmdCode = getItemCmdCode;
const getItemCmdDescE = item => (0, _domSanitize.default)((item || {}).cmdDescE);
exports.getItemCmdDescE = getItemCmdDescE;
const _getItemPartnerCode = item => _sanitizeNumber((item || {}).partnerCode);
const getItemPeriod = item => _sanitizeNumber((item || {}).period);
exports.getItemPeriod = getItemPeriod;
const _isSameTradePartnerCode = item => item && (item.partnerCode === item.partner2Code || item.partner2Code === 0);
let _hmTradePartner;
const getHmTradePartners = tradePartners => {
  if (_hmTradePartner) {
    return _hmTradePartner;
  }
  if (!_isArr(tradePartners)) {
    return _crEmptyHmObject();
  }
  _hmTradePartner = tradePartners.reduce((hm, item) => {
    if (item && item.v && item.v.length < 4 && item.c && item.c.indexOf(', nes') === -1) {
      hm[item.v] = (0, _domSanitize.default)(item.c);
    }
    return hm;
  }, _crEmptyHmObject());
  return _hmTradePartner;
};
exports.getHmTradePartners = getHmTradePartners;
const crCategoryData = (json, option, crDataPoint) => {
  const data = [],
    _hmTradePartners = getHmTradePartners(option.tradePartners);
  let totalOfWorld = 0,
    totalOfItems = 0;
  json.data.forEach(item => {
    const value = getItemTradeValue(item),
      partnerCode = _getItemPartnerCode(item);
    if (partnerCode === _conf.WORLD_CODE && _isSameTradePartnerCode(item)) {
      totalOfWorld = value;
    } else if (isPositiveNumber(value) && _isSameTradePartnerCode(item)) {
      totalOfItems += value;
      data.push(crDataPoint(value, _hmTradePartners[partnerCode] || partnerCode, item));
    }
  });
  return [data, totalOfWorld || totalOfItems];
};
exports.crCategoryData = crCategoryData;
const crCategoryTitle = _ref => {
  let {
    title,
    period
  } = _ref;
  return [title, 'in', period].filter(Boolean).join(' ');
};
exports.crCategoryTitle = crCategoryTitle;
const crChartId = _ref2 => {
  let {
    value,
    rg = 2,
    measure,
    tp,
    freq,
    period,
    chart
  } = _ref2;
  return [value, rg, measure, tp, freq, period, chart].filter(Boolean).join("_");
};
exports.crChartId = crChartId;
const crInfo = (json, option) => ({
  frequency: option.period || (option.freq === 'M' ? 'Monthly' : 'Annual'),
  description: (0, _fnDescr.toDescr)(json, option)
});
exports.crInfo = crInfo;
const crZhConfig = function (option, _temp) {
  let {
    itemValue,
    isLegend,
    isWi = true
  } = _temp === void 0 ? {} : _temp;
  const {
      oneC,
      period,
      dataSource
    } = option,
    _id = crChartId(option);
  return {
    id: _id,
    key: _id,
    itemCaption: oneC,
    itemValue: itemValue && (0, _formatNumber.default)(itemValue),
    itemTime: period,
    legend: isLegend ? [] : void 0,
    isWithoutIndicator: isWi,
    dataSource
  };
};
exports.crZhConfig = crZhConfig;
//# sourceMappingURL=fnAdapter.js.map