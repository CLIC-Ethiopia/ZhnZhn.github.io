import JSONstat from 'jsonstat';

import AdapterFn from '../AdapterFn';

const {
  isYNumber,
  numberFormat,
  crId,
  roundBy,
  valueMoving,
  crItemConf
} = AdapterFn;

const _keys = Object.keys;

const TITLE = {
  NST: 'Statisctics Norway: All Items',
  SWS: 'Statisctics Sweden: All Items'
};

const _crSearchTitle = country => `Statistics ${country} Search`

const SEARCH = {
  NST: {
    url: 'https://www.ssb.no/en/sok?sok=',
    title: _crSearchTitle('Norway')
  },
  SWS: {
    url: 'https://www.scb.se/en/finding-statistics/search/?query=',
    title: _crSearchTitle('Sweden')
  },
  SFL: {
    url: 'http://pxnet2.stat.fi/PXWeb/pxweb/en/StatFin/',
    title: "Statistics Finland's PX-Web"
  },
  SDN: {
    url: 'https://www.statbank.dk/statbank5a/default.asp',
    title: _crSearchTitle('Denmark')
  },
  SIR: {
    url: 'https://data.cso.ie/',
    title: "CSO Ireland Web PxStat"
  }
};

const MAX_SOURCE_ID_LENGTH = 9;

const _assign = Object.assign;

const _crSearchToken = (label) => {
  const _arr = (label || '').toString().split(',');
  return _arr[0] || '';
};

const _crLink = ({url, title}, token='') => `<a class="native-link" href="${url}${token}">${title}</a>`;

const _crSflSearchToken = ({ dfId }) => {
  const arr = (''+dfId).split('/')
  , id = arr.pop()
  , prefix = arr.join('__');
  return prefix && id ? `StatFin__${prefix}/${id}` : '';
};

const _crSearchLink = (label, option) => {
  const  _token = _crSearchToken(label);
  switch(option.loadId){
    case 'NST': case 'NST_2':
      return _crLink(SEARCH.NST, _token);
    case 'SWS':
      return _crLink(SEARCH.SWS, _token);
    case 'SFL':
      return _crLink(SEARCH.SFL, _crSflSearchToken(option));
    case 'SDN':
      return _crLink(SEARCH.SDN);
    case 'SIR':
      return _crLink(SEARCH.SIR);
    default:
      return '';
  }
};

const _crDescr = ({ updated, source, label }, option) => {
  const _date = (updated || '')
    .replace('T', ' ')
    .replace('Z', '')
  , { dfId } = option
  , _elSearchLink = _crSearchLink(label, option);

  return dfId && source
    ? `TableId: ${dfId}<BR/>${source}: ${_date}<BR/>${_elSearchLink}`
    : _elSearchLink;
};

const _crItemCaption = (option) => {
  const { items, dfId='id'} = option
       , caption =  items[0]
            ? items[0].caption
            : 'All Items';
  return `${dfId}_${caption}`;
};

const _crAreaMapSlice = (option) => {
  const { items, dfTSlice } = option
      , mapSlice = {};
  items.forEach(item => {
    if (item.slice) {
      _assign(mapSlice, item.slice)
    }
  })
  return _assign(mapSlice, dfTSlice);
};


const _getDimensionWithouTime = (ds) => {
  const _dim = ds.Dimension("Year")
   || ds.Dimension("Vuosi")
   || ds.Dimension("Vuosineljännes")
   || ds.Dimension("Month")
  return _dim && _dim.id
    ? [_dim.id[0]]
    : ["2019"];
};


const _crTimesFromDs = (json, timeId) => {
  const _dim = json.dimension[timeId]
  , label = ((_dim || {}).category || {}).label;
  return _keys(label)
    .map(k => label[k]);
};

const _getTimeDimension = (ds, timeId, json) => {
  // SIR
  if (timeId && timeId.indexOf("TLIST(") !== -1) {
    return _crTimesFromDs(json, timeId)
  }

  const _dimTimeId = timeId && ds.Dimension(timeId)
  , _dim = _dimTimeId || ds.Dimension("Tid")
  , times = _dim && _dim.id
     || _getDimensionWithouTime(ds);
  return times;
};

const _crDataSource = ({ dataSource, dfId }) => dfId
 && (''+dfId).length < MAX_SOURCE_ID_LENGTH
   ? `${dataSource} (${dfId})`
   : dataSource;


const fnAdapter = {
  isYNumber, numberFormat, crId, roundBy,

  crTitle: (option) => {
    switch(option.browserType){
      case 'NST':
      case 'NST_ALL':
        return TITLE.NST;
      case 'SWS':
      case 'SWS_ALL':
        return TITLE.SWS;
      default:
        return '';
    }
  },

  crDsValuesTimes: (json, option) => {
    const mapSlice = _crAreaMapSlice(option)
    , ds = JSONstat(json).Dataset(0)
    , values = ds.Data(mapSlice)
    , times = _getTimeDimension(ds, option.timeId, json);
    return [ ds, values, times ];
  },

  crTid: (time, ds) => {
    if (time) {
      return time;
    }
    const tidIds = _getTimeDimension(ds);
    return tidIds[tidIds.length-1];
  },

  crInfo: (ds, option) => ({
    name: ds.label || '',
    description: _crDescr(ds, option)
  }),

  crZhConfig: (option) => {
    const {
      _itemKey, url,
      optionFetch, items,
      dataSource, dfId, timeId
    } = option
    , key = _itemKey || crId()
    , itemCaption = option.itemCaption || _crItemCaption(option)
    , itemConf = url
       ? {
         _itemKey: key,
         ...crItemConf(option),
         optionFetch, items,
         dataSource,
         //sfl
         dfId, timeId
        }
      : void 0;
    return {
      id: key, key,
      itemCaption,
      itemConf,
      dataSource: _crDataSource(option)
    };
  },

  crConfOption: (ds, option) => ({
    info: fnAdapter.crInfo(ds, option),
    zhConfig: fnAdapter.crZhConfig(option)
  }),

  crChartOption: (ds, data, option) => ({
    valueMoving: valueMoving(data),
    ...fnAdapter.crConfOption(ds, option)
  })
};

export default fnAdapter
