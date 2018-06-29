
const C = {
  ROOT_URL: "https://www.quandl.com/api/v3/datasets/",
  TABLE_URL: "https://www.quandl.com/api/v3/datatables/",

  REQUEST_ERROR: 'Request Error',
  DATASET_EMPTY: 'Dataset Empty'
}

const _crErr = (errCaption, message='') => ({
    errCaption, message
});

const _addTo = (q, pN, pV) => {
  if (!pV) {
    return q || '';
  }
  return q ? `${q}&${pN}=${pV}` : `${pN}=${pV}`;
};

const _crSetUrl = (option) => {
  const { value, fromDate, toDate, apiKey, transform } = option;
  let _q = 'sort_order=asc';
  _q = _addTo(_q, 'trim_start', fromDate)
  _q = _addTo(_q, 'trim_end', toDate)
  _q = _addTo(_q, 'transform', transform)
  _q = _addTo(_q, 'api_key', apiKey)

  return `${C.ROOT_URL}${value}.json?${_q}`;
};


const _crTableUrl = (option) => {
  const {
          proxy,
          dfTable,
          dfTail, dfColumn,
          value,
          apiKey
        } = option
      , { one, two } = value;
  option.key = option.value = `${one}_${two}`;
  return `${proxy}${C.TABLE_URL}${dfTable}.json?ticker=${one}&api_key=${apiKey}&${dfTail}&qopts.columns=${dfColumn},${two}`;
};


const QuandlApi = {

  getRequestUrl(option) {
    //return _crSetUrl(option);

    const { dfTable } = option;
    return !dfTable
      ? _crSetUrl(option)
      : _crTableUrl(option);
  },

  checkResponse(json) {
    const {
            quandl_error,
            dataset={}
            //datatable={}
          } = json;
    if ( quandl_error ){
       if ( quandl_error.message ) {
          throw _crErr(
            C.REQUEST_ERROR,
            json.quandl_error.message
          );
       } else {
          throw _crErr(C.REQUEST_ERROR);
       }
    } else if ( !dataset.data || dataset.data.length === 0 ) {
        const {
                newest_available_date='',
                oldest_available_date=''
              } = dataset;
        throw _crErr(
           C.DATASET_EMPTY,
           `Result dataset for request is empty:
            Newest Date: ${newest_available_date}
            Oldest Date: ${oldest_available_date}`
        );
    }    
    return true;
  }
}

export default QuandlApi
