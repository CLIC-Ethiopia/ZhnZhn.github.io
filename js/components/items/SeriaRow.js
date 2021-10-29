"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _useRefSet = _interopRequireDefault(require("../hooks/useRefSet"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Model = _interopRequireDefault(require("../../constants/Model"));

var _SvgCheckBox = _interopRequireDefault(require("../zhn/SvgCheckBox"));

var _CellColor = _interopRequireDefault(require("../zhn-moleculs/CellColor"));

var _ModalPalette = _interopRequireDefault(require("../zhn-moleculs/ModalPalette"));

var _InputSelect = _interopRequireDefault(require("../zhn-select/InputSelect"));

var _jsxRuntime = require("react/jsx-runtime");

const TH_ID = 'ROW_CHECKBOX',
      CHECKED_COLOR = '#1b2836',
      DF_COLOR = '#7cb5ec',
      CL_ELL = 'ellipsis',
      CL_INPUT_COLOR = 'p-r va-m',
      S_ROOT = {
  padding: '0 0 16px 16px'
},
      S_TITLE = {
  color: '##1b75bb',
  width: 100,
  padding: '0 16px 0 4px',
  verticalAlign: 'middle',
  textAlign: 'right',
  fontSize: '16px',
  fontWeight: 'bold',
  userSelect: 'none'
},
      S_CHECK_BOX = {
  verticalAlign: 'middle'
},
      S_SELECT = {
  marginLeft: 24,
  verticalAlign: 'middle'
},
      S_SELECT_OPTIONS = {
  minHeight: 100
};

const _fnNoop = () => {};

const _getRefValue = ref => ref.current;

const SeriaRow = props => {
  const {
    seria = {},
    yAxisOptions,
    compIndex,
    onReg = _fnNoop,
    onUnReg = _fnNoop
  } = props,
        {
    color,
    name = ''
  } = seria,
        ref = (0, _react.useRef)(),
        _refIsChecked = (0, _react.useRef)(false),
        _refCellColor = (0, _react.useRef)(),
        [_refToYAxis, _hSelectYAxis] = (0, _useRefSet.default)(),
        [isShowPallete, setIsShowPallete] = (0, _react.useState)(false),
        [colorEntered, setColorEntered] = (0, _react.useState)(),
        _hCheck = (0, _react.useCallback)(() => {
    _refIsChecked.current = true;
  }, []),
        _hUnCheck = (0, _react.useCallback)(() => {
    _refIsChecked.current = false;
  }, []),
        _hEnterColor = (0, _react.useCallback)(color => {
    setColorEntered(color);
  }, []),
        _hClosePalette = (0, _react.useCallback)(() => {
    setIsShowPallete(false);
  }, []),
        _hClickPallete = (0, _react.useCallback)((color, event) => {
    if (event && event.target === _getRefValue(_refCellColor)) {
      setIsShowPallete(is => !is);
    }
  }, []),
        TS = (0, _useTheme.default)(TH_ID),
        _color = colorEntered || color || DF_COLOR;
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _react.useImperativeHandle)(ref, () => ({
    getValue: () => {
      const {
        userOptions
      } = seria,
            {
        data,
        name
      } = userOptions || {};
      return {
        isChecked: _getRefValue(_refIsChecked),
        color: _color,
        yIndex: (_getRefValue(_refToYAxis) || {}).value,
        data,
        name
      };
    }
  }), [_color]); //seria

  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _react.useEffect)(() => {
    onReg(ref, compIndex);
    return () => onUnReg(compIndex);
  }, []); //compIndex, onReg, onUnReg

  (0, _react.useEffect)(() => {
    _refToYAxis.current = void 0;
  }, [props]); //_refToYAxis

  /*eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgCheckBox.default, {
      style: S_CHECK_BOX,
      color: CHECKED_COLOR,
      checkedColor: TS.CHECKED_COLOR,
      onCheck: _hCheck,
      onUnCheck: _hUnCheck
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: CL_ELL,
      style: S_TITLE,
      children: name
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CellColor.default, {
      ref: _refCellColor,
      className: CL_INPUT_COLOR,
      color: _color,
      onClick: _hClickPallete,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPalette.default, {
        isShow: isShowPallete,
        model: _Model.default.palette,
        onClickCell: _hEnterColor,
        onClose: _hClosePalette
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
      placeholder: "withYAxis",
      width: "150",
      style: S_SELECT,
      optionsStyle: S_SELECT_OPTIONS,
      options: yAxisOptions,
      noFooterBts: true,
      onSelect: _hSelectYAxis
    })]
  });
};

var _default = SeriaRow;
exports.default = _default;
//# sourceMappingURL=SeriaRow.js.map