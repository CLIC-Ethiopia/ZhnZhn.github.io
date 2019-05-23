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

var _class, _temp, _initialiseProps;
//import PropTypes from 'prop-types'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

var _safeFn = require('../../utils/safeFn');

var _safeFn2 = _interopRequireDefault(_safeFn);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _DialogCell = require('../dialogs/DialogCell');

var _DialogCell2 = _interopRequireDefault(_DialogCell);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RowButtons = require('./RowButtons');

var _RowButtons2 = _interopRequireDefault(_RowButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UI_THEME_OPTIONS = [{ caption: 'Dark', value: 'GREY' }, { caption: 'Light', value: 'WHITE' }, { caption: 'Sand', value: 'SAND' }];

var SET = {
  PROXY: 'setProxy'
};

var MODE_ADMIN = 'isAdminMode';
var MODE_DELTA = 'isDrawDeltaExtrems';
var MODE_ZOOM = 'isNotZoomToMinMax';

var _crHaloOption = function _crHaloOption() {
  var is = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: is
          }
        }
      }
    }
  };
};

var PaneOptions = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(PaneOptions, _Component);

  /*
  static propTypes = {
    titleStyle: PropTypes.object,
    btStyle: PropTypes.object,
    data: PropTypes.object,
    onClose: PropTypes.func
  }
  */

  function PaneOptions(props) {
    (0, _classCallCheck3.default)(this, PaneOptions);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PaneOptions.__proto__ || Object.getPrototypeOf(PaneOptions)).call(this, props));

    _initialiseProps.call(_this);

    var data = props.data;


    _this._setProxy = (0, _safeFn2.default)(data, SET.PROXY);
    return _this;
  }

  (0, _createClass3.default)(PaneOptions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          titleStyle = _props.titleStyle,
          btStyle = _props.btStyle,
          data = _props.data,
          onClose = _props.onClose,
          _proxy = data.getProxy(),
          _isAdminMode = (0, _safeFn2.default)(data, MODE_ADMIN, false)(),
          _isDrawDeltaExtrems = (0, _safeFn2.default)(data, MODE_DELTA, false)(),
          _isNotZoomToMinMax = (0, _safeFn2.default)(data, MODE_ZOOM, false)();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DialogCell2.default.RowPattern, {
          ref: this._refProxy,
          captionStyle: titleStyle,
          caption: 'Https Proxy:',
          placeholder: 'Https Proxy for CORS',
          initValue: _proxy,
          onEnter: this._setProxy
        }),
        _react2.default.createElement(_DialogCell2.default.RowInputSelect, {
          caption: 'UI Theme',
          captionStyle: titleStyle,
          options: UI_THEME_OPTIONS,
          onSelect: this._hSelectTheme
        }),
        _react2.default.createElement(_DialogCell2.default.RowCheckBox, {
          initValue: _isAdminMode,
          caption: 'View in Admin Mode',
          onCheck: this._hMode.bind(null, MODE_ADMIN, true),
          onUnCheck: this._hMode.bind(null, MODE_ADMIN, false)
        }),
        _react2.default.createElement(_DialogCell2.default.RowCheckBox, {
          initValue: _isDrawDeltaExtrems,
          caption: 'Draw Deltas to Min-Max',
          onCheck: this._hMode.bind(null, MODE_DELTA, true),
          onUnCheck: this._hMode.bind(null, MODE_DELTA, false)
        }),
        _react2.default.createElement(_DialogCell2.default.RowCheckBox, {
          initValue: _isNotZoomToMinMax,
          caption: 'Not Zoom to Min-Max',
          onCheck: this._hMode.bind(null, MODE_ZOOM, true),
          onUnCheck: this._hMode.bind(null, MODE_ZOOM, false)
        }),
        _react2.default.createElement(_DialogCell2.default.RowCheckBox, {
          initValue: false,
          caption: 'Without Points Halo',
          onCheck: this._setHalo.bind(null, false),
          onUnCheck: this._setHalo.bind(null, true)
        }),
        _react2.default.createElement(
          _RowButtons2.default,
          { btStyle: btStyle, onClose: onClose },
          _react2.default.createElement(_FlatButton2.default, {
            caption: 'SET PROXY',
            isPrimary: true,
            onClick: this._hSetProxy
          })
        )
      );
    }
  }]);
  return PaneOptions;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._hMode = function (fnName, mode) {
    var data = _this2.props.data,
        fnMode = (0, _safeFn2.default)(data, fnName);

    fnMode(mode);
  };

  this._hSetProxy = function () {
    _this2._setProxy(_this2.proxyComp.getValue());
  };

  this._hSelectTheme = function (item) {
    var _props2 = _this2.props,
        theme = _props2.theme,
        onChangeTheme = _props2.onChangeTheme;

    if (item && theme.getThemeName() !== item.value) {
      theme.setThemeName(item.value);
      onChangeTheme(item.value);
    }
  };

  this._setHalo = function (is) {
    _highcharts2.default.setOptions(_crHaloOption(is));
  };

  this._refProxy = function (n) {
    return _this2.proxyComp = n;
  };
}, _temp);
exports.default = (0, _withTheme2.default)(PaneOptions);
//# sourceMappingURL=PaneOptions.js.map