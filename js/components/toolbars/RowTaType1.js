"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _IndicatorBuilder = require("../../charts/IndicatorBuilder");
var _RowType = _interopRequireDefault(require("./RowType2"));
var _jsxRuntime = require("react/jsx-runtime");
const _isInArrObjWithId = (arrObj, id) => !!arrObj.find(obj => obj.id === id);
const _crId = (caption, period) => caption + "(" + period + ")";
const RowTaType1 = _ref => {
  let {
    caption,
    config,
    getChart,
    crInitialPeriod,
    addTaTo
  } = _ref;
  const _initialTaPeriod = (0, _useRefInit.default)(() => crInitialPeriod(config)),
    _refPeriodInput = (0, _uiApi.useRef)(),
    [taConfs, setTaConfs] = (0, _uiApi.useState)([]),
    _onAddTa = () => {
      const period = (0, _uiApi.getInputValue)(_refPeriodInput),
        id = _crId(caption, period);
      if (!_isInArrObjWithId(taConfs, id)) {
        const chart = getChart(),
          color = addTaTo(chart, {
            id,
            period
          });
        if (color) {
          setTaConfs([...taConfs, {
            id,
            color
          }]);
        }
      }
    },
    _onRemoveTa = id => {
      const chart = getChart();
      if ((0, _IndicatorBuilder.removeSeriaFrom)(chart, id)) {
        setTaConfs(taConfs.filter(d => d.id !== id));
      }
    };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowType.default, {
    forwardRef: _refPeriodInput,
    caption: caption,
    initValue: _initialTaPeriod,
    configs: taConfs,
    onAdd: _onAddTa,
    onRemove: _onRemoveTa
  });
};
var _default = RowTaType1;
exports.default = _default;
//# sourceMappingURL=RowTaType1.js.map