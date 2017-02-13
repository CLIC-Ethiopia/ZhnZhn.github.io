import React, { Component, PropTypes } from 'react';

import ZhDateField from '../ZhDateField';
import DialogStyles from '../styles/DialogStyles';

const Styles = DialogStyles;

class RowDate extends Component {
  static propTypes = {
     labelTitle : PropTypes.string,
     initValue : PropTypes.string,
     errorMsg : PropTypes.string,
     onTestDate : PropTypes.func
  }

  render(){
    const { labelTitle='', initValue, errorMsg, onTestDate } = this.props;
    return (
      <div style={Styles.rowDiv}>
        <span style={Styles.labelSpan}>
           {labelTitle}
        </span>
        <ZhDateField
           ref={c => this.inputDate = c}
           initValue={initValue}
           errorMsg={errorMsg}
           onTest={onTestDate}
        />
     </div>
    );
  }

  getValue = () => {
    return this.inputDate.getValue();
  }
  isValid = () => {
    return this.inputDate.isValid();
  }
}


export default RowDate
