"use strict";

exports.__esModule = true;
exports.crValueConf = exports.crItemLink = exports.crItemConf = exports.crId = exports.crHm = exports.crError = void 0;

var _mathFn = require("../math/mathFn");

var _getterPointFn = require("./getterPointFn");

const {
  assign,
  create
} = Object,
      _isArr = Array.isArray,
      _crPTag = className => className ? "<p class=\"" + className + "\">" : '<p>';

const DF_ERR_MESSAGE = 'No data available for request.';

const crHm = obj => assign(create(null), obj);

exports.crHm = crHm;

const crError = function (errCaption, message) {
  if (errCaption === void 0) {
    errCaption = '';
  }

  if (message === void 0) {
    message = DF_ERR_MESSAGE;
  }

  return {
    errCaption,
    message
  };
}; // Quandl toScatter, Stat-Json


exports.crError = crError;

const crId = () => (0, _mathFn.crId)().toUpperCase();

exports.crId = crId;

const crItemLink = (caption, itemUrl, className) => _crPTag(className) + "<a href=\"" + itemUrl + "\">" + caption + "</a></p>";

exports.crItemLink = crItemLink;
const ITEM_CONF_PROP_NAMES = ['url', 'loadId', 'title', 'subtitle', 'itemCaption', 'seriaType', 'items'];

const crItemConf = option => {
  const _itemConf = {};

  let _value;

  ITEM_CONF_PROP_NAMES.forEach(k => {
    _value = option[k];

    if (_value != null) {
      _itemConf[k] = _isArr(_value) ? _value.map(obj => ({ ...obj
      })) : _value;
    }
  });
  return _itemConf;
};

exports.crItemConf = crItemConf;

const crValueConf = data => {
  const _p = data[data.length - 1];
  return {
    x: (0, _getterPointFn.getPointDate)(_p),
    y: (0, _getterPointFn.getPointValue)(_p)
  };
};

exports.crValueConf = crValueConf;
//# sourceMappingURL=crFn.js.map