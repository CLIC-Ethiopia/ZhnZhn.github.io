'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _ButtonCircle = require('./ButtonCircle2');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TH_ID = 'ELEMENT';
var CL = "menu__badge";

var S = {
  /*
  BT: {
    backgroundColor: '#1b2836'
  },
  */
  BADGE_OPENED: {
    color: 'rgba(164, 135, 212, 1)'
  }
};

var MenuBadge = function (_Component) {
  (0, _inherits3.default)(MenuBadge, _Component);

  function MenuBadge() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuBadge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuBadge.__proto__ || Object.getPrototypeOf(MenuBadge)).call.apply(_ref, [this].concat(args))), _this), _this._hClick = function (event) {
      event.stopPropagation();
      if (!_this.props.isOpen) {
        _this.props.onClick();
      } else {
        _this.props.onBadgeClose();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuBadge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          counter = _props.counter,
          isOpen = _props.isOpen,
          TS = theme.getStyle(TH_ID),
          _btStyle = isOpen ? S.BADGE_OPENED : null;

      return _react2.default.createElement(_ButtonCircle2.default, {
        className: CL,
        style: (0, _extends3.default)({}, S.BT, _btStyle, TS.BG),
        caption: counter,
        onClick: this._hClick
      });
    }
  }]);
  return MenuBadge;
}(_react.Component);

exports.default = (0, _withTheme2.default)(MenuBadge);
//# sourceMappingURL=MenuBadge.js.map