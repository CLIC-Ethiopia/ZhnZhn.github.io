"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _useInputKeyDown = _interopRequireDefault(require("./useInputKeyDown"));

var _SvgClear = _interopRequireDefault(require("./SvgClear"));

var _ErrMsg = _interopRequireDefault(require("./ErrMsg"));

var _Input = require("./Input.Style");

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
const S_INPUT_PATTERN = { ..._Input.S_INPUT,
  width: 'calc(100% - 50px)',
  paddingLeft: 0,
  marginLeft: 10,
  marginBottom: 5
},
      S_INPUT_BORDER = {
  borderBottomStyle: 'solid',
  borderBottomWidth: 1
},
      S_BT_CLEAR = {
  float: 'right',
  position: 'relative',
  top: 4,
  right: 7
};

const _crInitialState = initValue => ({
  initValue,
  value: initValue,
  errorInput: void 0,
  isValid: true
});

const _crInputStyle = isValid => ({ ...S_INPUT_BORDER,
  borderBottomColor: (0, _Input.getIsValidColor)(isValid)
});

const _crBtClearStyle = isValid => ({ ...S_BT_CLEAR,
  stroke: (0, _Input.getIsValidColor)(isValid)
});

const DF_ON_TEST = () => true,
      DF_ON_CLEAR = () => {};

const InputPattern = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    rootStyle,
    inputStyle,
    maxLength = 64,
    initValue = '',
    placeholder = 'Input Pattern',
    errorMsg,
    onTest = DF_ON_TEST,
    onEnter,
    isClearBlank = false,
    onClear = DF_ON_CLEAR
  } = _ref;

  const _refInput = (0, _react.useRef)(),
        _refGetValue = (0, _react.useRef)(),
        _refIsValid = (0, _react.useRef)(),
        [state, setState] = (0, _react.useState)(() => _crInitialState(initValue)),
        {
    value,
    isValid,
    errorInput
  } = state,
        _hChangeValue = (0, _react.useCallback)(event => {
    const value = event.target.value;
    setState(onTest(value) ? {
      value,
      isValid: true,
      errorInput: void 0
    } : {
      value,
      isValid: false
    });
  }, [onTest]),
        _hKeyDown = (0, _useInputKeyDown.default)({
    onEnter,
    onDelete: () => setState(_crInitialState(initValue))
  }, [initValue, onEnter]),
        _hClear = (0, _react.useCallback)(() => {
    onClear();

    _refInput.current.focus();

    const _initValue = isClearBlank ? '' : initValue;

    setState(_crInitialState(_initValue));
  }, [initValue, onClear, isClearBlank]);
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _react.useEffect)(() => {
    if (state.initValue !== initValue) {
      setState(_crInitialState(initValue));
    }
  }, [initValue]);
  /*state.initValue*/

  /*eslint-enable react-hooks/exhaustive-deps */

  _refGetValue.current = () => (value || '').trim();

  _refIsValid.current = () => onTest(value);

  (0, _react.useImperativeHandle)(ref, () => ({
    getValue: () => _refGetValue.current(),
    isValid: () => _refIsValid.current(),
    focus: () => _refInput.current.focus(),
    showErrMsg: () => setState(prevState => ({ ...prevState,
      isValid: false,
      errorInput: errorMsg
    }))
  }), [errorMsg]);

  const _inputStyle = _crInputStyle(isValid),
        _btClearStyle = _crBtClearStyle(isValid);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: { ..._Input.S_ROW,
      ...rootStyle
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      type: "text",
      style: { ...S_INPUT_PATTERN,
        ...inputStyle,
        ..._inputStyle
      },
      ref: _refInput,
      name: "text-date" //autoComplete="new-text-date"
      ,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      placeholder: placeholder,
      value: value,
      maxLength: maxLength,
      onChange: _hChangeValue,
      onKeyDown: _hKeyDown
    }), value || errorInput ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgClear.default, {
      style: _btClearStyle,
      onClick: _hClear
    }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrMsg.default, {
      msg: errorInput
    })]
  });
});
/*
InputPattern.propTypes = {
  rootStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  initValue: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  errorMsg: PropTypes.string,
  onTest: PropTypes.func,
  onEnter: PropTypes.func,
  onClear: PropTypes.func
}
*/

var _default = InputPattern;
exports.default = _default;
//# sourceMappingURL=InputPattern.js.map