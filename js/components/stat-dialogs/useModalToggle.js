"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggleClose = _interopRequireDefault(require("../hooks/useToggleClose"));
var _useTitles = _interopRequireDefault(require("../dialogs/hooks/useTitles"));
var _useRowToggle = _interopRequireDefault(require("./useRowToggle"));
var _DialogCell = _interopRequireDefault(require("../dialogs/DialogCell"));
var _crIsId = _interopRequireDefault(require("./crIsId"));
var _jsxRuntime = require("react/jsx-runtime");
const useModalToggle = configs => {
  const [isToggle, toggleInputs, hideInputs] = (0, _useToggleClose.default)(),
    [isRow, setIsRow, toggleIsRow] = (0, _useRowToggle.default)(configs),
    {
      isShowChart,
      isShowDate
    } = isRow,
    [refTitles, addTitleIndex, removeTitleIndex] = (0, _useTitles.default)();
  return [/*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useMemo)(() => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogCell.default.ModalToggle, {
    isShow: isToggle,
    selectProps: configs,
    isShowChart: isShowChart,
    isShowDate: isShowDate,
    crIsId: _crIsId.default,
    onToggle: toggleIsRow,
    onCheckCaption: addTitleIndex,
    onUnCheckCaption: removeTitleIndex,
    onClose: hideInputs
  }), [isToggle, configs, isShowChart, isShowDate])
  //toggleIsRow, checkCaptionBy, uncheckCaption, hideInputs
  /*eslint-enable react-hooks/exhaustive-deps */, refTitles, isRow, setIsRow, toggleInputs];
};
var _default = useModalToggle;
exports.default = _default;
//# sourceMappingURL=useModalToggle.js.map