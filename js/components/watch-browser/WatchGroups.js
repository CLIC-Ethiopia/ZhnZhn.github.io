"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DnDGroupHandlers = require("./dnd-handlers/DnDGroupHandlers");
var _Comp = _interopRequireDefault(require("../Comp"));
var _WatchLists = _interopRequireDefault(require("./WatchLists"));
var _jsxRuntime = require("react/jsx-runtime");
const {
    OpenClose2
  } = _Comp.default,
  _isArr = Array.isArray,
  S_GROUP_DIV = {
    lineHeight: 2
  };
const WatchGroups = _ref => {
  let {
    isModeEdit,
    groups
  } = _ref;
  return _isArr(groups) ? groups.map(_ref2 => {
    let {
      caption,
      lists
    } = _ref2;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(OpenClose2, {
      style: S_GROUP_DIV,
      caption: caption,
      dndHandlers: (0, _DnDGroupHandlers.crDnDGroupHandlers)(isModeEdit, {
        caption
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WatchLists.default, {
        isModeEdit: isModeEdit,
        groupCaption: caption,
        lists: lists
      })
    }, caption);
  }) : null;
};
var _default = exports.default = WatchGroups;
//# sourceMappingURL=WatchGroups.js.map