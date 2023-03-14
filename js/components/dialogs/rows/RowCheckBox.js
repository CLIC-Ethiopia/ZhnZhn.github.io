"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _useTheme = _interopRequireDefault(require("../../hooks/useTheme"));
var _useRefInit = _interopRequireDefault(require("../../hooks/useRefInit"));
var _Button = _interopRequireDefault(require("../../zhn/Button"));
var _SvgCheckBox = _interopRequireDefault(require("../../zhn/SvgCheckBox"));
var _crStyle = require("../../zhn-utils/crStyle");
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const CL = "bt-chb",
  TH_ID = 'ROW_CHECKBOX',
  CHECKED_COLOR = '#1b2836',
  S_ROOT = {
    padding: '6px 0 0 16px'
  },
  S_CAPTION = {
    display: 'inline-block',
    color: 'grey',
    paddingLeft: 12,
    fontSize: '16px',
    fontWeight: 'bold',
    userSelect: 'none',
    cursor: 'pointer'
  };
const _isFn = fn => typeof fn == 'function',
  _isUndefined = v => typeof v === 'undefined',
  _isBool = bool => typeof bool === 'boolean',
  _crCheckedStyle = color => ({
    color
  });
const RowCheckBox = _ref => {
  let {
    style,
    checkedColor = CHECKED_COLOR,
    value,
    initValue,
    caption,
    captionStyle,
    onCheck,
    onUnCheck,
    onToggle
  } = _ref;
  const [valueState, setValueState] = (0, _uiApi.useState)(() => _isUndefined(value) ? !!initValue : void 0),
    _isValueState = (0, _useRefInit.default)(() => _isBool(valueState)),
    _value = _isValueState ? valueState : value,
    _hCheck = (0, _uiApi.useCallback)(() => {
      if (_isFn(onCheck)) {
        onCheck();
      } else if (_isFn(onToggle)) {
        onToggle(true);
      }
      if (_isValueState) {
        setValueState(true);
      }
    }, [onCheck, onToggle, _isValueState]),
    _hUnCheck = (0, _uiApi.useCallback)(() => {
      if (_isFn(onUnCheck)) {
        onUnCheck();
      } else if (_isFn(onToggle)) {
        onToggle(false);
      }
      if (_isValueState) {
        setValueState(false);
      }
    }, [onUnCheck, onToggle, _isValueState]),
    _hToggle = (0, _uiApi.useCallback)(() => {
      if (_value) {
        _hUnCheck();
      } else {
        _hCheck();
      }
    }, [_value, _hUnCheck, _hCheck]),
    TS = (0, _useTheme.default)(TH_ID);
  const _captionStyle = (0, _crStyle.crStyle3)(S_CAPTION, captionStyle, _value && _crCheckedStyle(checkedColor));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      ...S_ROOT,
      ...style
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgCheckBox.default, {
      value: _value,
      color: checkedColor,
      checkedColor: TS.CHECKED_COLOR,
      onCheck: _hCheck,
      onUnCheck: _hUnCheck
    }), caption && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      tabIndex: "-1",
      className: CL,
      style: _captionStyle,
      onClick: _hToggle,
      children: caption
    })]
  });
};

/*
RowCheckBox.propTypes = {
  style: PropTypes.object,
  checkedColor: PropTypes.string,
  initValue: PropTypes.bool,
  value: PropTypes.bool,
  caption: PropTypes.string,
  captionStyle: PropTypes.object,
  onCheck: PropTypes.func,
  onUnCheck: PropTypes.func,
  onToggle: PropTypes.func
}
*/
var _default = RowCheckBox;
exports.default = _default;
//# sourceMappingURL=RowCheckBox.js.map