'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateField = require('../zhn/DateField');

var _DateField2 = _interopRequireDefault(_DateField);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from "prop-types";

var RowDate = function (_Component) {
  (0, _inherits3.default)(RowDate, _Component);

  function RowDate() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RowDate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RowDate.__proto__ || Object.getPrototypeOf(RowDate)).call.apply(_ref, [this].concat(args))), _this), _this.getValue = function () {
      return _this.inputDate.getValue();
    }, _this.isValid = function () {
      return _this.inputDate.isValid();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RowDate, [{
    key: 'render',

    /*
    static propTypes = {
       labelTitle : PropTypes.string,
       initValue : PropTypes.string,
       errorMsg : PropTypes.string,
       onTestDate : PropTypes.func
    }
    */

    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShowLabels = _props.isShowLabels,
          _props$labelTitle = _props.labelTitle,
          labelTitle = _props$labelTitle === undefined ? '' : _props$labelTitle,
          initValue = _props.initValue,
          errorMsg = _props.errorMsg,
          onTestDate = _props.onTestDate,
          _STYLE$crRowLabelStyl = _DialogStyles2.default.crRowLabelStyle(isShowLabels),
          rowStyle = _STYLE$crRowLabelStyl.rowStyle,
          labelStyle = _STYLE$crRowLabelStyl.labelStyle;

      return _react2.default.createElement(
        'div',
        { style: rowStyle },
        _react2.default.createElement(
          'span',
          { style: labelStyle },
          labelTitle
        ),
        _react2.default.createElement(_DateField2.default, {
          ref: function ref(c) {
            return _this2.inputDate = c;
          },
          initValue: initValue,
          errorMsg: errorMsg,
          onTest: onTestDate
        })
      );
    }
  }]);
  return RowDate;
}(_react.Component);

exports.default = RowDate;
//# sourceMappingURL=RowDate.js.map