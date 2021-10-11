"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _crDfQuery = _interopRequireDefault(require("./crDfQuery"));

var _crSdnQuery = _interopRequireDefault(require("./crSdnQuery"));

var _crSirQuery = _interopRequireDefault(require("./crSirQuery"));

const _hmCrQuery = {
  DF: _crDfQuery.default,
  SDN: _crSdnQuery.default,
  SIR: _crSirQuery.default
};

const _crDfId = option => option.loadId === 'SDN' ? '' : '/' + option.dfId;

const fTableApi = ROOT_URL => ({
  getRequestUrl(option) {
    if (option.url) {
      return option.url;
    }

    const _dfId = _crDfId(option);

    return option.url = "" + (option.proxy || '') + ROOT_URL + _dfId;
  },

  crOptionFetch(option) {
    if (option.optionFetch) {
      return option.optionFetch;
    }

    const _crQuery = _hmCrQuery[option.loadId] || _hmCrQuery.DF;

    return option.optionFetch = _crQuery(option);
  },

  checkResponse() {
    return true;
  }

});

var _default = fTableApi;
exports.default = _default;
//# sourceMappingURL=fTableApi.js.map