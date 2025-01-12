"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crItemContainerEl = void 0;
var _uiApi = require("../../components/uiApi");
var _ChartContainer = _interopRequireDefault(require("../../components/zhn-containers/ChartContainer"));
var _BrowserConfig = _interopRequireDefault(require("../../constants/BrowserConfig"));
var _contCheckBoxLogic = require("../stores/contCheckBoxLogic");
var _compStore = require("../stores/compStore");
var _settingStore = require("../stores/settingStore");
var _itemStore = require("../stores/itemStore");
const _isStr = str => typeof str === 'string';
const _crCaption = (dialogConf, browserType) => {
  let _caption = dialogConf.contFullCaption || _BrowserConfig.default[browserType].contFullCaption;
  if (_caption) {
    return _caption;
  }
  const {
      contCaption,
      dialogCaption,
      menuTitle,
      dialogProps
    } = dialogConf,
    {
      dataSource = ''
    } = dialogProps || {};
  _caption = _isStr(contCaption) ? contCaption : dialogCaption || menuTitle || 'Item Container';
  return [dataSource, _caption].filter(Boolean).join(': ');
};
const crItemContainerEl = _ref => {
  let {
    browserType,
    dialogConf
  } = _ref;
  const {
      type,
      chartContainerComp,
      contWidth
    } = dialogConf || {},
    Comp = chartContainerComp || _ChartContainer.default,
    _chartType = type || _BrowserConfig.default[browserType].chartContainerType,
    _caption = _crCaption(dialogConf, browserType);
  return (0, _uiApi.createElement)(Comp, {
    key: _chartType,
    caption: _caption,
    chartType: _chartType,
    browserType,
    contWidth,
    isAdminMode: _settingStore.isAdminMode,
    onSetActive: (0, _uiApi.bindTo)(_contCheckBoxLogic.setActiveContainer, _chartType, browserType),
    onCloseContainer: (0, _uiApi.bindTo)(_compStore.closeChartContainer, _chartType, browserType),
    onSortBy: (0, _uiApi.bindTo)(_itemStore.sortItemsBy, _chartType),
    updateMovingValues: (0, _uiApi.bindTo)(_itemStore.updateMv, _chartType),
    onCloseItem: _itemStore.closeChartItem,
    onRemoveAll: (0, _uiApi.bindTo)(_itemStore.removeItemsAll, _chartType, browserType)
  });
};
exports.crItemContainerEl = crItemContainerEl;
//# sourceMappingURL=fItemContainer.js.map