import AdapterFn from './AdapterFn'

const { numberFormat, roundBy } = AdapterFn;

const _isNumber = n => typeof n === 'number'
, _replaceNaN = (n, str='') => n - n === 0
    ? n : str;

const _getCellValue = (r, h) => {
  const { pn, toN } = h
  , _isToNumber = !!toN
  , _toFixedBy = _isToNumber && toN[0]
  , _strV = r[pn];
  return _isToNumber
    ? _isNumber(_toFixedBy)
        ? roundBy(_strV, _toFixedBy)
        : _replaceNaN(parseFloat(_strV))
    : _strV;
};

export const crTableConfig = ({
  id,
  title,
  headers,
  rows,
  dataSource,
  fns
}) => ({
  id,
  title,
  headers,
  tableFn: {
    numberFormat,
    ...fns
  },
  rows,
  dataSource,
  zhCompType: 'TABLE',
  zhConfig: {
    id: id, key: id
  }
})

export const crTableRows = (
  headers=[],
  rows=[],
  idPropName='id'
) => rows
  .map((r, rIndex) => {
     headers.forEach(h => {
       r[h.pn] = _getCellValue(r, h);
     })
     r.id = r[idPropName] || `id${rIndex}`
     return r;
  });
