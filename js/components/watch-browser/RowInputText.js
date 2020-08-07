"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _InputText = _interopRequireDefault(require("../zhn/InputText"));

var _DialogStyles = _interopRequireDefault(require("../styles/DialogStyles"));

//import PropTypes from "prop-types";
var S = {
  ROW: (0, _extends2["default"])({}, _DialogStyles["default"].ROW, {
    lineHeight: 2
  }),
  CAPTION: (0, _extends2["default"])({}, _DialogStyles["default"].CAPTION, {
    width: 120
  }),
  INPUT_TEXT: {
    width: 250,
    height: 30,
    paddingLeft: 10,
    marginLeft: 0,
    marginRight: 0
  }
};

var RowInputText = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowInputText, _Component);

  function RowInputText() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._refInputText = function (c) {
      return _this.inputText = c;
    };

    return _this;
  }

  var _proto = RowInputText.prototype;

  _proto.render = function render() {
    var caption = this.props.caption;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: S.ROW
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: S.CAPTION
    }, caption), /*#__PURE__*/_react["default"].createElement(_InputText["default"], {
      ref: this._refInputText,
      style: S.INPUT_TEXT
    }));
  };

  _proto.getValue = function getValue() {
    return this.inputText.getValue().trim();
  };

  _proto.setValue = function setValue(value) {
    this.inputText.setValue(value);
  };

  return RowInputText;
}(_react.Component);

var _default = RowInputText;
exports["default"] = _default;
//# sourceMappingURL=RowInputText.js.map