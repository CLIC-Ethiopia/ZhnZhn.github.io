"use strict";

exports.__esModule = true;
exports.default = void 0;
var _AdapterFn = require("../AdapterFn");
const API_V3 = 'https://data.nasdaq.com/api/v3',
  SET_URL = API_V3 + "/datasets/",
  TABLE_URL = API_V3 + "/datatables/",
  LIMIT_REMAINING = 'X-RateLimit-Remaining',
  _isArr = Array.isArray;
const _crSetUrl2 = option => {
  const {
      proxy,
      items,
      fromDate,
      apiKey,
      dfDbId
    } = option,
    id = (0, _AdapterFn.getValue)(items[0]);
  return "" + proxy + SET_URL + dfDbId + "/" + id + ".json?sort_order=asc&api_key=" + apiKey + "&trim_start=" + (fromDate || '');
};
const _addTo = (q, pN, pV) => pV ? q ? q + "&" + pN + "=" + pV : pN + "=" + pV : q || '';
const _crSetUrl = option => {
  const {
    proxy,
    value,
    fromDate,
    toDate,
    apiKey,
    transform
  } = option;
  let _q = 'sort_order=asc';
  _q = _addTo(_q, 'trim_start', fromDate);
  _q = _addTo(_q, 'trim_end', toDate);
  _q = _addTo(_q, 'transform', transform);
  _q = _addTo(_q, 'api_key', apiKey);
  return "" + proxy + SET_URL + value + ".json?" + _q;
};
const _crTableUrl = option => {
  const {
      proxy,
      dfTable,
      dfTail,
      dfColumn,
      value,
      apiKey
    } = option,
    {
      one,
      two
    } = value;
  option.key = option.value = one + "_" + two;
  return "" + proxy + TABLE_URL + dfTable + ".json?ticker=" + one + "&api_key=" + apiKey + "&" + dfTail + "&qopts.columns=" + dfColumn + "," + two;
};
const _checkErr = err => {
  if (err) {
    throw (0, _AdapterFn.crError)('', err.message);
  }
};
const _checkDataEmpty = (dataset, datatable) => {
  if (!dataset && !datatable) {
    throw (0, _AdapterFn.crError)();
  }
};
const _checkDataset = dataset => {
  const {
    data,
    newest_available_date,
    oldest_available_date
  } = dataset || {};
  if (!_isArr(data) || data.length === 0) {
    throw (0, _AdapterFn.crError)('', "Result dataset for request is empty:\n        Newest Date: " + (newest_available_date || '') + "\n        Oldest Date: " + (oldest_available_date || ''));
  }
};
const NdlApi = {
  getRequestUrl(option) {
    return option.items ? _crSetUrl2(option) : option.dfTable ? _crTableUrl(option) : _crSetUrl(option);
  },
  // headers && headers.get existed
  getLimitRemaiming: headers => headers.get(LIMIT_REMAINING),
  checkResponse(json) {
    const {
      quandl_error,
      dataset,
      datatable
    } = json || {};
    _checkErr(quandl_error);
    _checkDataEmpty(dataset, datatable);
    _checkDataset(dataset);
  }
};
var _default = NdlApi;
exports.default = _default;
//# sourceMappingURL=NdlApi.js.map