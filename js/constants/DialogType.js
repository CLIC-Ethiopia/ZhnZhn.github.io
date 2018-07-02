'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var createTypeObject = function createTypeObject(arr, id) {
  var obj = Object.create(null);
  for (var i = 0, max = arr.length; i < max; i++) {
    obj[arr[i]] = id + '_' + arr[i];
  }
  return obj;
};

var qeSources = ['CURRENCY_HISTORY', 'COMMODITY_PRICE', 'WIKI_COMMODITY_PRICE', 'LME', 'COMMODITY_TRADE', 'JODI_WORLD_GAS', 'JODI_WORLD_OIL', 'BP', 'PETROLEUM_PRICES', 'GLOBAL_INDICATOR', 'WORLDBANK_PRICE', 'IMF_CROSSCOUNTRY', 'EU_COMMISSION', 'OECD', 'BANK_CANADA', 'BANK_SWISS', 'OECD_CPI', 'RATE_INFLATION', 'BIG_MAC', 'BLSI', 'ROGERS_INDICES', 'BALTIC_INDICES', 'CHINA_FINANCE_FUTURE', 'DCE_FUTURE', 'ZCE_FUTURE', 'SHANGHAI_FUTURE', 'LIFFE_FUTURE', 'ICE_FUTURE', 'WIKI_FUTURE'];
var Quandl = createTypeObject(qeSources, 'QE');

exports.Quandl = Quandl;
//# sourceMappingURL=DialogType.js.map