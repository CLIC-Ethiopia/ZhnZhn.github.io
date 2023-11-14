"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _styleFn = require("../styleFn");
var _crAfterInputEl = _interopRequireDefault(require("./crAfterInputEl"));
var _InputSelectFn = require("./InputSelectFn");
var _ItemOptionDf = _interopRequireDefault(require("./ItemOptionDf"));
var _OptionsView = _interopRequireDefault(require("./OptionsView"));
var _CL = require("./CL");
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

const INPUT_PREFIX = 'From input:',
  DF_OPTIONS = [];
const _crValue = str => str.replace(INPUT_PREFIX, '').trim();
const _crInputItem = (inputValue, _ref) => {
  let {
    propCaption,
    isWithInput,
    maxInput
  } = _ref;
  const _inputValue = inputValue.slice(0, maxInput),
    _caption = isWithInput ? `${INPUT_PREFIX} ${_inputValue}` : 'No results found';
  return {
    [propCaption]: _caption,
    value: _InputSelectFn.NO_RESULT,
    inputValue: _inputValue
  };
};
const _crInitialStateFromProps = _ref2 => {
  let {
    options
  } = _ref2;
  const _options = options || DF_OPTIONS;
  return {
    value: '',
    isShowOption: false,
    initialOptions: _options,
    options: _options,
    nAll: _options.length,
    isFocused: false
  };
};
const _filterOptions = (options, value, pnCaption) => {
  const _value = value.toLowerCase();
  return options.filter(item => item[pnCaption].toLowerCase().indexOf(_value) !== -1);
};
const _crFilterOptions = (options, token, props) => {
  const {
    propCaption
  } = props;
  const _arr = _filterOptions(options, token, propCaption);
  if (_arr.length === 0) {
    _arr.push(_crInputItem(token, props));
  }
  return _arr;
};
const _calcDeltaTop = (comp, optionsComp) => comp && optionsComp ? comp.offsetTop - optionsComp.scrollTop : void 0;
const _makeVisible = (comp, indexActive, optionsComp) => {
  if (comp) {
    if (indexActive === 0) {
      return;
    }
    const deltaTop = _calcDeltaTop(comp, optionsComp);
    if (deltaTop > 70) {
      optionsComp.scrollTop += deltaTop - 70;
    }
    if (deltaTop < 0) {
      optionsComp.scrollTop = 0;
    }
  }
};
const FN_NOOP = () => {};
class InputSelect extends _uiApi.Component {
  /*
  static propTypes = {
     propCaption: PropTypes.string,
     ItemOptionComp: PropTypes.element,
     width: PropTypes.string,
     style: PropTypes.object,
     optionsStyle: PropTypes.object,
     options: PropTypes.arrayOf(PropTypes.shape({
        caption: PropTypes.string,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ])
     })),
     optionName: PropTypes.string,
     optionNames: PropTypes.string,
     placeholder: PropTypes.string,
     isWithInput: PropTypes.bool,
     prefixInput: PropTypes.string
       isLoading: PropTypes.bool,
     isLoadingFailed: PropTypes.bool,
     noFooterBts: PropTypes.bool
       onSelect: PropTypes.func,
     onLoadOption: PropTypes.func
  }
  */

  static defaultProps = {
    propCaption: 'caption',
    ItemOptionComp: _ItemOptionDf.default,
    optionName: '',
    isWithInput: false,
    maxInput: 10,
    regInput: /[A-Za-z0-9()^ ]/,
    //prefixInput: 'From Input:',
    onSelect: FN_NOOP,
    onLoadOption: FN_NOOP
  };
  constructor(props) {
    super(props);
    this._touchHandlers = _has.HAS_TOUCH_EVENTS ? {
      onFocus: this._hFocus,
      onBlur: this._hBlur
    } : void 0;
    this._initProperties();
    this._refInput = (0, _uiApi.createRef)();
    this.state = _crInitialStateFromProps(props);
  }
  _initProperties = () => {
    this.optionListCache = null;
    this.indexActiveOption = 0;
  };
  static getDerivedStateFromProps(props, state) {
    //Init state for new options from props
    return props.options !== state.initialOptions ? _crInitialStateFromProps(props) : null;
  }
  componentDidUpdate(prevProps, prevState) {
    const {
      initialOptions,
      isShowOption
    } = this.state;
    // Init from props for new options from props
    if (prevState.initialOptions !== initialOptions) {
      this._initProperties();
    }
    //Decorate Active Option and Make Visible
    if (isShowOption) {
      const comp = this._decorateCurrentComp();
      if (!prevState.isShowOption) {
        _makeVisible(comp, this.indexActiveOption, this.optionsComp);
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._blurId);
  }
  _setStateToInit = props => {
    this._initProperties();
    this.setState(_crInitialStateFromProps(props));
  };
  _getCurrentComp = () => {
    return this[`v${this.indexActiveOption}`];
  };
  _decorateCurrentComp = () => {
    const comp = this._getCurrentComp();
    if (comp) {
      comp.classList.add(_CL.CL_OPTIONS_ROW_ACTIVE);
      if (this.indexNode) {
        this.indexNode.textContent = this.indexActiveOption + 1;
      }
    }
    return comp;
  };
  _undecorateCurrentComp = comp => {
    const _comp = comp || this._getCurrentComp();
    if (_comp) {
      _comp.classList.remove(_CL.CL_OPTIONS_ROW_ACTIVE);
    }
  };
  _hInputChange = event => {
    const {
        isWithInput,
        regInput
      } = this.props,
      token = event.target.value,
      tokenLn = token.length,
      {
        value,
        options,
        initialOptions
      } = this.state,
      valueLn = value.length;
    if (isWithInput && tokenLn > 0 && !regInput.test(token[tokenLn - 1])) {
      return;
    }
    if (tokenLn !== valueLn) {
      this._undecorateCurrentComp();
      this.indexActiveOption = 0;
      const _options = tokenLn > valueLn ? options : initialOptions;
      this.setState({
        value: token,
        isShowOption: true,
        options: _crFilterOptions(_options, token, this.props)
      });
    }
  };
  _decorateByStep = isStepDown => {
    const fnPredicate = isStepDown ? delta => delta > 70 : delta => delta < 70,
      comp = this._decorateCurrentComp(),
      _optionsComp = this.optionsComp,
      deltaTop = _calcDeltaTop(comp, _optionsComp);
    if (fnPredicate(deltaTop)) {
      _optionsComp.scrollTop += deltaTop - 70;
    }
  };
  _stepDownOption = () => {
    const prevComp = this._getCurrentComp();
    if (prevComp) {
      this._undecorateCurrentComp(prevComp);
      this.indexActiveOption += 1;
      if (this.indexActiveOption >= this.state.options.length) {
        this.indexActiveOption = 0;
        this.optionsComp.scrollTop = 0;
      }
      this._decorateByStep(true);
    }
  };
  _stepUpOption = () => {
    const prevComp = this._getCurrentComp();
    if (prevComp) {
      this._undecorateCurrentComp(prevComp);
      this.indexActiveOption -= 1;
      if (this.indexActiveOption < 0) {
        this.indexActiveOption = this.state.options.length - 1;
        const bottomComp = this._getCurrentComp();
        this.optionsComp.scrollTop = bottomComp.offsetTop;
      }
      this._decorateByStep();
    }
  };
  _selectItem = item => {
    const {
      onSelect,
      isWithInput
    } = this.props;
    if (!item) {
      onSelect();
    } else if (item.value !== _InputSelectFn.NO_RESULT) {
      onSelect(item);
    } else if (!isWithInput) {
      onSelect();
    } else {
      const _value = item.inputValue.trim();
      if (!_value) {
        onSelect();
      } else {
        onSelect({
          caption: _value,
          value: _value,
          isInput: true
        });
      }
    }
  };
  _hInputKeyDown = event => {
    switch (event.keyCode) {
      // enter
      case 13:
        {
          const {
              propCaption
            } = this.props,
            item = this.state.options[this.indexActiveOption] || {},
            _value = item[propCaption];
          if (_value) {
            this.setState({
              value: _crValue(_value),
              isShowOption: false
            });
            this._selectItem(item);
          }
          break;
        }
      //escape, delete
      case 27:
      case 46:
        {
          event.preventDefault();
          if (this.state.isShowOption) {
            this.setState({
              isShowOption: false
            });
          } else {
            this.clearInput();
          }
          break;
        }
      case 40:
        //down
        if (!this.state.isShowOption) {
          this.setState({
            isShowOption: true
          });
        } else {
          event.preventDefault();
          this._stepDownOption();
        }
        break;
      case 38:
        //up
        if (this.state.isShowOption) {
          event.preventDefault();
          this._stepUpOption();
        }
        break;
      default:
        return;
    }
  };
  _hToggleOptions = () => {
    this.setState(prevState => ({
      ...prevState,
      isShowOption: !prevState.isShowOption
    }));
  };
  _hClickItem = (item, index, propCaption) => {
    this._undecorateCurrentComp();
    this.indexActiveOption = index;
    this.setState({
      value: _crValue(item[propCaption]),
      isShowOption: false
    });
    this._selectItem(item);
  };
  _refOptionsComp = c => this.optionsComp = c;
  _refOptionNode = (n, index) => this[`v${index}`] = n;
  _refIndexNode = n => this.indexNode = n;
  _hClear = () => {
    this.clearInput();
    this.focusInput();
  };
  _hFocus = () => {
    clearTimeout(this._blurId);
    this.setState({
      isFocused: true
    });
  };
  _hBlur = () => {
    this._blurId = setTimeout(() => this.setState({
      isFocused: false
    }), 800);
  };
  render() {
    const {
        style,
        width,
        propCaption,
        ItemOptionComp,
        optionsStyle,
        noFooterBts
      } = this.props,
      {
        isShowOption,
        isFocused,
        value,
        options,
        nAll
      } = this.state,
      _rootWidthStyle = (0, _InputSelectFn.crWidthStyle)(width, style),
      [afterInputEl, placeholder] = (0, _crAfterInputEl.default)(this.props, isFocused && value, isShowOption, this._hClear, this._hToggleOptions),
      _optionViewWidthStyle = (0, _InputSelectFn.crWidthStyle)(width, isShowOption ? _styleFn.S_BLOCK : _styleFn.S_NONE);
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: _CL.CL_ROOT,
      style: _rootWidthStyle,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: this._refInput,
        className: _CL.CL_INPUT,
        type: "text",
        name: "select"
        //autoComplete="off"
        ,
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: false,
        value: value,
        placeholder: placeholder,
        onChange: this._hInputChange,
        onKeyDown: this._hInputKeyDown,
        ...this._touchHandlers
      }), afterInputEl, /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        className: _CL.CL_INPUT_HR
      }), isShowOption && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsView.default, {
        widthStyle: _optionViewWidthStyle,
        optionsStyle: optionsStyle,
        propCaption: propCaption,
        ItemOptionComp: ItemOptionComp,
        noFooterBts: noFooterBts,
        options: options,
        nAll: nAll,
        refOptionsComp: this._refOptionsComp,
        refOptionNode: this._refOptionNode,
        refIndexNode: this._refIndexNode,
        indexActive: this.indexActiveOption,
        onClickItem: this._hClickItem,
        onClear: this._hClear
      })]
    });
  }
  clearInput = () => {
    this._undecorateCurrentComp();
    this._selectItem();
    this._setStateToInit(this.props);
  };
  focusInput() {
    (0, _uiApi.focusRefElement)(this._refInput);
  }
}
var _default = exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map