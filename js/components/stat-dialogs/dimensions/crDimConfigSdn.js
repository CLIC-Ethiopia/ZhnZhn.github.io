"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dimConfigFn = require("./dimConfigFn");

const _crSdnOptions = ({
  values,
  id
}) => (values || []).map(item => (0, _dimConfigFn.crDimItem)(item.text, id, item.id));

const crDimConfigSdn = variables => {
  const dims = [];
  let timeId,
      mapFrequency = 'Y';
  variables.forEach(item => {
    const {
      time,
      text = '',
      id
    } = item;

    if (time) {
      timeId = id;
      dims.dateOptions = item.values.map(({
        id,
        text
      }) => ({
        caption: text,
        value: id
      })).reverse();
    } else {
      dims.push({
        c: (0, _dimConfigFn.toFirstUpperCase)(text),
        v: id,
        options: _crSdnOptions(item)
      });
    }
  });
  return {
    mapFrequency,
    dims,
    timeId
  };
};

var _default = crDimConfigSdn;
exports.default = _default;
//# sourceMappingURL=crDimConfigSdn.js.map