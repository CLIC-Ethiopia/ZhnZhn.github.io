import ChartConfig from '../../charts/ChartConfig';

import EuroStatFn from './EuroStatFn';

const {
  crTimeIndexAndValue,
  createData,
  setDataAndInfo,
  setLineExtrems,
  findMinY
} = EuroStatFn

const toArea = {
   createConfig: (json, option) => {
     const { timeIndex, value } = crTimeIndexAndValue(json)
         , {
             isNotZoomToMinMax,
             seriaType, seriaColor, seriaWidth
            } = option
         , { data, max, min } = createData(timeIndex, value)
         , _type = typeof seriaType === 'string'
             ? seriaType.toLowerCase()
             : 'spline'
         , config = ChartConfig.fBaseAreaConfig({
             seriaType: _type,
             seriaColor, seriaWidth
           });
      setDataAndInfo({ config, data, json, option });
      setLineExtrems({ config, max, min, isNotZoomToMinMax });

      return config;
   },

   createSeria: (json, option) => {
     const { timeIndex, value } = crTimeIndexAndValue(json)
         , { itemCaption, seriaType, seriaColor } = option
         , seria = ChartConfig.fSeries({ seriaType })
         , { data } = createData(timeIndex, value);

     return Object.assign(seria, {
       zhSeriaId: option.key,
       zhValueText: itemCaption,
       color: seriaColor,
       data: data,
       minY: findMinY(data)
     });
   }
};

export default toArea
