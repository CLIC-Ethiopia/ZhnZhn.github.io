'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  LI: {
    float: 'left',
    display: 'inline-block',
    backgroundColor: '#1b2836',
    color: 'gray',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '6px',
    paddingBottom: '6px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    cursor: 'pointer',

    fontWeight: 'bold',
    border: '2px solid gray',
    borderBottom: 'none'

  },
  SELECTED: {
    borderColor: 'rgba(164, 135, 212, 1)',
    color: 'rgba(164, 135, 212, 1)'
  }
};

var Tab = function Tab(_ref) {
  var title = _ref.title,
      isSelected = _ref.isSelected,
      onClick = _ref.onClick;

  var _selectedStyle = isSelected ? S.SELECTED : null;
  return _react2.default.createElement(
    'li',
    {
      style: Object.assign({}, S.LI, _selectedStyle),
      onClick: onClick
    },
    _react2.default.createElement(
      'span',
      null,
      title
    )
  );
};

Tab.propTypes = process.env.NODE_ENV !== "production" ? {
  title: _propTypes2.default.string,
  isSelected: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
} : {};

exports.default = Tab;
//# sourceMappingURL=Tab.js.map