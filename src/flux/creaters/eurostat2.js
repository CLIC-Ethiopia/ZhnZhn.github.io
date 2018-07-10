
const DF_CAPTION = 'EU';
    //, AREA = 'AREA';


const createLoadOptions = (props={}, options={}) => {
  const {
          loadId, dataSource,
          dfProps={}
        } = props
      , {
          one, two={}, chartType={},
          seriaColor,
          date, dateDefault,
          selectOptions
        } = options
      , { value:_seriaType } = chartType
      , _oneV = one
           ? one.value
           : DF_CAPTION
      , _oneC = one
           ? one.caption
           : dfProps.dfSliceTitle || DF_CAPTION;

  const _zhCompType = chartType.compType
  , _time = (date) ? date.value : dateDefault;

  /*
  if (_seriaType !== AREA){
    _zhCompType = chartType.compType;
    _time = (date) ? date.value : dateDefault;
  }
  */  

  return {
    ...dfProps,
    itemMap: two,
    geo : _oneV,
    metric : two.value,
    loadId : loadId,
    itemCaption: _oneC,
    title : _oneC,
    subtitle : two.caption,
    alertItemId : `${_oneC}:${two.caption}`,
    alertGeo : _oneC,
    alertMetric : two.caption,
    seriaType : _seriaType,
    seriaColor: seriaColor,
    zhCompType : _zhCompType,
    time : _time,
    dataSource,
    items: [ one, two ],
    selectOptions
  }
};

export default createLoadOptions
