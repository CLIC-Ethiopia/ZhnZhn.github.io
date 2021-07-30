"use strict";

exports.__esModule = true;
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

const S = {
  KEY: {
    textDecoration: 'underline'
  }
};

const _crAccessKeyIndex = (accessKey, caption) => accessKey ? caption.toLowerCase().indexOf(accessKey) : -1;

const _crCaption = (accessKey, caption) => {
  const index = _crAccessKeyIndex(accessKey, caption);

  if (index === -1) {
    return caption;
  }

  const _before = caption.substring(0, index),
        _key = caption.substring(index, index + 1),
        _after = caption.substring(index + 1);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: _before
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.KEY,
      children: _key
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: _after
    })]
  });
};

const CaptionInput = ({
  className,
  caption,
  accessKey,
  children
}) => {
  if (!caption) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: className,
    children: [_crCaption(accessKey, caption), children]
  });
};

var _default = CaptionInput;
exports.default = _default;
//# sourceMappingURL=CaptionInput.js.map