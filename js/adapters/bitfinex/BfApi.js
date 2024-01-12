"use strict";

exports.__esModule = true;
exports.default = void 0;
var _ApiFn = require("../ApiFn");
const API_URL = "https://api-pub.bitfinex.com/v2";
const _crDfUrl = (pair, timeframe, limit) => `${API_URL}/candles/trade:${timeframe}:t${pair}/hist?limit=${limit}`;
const _crObUrl = (pair, limit) => `${API_URL}/book/t${pair}/P0?len=${limit}`;
const _rCrUrl = {
  DF: (0, _ApiFn.fCrDfUrl)(_crDfUrl),
  OB: (0, _ApiFn.fCrObUrl)(_crObUrl)
};
const BfApi = (0, _ApiFn.fRouteApi)(_rCrUrl);
var _default = exports.default = BfApi;
//# sourceMappingURL=BfApi.js.map