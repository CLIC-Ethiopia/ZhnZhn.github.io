"use strict";

exports.__esModule = true;
exports.default = void 0;

var _createrFns = require("./createrFns");

const _toIds = (_ref, items) => {
  let {
    dfId
  } = _ref;
  const _arr = [dfId];
  items.forEach(function (_temp) {
    let {
      slice,
      value
    } = _temp === void 0 ? {} : _temp;

    if (slice) {
      _arr.push(slice[Object.keys(slice)[0]]);
    } else if (value) {
      //Eurostat case
      _arr.push(value);
    }
  });
  return _arr;
};

const createLoadOptions = (props, options) => {
  const {
    loadId,
    dataSource,
    dfProps = {}
  } = props || {},
        {
    timeId,
    time,
    dfC,
    dfTitle,
    items = [],
    titles,
    dialogOptions,
    chartType,
    seriaColor,
    seriaWidth,
    selectOptions
  } = options || {},
        {
    value: seriaType,
    compType: zhCompType
  } = chartType || {},
        {
    itemCaption,
    title,
    subtitle
  } = (0, _createrFns.crCaption)(items, titles),
        _items = _toIds(dfProps, items),
        _itemKey = (0, _createrFns.crItemKey)(_items, seriaType, time);

  return {
    dfC,
    dfTitle,
    ...dfProps,
    ...dialogOptions,
    _itemKey,
    itemCaption: dfTitle || itemCaption,
    loadId,
    title,
    subtitle,
    seriaType,
    seriaColor,
    seriaWidth,
    zhCompType,
    time,
    timeId,
    dataSource,
    items,
    selectOptions
  };
};

var _default = createLoadOptions;
exports.default = _default;
//# sourceMappingURL=statN.js.map