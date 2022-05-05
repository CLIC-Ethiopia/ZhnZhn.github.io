"use strict";

exports.__esModule = true;
exports.default = void 0;

var _crFn = require("../crFn");

const C = {
  URL: 'https://api.intrinio.com/historical_data',
  TAIL: 'item=level',
  RES_ERR_STATUS: [401]
};
const FRQ = {
  A: 'yearly',
  Q: 'quarterly',
  W: 'weekly',
  D: 'daily',
  M: 'monthly',
  DF: 'monthly'
};

const _getErr = json => json && Array.isArray(json.errors) && json.errors[0] ? json.errors[0] : void 0;

const IntrinioApi = {
  crOptionFetch(option) {
    const {
      apiKey
    } = option;
    return {
      headers: {
        'X-Authorization-Public-Key': apiKey
      }
    };
  },

  getRequestUrl(option) {
    const {
      value,
      fromDate,
      toDate,
      item = {},
      one,
      two,
      three
    } = option;
    option.resErrStatus = C.RES_ERR_STATUS;

    if (two && three) {
      return C.URL + "?identifier=" + one + "&item=" + two + "&start_date=" + fromDate + "&end_date=" + toDate + "&type=" + three;
    }

    if (two) {
      //return `${C.URL}?identifier=${one}&item=${two}&start_date=${fromDate}&end_date=${toDate}&frequency=quarterly`;
      return C.URL + "?identifier=" + one + "&item=" + two + "&start_date=" + fromDate + "&end_date=" + toDate + "&type=QTR";
    }

    const _frq = FRQ[item.frq] || FRQ.DF;

    return C.URL + "?identifier=" + value + "&start_date=" + fromDate + "&end_date=" + toDate + "&frequency=" + _frq + "&" + C.TAIL;
  },

  checkResponse(json) {
    const _err = _getErr(json);

    if (_err) {
      throw (0, _crFn.crError)(_err.human, _err.message);
    }

    return json && Array.isArray(json.data);
  }

};
var _default = IntrinioApi;
exports.default = _default;
//# sourceMappingURL=IntrinioApi.js.map