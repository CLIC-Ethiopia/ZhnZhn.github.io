import api from './ApiDataset';
import tableApi from './ApiTable';
import adapter from '../stat-json/StatJsonAdapter';

const StatNorway = {
  StatNorway: { api, adapter },
  StatNorway2: {
    api: tableApi,
    optionFetch: tableApi.crOptionFetch,
    adapter
  }
};

export default StatNorway
