'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Msg = {
  WATCH_SAVED: 'Watch List has been saved.',
  WATCH_PREV: 'Watch List has not been edited\nfrom previous save.',

  NOT_FOUND_ITEM: function NOT_FOUND_ITEM(itemType, captionGroup) {
    return 'The ' + itemType + ' witn name ' + captionGroup + ' not found.';
  },
  GROUP_EXISTED: function GROUP_EXISTED(caption) {
    return 'Group with name ' + caption + ' is already existed.';
  },
  LIST_EXISTED: function LIST_EXISTED(captionList, captionGroup) {
    return 'List with name ' + captionList + '\n      In Group ' + captionGroup + ' is already existed.';
  },
  ITEM_EXISTED: function ITEM_EXISTED(caption, captionList) {
    return 'Item with name ' + caption + '\n      In List ' + captionList + ' is already existed.';
  },

  IS_EMPTY_NAME: function IS_EMPTY_NAME(item) {
    return item + ' name can not be empty.';
  },
  NOT_SELECTED: function NOT_SELECTED(item) {
    return item + ' is not selected.';
  },

  NOT_VALID_FORMAT: function NOT_VALID_FORMAT(item) {
    return item + ' is not in valid format.';
  },

  Alert: {
    ALREADY_EXIST: {
      caption: 'Check Error',
      descr: 'The chart for this code has already existed in a container. Please close it and load again.'
    },
    RUNTIME_ERROR: {
      caption: 'Runtime Error'
    },
    NETWORK_ERROR: {
      caption: 'Network Error',
      descr: 'Network error is encountered. Failed to fetch. It seems you offline or maybe a DNS lookup failure.'
    }
  }
};

exports.default = Msg;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\constants\Msg.js.map