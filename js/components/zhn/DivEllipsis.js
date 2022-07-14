"use strict";

exports.__esModule = true;
exports.default = void 0;

var _GeneralStyles = require("../styles/GeneralStyles");

var _jsxRuntime = require("react/jsx-runtime");

const DivEllipsis = _ref => {
  let {
    style,
    text,
    title
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: { ...style,
      ..._GeneralStyles.S_ELLIPSIS
    },
    title: title,
    children: text
  });
};

var _default = DivEllipsis;
exports.default = _default;
//# sourceMappingURL=DivEllipsis.js.map