"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isArr = Array.isArray;
const _notNullOrUndef = v => v != null;
const _crCvItems = arr => arr.map(_ref => {
  let {
    c,
    v,
    ...restProps
  } = _ref;
  return {
    c: `${c} (${v})`,
    v,
    ...restProps
  };
});
const _crSItems = arr => arr.map(_ref2 => {
  let {
    c,
    v,
    s
  } = _ref2;
  return {
    c: `${c} (${s})`,
    v,
    s
  };
});
const _crNbqItems = arr => {
  const items = [];
  arr.forEach(_ref3 => {
    let {
      n,
      b,
      q
    } = _ref3;
    if (_isArr(q)) {
      q.forEach(to => {
        const s = `${b}/${to}`;
        items.push({
          c: `${n} (${s})`,
          v: s
        });
      });
    }
  });
  return items;
};
const REG_BLANKS = /\s/g;
const _crCpItems = arr => arr.map(_ref4 => {
  let {
    c,
    v,
    id
  } = _ref4;
  return {
    c: `${c} (${v})`,
    v: id || `${v}-${(c || '').replace(REG_BLANKS, '-')}`.toLowerCase()
  };
});
const _fCrItems = crValue => arr => arr.map(c => {
    const [b, q] = c.split('/');
    return {
      c,
      v: crValue(b, q)
    };
  }),
  _crValueT1 = (b, q) => `${b}-${q}`,
  _crValueT2 = (b, q) => `${b}${q}`,
  _crValueT2L = (b, q) => `${b}${q}`.toLowerCase(),
  _crValueT3 = (b, q) => `${b}_${q}`,
  _rCrItems = {
    //cb-items, kc-items, kx-items
    t1: _fCrItems(_crValueT1),
    //bf-items, kr-items
    t2: _fCrItems(_crValueT2),
    //bt-items
    t2l: _fCrItems(_crValueT2L),
    //gt-items
    t3: _fCrItems(_crValueT3),
    //bn-items
    nbq: _crNbqItems
  };
const _crItems = (json, optionJsonProp) => {
  const _arr = json[optionJsonProp],
    _crItems = json.isCv ? _crCvItems : json.isCp ? _crCpItems : _rCrItems[json.type];
  return _crItems ? _crItems(_arr) : _arr[0] && _notNullOrUndef(_arr[0].s) ? _crSItems(_arr) : _arr;
};
const _crPropCaption = arr => !_isArr(arr) || arr.length === 0 ? void 0 : _notNullOrUndef(arr[0].c) ? 'c' : void 0;
const crOptions = (json, optionJsonProp) => {
  const items = _crItems(json, optionJsonProp),
    propCaption = _crPropCaption(items);
  return {
    items,
    propCaption
  };
};
var _default = exports.default = crOptions;
//# sourceMappingURL=crOptions.js.map