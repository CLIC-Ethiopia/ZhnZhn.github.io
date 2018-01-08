'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createType2WithToolbar = function _createType2WithToolbar(props) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      noDate = _ref.noDate,
      noLabels = _ref.noLabels;

  var buttons = [];

  if (typeof props.onClickInfo === 'function') {
    buttons.push({
      caption: 'I', title: 'Description About Dataset',
      onClick: this._clickInfoWithToolbar.bind(this)
    });
  }
  if (!noLabels) {
    buttons.push({
      caption: 'L', title: 'Toggle Row Labels',
      onClick: this._clickLabelWithToolbar.bind(this)
    });
  }
  if (!noDate) {
    buttons.push({
      caption: 'D', title: 'Toggle Date Input',
      onClick: this._clickDateWithToolbar.bind(this)
    });
  }

  return buttons;
};

var _clickInfoWithToolbar = function _clickInfoWithToolbar() {
  var _props = this.props,
      descrUrl = _props.descrUrl,
      onClickInfo = _props.onClickInfo;

  onClickInfo({ descrUrl: descrUrl });
};
var _clickLabelWithToolbar = function _clickLabelWithToolbar() {
  this.setState({
    isShowLabels: !this.state.isShowLabels
  });
};
var _clickDateWithToolbar = function _clickDateWithToolbar() {
  this.setState({
    isShowDate: !this.state.isShowDate
  });
};

var withToolbar = function withToolbar(target) {
  Object.assign(target.prototype, {
    _createType2WithToolbar: _createType2WithToolbar,
    _clickInfoWithToolbar: _clickInfoWithToolbar,
    _clickLabelWithToolbar: _clickLabelWithToolbar,
    _clickDateWithToolbar: _clickDateWithToolbar
  });
};

exports.default = withToolbar;
//# sourceMappingURL=withToolbar.js.map