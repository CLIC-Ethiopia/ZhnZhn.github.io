'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerStyles = require('../styles/ContainerStyles');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _ContainerStyles2.default;

var Browser = _react2.default.createClass({
  displayName: 'Browser',
  render: function render() {
    var _props = this.props;
    var isShow = _props.isShow;
    var children = _props.children;
    var styleOpen = isShow ? { display: 'block' } : { display: 'none' };
    var classOpen = isShow ? "show-popup" : null;
    return _react2.default.createElement(
      'div',
      { className: classOpen, style: Object.assign({}, styles.browserRootDiv, styleOpen) },
      children
    );
  }
});

exports.default = Browser;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\zhn\Browser.js.map