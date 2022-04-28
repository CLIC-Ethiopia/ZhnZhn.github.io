"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _DateUtils = require("../utils/DateUtils");

var _mathFn = _interopRequireDefault(require("./mathFn"));

const {
  roundBy
} = _mathFn.default;
const C = {
  ATH_UP: 'rgba(76, 175, 80, 0.75)',
  ATH_DOWN: 'rgba(244, 67, 54, 0.75)'
};

const momAth = data => {
  const dataMom = [],
        dataAth = [],
        dataSum = [];
  let i = 1,
      max = data.length,
      point,
      prevPoint,
      x,
      mom,
      ath,
      co;

  for (; i < max; i++) {
    prevPoint = data[i - 1];
    point = data[i];
    x = (0, _DateUtils.ymdToUTC)(point[0]);
    mom = point[4] - prevPoint[4];
    dataMom.push({
      x: x,
      y: mom
    });
    ath = roundBy(point[1] - prevPoint[4], 4);
    dataAth.push({
      x: x,
      y: ath,
      color: ath > 0 ? C.ATH_UP : C.ATH_DOWN
    });
    co = roundBy(point[4] - point[1], 4);
    dataSum.push({
      x: x,
      y: co
    });
  }

  return {
    dataMom,
    dataAth,
    dataSum
  };
};

var _default = momAth;
exports.default = _default;
//# sourceMappingURL=momAth.js.map