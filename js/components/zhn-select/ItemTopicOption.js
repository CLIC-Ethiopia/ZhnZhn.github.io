"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _GeneralStyles = require("../styles/GeneralStyles");

var _ItemOption = _interopRequireDefault(require("./ItemOption"));

var _jsxRuntime = require("react/jsx-runtime");

const S_TOPIC = {
  color: '#a487d4',
  width: '100%',
  ..._GeneralStyles.S_ELLIPSIS
};

const ItemTopicOption = props => {
  const {
    item
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemOption.default, { ...props
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_TOPIC,
      children: item.topic
    })]
  });
};

var _default = ItemTopicOption;
exports.default = _default;
//# sourceMappingURL=ItemTopicOption.js.map