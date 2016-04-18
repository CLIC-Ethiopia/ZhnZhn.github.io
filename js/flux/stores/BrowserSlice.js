'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BrowserMenu = require('../../constants/BrowserMenu');

var _BrowserMenu2 = _interopRequireDefault(_BrowserMenu);

var _Type = require('../../constants/Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fnFindObj = function fnFindObj(menu, chartType) {
  for (var i = 0, maxPart = menu.length; i < maxPart; i++) {
    for (var j = 0, maxItem = menu[i].items.length; j < maxItem; j++) {
      if (menu[i].items[j].id === chartType) {
        return menu[i].items[j];
      }
    }
  }
};

var fnSetIsOpen = function fnSetIsOpen(chartType, browserMenu, browserType, value) {
  var obj = fnFindObj(browserMenu[browserType], chartType);
  obj.isOpen = value;
};

var fnAddCounter = function fnAddCounter(chartType, browserType, browserMenu, value) {
  var obj = fnFindObj(browserMenu[browserType], chartType);
  obj.counter += value;
  obj.isOpen = true;
};

var BrowserSlice = {
  browserMenu: _BrowserMenu2.default,
  getBrowserMenu: function getBrowserMenu(browserType) {
    return this.browserMenu[browserType];
  },
  setMenuItemOpen: function setMenuItemOpen(chartType, browserType) {
    fnSetIsOpen(chartType, this.browserMenu, browserType, true);
  },
  setMenuItemClose: function setMenuItemClose(chartType, browserType) {
    fnSetIsOpen(chartType, this.browserMenu, browserType, false);
  },
  addMenuItemCounter: function addMenuItemCounter(chartType, browserType) {
    fnAddCounter(chartType, browserType, this.browserMenu, 1);
  },
  minusMenuItemCounter: function minusMenuItemCounter(chartType, browserType) {
    fnAddCounter(chartType, browserType, this.browserMenu, -1);
  }
};

exports.default = BrowserSlice;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\flux\stores\BrowserSlice.js.map