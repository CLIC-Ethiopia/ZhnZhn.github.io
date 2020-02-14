import ChartConfig from '../../charts/ChartConfig'
import fn from './EuroStatFn';
import toYearly from '../toYearsByMonths'

const toAreaYearly = {
   createConfig: (json, option) => {
     const { timeIndex, value } = fn.crTimeIndexAndValue(json)
     , data = fn.toPointArr(timeIndex, value)
     , { title, subtitle } = option
     , config = toYearly.toConfig(
         data.reverse(), {
         title, subtitle,
         itemCaption: title + ': ' + subtitle,
         value: title + '_' + subtitle,
         dataSource: fn.crDataSource(option),
         ...fn.crLinkConf(json, option)
       });
      fn.setInfo({ config, json, option })
      return config;
   },

   createSeria: (json, option) => {
     const seria = ChartConfig.fSeries()
     Object.assign(seria, {
       zhSeriaId: 'Empty_Seria',
       zhValueText: 'Empty Seria'
     })
     return seria;
   }

};

export default toAreaYearly
