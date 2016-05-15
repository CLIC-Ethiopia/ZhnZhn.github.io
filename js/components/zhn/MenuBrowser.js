'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Browser = require('./Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _CaptionRow = require('../CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _MenuPart = require('./MenuPart');

var _MenuPart2 = _interopRequireDefault(_MenuPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuBrowser = _react2.default.createClass({
  displayName: 'MenuBrowser',

  getInitialState: function getInitialState() {
    var _props = this.props;
    var store = _props.store;
    var browserType = _props.browserType;
    var isShow = _props.isShow;

    return {
      isShow: isShow ? true : false,
      menuItems: store.getBrowserMenu(browserType)
    };
  },

  componentWillMount: function componentWillMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },

  _onStore: function _onStore(actionType, data) {
    var _props2 = this.props;
    var browserType = _props2.browserType;
    var store = _props2.store;
    var showAction = _props2.showAction;
    var updateAction = _props2.updateAction;


    if (actionType === showAction && data === browserType) {
      this._handlerShow();
    } else if (actionType === updateAction && data === browserType) {
      this.setState({ menuItems: store.getBrowserMenu(browserType) });
    }
  },

  _handlerHide: function _handlerHide() {
    this.setState({ isShow: false });
  },
  _handlerShow: function _handlerShow() {
    this.setState({ isShow: true });
  },

  _renderMenuParts: function _renderMenuParts(menuItems) {
    return menuItems.map(function (menuPart, index) {
      return _react2.default.createElement(_MenuPart2.default, _extends({ key: index }, menuPart));
    });
  },


  render: function render() {
    var _props3 = this.props;
    var caption = _props3.caption;
    var children = _props3.children;
    var _state = this.state;
    var menuItems = _state.menuItems;
    var isShow = _state.isShow;

    return _react2.default.createElement(
      _Browser2.default,
      { isShow: isShow },
      _react2.default.createElement(_CaptionRow2.default, {
        caption: caption,
        onClose: this._handlerHide
      }),
      this._renderMenuParts(menuItems),
      children
    );
  }
});

exports.default = MenuBrowser;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\zhn\MenuBrowser.js.map