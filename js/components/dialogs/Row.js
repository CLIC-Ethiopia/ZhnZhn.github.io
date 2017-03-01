'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;

var Row = function Row(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: Object.assign({}, styles.rowDiv, style) },
    children
  );
};

exports.default = Row;
//# sourceMappingURL=Row.js.map