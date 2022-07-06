"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _DateUtils = require("../../utils/DateUtils");

var _formatNumber = _interopRequireDefault(require("../../utils/formatNumber"));

var _has = _interopRequireDefault(require("../has"));

var _ChartActions = require("../../flux/actions/ChartActions");

var _LoadType = require("../../constants/LoadType");

var _BrowserType = require("../../constants/BrowserType");

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _DialogCell = _interopRequireDefault(require("../dialogs/DialogCell"));

var _ValidationMessages = _interopRequireDefault(require("../zhn/ValidationMessages"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from "prop-types";
const S_DIALOG = {
  width: 365
},
      S_DIALOG_SHORT = {
  width: 265
},
      S_ITEM_TEXT = {
  display: 'inline-block',
  maxWidth: 250,
  height: 32,
  verticalAlign: 'middle'
};

const _crValue = function (x, y) {
  if (x === void 0) {
    x = '';
  }

  if (y === void 0) {
    y = '';
  }

  return ((0, _formatNumber.default)(y) + " " + (0, _DateUtils.mlsToDmy)(x)).trim();
};

class LoadItemDialog extends _react.Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      fromDate: PropTypes.string,
      initToDate: PropTypes.string,
      onTestDate: PropTypes.func
    }),
    store: PropTypes.object,
    onClose: PropTypes.func
  }
  */
  constructor(props) {
    super(props);

    this._toggleIsShowLabels = () => {
      this.setState(prevState => ({ ...prevState,
        isShowLabels: !prevState.isShowLabels
      }));
    };

    this._toggleIsValue = () => {
      this.setState(prevState => ({ ...prevState,
        isValue: !prevState.isValue
      }));
    };

    this._toggleIsShowDate = () => {
      this.setState(prevState => ({ ...prevState,
        isShowDate: !prevState.isShowDate
      }));
    };

    this._handleLoad = () => {
      const validationMessages = this._createValidationMessages();

      if (validationMessages.isValid) {
        const {
          data,
          onClose
        } = this.props,
              {
          id,
          title,
          subtitle,
          caption,
          columnName,
          dataColumn,
          seriaColumnNames,
          itemConf = {}
          /*
          _itemKey, url, loadId,
          optionFetch, items,
          itemCaption, seriaType,
          dataSource, dfId, timeId
          */

        } = data,
              {
          fromDate,
          toDate
        } = this.datesFragment.getValues(),
              option = {
          id,
          title,
          subtitle,
          value: caption,
          item: caption,
          fromDate,
          toDate,
          columnName,
          dataColumn,
          seriaColumnNames,
          loadId: itemConf.loadId || _LoadType.LT_WL,
          ...itemConf
        };

        _ChartActions.ChartActions[_ChartActions.CHAT_LOAD]({
          chartType: _LoadType.LT_WATCH_LIST,
          browserType: _BrowserType.BT_WATCH_LIST
        }, option);

        onClose();
      }

      if (validationMessages.isValid) {
        if (this.state.validationMessages.length > 0) {
          this.setState({
            validationMessages
          });
        }
      } else {
        this.setState({
          validationMessages
        });
      }
    };

    this._createValidationMessages = () => {
      let msg = [];
      const {
        isValid,
        datesMsg
      } = this.datesFragment.getValidation();

      if (!isValid) {
        msg = msg.concat(datesMsg);
      }

      msg.isValid = msg.length === 0 ? true : false;
      return msg;
    };

    this._handleClose = () => {
      this.props.onClose();
      this.setState({
        validationMessages: []
      });
    };

    this._refDates = c => this.datesFragment = c;

    const {
      fromDate: _fromDate,
      initToDate,
      onTestDate,
      itemConf: _itemConf = {}
    } = props.data,
          isValue = !!_itemConf.x;
    this.toolbarButtons = [{
      caption: 'L',
      title: 'Click to toggle input labels',
      onClick: this._toggleIsShowLabels
    }, {
      caption: 'V',
      title: 'Click to toggle row value',
      onClick: this._toggleIsValue
    }, {
      caption: 'D',
      title: 'Click to toggle date input',
      onClick: this._toggleIsShowDate
    }];
    this._commandButtons = [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Button.Load, {
      onClick: this._handleLoad
    }, "load")];
    this.state = {
      isToolbar: true,
      isShowLabels: _has.default.wideWidth(),
      validationMessages: [],
      isShowDate: false,
      isValue,
      initFromDate: _fromDate || (0, _DateUtils.getFromDate)(2),
      initToDate: initToDate || (0, _DateUtils.getToDate)(),
      onTestDate: onTestDate || _DateUtils.isYmd
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }

    return true;
  }

  render() {
    const {
      isShow,
      data
    } = this.props,
          {
      caption,
      itemConf
    } = data,
          {
      dataSource,
      x,
      y
    } = itemConf || {},
          {
      isShowLabels,
      isShowDate,
      isValue,
      initFromDate,
      initToDate,
      onTestDate,
      validationMessages
    } = this.state,
          _style = isShowLabels ? S_DIALOG : S_DIALOG_SHORT,
          _value = _crValue(x, y);

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ModalDialog.default, {
      style: _style,
      isShow: isShow,
      caption: "Load Item",
      commandButtons: this._commandButtons,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Toolbar, {
        isShow: true,
        buttons: this.toolbarButtons
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Row.Text, {
        isShowLabels: isShowLabels,
        styleText: S_ITEM_TEXT,
        caption: "Item:",
        text: caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.ShowHide, {
        isShow: isValue,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Row.Text, {
          isShowLabels: isShowLabels,
          styleText: S_ITEM_TEXT,
          caption: "Value:",
          text: _value
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.ShowHide, {
        isShow: isShowDate,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.DatesFragment, {
          ref: this._refDates,
          isShowLabels: isShowLabels,
          initFromDate: initFromDate,
          initToDate: initToDate,
          onTestDate: onTestDate
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.Row.Text, {
        isShowLabels: isShowLabels,
        styleText: S_ITEM_TEXT,
        caption: "Source:",
        text: dataSource
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ValidationMessages.default, {
        validationMessages: validationMessages
      })]
    });
  }

}

LoadItemDialog.defaultProps = {
  data: {}
};
var _default = LoadItemDialog;
exports.default = _default;
//# sourceMappingURL=LoadItemDialog.js.map