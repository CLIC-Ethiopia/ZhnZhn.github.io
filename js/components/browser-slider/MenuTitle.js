"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _isKeyEnter = _interopRequireDefault(require("../zhn/isKeyEnter"));

var _Style = require("./Style");

var _jsxRuntime = require("react/jsx-runtime");

const CL_MENU_ITEM = 'menu-item';

const MenuTitle = ({
  innerRef,
  title,
  onClick
}) => {
  const _hKeyDown = evt => {
    if ((0, _isKeyEnter.default)(evt)) {
      evt.preventDefault();
      onClick();
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: innerRef,
    className: CL_MENU_ITEM,
    style: _Style.S_TITLE,
    role: "menuitem",
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [title, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: _Style.S_TITLE_ARROW,
      children: '<'
    })]
  });
};
/*
MenuTitle.propTypes = {
  innerRef: PropTypes.shape({
    current: PropTypes.object
  })
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/


var _default = MenuTitle;
exports.default = _default;
//# sourceMappingURL=MenuTitle.js.map