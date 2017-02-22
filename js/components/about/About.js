'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ChartActions = require('../../flux/actions/ChartActions');

var _ScrollPane = require('../zhn/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _CaptionRow = require('../CaptionRow');

var _CaptionRow2 = _interopRequireDefault(_CaptionRow);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _Token = require('./Token');

var _Token2 = _interopRequireDefault(_Token);

var _LinkToken = require('./LinkToken');

var _LinkToken2 = _interopRequireDefault(_LinkToken);

var _IconLogoBar = require('./IconLogoBar');

var _IconLogoBar2 = _interopRequireDefault(_IconLogoBar);

var _ContainerStyles = require('../styles/ContainerStyles.js');

var _ContainerStyles2 = _interopRequireDefault(_ContainerStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = _ContainerStyles2.default;

var Styles = {
  scrollDiv: {
    overflowY: 'auto',
    height: '92%',
    //height: 'calc(100vh - 90px)',
    paddingRight: '10px'
  },
  DIV_WRAPPER: {
    paddingLeft: '5px',
    paddingRight: '5px',
    lineHeight: 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  P_BOTTOM: {
    marginBottom: '1em'
  },
  MARGIN_TOP: {
    marginTop: '3px'
  }
};

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

    _this._onStore = function (actionType, data) {
      if (actionType === _ComponentActions.ComponentActionTypes.SHOW_ABOUT) {
        _this.setState({ isShow: true });
      } else if (actionType === _ChartActions.ChartActionTypes.INIT_AND_SHOW_CHART) {
        _this.setState({ isShow: false });
      } else if (actionType === _ChartActions.ChartActionTypes.SHOW_CHART) {
        _this.setState({ isShow: false });
      }
    };

    _this._handleClose = function () {
      _this.setState({ isShow: false });
    };

    _this.state = {
      isShow: props.isShow
    };
    return _this;
  }

  _createClass(About, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var isShow = this.state.isShow,
          _classOpen = isShow ? "show-popup" : null,
          _styleOpen = isShow ? { display: 'block' } : { display: 'none' };

      return _react2.default.createElement(
        'div',
        {
          className: _classOpen,
          style: Object.assign({}, styles.aboutRootDiv, _styleOpen)
        },
        _react2.default.createElement(_CaptionRow2.default, {
          caption: 'About',
          onClose: this._handleClose
        }),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: Styles.scrollDiv },
          _react2.default.createElement(
            'div',
            { style: Styles.DIV_WRAPPER },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Token2.default,
                { color: '#80c040' },
                'ERC'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray', isFirstBlank: true },
                'is an economic RESTful client.'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'With it, you can view economic free open data from WEB.'
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.P_BOTTOM },
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'Data providers :'
              ),
              _react2.default.createElement(
                _LinkToken2.default,
                {
                  href: 'https://www.quandl.com/',
                  color: '#E05927',
                  isFirstBlank: true
                },
                'Quandl'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                ','
              ),
              _react2.default.createElement(
                _LinkToken2.default,
                {
                  href: 'http://ec.europa.eu/eurostat',
                  color: '#009ae5',
                  isFirstBlank: true
                },
                'Eurostat'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                '.'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(_Step2.default, { step: '1' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Choose a data source Browser from the header bar'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '2' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Choose a dataset menu item in a Browser'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '3' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Select params and enter query date in a draggable Dialog'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '4' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Click a button Load'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.MARGIN_TOP },
              _react2.default.createElement(_Step2.default, { step: '5' }),
              _react2.default.createElement(
                _Token2.default,
                { color: 'black', isFirstBlank: true },
                'Also you can export chart to PNG, JPG, SVG, print to PDF'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: Object.assign({}, Styles.P_BOTTOM, Styles.MARGIN_TOP) },
              'The result will be shown in a Chart in a Chart container.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'After clicking a button Show in a Dialog will be opened Chart container with Charts or empty. After closing a Chart container all Charts remains.'
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.P_BOTTOM },
              'In one time max three Dialogs can be opened.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Token2.default,
                { color: '#F44336' },
                'Attention:'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray', isFirstBlank: true },
                'For one item from Dialog can be only one Chart in a container. If you want to change query parameters for it, close the chart in the container and load data again.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.P_BOTTOM },
              'The value of currency is not always USD as shows in a chart tooltip. Sometimes more details about data can be look at tab Info on a Chart.'
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.P_BOTTOM },
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'In that case of data loading from'
              ),
              _react2.default.createElement(
                _LinkToken2.default,
                {
                  href: 'https://www.quandl.com/',
                  color: '#E05927',
                  isFirstBlank: true
                },
                'Quandl'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray', isFirstBlank: true },
                'data provider, for accessing without API Key, exists some restriction on frequency and amount queries (',
                _react2.default.createElement(
                  _Token2.default,
                  { color: '#2f7ed8' },
                  '50 per day/1 at a time'
                ),
                _react2.default.createElement(
                  _Token2.default,
                  { color: 'gray' },
                  ').'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'According to Quandl, anonymous requests can be deprecated soon. With API Key'
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.P_BOTTOM },
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'you will be have (',
                _react2.default.createElement(
                  _Token2.default,
                  { color: '#2f7ed8' },
                  '50 000 per day/1 at a time'
                ),
                '). It\'s free of charge to receive.'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'A Quandl API Key, for using with ERC, can be set in dialog Settings/User Settings. Settings save in browser\'s memory only for a current WEB session.'
            ),
            _react2.default.createElement(
              'p',
              { style: Styles.P_BOTTOM },
              'Premium Free Sample Data can be requested only with Quandl API Key.'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray' },
                'For loading data from'
              ),
              _react2.default.createElement(
                _LinkToken2.default,
                {
                  href: 'http://ec.europa.eu/eurostat',
                  color: '#009ae5',
                  isFirstBlank: true
                },
                'Eurostat'
              ),
              _react2.default.createElement(
                _Token2.default,
                { color: 'gray', isFirstBlank: true },
                'does not exist any restrictions.'
              )
            ),
            _react2.default.createElement(_IconLogoBar2.default, null),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                _Token2.default,
                { color: 'black' },
                '*Logos Fair Use.'
              )
            )
          )
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\components\about\About.js.map