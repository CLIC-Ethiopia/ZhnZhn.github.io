import crAdapterRouter from '../crAdapterRouter'
import toKline from './toKline'

const _rAdapter = {
  DF: toKline
}
, CbAdapter = crAdapterRouter(_rAdapter);

export default CbAdapter