"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var CL = "svg-resize not-selected";
var S = {
  ROOT_DIV: {
    display: 'inline-block'
  },
  LEFT_DIV: {
    marginLeft: '10px'
  }
};

var SvgHrzResize =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(SvgHrzResize, _Component);

  function SvgHrzResize(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._increaseStepValue = function () {
      _this.countStep += 1;

      if (_this.countStep > 30) {
        _this.step = 3;
      } else if (_this.countStep > 15) {
        _this.step = 2;
      }

      if (_this.maxDelta - _this.delta < 20 || _this.delta - _this.minDelta < 20) {
        _this.step = 1;
      }
    };

    _this._resizeLeft = function () {
      if (_this.delta > _this.minDelta) {
        _this.delta -= _this.step;
        _this.currentWidth = _this.initWidth + _this.delta;
        _this.domNode.style.width = _this.currentWidth + 'px';

        _this._increaseStepValue();
      }
    };

    _this._resizeRight = function () {
      if (_this.delta < _this.maxDelta) {
        _this.delta += _this.step;
        _this.currentWidth = _this.initWidth + _this.delta;
        _this.domNode.style.width = _this.currentWidth + 'px';

        _this._increaseStepValue();
      }
    };

    _this._updateDelta = function () {
      var w = parseInt(_this.domNode.style.width);

      if (!isNaN(w)) {
        _this.delta = w - _this.initWidth;
      }
    };

    _this._hStartResize = function (fnResize, evt) {
      evt.preventDefault();

      _this._updateDelta();

      if (_this.id !== null) {
        _this._hStopResize(false);
      }

      _this.id = setInterval(fnResize, 5);
    };

    _this._hStopResize = function (isOnResizeAfter) {
      clearInterval(_this.id);
      _this.id = null;
      _this.step = 1;
      _this.countStep = 0;

      if (isOnResizeAfter && _this.isResizeAfter) {
        _this.props.onResizeAfter(_this.currentWidth);
      }
    };

    _this.id = null;
    _this.domNode = null;
    _this.delta = 0;
    _this.step = 1;
    _this.countStep = 0;
    _this.isResizeAfter = typeof props.onResizeAfter === 'function' ? true : false;
    _this.state = {};
    return _this;
  }

  var _proto = SvgHrzResize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        comp = _this$props.comp,
        initWidth = _this$props.initWidth,
        minWidth = _this$props.minWidth,
        maxWidth = _this$props.maxWidth;
    this.domNode = _reactDom["default"].findDOMNode(comp); //this.initWidth = this.domNode.getBoundingClientRect().width;

    this.initWidth = initWidth;
    this.currentWidth = this.initWidth;
    this.minDelta = minWidth - this.initWidth;
    this.maxDelta = maxWidth - this.initWidth;
  };

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      style: S.ROOT_DIV
    }, _react["default"].createElement("button", {
      className: CL,
      style: S.LEFT_DIV,
      title: "Resize container horizontal left",
      onMouseDown: this._hStartResize.bind(null, this._resizeLeft),
      onMouseUp: this._hStopResize.bind(null, true),
      onTouchStart: this._hStartResize.bind(null, this._resizeLeft),
      onTouchEnd: this._hStopResize.bind(null, true)
    }, _react["default"].createElement("svg", {
      viewBox: "0 0 12 12",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react["default"].createElement("path", {
      d: "M 1,6 L 11,6",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), _react["default"].createElement("path", {
      d: "M 6,2 L 1,6 6,10",
      strokeWidth: "2",
      strokeLinecap: "round",
      fill: "none"
    }))), _react["default"].createElement("button", {
      className: CL,
      style: S.LEFT_DIV,
      title: "Resize container horizontal right",
      onMouseDown: this._hStartResize.bind(null, this._resizeRight),
      onMouseUp: this._hStopResize.bind(null, true),
      onTouchStart: this._hStartResize.bind(null, this._resizeRight),
      onTouchEnd: this._hStopResize.bind(null, true)
    }, _react["default"].createElement("svg", {
      viewBox: "0 0 12 12",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react["default"].createElement("path", {
      d: "M 1,6 L 11,6",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), _react["default"].createElement("path", {
      d: "M 6,2 L 11,6 6,10",
      strokeWidth: "2",
      strokeLinecap: "round",
      fill: "none"
    }))));
  };

  return SvgHrzResize;
}(_react.Component);

var _default = SvgHrzResize;
exports["default"] = _default;
//# sourceMappingURL=SvgHrzResize.js.map