import { LT_BT } from '../constants/LoadType';

import {
  isArr,
  getValue,
  crError
} from './AdapterFn';

const _isStr = v => typeof v === "string";

const _crAllOriginsUrl = (
  url,
  { proxy, loadId }
) => loadId === LT_BT
  ? url
  : proxy
     ? `${proxy}${url}`
     : `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`

export const fCrDfUrl = (crDfUrl) => (
  option
) => {
  const { items=[] } = option
  , timeframe = getValue(items[1]);
  option.timeframe = timeframe
  return _crAllOriginsUrl(
    crDfUrl(getValue(items[0]), timeframe, getValue(items[2])),
    option
  );
}

export const fCrObUrl = crObUrl => (
  option
) => {
  const { items=[] } = option;
  return _crAllOriginsUrl(
    crObUrl(getValue(items[0]), getValue(items[1])),
    option
  );
}

const FN_IDENTITY = v => v;
const _getBlockchainData = (
  json,
  option,
  getData=FN_IDENTITY
) => getData(
  json && _isStr(json.contents)
    ? JSON.parse(json.contents)
    : json,
  option
);

const _fCheckResponse = (getData) => (
  json,
  option
) => {
  try {
    const _data = _getBlockchainData(json, option, getData);
    if (isArr(_data)
      || (_data && isArr(_data.asks) && isArr(_data.bids))) {
      return _data;
    }
    throw crError();
  } catch(err) {
    throw crError();
  }
}

export const fGetRequestUrl = (
  rCrUrl
) => (option) => {
  const { dfSubId } = option
  , _crUrl = dfSubId && rCrUrl[dfSubId]
      || rCrUrl.DF;
  return _crUrl(option);
}

export const fRouteApi = (
  rCrUrl,
  getData
) => ({
  getRequestUrl: fGetRequestUrl(rCrUrl),
  checkResponse: _fCheckResponse(getData)
})
