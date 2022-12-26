"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _Button = _interopRequireDefault(require("./Button"));
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from "prop-types";

const CL = 'bt-item',
  S_ITEM = {
    display: 'inline-block',
    padding: '0 6px'
  },
  S_CIRCLE = {
    display: 'inline-block',
    width: 12,
    height: 12,
    marginLeft: 6,
    backgroundColor: 'grey',
    border: '1px solid grey',
    borderRadius: '50%'
  },
  DF_BORDER_COLOR = 'grey',
  DECOR_STYLE = {
    borderWidth: 2,
    fontWeight: 'bold'
  },
  _crStyles = (is, color) => {
    const [borderColor, _decorStyle] = is ? [color, DECOR_STYLE] : [DF_BORDER_COLOR];
    return [{
      color: color,
      borderColor,
      ..._decorStyle
    }, {
      backgroundColor: borderColor,
      borderColor
    }];
  };
const LegendItem = _ref => {
  let {
    item,
    onClickItem
  } = _ref;
  const {
      color,
      name,
      isVisible
    } = item != null ? item : {},
    [is, toggleIs] = (0, _useToggle.default)(isVisible),
    [btStyle, circleStyle] = _crStyles(is, color),
    _hClick = () => {
      onClickItem(item);
      toggleIs();
    };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
    className: CL,
    style: btStyle,
    onClick: _hClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: {
        ...S_CIRCLE,
        ...circleStyle
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_ITEM,
      children: name
    })]
  });
};

/*
LegendItem.propTypes = {
  item: PropTypes.shape({
    isVisible: PropTypes.bool,
    color: PropTypes.string,
    name: PropTypes.string
  })
  onClickItem: PropTypes.func
}
*/
var _default = LegendItem;
exports.default = _default;
//# sourceMappingURL=LegendItem.js.map