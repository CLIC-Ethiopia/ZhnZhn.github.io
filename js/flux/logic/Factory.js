"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.crOptionDialog = exports.crDialog = exports.crAsyncBrowser = void 0;

var _fBrowser = require("./fBrowser");

exports.crAsyncBrowser = _fBrowser.crAsyncBrowser;

var _react = require("react");

var _RouterDialog = _interopRequireDefault(require("./RouterDialog"));

var _RouterLoadFn = _interopRequireDefault(require("./RouterLoadFn"));

var _RouterFnValue = _interopRequireDefault(require("./RouterFnValue"));

var _Msg = require("../../constants/Msg");

var _LoadType = require("../../constants/LoadType");

var _ComponentActions = require("../actions/ComponentActions");

var _ChartActions = require("../actions/ChartActions");

var _DateUtils = require("../../utils/DateUtils");

var _has = _interopRequireDefault(require("../../components/has"));

var _ChartStore = _interopRequireDefault(require("../stores/ChartStore"));

const {
  isWideWidth
} = _has.default,
      _isArr = Array.isArray,
      _assign = Object.assign,
      _initFromDate = (0, _DateUtils.getFromDate)(2),
      initToDate = (0, _DateUtils.getToDate)();

const _crFnValue = (valueFn, valueFnPrefix) => valueFn ? valueFnPrefix ? _RouterFnValue.default[valueFn].bind(null, valueFnPrefix) : _RouterFnValue.default[valueFn] : void 0;

const _crInitFromDate = _ref => {
  let {
    isFdw,
    nInitFromDate
  } = _ref;
  return isFdw && !isWideWidth ? _initFromDate : nInitFromDate ? (0, _DateUtils.getFromDate)(nInitFromDate) : _initFromDate;
};

const _crDateProps = dialogProps => {
  const _props = dialogProps.isFd ? {
    errNotYmdOrEmpty: _Msg.YMD_DATE_OR_EMPTY,
    isYmdOrEmpty: _DateUtils.isYmdOrEmpty
  } : void 0;

  return {
    initFromDate: _crInitFromDate(dialogProps),
    initToDate,
    onTestDate: _DateUtils.isYmd,
    ..._props
  };
};

const _onError = function (alertDescr, alertCaption) {
  if (alertCaption === void 0) {
    alertCaption = 'Request Error';
  }

  _ComponentActions.ComponentActions.showAlert({
    alertDescr,
    alertCaption
  });
};

const _crClickAbout = _ref2 => {
  let {
    rootUri,
    descr,
    descrUrl
  } = _ref2;

  const _descrUrl = descr && rootUri ? rootUri + "/" + descr + ".html" : descrUrl;

  return _descrUrl ? _ComponentActions.ComponentActions.showDescription.bind(null, {
    descrUrl: _descrUrl
  }) : void 0;
};

const D_SELECT_N = 'DialogSelectN',
      D_STAT_N = 'DialogStatN';

const _getDialogType = (dialogType, _ref3) => {
  let {
    selectProps,
    dims,
    dfProps
  } = _ref3;
  return dialogType || (_isArr(selectProps) ? D_SELECT_N : void 0) || (_isArr(dims) || (dfProps || {}).dfId ? D_STAT_N : void 0);
};

const _modifyDialogPropsByLoadId = (dialogProps, loadId) => {
  if (!loadId) {
    dialogProps.loadId = _LoadType.LT_Q;
  }

  if (loadId === _LoadType.LT_EU_STAT) {
    const {
      dfProps
    } = dialogProps,
          {
      mapFrequency
    } = dfProps || {};
    dialogProps.dfProps = _assign({}, dfProps, {
      mapFrequency: mapFrequency || 'M'
    });
  }
}; //dialogType, browserType, conf


const crDialog = (browserType, dialogConf) => {
  const {
    type: itemKey,
    dialogProps = {},
    dialogType,
    dialogCaption,
    menuTitle
  } = dialogConf,
        {
    valueFn,
    valueFnPrefix,
    loadFnType,
    loadId,
    isProxy,
    isGetKey
  } = dialogProps,
        _dialogType = _getDialogType(dialogType, dialogProps),
        onAbout = _crClickAbout(dialogProps),
        loadFn = _RouterLoadFn.default.getFn(loadFnType, _dialogType),
        proxy = isProxy ? _ChartStore.default.getProxy() : void 0,
        getKey = isGetKey && _ChartStore.default.getKey,
        onError = isGetKey && _onError,
        onLoad = _ChartActions.ChartActions[_ChartActions.CHAT_LOAD].bind(null, {
    chartType: itemKey,
    browserType,
    dialogConf
  }),
        onShow = _ChartActions.ChartActions[_ChartActions.CHAT_SHOW].bind(null, itemKey, browserType, dialogConf);

  _modifyDialogPropsByLoadId(dialogProps, loadId);

  return _RouterDialog.default.getDialog(_dialogType).then(Comp => /*#__PURE__*/(0, _react.createElement)(Comp, { ...dialogProps,
    //initFromDate, initToDate, onTestDate,
    //errNotYmdOrEmpty, isYmdOrEmpty
    ..._crDateProps(dialogProps),
    key: itemKey,
    caption: dialogCaption || menuTitle,
    msgOnNotSelected: _Msg.NOT_SELECTED,
    msgOnNotValidFormat: _Msg.NOT_VALID_FORMAT,
    fnValue: _crFnValue(valueFn, valueFnPrefix),
    onAbout,
    onLoad,
    onShow,
    loadFn,
    proxy,
    getKey,
    onError
  }));
}; //option


exports.crDialog = crDialog;

const crOptionDialog = _ref4 => {
  let {
    dialogType
  } = _ref4;
  return _RouterDialog.default.getDialog(dialogType).then(Comp => /*#__PURE__*/(0, _react.createElement)(Comp, {
    key: dialogType
  }));
};

exports.crOptionDialog = crOptionDialog;
//# sourceMappingURL=Factory.js.map