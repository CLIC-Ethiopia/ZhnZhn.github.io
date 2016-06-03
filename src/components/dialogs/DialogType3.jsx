import React from 'react';

import WithValidation from './WithValidation';
import WithLoadOptions from './WithLoadOptions';

import ZhDialog from '../ZhDialog';
import ZhSelect from '../ZhSelect';
import ToolBarButton from '../ToolBarButton';
import DatesFragment from '../DatesFragment';
import ValidationMessagesFragment from '../ValidationMessagesFragment';

import DialogStyles from '../styles/DialogStyles'
const styles = DialogStyles;


const DialogType3 = React.createClass({
  ...WithValidation,
  ...WithLoadOptions,

  displayName : 'DialogType3',

  getInitialState(){
    this.stock = null;
    this.OPTIONS_STATE_PROP = 'optionStocks';
    const _isLoading = (this.props.optionURI) ? true : false
        , _optionStocks = (this.props.optionURI) ? [] : this.props.optionStocks;
    return {
      isLoading : _isLoading,
      isLoadingFailed : false,
      optionStocks : _optionStocks,
      validationMessages: [],
    }
  },

  componentDidMount(){
    if (this.props.optionURI){
       this._handlerWithLoadOptions(this.OPTIONS_STATE_PROP);
    }
  },

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
       if (this.props.isShow === nextProps.isShow){
          return false;
       }
    }
    return true;
  },

  componentDidUpdate(prevProps, prevState){
    if (prevProps !== this.props){
       if (this.state.isLoadingFailed && this.props.optionURI && this.props.isShow){
         this._handlerWithLoadOptions(this.OPTIONS_STATE_PROP);
       }
    }
  },

  componetWillUnmount(){
    this._unmountWithLoadOptions();
  },


  _handlerLoadOptions(){
     if (this.props.optionURI){
       this._handlerWithLoadOptions(this.OPTIONS_STATE_PROP);
     }
  },

  _handlerSelectStock(stock){
    this.stock = stock
  },

  _handlerLoad(event){
     event.target.focus();
     const validationMessages = this._getValidationMessages();
     if (validationMessages.isValid){
       const {fromDate, toDate} = this.datesFragment.getValues()
           , {dataColumn} = this.props;
       const option = {
         value : this.stock.value,
         stock: this.stock,
         fromDate: fromDate,
         toDate: toDate,
         dataColumn : dataColumn
       }
       this.props.onLoad(option);
     }
     this._updateValidationMessages(validationMessages);
  },

  _getValidationMessages(){
    let msg = [];
    if (!this.stock) { msg.push(this.props.msgOnNotSelected('Stock'));}
    const {isValid, datesMsg} = this.datesFragment.getValidation();
    if (!isValid) { msg = msg.concat(datesMsg); }
    msg.isValid = (msg.length === 0) ? true : false;
    return msg;
  },

  render(){
    const {
            caption, isShow, onShow, onClose,
            initFromDate, initToDate, msgOnNotValidFormat, onTestDate
          } = this.props
        , {isLoading, isLoadingFailed, optionStocks, validationMessages} = this.state
        , _commandButtons = [
       <ToolBarButton
          key="a"
          type="TypeC"
          caption="Load"
          onClick={this._handlerLoad}
       />
    ];

    return (
       <ZhDialog
           caption={caption}
           isShow={isShow}
           commandButtons={_commandButtons}
           onShowChart={onShow}
           onClose={this._handlerClose}
       >
         <div style={styles.rowDiv} key="1">
           <span style={styles.labelSpan}>
             Stock:
           </span>
           <ZhSelect
             width="250"
             options={optionStocks}
             optionNames={'Stockes'}
             isLoading={isLoading}
             isLoadingFailed={isLoadingFailed}
             onLoadOption={this._handlerLoadOptions}
             onSelect={this._handlerSelectStock}
           />
        </div>
        <DatesFragment
            key="2"
            ref={c => this.datesFragment = c}
            initFromDate={initFromDate}
            initToDate={initToDate}
            msgOnNotValidFormat={msgOnNotValidFormat}
            onTestDate={onTestDate}
        />
        <ValidationMessagesFragment
            key="3"
            validationMessages={validationMessages}
        />
      </ZhDialog>
    );
  }
});

export default DialogType3;
