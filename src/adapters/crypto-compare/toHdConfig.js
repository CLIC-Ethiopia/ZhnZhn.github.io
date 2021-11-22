import crAdapterType1 from '../crAdapterType1'
import fnAdapter from './fnAdapter'

const {
  crData,
  crConfOption,
  getValue
} = fnAdapter
, _assign = Object.assign;

const _crTitle = (title, items) => {
 const _time = getValue(items[2]) === 'histoday'
   ? '00:00 GMT+0'
   : 'GMT+0';
 return `${title}: Values on ${_time}`;
};

const _getTsym = (json, option) => {
  const { ConversionType } = json
  , {
    conversionSymbol,
    type=''
  } = ConversionType || {};
  return {
    tsym: conversionSymbol || option.tsym,
    type
  };
};

const _crSubtitle = (json, option) => {
  const { value, exchange } = option
  , { tsym, type } = _getTsym(json, option);
  return `${exchange}: ${value}/${tsym} ${type}`;
};

const _crBtTitleTo = (json, option) => {
  const { tsym } = _getTsym(json, option);
  return tsym;
};

const _crMiniVolume = (title, dColumn, dVolume) => ({
  btTitle: `Volume ${title}`,
  dColumn, dVolume
});

const trOption = (option, json) => {
  const { title, items } = option;
  _assign(option, {
    itemCaption: title,
    title: _crTitle(title, items),
    subtitle: _crSubtitle(json, option)
  })
};

const addConfig = (builder, json, option, data) => {
  const _btTitleTo = _crBtTitleTo(json, option)
  , { value } = option
  , {
     dVolume, dColumn,
     dToVolume,
     dHL
  } = data;
  return builder
    .addMiniVolume(_crMiniVolume(value, dColumn, dVolume))
    .addMiniVolume(_crMiniVolume(_btTitleTo, [], dToVolume))
    .addMiniHL({ data: dHL })
};

const toHdConfig = crAdapterType1({
  crData,
  crConfOption,
  trOption,
  addConfig
});

export default toHdConfig
