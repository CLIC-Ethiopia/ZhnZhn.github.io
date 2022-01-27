"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));

var _IndicatorBuilder = _interopRequireDefault(require("../../charts/IndicatorBuilder"));

var _ModalPopup = _interopRequireDefault(require("../zhn-moleculs/ModalPopup"));

var _ModalMenu = require("./ModalMenu.Style");

var _RowTypeA = _interopRequireDefault(require("./RowTypeA"));

var _RowTypeB = _interopRequireDefault(require("./RowTypeB"));

var _jsxRuntime = require("react/jsx-runtime");

const {
  addCategoryRateTo,
  addCategoryDiffTo,
  addCategoryRocTo,
  powerBy10
} = _IndicatorBuilder.default;

const DF_POWER_BY_10 = 0,
      S_PANE = {
  margin: '6px 10px 6px 6px'
},
      _isNumber = n => typeof n === 'number' && n - n === 0,
      _isPowerBy = config => {
  var _config$plotOptions, _config$plotOptions$b, _config$plotOptions$b2;

  return !(config != null && (_config$plotOptions = config.plotOptions) != null && (_config$plotOptions$b = _config$plotOptions.bar) != null && (_config$plotOptions$b2 = _config$plotOptions$b.dataLabels) != null && _config$plotOptions$b2.enabled);
};

const ModalMenuInd2 = _ref => {
  let {
    style,
    isShow,
    onClose,
    getChart,
    config
  } = _ref;

  const _hasPowerBy10 = (0, _useRefInit.default)(() => _isPowerBy(config)),
        _refPowerBy10 = (0, _react.useRef)(DF_POWER_BY_10),
        _onPowerBy10 = () => {
    const _by = parseFloat(_refPowerBy10.current.getValue());

    if (_isNumber(_by)) {
      powerBy10(getChart(), _by);
      return true;
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPopup.default, {
    style: { ..._ModalMenu.S_MODAL_MENU,
      ...style
    },
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_PANE,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowTypeA.default, {
        caption: "Rate (S1/S2)",
        mathFn: addCategoryRateTo,
        getChart: getChart
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowTypeA.default, {
        caption: "Diff (S1-S2)",
        mathFn: addCategoryDiffTo,
        getChart: getChart
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowTypeA.default, {
        caption: "ROC (S1 from S2)",
        mathFn: addCategoryRocTo,
        getChart: getChart
      }), _hasPowerBy10 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowTypeB.default, {
        forwardRef: _refPowerBy10,
        caption: "S1*Power of 10",
        initValue: DF_POWER_BY_10,
        min: -9,
        max: 9,
        maxLength: 2,
        onAdd: _onPowerBy10
      })]
    })
  });
};

var _default = ModalMenuInd2;
exports.default = _default;
//# sourceMappingURL=ModalMenuInd2.js.map