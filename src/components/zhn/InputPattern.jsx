//import PropTypes from "prop-types";
import {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle
} from 'react';

import useInputKeyDown from './useInputKeyDown';

import SvgClear from './SvgClear';
import ErrMsg from './ErrMsg';
import {
  S_ROW,
  S_INPUT,
  getIsValidColor
} from './Input.Style';

const S_INPUT_PATTERN = {
  ...S_INPUT,
  width: 'calc(100% - 50px)',
  paddingLeft: 0,
  marginLeft: 10,
  marginBottom: 5
}
, S_INPUT_BORDER = {
  borderBottomStyle: 'solid',
  borderBottomWidth: 1
}
, S_BT_CLEAR = {
  float: 'right',
  position: 'relative',
  top: 4,
  right: 7
};

const _crInitialState = (initValue) => ({
  initValue,
  value: initValue,
  errorInput: void 0,
  isValid: true
});

const _crInputStyle = (isValid) => ({
  ...S_INPUT_BORDER,
  borderBottomColor: getIsValidColor(isValid)
});

const _crBtClearStyle = (isValid) => ({
  ...S_BT_CLEAR,
  stroke: getIsValidColor(isValid)
});

const DF_ON_TEST = () => true
, DF_ON_CLEAR = () => {};

const InputPattern = forwardRef(({
  rootStyle,
  inputStyle,
  maxLength=64,
  initValue='',
  placeholder='Input Pattern',

  errorMsg,
  onTest=DF_ON_TEST,
  onEnter,

  isClearBlank=false,
  onClear=DF_ON_CLEAR
}, ref) => {
  const _refInput = useRef()
  , _refGetValue = useRef()
  , _refIsValid = useRef()
  , [state, setState] = useState(() => _crInitialState(initValue))
  , { value, isValid, errorInput } = state
  , _hChangeValue = useCallback(event => {
     const value = event.target.value;
     setState(onTest(value)
       ? { value, isValid: true, errorInput: void 0 }
       : { value, isValid: false }
     )
    }, [onTest])
  , _hKeyDown = useInputKeyDown({
       onEnter,
       onDelete: () => setState(_crInitialState(initValue))
     }, [initValue, onEnter])
  , _hClear = useCallback(()=>{
       onClear()
       _refInput.current.focus()
       const _initValue = isClearBlank ? '' : initValue;
       setState(_crInitialState(_initValue))
    }, [initValue, onClear, isClearBlank]);

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (state.initValue !== initValue){
      setState(_crInitialState(initValue))
    }
  }, [initValue])
  /*state.initValue*/
  /*eslint-enable react-hooks/exhaustive-deps */

  _refGetValue.current = () => (value || '').trim()
  _refIsValid.current = () => onTest(value)

  useImperativeHandle(ref, () => ({
    getValue: () => _refGetValue.current(),
    isValid: () =>_refIsValid.current(),
    focus: () => _refInput.current.focus(),
    showErrMsg: () =>
      setState(prevState => ({
        ...prevState,
        isValid: false,
        errorInput: errorMsg
      }))
  }), [errorMsg])

  const _inputStyle = _crInputStyle(isValid)
  , _btClearStyle = _crBtClearStyle(isValid);

  return (
    <div style={{...S_ROW, ...rootStyle}}>
      <input
         type="text"
         style={{...S_INPUT_PATTERN, ...inputStyle, ..._inputStyle }}
         ref={_refInput}
         name="text-date"
         //autoComplete="new-text-date"
         autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
         spellCheck={false}
         placeholder={placeholder}
         value={value}
         maxLength={maxLength}
         onChange={_hChangeValue}
         onKeyDown={_hKeyDown}
      />
      { value || errorInput
          ? <SvgClear
               style={_btClearStyle}
               onClick={_hClear}
            />
          : null
      }
      <ErrMsg msg={errorInput} />
    </div>
  );
})

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

export default InputPattern
