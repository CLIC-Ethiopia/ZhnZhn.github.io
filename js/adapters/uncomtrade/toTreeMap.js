"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _ConfigBuilder = _interopRequireDefault(require("../../charts/ConfigBuilder"));

var _TreeMapFn = require("../TreeMapFn");

var _fnAdapter = require("./fnAdapter");

const _compareByValue = (a, b) => b.value - a.value;

const _addPercentAndColorToData = (data, total) => {
  if (total !== 0) {
    const _onePercent = total / 100;

    data.forEach(item => {
      item.percent = (0, _fnAdapter.roundBy)(item.value / _onePercent);
      item.name = (0, _TreeMapFn.crPointName)(item.label, item.value, item.percent);
    });
    data.sort(_compareByValue);
    (0, _TreeMapFn.addColorsTo)({
      data,
      total
    });
  } else {
    data = [];
  }
};

const _crTreeMapData = json => {
  const data = [];
  let total = 0;
  json.dataset.forEach(item => {
    const value = (0, _fnAdapter.getItemTradeValue)(item);

    if ((0, _fnAdapter.isPositiveNumber)(value)) {
      total += value;
      data.push({
        value,
        label: (0, _fnAdapter.getItemCmdCode)(item) + ' ' + (0, _fnAdapter.getItemCmdDescE)(item),
        title: (0, _fnAdapter.getItemPeriod)(item)
      });
    }
  });

  _addPercentAndColorToData(data, total);

  return data;
};

const _crDataByCountry = json => {
  const data = [];
  let totalWorld = 0,
      total = 0;
  json.dataset.forEach(item => {
    const value = item.TradeValue,
          ptTitle = (0, _fnAdapter.getItemPtTitle)(item);

    if (ptTitle === "World") {
      totalWorld = value;
    } else if ((0, _fnAdapter.isNotNested)(ptTitle) && (0, _fnAdapter.isPositiveNumber)(value)) {
      total += value;
      data.push({
        value,
        label: ptTitle,
        title: (0, _fnAdapter.getItemPeriod)(item)
      });
    }
  });

  _addPercentAndColorToData(data, totalWorld || total);

  return data;
};

const toTreeMap = (json, option) => {
  const data = (0, _fnAdapter.isTotalByAll)(option) ? _crDataByCountry(json) : _crTreeMapData(json),
        config = (0, _ConfigBuilder.default)().treeMapConfig(data).addCaption((0, _fnAdapter.crCategoryTitle)(option), option.subtitle).add({
    info: (0, _fnAdapter.crInfo)(json, option),
    zhConfig: (0, _fnAdapter.crZhConfig)(option)
  }).toConfig();
  return config;
};

var _default = toTreeMap;
exports.default = _default;
//# sourceMappingURL=toTreeMap.js.map