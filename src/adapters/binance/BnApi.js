import { getValue } from '../AdapterFn';
import { fRouteApi } from '../ApiFn';

const API_URL = 'https://api.binance.com/api/v3'
, RESEARCH_URL = 'https://research.binance.com/en/projects'
, TRADE_URL = 'https://binance.com/en/trade';

const REG_BLANKS = /\s/g;

const _setLinks = (option, c, s='') => {
  const _toIndex = c.indexOf('(')
  , _caption = c.slice(0, _toIndex)
      .trim()
      .toLowerCase()
      .replace(REG_BLANKS, '-')
  , _s = s.replace('/', '_').toLowerCase();
  option._researchLink = `${RESEARCH_URL}/${_caption}`
  option._tradeLink = `${TRADE_URL}/${_s}`
};

const _crSymbol = (s='') => s.replace('/','');

const _crDfUrl = option => {
  const { items=[] } = option
  , { s, c='' } = items[0]
  , interval = getValue(items[1])
  , limit = getValue(items[2])
  , _symbol = _crSymbol(s);

  _setLinks(option, c, s)
  return `${API_URL}/klines?symbol=${_symbol}&interval=${interval}&limit=${limit}`;
}

const _crObUrl = option => {
  const { items=[] } = option
  , { s } = items[0]
  , limit = getValue(items[1])
  , _symbol = _crSymbol(s);
  return `${API_URL}/depth?symbol=${_symbol}&limit=${limit}`;
}

const _rCrUrl = {
  DF: _crDfUrl,
  OB: _crObUrl
};

const BnApi = fRouteApi(_rCrUrl);

export default BnApi
