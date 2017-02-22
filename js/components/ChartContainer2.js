'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _ChartStore = require('../flux/stores/ChartStore');

var _ChartStore2 = _interopRequireDefault(_ChartStore);

var _ChartActions = require('../flux/actions/ChartActions');

var _ComponentActions = require('../flux/actions/ComponentActions');

var _CaptionRow = require('./CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _SvgHrzResize = require('./zhn/SvgHrzResize');

var _SvgHrzResize2 = _interopRequireDefault(_SvgHrzResize);

var _ScrollPane = require('./zhn/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _ItemFactory = require('./factories/ItemFactory');

var _ItemFactory2 = _interopRequireDefault(_ItemFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHOW_POPUP = "show-popup",
    CHILD_MARGIN = 36,
    RESIZE_MIN_WIDTH = 600,
    RESIZE_MAX_WIDTH = 1200;

var styles = {
  rootDiv: {
    backgroundColor: '#4D4D4D',
    paddingTop: '5px',
    paddingLeft: '5px',
    borderRadius: '10px',
    border: 'solid 3px #232F3B',
    position: 'relative',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    overflowY: 'hidden',
    marginLeft: '10px',
    overflowX: 'hidden'
  },
  hrzResize: {
    position: 'absolute',
    top: '30px',
    right: '0'
  },
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  chartDiv: {
    overflowY: 'auto',
    height: '680px'
  },
  transitionOption: {
    transitionName: "scaleY",
    transitionEnterTimeout: 400,
    transitionLeave: false
  },
  inlineBlock: {
    display: 'inline-block'
  },
  none: {
    display: 'none'
  }
};

var isInArray = function isInArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var value = arguments[1];

  var i = 0,
      len = array.length;
  for (; i < len; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
};

var compActions = [_ChartActions.ChartActionTypes.SHOW_CHART, _ChartActions.ChartActionTypes.LOAD_STOCK_COMPLETED, _ChartActions.ChartActionTypes.CLOSE_CHART];

var ChartContainer2 = function (_Component) {
  _inherits(ChartContainer2, _Component);

  function ChartContainer2(props) {
    _classCallCheck(this, ChartContainer2);

    var _this = _possibleConstructorReturn(this, (ChartContainer2.__proto__ || Object.getPrototypeOf(ChartContainer2)).call(this));

    _this._onStore = function (actionType, data) {
      if (isInArray(compActions, actionType)) {
        if (data && data.chartType === _this.props.chartType) {
          _this.setState(data);
        }
      } else if (actionType === _ComponentActions.ComponentActionTypes.CLOSE_CHART_CONTAINER_2) {
        if (data === _this.props.chartType) {
          _this._handleHide();
        }
      }
    };

    _this._handleHide = function () {
      var _this$props = _this.props,
          chartType = _this$props.chartType,
          browserType = _this$props.browserType,
          onCloseContainer = _this$props.onCloseContainer;

      onCloseContainer(chartType, browserType);
      _this.setState({ isShow: false });
    };

    _this._handleResizeAfter = function (parentWidth) {
      var i = 0,
          max = _this.state.configs.length;
      for (; i < max; i++) {
        if (typeof _this.refs['chart' + i].reflowChart === 'function') {
          _this.refs['chart' + i].reflowChart(parentWidth - _this.childMargin);
        }
      }
    };

    _this._renderCharts = function () {
      var _this$props2 = _this.props,
          chartType = _this$props2.chartType,
          browserType = _this$props2.browserType,
          onCloseItem = _this$props2.onCloseItem;

      return _this.state.configs.map(function (config, index) {
        var _config$zhConfig = config.zhConfig,
            zhConfig = _config$zhConfig === undefined ? {} : _config$zhConfig,
            id = zhConfig.id;

        return _ItemFactory2.default.createItem(config, index, { chartType: chartType }, { onCloseItem: onCloseItem.bind(null, chartType, browserType, id) });
      });
    };

    _this.childMargin = CHILD_MARGIN;
    _this.state = {};
    return _this;
  }

  _createClass(ChartContainer2, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.unsubscribe = _ChartStore2.default.listen(this._onStore);
      this.setState(_ChartStore2.default.getConfigs(this.props.chartType));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var caption = this.props.caption,
          isShow = this.state.isShow,
          _styleIsShow = isShow ? styles.inlineBlock : styles.none,
          _classIsShow = isShow ? SHOW_POPUP : undefined;

      return _react2.default.createElement(
        'div',
        {
          className: _classIsShow,
          style: Object.assign({}, styles.rootDiv, _styleIsShow)
        },
        _react2.default.createElement(
          _CaptionRow2.default,
          {
            caption: caption,
            onClose: this._handleHide
          },
          _react2.default.createElement(_SvgHrzResize2.default, {
            minWidth: RESIZE_MIN_WIDTH,
            maxWidth: RESIZE_MAX_WIDTH,
            comp: this,
            onResizeAfter: this._handleResizeAfter
          })
        ),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: styles.scrollDiv },
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            _extends({}, styles.transitionOption, {
              component: 'div'
            }),
            this._renderCharts()
          )
        )
      );
    }
  }]);

  return ChartContainer2;
}(_react.Component);

exports.default = ChartContainer2;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\ChartContainer2.js.map