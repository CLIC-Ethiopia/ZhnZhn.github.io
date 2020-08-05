"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));

var _Sparklines = require("../zhn-sparklines/Sparklines");

var _use = _interopRequireDefault(require("../hooks/use"));

//import PropTypes from 'prop-types'
var useToggle = _use["default"].useToggle,
    useKeyEnter = _use["default"].useKeyEnter;
var COLOR_MAX = "#8bc34a";
var COLOR_MIN = "#f44336";
var COLOR_EQUAL = 'black';
var SPOT_COLORS = {
  '-1': COLOR_MIN,
  '0': COLOR_EQUAL,
  '1': COLOR_MAX
};
var S = {
  CAPTION: {
    position: 'relative',
    padding: 3,
    marginBottom: 5,
    lineHeight: 1.8,
    opacity: 0.7
  },
  CAPTION_BT: {
    position: 'absolute',
    top: 4,
    right: 8,
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  ITEM_ROOT: {
    padding: 3,
    cursor: 'pointer'
  },
  ITEM_TITLE: {
    display: 'inline-block',
    width: 30
  },
  ITEM_VALUE: {
    display: 'inline-block',
    "float": 'right'
  }
};

var Caption = function Caption(_ref) {
  var color = _ref.color,
      from = _ref.from,
      to = _ref.to,
      onClick = _ref.onClick;

  var _hKeyDown = useKeyEnter(onClick);

  return /*#__PURE__*/_react["default"].createElement("p", {
    style: (0, _extends2["default"])({}, S.CAPTION, {
      background: color
    })
  }, /*#__PURE__*/_react["default"].createElement("span", null, from, "\xA0\u2013\xA0", to), /*#__PURE__*/_react["default"].createElement("span", {
    tabIndex: "0",
    role: "button",
    style: S.CAPTION_BT,
    onClick: onClick,
    onKeyDown: _hKeyDown
  }, "*"));
};

var Item = function Item(_ref2) {
  var title = _ref2.title,
      value = _ref2.value,
      status = _ref2.status,
      onClick = _ref2.onClick;

  var _hKeyDown = useKeyEnter(onClick),
      _value = status ? value + " (" + status + ")" : value;

  return /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: "0",
    role: "button",
    style: S.ITEM_ROOT,
    onClick: onClick,
    onKeyDown: _hKeyDown
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: S.ITEM_TITLE
  }, title), /*#__PURE__*/_react["default"].createElement("span", {
    style: S.ITEM_VALUE
  }, _value));
};

var ClusterItem = function ClusterItem(_ref3) {
  var point = _ref3.point,
      color = _ref3.color,
      index = _ref3.index,
      isShowRange = _ref3.isShowRange;

  var _refData = (0, _react.useRef)(point.seria.data || []),
      _refPointIndex = (0, _react.useRef)(_refData.current.length - 1),
      _useToggle = useToggle(index < 3),
      isShowChart = _useToggle[0],
      toggleIsShowChart = _useToggle[1];

  var _maxLabel = isShowRange ? /*#__PURE__*/_react["default"].createElement(_Sparklines.SparklinesMaxLabel, {
    color: COLOR_MAX,
    fontSize: 14
  }) : /*#__PURE__*/_react["default"].createElement("span", null),
      _minLabel = isShowRange ? /*#__PURE__*/_react["default"].createElement(_Sparklines.SparklinesMinLabel, {
    color: COLOR_MIN,
    fontSize: 14
  }) : /*#__PURE__*/_react["default"].createElement("span", null);

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Item, {
    title: point.id,
    value: point[0],
    status: point.status,
    onClick: toggleIsShowChart
  }), /*#__PURE__*/_react["default"].createElement(_ShowHide["default"], {
    isShow: isShowChart
  }, /*#__PURE__*/_react["default"].createElement(_Sparklines.Sparklines, {
    height: 32,
    width: 140,
    svgHeight: 32,
    svgWidth: 140,
    data: _refData.current,
    margin: 3 //marginLeft={20}

  }, _maxLabel, _minLabel, /*#__PURE__*/_react["default"].createElement(_Sparklines.SparklinesLine, {
    color: color
  }), /*#__PURE__*/_react["default"].createElement(_Sparklines.SparklinesSpot, {
    pointIndex: _refPointIndex.current,
    size: 3,
    spotColors: SPOT_COLORS
  }))));
};
/*
 ClusterItem.propTypes = {
  point: PropTypes.shape({
    0: PropTypes.number,
    id: PropTypes.string,
    status: PropTypes.string,
    seria: PropTypes.shape({
      data: PropTypes.array
    })
  }),
  color: PropTypes.string,
  index: PropTypes.number,
  isShowRange: PropTypes.bool
}
*/


var Cluster = function Cluster(_ref4) {
  var cluster = _ref4.cluster,
      color = _ref4.color,
      isShowRange = _ref4.isShowRange;
  var points = cluster.points || [];
  return /*#__PURE__*/_react["default"].createElement("div", null, points.map(function (point, index) {
    return /*#__PURE__*/_react["default"].createElement(ClusterItem, (0, _extends2["default"])({
      key: point.id
    }, {
      point: point,
      color: color,
      index: index,
      isShowRange: isShowRange
    }));
  }));
};
/*
Cluster.propTypes = {
  cluster: PropTypes.shape({
    points: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.string
    }))
  }),
  color: PropTypes.string
}
*/


var ClusterInfo = function ClusterInfo(_ref5) {
  var cluster = _ref5.cluster,
      color = _ref5.color,
      from = _ref5.from,
      to = _ref5.to;

  var _useToggle2 = useToggle(false),
      isShowRange = _useToggle2[0],
      onClick = _useToggle2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Caption, {
    color: color,
    from: from,
    to: to,
    onClick: onClick
  }), /*#__PURE__*/_react["default"].createElement(Cluster, {
    cluster: cluster,
    color: color,
    isShowRange: isShowRange
  }));
};
/*
ClusterInfo.propTypes = {
  cluster: PropTypes.object,
  color: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string
}
*/


var _default = ClusterInfo;
exports["default"] = _default;
//# sourceMappingURL=ClusterInfo.js.map