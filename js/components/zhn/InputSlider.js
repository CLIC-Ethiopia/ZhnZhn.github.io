'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Mostly from
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/

var S = {
  ROOT: {
    userSelect: 'none',
    cursor: 'default',
    height: '18px',
    width: '100%',
    position: 'relative',
    marginTop: '8px',
    marginBottom: '8px'
  },
  ROOT_LINE: {
    position: 'absolute',
    top: '8px',
    left: '0px',
    width: '100%',
    height: '2px'
  },
  LINE_BEFORE: {
    position: 'absolute',
    height: '100%',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    left: '0px',
    backgroundColor: 'rgb(0, 188, 212)',
    marginRight: '6px',
    width: 'calc(15%)'
  },
  LINE_AFTER: {
    position: 'absolute',
    height: '100%',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    right: '0px',
    backgroundColor: 'rgb(189, 189, 189)',
    marginLeft: '6px',
    width: 'calc(85%)'
  },
  LINE_HOVERED: {
    backgroundColor: 'rgb(158, 158, 158)'
  },
  ROOT_CIRCLE: {
    boxSizing: 'borderBox',
    position: 'absolute',
    cursor: 'pointer',
    pointerEvents: 'inherit',
    top: '0px',
    left: '15%',
    zIndex: '1',
    margin: '1px 0px 0px',
    width: '12px',
    height: '12px',
    backgroundColor: 'rgb(0, 188, 212)',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  CIRCLE_DRAGGED: {
    width: '20px',
    height: '20px '
  },
  CIRCLE_INNER: {
    position: 'absolute',
    overflow: 'visible',
    height: '12px',
    width: '12px',
    top: '0px',
    left: '0px'
  },
  CIRCLE_INNER_EL: {
    position: 'absolute',
    height: '36px',
    width: '300%',
    borderRadius: '50%',
    //opacity: '0.16',
    backgroundColor: 'rgba(0, 188, 212, 0.16)',
    top: '-12px',
    left: '-12px',
    transform: 'scale(1)'
  },
  EMBER: {
    top: '-12px',
    left: '-12px',
    height: '44px',
    width: '220%',
    border: '1px solid #4caf50'
  }
};

var _fnToPercent = function _fnToPercent(value, min, max) {
  var _percent = (value - min) / (max - min);
  return isNaN(_percent) ? 0 : _percent * 100;
};
var _fnWidthCalc = function _fnWidthCalc(percent) {
  return { width: 'calc(' + percent + '%)' };
};
var _fnLeftPercent = function _fnLeftPercent(percent) {
  return { left: percent + '%' };
};

var InputSlider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputSlider, _Component);

  function InputSlider(props) {
    (0, _classCallCheck3.default)(this, InputSlider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputSlider.__proto__ || Object.getPrototypeOf(InputSlider)).call(this));

    _this._handleMouseEnter = function () {
      _this.setState({ hovered: true });
    };

    _this._handleMouseLeave = function () {
      _this.setState({ hovered: false });
    };

    _this._handleMouseDown = function (event) {
      // Cancel text selection
      event.preventDefault();
      document.addEventListener('mousemove', _this._handleDragMouseMove);
      document.addEventListener('mouseup', _this._handleDragMouseUp);
      _this.setState({
        dragged: true
      });
    };

    _this._handleDragMouseMove = function (event) {
      _this._onDragUpdate(event);
    };

    _this._handleDragMouseUp = function () {
      document.removeEventListener('mousemove', _this._handleDragMouseMove);
      document.removeEventListener('mouseup', _this._handleDragMouseUp);
      _this.setState({
        dragged: false
      });
    };

    _this._onDragUpdate = function (event) {
      if (_this.dragRunning) {
        return;
      }
      _this.dragRunning = true;
      requestAnimationFrame(function () {
        _this.dragRunning = false;
        var position = event.clientX - _this._calcTrackOffset();
        _this._setValueFromPosition(event, position);
      });
    };

    _this._calcTrackOffset = function () {
      return _this.trackComp.getBoundingClientRect()['left'];
    };

    _this._setValueFromPosition = function (event, position) {
      var positionMax = _this.trackComp['clientWidth'];
      if (position < 0) {
        position = 0;
      } else if (position > positionMax) {
        position = positionMax;
      }

      var _this$props = _this.props,
          step = _this$props.step,
          min = _this$props.min,
          max = _this$props.max,
          onChange = _this$props.onChange;

      var value = void 0;
      value = position / positionMax * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      if (_this.state.value !== value) {
        _this.setState({
          value: value
        });

        if (typeof onChange === 'function') {
          onChange(event, value);
        }
      }
    };

    _this.state = {
      hovered: false,
      dragged: false,
      value: 4
    };
    return _this;
  }

  (0, _createClass3.default)(InputSlider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          step = _props.step,
          min = _props.min,
          max = _props.max,
          _state = this.state,
          hovered = _state.hovered,
          dragged = _state.dragged,
          value = _state.value,
          _lineAfterStyle = hovered ? (0, _extends3.default)({}, S.LINE_AFTER, S.LINE_HOVERED) : S.LINE_AFTER,
          _circleStyle = dragged ? S.CIRCLE_DRAGGED : null,
          _emberStyle = dragged ? S.EMBER : null,
          _circleInnerEl = hovered || dragged ? _react2.default.createElement('div', { style: (0, _extends3.default)({}, S.CIRCLE_INNER_EL, _emberStyle) }) : null,
          _percent = _fnToPercent(value, min, max),
          _widthBeforeStyle = _fnWidthCalc(_percent),
          _widthAfterStyle = _fnWidthCalc(100 - _percent),
          _leftStyle = _fnLeftPercent(_percent);

      return _react2.default.createElement(
        'div',
        { style: S.ROOT,
          onMouseDown: this._handleMouseDown,
          onMouseEnter: this._handleMouseEnter,
          onMouseLeave: this._handleMouseLeave
        },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(comp) {
              return _this2.trackComp = comp;
            },
            style: S.ROOT_LINE
          },
          _react2.default.createElement('div', { style: (0, _extends3.default)({}, S.LINE_BEFORE, _widthBeforeStyle) }),
          _react2.default.createElement('div', { style: (0, _extends3.default)({}, _lineAfterStyle, _widthAfterStyle) }),
          _react2.default.createElement(
            'div',
            {
              tabIndex: 0,
              style: (0, _extends3.default)({}, S.ROOT_CIRCLE, _circleStyle, _leftStyle)
            },
            _react2.default.createElement(
              'div',
              { style: (0, _extends3.default)({}, S.CIRCLE_INNER, _circleStyle) },
              _circleInnerEl
            )
          ),
          _react2.default.createElement('input', {
            type: 'hidden',
            step: step,
            min: min,
            max: max,
            value: value,
            required: true
          })
        )
      );
    }
  }]);
  return InputSlider;
}(_react.Component), _class.defaultProps = {
  min: 0,
  max: 20,
  step: 1
}, _temp);
process.env.NODE_ENV !== "production" ? InputSlider.propTypes = {
  step: _react.PropTypes.number,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  onChange: _react.PropTypes.func
} : void 0;
exports.default = InputSlider;
//# sourceMappingURL=InputSlider.js.map