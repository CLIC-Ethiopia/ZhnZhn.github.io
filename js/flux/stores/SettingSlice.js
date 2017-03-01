"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SettingSlice = {
  setting: {},
  setQuandlKey: function setQuandlKey(value) {
    this.setting.quandlKey = value;
  },
  getQuandlKey: function getQuandlKey() {
    return this.setting.quandlKey;
  }
};

exports.default = SettingSlice;
//# sourceMappingURL=SettingSlice.js.map