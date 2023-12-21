"use strict";

exports.__esModule = true;
exports.default = void 0;
var _styleFn = require("../styleFn");
var _jsxRuntime = require("react/jsx-runtime");
const CL_BROWSER = (0, _styleFn.crBsContainerCn)('browser-container');
const Browser = _ref => {
  let {
    isShow,
    style,
    onKeyDown,
    children
  } = _ref;
  const [_cn, _style] = (0, _styleFn.crShowHide)(isShow, CL_BROWSER);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: {
      ...style,
      ..._style
    },
    role: "presentation",
    onKeyDown: onKeyDown,
    children: children
  });
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map