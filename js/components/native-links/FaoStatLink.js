"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _Link = _interopRequireDefault(require("./Link"));

var C = {
  BASE: 'http://www.fao.org/faostat/en/#data/'
};

var FaoStatLink = function FaoStatLink(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link["default"], {
    isHttp: true,
    href: item ? C.BASE + item : C.BASE,
    caption: "FAOSTAT Link"
  });
};

var _default = FaoStatLink;
exports["default"] = _default;
//# sourceMappingURL=FaoStatLink.js.map