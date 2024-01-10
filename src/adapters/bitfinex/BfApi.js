import { getValue } from '../AdapterFn';
import {
  crAllOriginsUrl,
  fRouteApi
} from '../ApiFn';

const API_URL = "https://api-pub.bitfinex.com/v2";

const _crDfUrl = (
  option
) => {
  const {
    proxy,
    items=[]
  } = option
  , pair = getValue(items[0])
  , timeframe = getValue(items[1])
  , limit = getValue(items[2]);
  option.timeframe = timeframe
  return crAllOriginsUrl(proxy, `${API_URL}/candles/trade:${timeframe}:t${pair}/hist?limit=${limit}`)
};

const _crObUrl = ({
  proxy,
  items=[]
}) => {
  const {v:pair} = items[0]
  , {v:len} = items[1];
  return crAllOriginsUrl(proxy, `${API_URL}/book/t${pair}/P0?len=${len}`)
};

const _rCrUrl = {
  DF: _crDfUrl,
  OB: _crObUrl
};

const BfApi = fRouteApi(_rCrUrl);

export default BfApi
