import { bindTo } from '../storeApi';

import {
  LT_Q,
  LT_QCT,
  LT_AL,
  LT_IEX,
  LT_FMP,
  LT_INTR,
  LT_TW,
  LT_BEA,
  LT_EIA,
  LT_BF,
  LT_CRC,
  LT_BLS,
  LT_WL,
  LT_UN
} from '../../constants/LoadType';

const _isUndef = value => typeof value === 'undefined';

const _withApiKey = [
  LT_AL, LT_IEX, LT_FMP, LT_INTR, LT_TW,
  LT_BEA, LT_EIA
];
const _withProxy = [
  LT_Q,
  LT_QCT,
  LT_BF,
  LT_UN
];
const _apiTitle = {
  DF: '',
  [LT_AL]: 'Alpha Vantage',
  [LT_IEX]: 'IEX Cloud',
  [LT_BEA]: 'BEA',
  [LT_EIA]: 'EIA',
  [LT_FMP]: 'FMP',
  [LT_INTR]: 'Intrinio',
  [LT_TW]: 'Twelve Data',

  [LT_CRC]: 'CryptoCompare Information'
};

export const isApiKeyRequired = loadId => _withApiKey
  .indexOf(loadId) !== -1
export const isProxyRequired = loadId => _withProxy
  .indexOf(loadId) !== -1
export const getApiTitle = loadId => _apiTitle[loadId]
  || _apiTitle.DF

const _API_KEYS = Object.create(null);

const _fSetKey = (propName) => (value) => {
  _API_KEYS[propName] = value
};

export const getKey = (id) => {
  switch(id){
    case LT_WL:
       return _API_KEYS[LT_Q];
    default:
       return _API_KEYS[id];
  }
}

const _SETTINGS = {
  proxy: '',
  isAdminMode: false,
  isDrawDeltaExtrems: false,
  isNotZoomToMinMax: false
};

export const isSetting = (propName, value) => {
  if (_isUndef(value)){
    return _SETTINGS[propName];
  }
  _SETTINGS[propName] = !!value
}
export const isAdminMode = bindTo(isSetting, 'isAdminMode')

const _setProxy = (url) => {
  if ((''+url).substring(0,16) === 'http://127.0.0.1') {
    _SETTINGS.proxy = url
    return true;
  }
};

export const getProxy = (
  loadId
) => isProxyRequired(loadId)
  ? _SETTINGS.proxy
  : ''

export const exportSettingFn = () => {
  return {
    key1: _fSetKey(LT_Q),
    key2: _fSetKey(LT_BEA),
    key3: _fSetKey(LT_BLS),
    key4: _fSetKey(LT_EIA),
    key5: _fSetKey(LT_AL),
    key6: _fSetKey(LT_FMP),
    key7: _fSetKey(LT_IEX),
    key8: _fSetKey(LT_INTR),
    key9: _fSetKey(LT_TW),
    setProxy: _setProxy,
    getProxy,
    isAdminMode,
    isDrawDeltaExtrems: bindTo(isSetting, 'isDrawDeltaExtrems'),
    isNotZoomToMinMax: bindTo(isSetting, 'isNotZoomToMinMax')
  };
}
