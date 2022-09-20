"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _Svg = _interopRequireDefault(require("../zhn/svg/Svg100"));

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

const CL_NDL = "logo-ndl",
      NDL = "Nasdaq Data Link",
      TITLE = NDL + " Semi Logo",
      HREF = "https://data.nasdaq.com";

const LogoNasdaqDataLink = _ref => {
  let {
    className
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
    className: (0, _crCn.default)(className, CL_NDL),
    title: TITLE,
    href: HREF,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Svg.default, {
      w: "215",
      h: "36",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
        children: TITLE
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          fill: "#0090ba",
          d: "M20.05722,10.02942 C20.4064754,9.53069249 21.0001598,9.26244526 21.6052632,9.32996029 C22.2103667,9.39747532 22.7303272,9.7899786 22.96107,10.35342 L24.93747,15.82254 L21.55815,25.18776 C21.5041776,25.3351819 21.4306179,25.4746729 21.33945,25.60248 C21.0357,26.03097 20.53998,26.31204 19.97784,26.31204 C19.3096122,26.3104979 18.7065527,25.9110067 18.44451,25.2963 L16.46001,19.8045 L19.83771,10.44333 C19.89441,10.27323 20.02563,10.07316  20.05722,10.0294L20.05722,10.0294M20.69469,8.92782 L20.69469,8.93349 C19.9771757,8.96403462 19.3498674,9.42666647 19.10871,10.10313 L9.9063,35.64486 L0,35.64486 L9.2016,10.10313 C9.45141764,9.40016553 10.1160666,8.930048 10.8621,8.92863 L20.69469,8.92782 Z M41.34645,0 L32.14728,25.53525 C31.8980657,26.2379612 31.2339925,26.7081302 30.4884,26.70975 L20.76597,26.70975 L20.76597,26.69436 C21.4407113,26.6241779 22.0155932,26.1736543 22.24503,25.53525 L31.4442,0 L41.34645,0 Z"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("line", {
          stroke: "#a7a9ac",
          strokeLinecap: "square",
          x1: "57.5",
          y1: "3.5",
          x2: "57.5",
          y2: "35.5"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("text", {
          x: "67",
          y: "23",
          children: NDL
        })]
      })]
    })
  });
};

var _default = LogoNasdaqDataLink;
exports.default = _default;
//# sourceMappingURL=LogoNasdaqDataLink.js.map