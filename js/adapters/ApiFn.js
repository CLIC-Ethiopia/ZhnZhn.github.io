"use strict";

exports.__esModule = true;
exports.fRouteApi = exports.fGetRequestUrl = exports.fCrObUrl = exports.fCrDfUrl = exports.checkResponseData = void 0;
var _LoadType = require("../constants/LoadType");
var _AdapterFn = require("./AdapterFn");
const _isStr = v => typeof v === "string",
  _isWithCORS = (0, _AdapterFn.isInArrStr)([_LoadType.LT_BN, _LoadType.LT_BT, _LoadType.LT_CB]);
const _crAllOriginsUrl = (url, _ref) => {
  let {
    proxy,
    loadId
  } = _ref;
  return _isWithCORS(loadId) ? url : proxy ? `${proxy}${url}` : `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
};
const fCrDfUrl = crDfUrl => option => {
  const {
      items = []
    } = option,
    timeframe = (0, _AdapterFn.getValue)(items[1]);
  option.timeframe = timeframe;
  return _crAllOriginsUrl(crDfUrl((0, _AdapterFn.getValue)(items[0]), timeframe, (0, _AdapterFn.getValue)(items[2]), option, items), option);
};
exports.fCrDfUrl = fCrDfUrl;
const fCrObUrl = crObUrl => option => {
  const {
    items = []
  } = option;
  return _crAllOriginsUrl(crObUrl((0, _AdapterFn.getValue)(items[0]), (0, _AdapterFn.getValue)(items[1])), option);
};
exports.fCrObUrl = fCrObUrl;
const _getBlockchainData = function (json, option, getData) {
  if (getData === void 0) {
    getData = _AdapterFn.FN_IDENTITY;
  }
  return getData(json && _isStr(json.contents) ? JSON.parse(json.contents) : json, option);
};
const _fCheckResponse = getData => (json, option) => {
  try {
    const _data = _getBlockchainData(json, option, getData);
    if ((0, _AdapterFn.isArr)(_data) || _data && (0, _AdapterFn.isArr)(_data.asks) && (0, _AdapterFn.isArr)(_data.bids)) {
      return _data;
    }
    throw (0, _AdapterFn.crError)();
  } catch (err) {
    throw (0, _AdapterFn.crError)();
  }
};
const fGetRequestUrl = rCrUrl => option => {
  const {
      dfSubId
    } = option,
    _crUrl = dfSubId && rCrUrl[dfSubId] || rCrUrl.DF;
  return _crUrl(option);
};
exports.fGetRequestUrl = fGetRequestUrl;
const fRouteApi = (rCrUrl, getData) => ({
  getRequestUrl: fGetRequestUrl(rCrUrl),
  checkResponse: _fCheckResponse(getData)
});
exports.fRouteApi = fRouteApi;
const checkResponseData = json => {
  const {
    data
  } = json || {};
  if (!(0, _AdapterFn.isArr)(data)) {
    throw (0, _AdapterFn.crError)();
  }
};
exports.checkResponseData = checkResponseData;
//# sourceMappingURL=ApiFn.js.map