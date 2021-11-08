"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _crAddProps = _interopRequireDefault(require("./crAddProps"));

var _crSelectProps = _interopRequireDefault(require("./crSelectProps"));

const _assign = Object.assign,
      _keys = Object.keys;

const addDialogPropsTo = (items, df) => {
  const {
    dfAddProps
  } = df || {};

  _keys(items).forEach(pnId => {
    const item = items[pnId],
          addPropsId = item.addProps || dfAddProps;

    if (addPropsId) {
      const {
        dialogProps
      } = item,
            addProps = (0, _crAddProps.default)(items, addPropsId),
            _selectProps = (0, _crSelectProps.default)(addProps, dialogProps);

      item.dialogProps = _assign({}, addProps, dialogProps, _selectProps);
      item.dialogProps.dfProps = _assign({}, addProps.dfProps, dialogProps.dfProps);
    }
  });
};

var _default = addDialogPropsTo;
exports.default = _default;
//# sourceMappingURL=addDialogPropsTo.js.map