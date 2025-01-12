export {
  getColorBlack,
  isArr,
  isInArrStr,
  isTokenInStr,
  crDfItemKey,
  getValue,
  getCaption,
  getValueCaption,
  toUpperCaseFirst,
  joinBy,
  valueMoving,
  ymdToUTC,
  ymdhmsToUTC,
  roundBy,
  crError
} from '../AdapterFn';

import {
  _isNaN,
  roundBy,
  ymdToUTC
} from '../AdapterFn';
import { compareByDate } from '../compareByFn';

import { valueMoving } from '../AdapterFn';
import {
  crItemConf,
  crValueConf
} from '../crFn';
import { stockSeriesLegend } from '../legendFn';

export const DF_FN_EOD = "EOD"

const _crItemConf = (
  { data },
  option
) => {
  const {
    _itemKey,
    dfFn,
    dfSubId,
    items,
    dataSource
  } = option;
  return dfFn === DF_FN_EOD
    ? {
        _itemKey,
        ...crItemConf(option),
        ...crValueConf(data),
        items: [...(items || [])],
        dfFn,
        dfSubId,
        dataSource
     }
    : void 0;
};

export const fCrData = (
  paramNameY,
  paramNameX,
  yConfig
) => (data) => {
  const _crY = yConfig === '10'
    ? (v) => parseInt(v, 10)
    : yConfig === 'round'
       ? roundBy
       : parseFloat;
  return (data || [])
    .reduce((arr, item={}) => {
       const _y = _crY(item[paramNameY]);
       if (!_isNaN(_y)) {
         arr.push([ymdToUTC(item[paramNameX]), _y])
       }
       return arr;
    }, [])
    .sort(compareByDate);
}

const _crZhConfig = (
  config,
  option
) => {
  const {
    _itemKey,
    itemCaption
  } = option
  , {
    id,
    dataSource
  } = config
  , _id = _itemKey || id
  , itemConf = _crItemConf(config, option);
  return {
    id: _id,
    key: _id,
    itemCaption,
    itemConf,
    legend: stockSeriesLegend(),
    dataSource: dataSource || "Alpha Vantage"
  }
};

export const crIntradayConfigOption = (
  config,
  option
) => ({
  zhConfig: _crZhConfig(config, option),
  valueMoving: valueMoving(config.data)
})
