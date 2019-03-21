import React, { Component } from 'react';
//import PropTypes from "prop-types";

import STYLE from './InputStyle';

const _isFn = fn => typeof(fn) === 'function';

class DateField extends Component {
  /*
   static propTypes = {
     rootStyle: PropTypes.object,
     inputStyle: PropTypes.object,
     initValue: PropTypes.string,
     placeholder: PropTypes.string,
     errorMsg: PropTypes.string,
     nForecastDate: PropTypes.number,
     onTest: PropTypes.func,
     onEnter: PropTypes.func
   }
   */
   static defaultProps = {
      onTest: () => { return true; }
   }

   constructor(props){
     super(props)
     this.isOnEnter = _isFn(props.onEnter)
     this.state = {
       value: props.initValue || '',
       errorInput: undefined,
       isValid: true
     };
   }

  _handleChangeValue = (event) => {
    const { onTest, nForecastDate } = this.props
         , value = event.target.value;
    if (!onTest(value, nForecastDate)){
      this.setState({
         value : value,
         isValid : false
      })
    } else {
      this.setState({
         value : value,
         isValid : true,
         errorInput : undefined
      })
    }
  }

  _handleBlurValue = () => {
    const { onTest, nForecastDate, errorMsg } = this.props
        , { value } = this.state;
    if (!onTest(value, nForecastDate)){
      this.setState({
        errorInput : errorMsg,
        isValid : false
      })
    } else {
      this.setState({
        errorInput : undefined,
        isValid : true
      })
    }
  }

  _handleKeyDown = (event) => {
    switch(event.keyCode){
      case 13:
        if (this.isOnEnter) {
          this.props.onEnter(event.target.value)
        }
        break;
      case 27: case 46:
        event.preventDefault()
        this.setState({
          value: this.props.initValue || '',
          errorInput: undefined,
          isValid: true
        })
        break;
      default: return;
    }
  }


  render(){
    const {
            rootStyle, inputStyle,
            placeholder='YYYY-MM-DD'
          } = this.props
        , { value, errorInput, isValid } = this.state
        , _styleHr = isValid
            ? STYLE.HR_VALID
            : STYLE.HR_NOT_VALID;
    return (
      <div style={{...STYLE.ROOT, ...rootStyle}}>
        <input
           style={{...STYLE.INPUT, ...inputStyle}}
           name="text-date"
           //autoComplete="new-text-date"
           autoComplete="off"
           autoCorrect="off"
           autoCapitalize="off"
           spellCheck={false}
           ref={input => this.inputDate = input }
           type="text"
           placeholder={placeholder}
           value={value}
           onChange={this._handleChangeValue}
           onBlur={this._handleBlurValue}
           onKeyDown={this._handleKeyDown}
        >
        </input>
        <hr style={Object.assign({}, STYLE.HR, _styleHr)}></hr>
        <div style={STYLE.ERR_MSG}>
          {errorInput}
        </div>
      </div>
    );
  }

  getValue = () => {
    return this.state.value;
  }
  isValid = () => {
    return this.state.isValid;
  }
  focusInput = () => {
    this.inputDate.focus();
  }
}

export default DateField
