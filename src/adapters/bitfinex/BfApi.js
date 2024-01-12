import {
  fCrDfUrl,
  fCrObUrl,
  fRouteApi
} from '../ApiFn';

const API_URL = "https://api-pub.bitfinex.com/v2";

const _crDfUrl = (
  pair,
  timeframe,
  limit
) => `${API_URL}/candles/trade:${timeframe}:t${pair}/hist?limit=${limit}`;

const _crObUrl = (
  pair,
  limit
) => `${API_URL}/book/t${pair}/P0?len=${limit}`;

const _rCrUrl = {
  DF: fCrDfUrl(_crDfUrl),
  OB: fCrObUrl(_crObUrl)
};

const BfApi = fRouteApi(_rCrUrl);

export default BfApi
