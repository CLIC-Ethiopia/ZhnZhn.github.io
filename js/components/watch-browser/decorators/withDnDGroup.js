"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fnDnD = _interopRequireDefault(require("./fnDnD"));

var _crDragStartGroup = function _crDragStartGroup(DRAG) {
  return function (_ref, ev) {
    var caption = _ref.caption;
    this.dragStartWithDnDStyle(ev, [DRAG.GROUP]);

    _fnDnD["default"].setTransferTo({
      event: ev,
      dragId: caption + ";",
      xType: DRAG.GROUP
    });
  };
};

var _crDropGroup = function _crDropGroup(DRAG, WatchActions) {
  return function (_ref2, ev) {
    var caption = _ref2.caption;
    this.dropWithDnDStyle(ev);
    var data = JSON.parse(ev.dataTransfer.getData("text")),
        xType = data.xType,
        dragId = data.dragId,
        dropId = caption + ";";

    if (xType === DRAG.GROUP) {
      if (dragId !== dropId) {
        ev.preventDefault();
        WatchActions.dragDropGroup({
          dragId: dragId,
          dropId: dropId
        });
      } else {
        return undefined;
      }
    } else if (xType === DRAG.LIST) {
      ev.preventDefault();
      WatchActions.dragDropList({
        dragId: dragId,
        dropId: dropId
      });
    }
  };
};

var _crDragEnterGroup = function _crDragEnterGroup(DRAG) {
  return function (ev) {
    ev.preventDefault();
    this.dragEnterWithDnDStyle(ev, DRAG.GROUP, DRAG.C_GROUP_ENTER);
  };
};

var _hDragOverGroup = function _hDragOverGroup(ev) {
  ev.preventDefault();
};

var _hDragLeaveGroup = function _hDragLeaveGroup(ev) {
  ev.preventDefault();
  this.dragLeaveWithDnDStyle(ev);
};

var withDnDGroup = function withDnDGroup(DRAG, WatchActions) {
  return function (target) {
    Object.assign(target.prototype, {
      _hDragStartGroup: _crDragStartGroup(DRAG),
      _hDropGroup: _crDropGroup(DRAG, WatchActions),
      _hDragEnterGroup: _crDragEnterGroup(DRAG),
      _hDragOverGroup: _hDragOverGroup,
      _hDragLeaveGroup: _hDragLeaveGroup
    });
  };
};

var _default = withDnDGroup;
exports["default"] = _default;
//# sourceMappingURL=withDnDGroup.js.map