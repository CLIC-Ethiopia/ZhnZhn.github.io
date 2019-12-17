"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _isArray = Array.isArray;

var findItem = function findItem(menu, chartType) {
  if (!_isArray(menu)) {
    return;
  }

  for (var _iterator = menu, _isArray2 = Array.isArray(_iterator), _i = 0, _iterator = _isArray2 ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray2) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var topics = _ref;
    var items = topics.items;

    if (_isArray(items)) {
      for (var _iterator2 = items, _isArray3 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray3 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray3) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var item = _ref2;

        if (item.id === chartType) {
          return item;
        }
      }
    }
  }
};

var _default = findItem;
exports["default"] = _default;
//# sourceMappingURL=findItem.js.map