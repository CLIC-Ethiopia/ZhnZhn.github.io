import {
  isArr,
  crError
} from '../AdapterFn';
import {
  fGetRequestUrl
} from '../ApiFn';

const API_URL = "https://www.bitstamp.net/api/v2";

const _crDfUrl = option => {
  const { items=[] } = option
  , {v:pair} = items[0]
  , {v:timeframe} = items[1]
  , {v:limit} = items[2];
  option.timeframe = timeframe
  return `${API_URL}/ohlc/${pair}?step=${timeframe}&limit=${limit}`;
};

const _crObUrl = option => {
  const { items=[] } = option
  , {v:pair} = items[0];
  return `${API_URL}/order_book/${pair}?order=0`;
};

const _rCrUrl = {
  DF: _crDfUrl,
  OB: _crObUrl
};

const BtApi = {
  getRequestUrl: fGetRequestUrl(_rCrUrl),

  checkResponse(json, option){
    const {
      data,
      bids,
      asks
    } = json || {}
    , { ohlc, pair } = data || {}
    , { items=[] } = option
    , { c } = items[0];
    if ( (c === pair && isArr(ohlc))
      || (isArr(bids) && isArr(asks)) ) {
      return json;
    }
    throw crError();
  }
};

export default BtApi
