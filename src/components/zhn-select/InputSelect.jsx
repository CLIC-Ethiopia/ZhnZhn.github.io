//import PropTypes from 'prop-types'
import {
  Component,
  createRef,
  focusRefElement
} from '../uiApi';

import { HAS_TOUCH_EVENTS } from '../has';

import crAfterInputEl from './crAfterInputEl';
import {
  NO_RESULT,
  crWidthStyle
} from './InputSelectFn';
import ItemOptionDf from './ItemOptionDf';
import OptionsView from './OptionsView';
import OptionList from './OptionList';

import {
  CL_ROOT,
  CL_INPUT,
  CL_INPUT_HR,
  CL_OPTIONS_ROW,
  CL_OPTIONS_ROW_ACTIVE
} from './CL';

const INPUT_PREFIX = 'From input:';

const _crValue = str => str
  .replace(INPUT_PREFIX, '')
  .trim();

const _crInputItem = (
  inputValue, {
  propCaption,
  isWithInput,
  maxInput
}) => {
  const _inputValue = inputValue.slice(0, maxInput)
  , _caption = isWithInput
       ? `${INPUT_PREFIX} ${_inputValue}`
       : 'No results found';
  return {
    [propCaption]: _caption,
    value: NO_RESULT,
    inputValue: _inputValue
  };
};

const _crInitialStateFromProps = ({
  options
}) => ({
  value: '',
  isShowOption: false,
  initialOptions: options,
  options: options,
  isValidOptionListCache: false,
  isFocused: false
});

const _filterOptions = (
  options,
  value,
  pnCaption
) => {
   const _value = value.toLowerCase();
   return options.filter(item => item[pnCaption]
     .toLowerCase()
     .indexOf(_value) !== -1
   );
}

const _crFilterOptions = (
  options,
  token,
  props
) => {
  const { propCaption } = props;
  const _arr = _filterOptions(options, token, propCaption);
  if (_arr.length === 0){
    _arr.push(_crInputItem(token, props))
  }
  return _arr;
}

const FN_NOOP = () => {};

class InputSelect extends Component {
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
    ItemOptionComp: ItemOptionDf,
    options: [],
    optionName: '',
    isWithInput: false,
    maxInput: 10,
    regInput: /[A-Za-z0-9()^ ]/,
    //prefixInput: 'From Input:',
    onSelect: FN_NOOP,
    onLoadOption: FN_NOOP
  }

  constructor(props){
    super(props)
    this._touchHandlers = HAS_TOUCH_EVENTS
      ? {
          onFocus: this._hFocus,
          onBlur: this._hBlur
        }
      : void 0
    this._initProperties()
    this._refInput = createRef()

    this.state = _crInitialStateFromProps(props)
  }

  _initProperties = () => {
    this.optionListCache = null
    this.indexActiveOption = 0
  }

  static getDerivedStateFromProps(props, state){
     //Init state for new options from props
     if (props.options !== state.initialOptions) {
       return _crInitialStateFromProps(props);
     }
     return null;
  }

  componentDidUpdate(prevProps, prevState){
    const { initialOptions, isShowOption } = this.state;
    // Init from props for new options from props
    if (prevState.initialOptions !== initialOptions) {
      this._initProperties()
    }
    //Decorate Active Option and Make Visible
    if (isShowOption){
      const comp = this._decorateCurrentComp();
      if (!prevState.isShowOption) {
        this._makeVisible(comp)
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this._blurId)
  }

  _setStateToInit = (props) => {
    this._initProperties()
    this.setState(_crInitialStateFromProps(props))
  }

  _getCurrentComp = () => {
    return this[`v${this.indexActiveOption}`];
  }
  _decorateCurrentComp = () => {
    const comp = this._getCurrentComp();
    if (comp){
      comp.classList.add(CL_OPTIONS_ROW_ACTIVE);
      if (this.indexNode) {
        this.indexNode.textContent = this.indexActiveOption + 1
      }
    }
    return comp;
  }
  _undecorateCurrentComp = (comp) => {
     const _comp = comp || this._getCurrentComp();
     if (_comp){
      _comp.classList.remove(CL_OPTIONS_ROW_ACTIVE);
     }
  }

  _calcDeltaTop = (comp) => {
    return comp && this.optionsComp
      ? comp.offsetTop - this.optionsComp.scrollTop
      : void 0;
  }

  _makeVisible = comp => {
    if (comp){
      if (this.indexActiveOption === 0){
        return;
      }
      const deltaTop = this._calcDeltaTop(comp);
      if (deltaTop > 70){
        this.optionsComp.scrollTop += deltaTop - 70;
      }
      if (deltaTop < 0){
        this.optionsComp.scrollTop = 0;
      }
    }
  }

  _hInputChange = (event) => {
    const { isWithInput, regInput } = this.props
    , token = event.target.value
    , tokenLn = token.length
    , { value, options, initialOptions } = this.state
    , valueLn = value.length;

    if ( isWithInput
         && tokenLn>0
         && !regInput.test(token[tokenLn-1])) {
      return;
    }

    if (tokenLn !== valueLn){
      this._undecorateCurrentComp()
      this.indexActiveOption = 0;
      const _options = tokenLn > valueLn
        ? options : initialOptions;
      this.setState({
        value: token,
        isShowOption: true,
        isValidOptionListCache: false,
        options: _crFilterOptions(_options, token, this.props)
      })
    }
  }

  _decorateByStep = (isStepDown) => {
    const fnPredicate = isStepDown
      ? (delta) => delta > 70
      : (delta) => delta < 70
    , comp = this._decorateCurrentComp()
    , deltaTop = this._calcDeltaTop(comp);
    if (fnPredicate(deltaTop)){
       this.optionsComp.scrollTop += deltaTop - 70;
    }
  }

  _stepDownOption = () => {
    const prevComp = this._getCurrentComp();

    if (prevComp){
       this._undecorateCurrentComp(prevComp);

       this.indexActiveOption += 1;
       if (this.indexActiveOption>=this.state.options.length){
          this.indexActiveOption = 0;
          this.optionsComp.scrollTop = 0;
       }

       this._decorateByStep(true)
    }
  }

  _stepUpOption = () => {
    const prevComp = this._getCurrentComp();
    if (prevComp){
      this._undecorateCurrentComp(prevComp);

      this.indexActiveOption -= 1;
      if (this.indexActiveOption < 0){
        this.indexActiveOption = this.state.options.length - 1;
        const bottomComp = this._getCurrentComp()
        this.optionsComp.scrollTop = bottomComp.offsetTop
      }

      this._decorateByStep()
    }
  }

  _selectItem = item => {
    const { onSelect, isWithInput } = this.props;
    if (!item) {
      onSelect()
    } else if (item.value !== NO_RESULT) {
      onSelect(item)
    } else if (!isWithInput) {
      onSelect()
    } else {
      const _value = item.inputValue.trim();
      if (!_value) {
        onSelect()
      } else {
        onSelect({
         caption: _value,
         value: _value,
         isInput: true
       })
      }
    }
  }

  _hInputKeyDown = (event) => {
    switch(event.keyCode){
      // enter
      case 13:{
         const { propCaption } = this.props
         , item = this.state.options[this.indexActiveOption] || {}
         , _value = item[propCaption];

         if (_value){
           this.setState({
             value: _crValue(_value),
             isShowOption: false,
             isValidOptionListCache: true
           });
           this._selectItem(item)
         }
      break; }
      //escape, delete
      case 27: case 46: {
        event.preventDefault()
        if (this.state.isShowOption){
          this.setState({ isShowOption: false });
        } else {
          this.clearInput()
        }
      break;}
      case 40: //down
        if (!this.state.isShowOption){
          this.setState({ isShowOption: true })
        } else {
          event.preventDefault()
          this._stepDownOption()
        }
        break;
      case 38: //up
        if (this.state.isShowOption){
          event.preventDefault()
          this._stepUpOption()
        }
        break;
      default: return;
    }
  }

  _hToggleOptions = () => {
    this.setState(prevState => ({
      ...prevState,
      isShowOption: !prevState.isShowOption
    }))
  }

  _hClickItem = (item, index, propCaption) => {
    this._undecorateCurrentComp()
    this.indexActiveOption = index;
    this.setState({
      value: _crValue(item[propCaption]),
      isShowOption: false
    });
    this._selectItem(item)
  }

  _refOptionsComp = c => this.optionsComp = c
  _refOptionNode = (n, index) => this[`v${index}`] = n
  _refIndexNode = n => this.indexNode = n

  _crOptionListWithCache = () => {
    const {
      propCaption,
      ItemOptionComp
    } = this.props
    , {
      options,
      isValidOptionListCache
    } = this.state;

    if (options && !isValidOptionListCache){
      this.optionListCache = (
        <OptionList
          options={options}
          refOptionNode={this._refOptionNode}
          className={CL_OPTIONS_ROW}
          selectedIndex={this.indexActiveOption}
          propCaption={propCaption}
          onClick={this._hClickItem}
          ItemComp={ItemOptionComp}
        />
      )
    }
    return this.optionListCache;
  }

  _hClear = () => {
    this.clearInput()
    this.focusInput()
  }

  _hFocus = () => {
    clearTimeout(this._blurId)
    this.setState({ isFocused: true })
  }
  _hBlur = () => {
    this._blurId = setTimeout(
      () => this.setState({ isFocused: false }),
      800
    )
  }

  render(){
    const {
      style,
      width,

      optionsStyle,
      noFooterBts
    } = this.props
    , {
      isShowOption,
      isFocused,
      value,

      options,
      initialOptions
    } = this.state
    , _rootWidthStyle = crWidthStyle(width, style)
    , [
      afterInputEl,
      placeholder
    ] = crAfterInputEl(
      this.props,

      isFocused && value,
      isShowOption,

      this._hClear,
      this._hToggleOptions
    );

    return (
      <div
        className={CL_ROOT}
        style={_rootWidthStyle}
      >
        <input
           ref={this._refInput}
           className={CL_INPUT}
           type="text"
           name="select"
           //autoComplete="off"
           autoCorrect="off"
           autoCapitalize="off"
           spellCheck={false}
           value={value}
           placeholder={placeholder}
           onChange={this._hInputChange}
           onKeyDown={this._hInputKeyDown}
           {...this._touchHandlers}
        />
        {afterInputEl}
        <hr className={CL_INPUT_HR} />
        {isShowOption && <OptionsView
          optionsStyle={optionsStyle}
          width={width}
          noFooterBts={noFooterBts}

          isShowOption={isShowOption}
          options={options}
          initialOptions={initialOptions}

          optionListEl={this._crOptionListWithCache()}

          refOptionsComp={this._refOptionsComp}
          refIndexNode={this._refIndexNode}
          indexActive={this.indexActiveOption}

          onClear={this._hClear}
        />}
      </div>
    )
  }

  clearInput = () => {
    this._undecorateCurrentComp()
    this._selectItem()
    this._setStateToInit(this.props)
  }

  focusInput(){
    focusRefElement(this._refInput)
  }

}

export default InputSelect
