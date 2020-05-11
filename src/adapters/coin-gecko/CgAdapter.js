import toChart from './toChart'
import toList from './toList'

const _rAdapter = {
  DF: toChart,
  MCL: toList
}

const _isFn = fn => typeof fn === 'function';

const _getAdapter = option => {
  const { dfSubId } = option;
  return _rAdapter[dfSubId] || _rAdapter.DF;
};

const CgAdapter = {
  crKey(option){
    return _getAdapter(option)
      .crKey(option);
  },

  toConfig(json, option){
    return _getAdapter(option)
      .toConfig(json, option);
  },

  isAdd(option){        
    return _isFn(_getAdapter(option).toSeries);
  },

  toSeries(json, option){
    return _getAdapter(option)
      .toSeries(json, option);
  }
};

export default CgAdapter
