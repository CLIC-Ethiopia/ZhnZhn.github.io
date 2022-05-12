import { createElement } from 'react'

import ChartStore from '../stores/ChartStore';

import CA from '../actions/ComponentActions';
import ChartActions, { CHAT_SHOW } from '../actions/ChartActions';
import BA from '../actions/BrowserActions';
import {
  BAT_SHOW_BROWSER_DYNAMIC,
  BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
  BAT_LOAD_BROWSER_FAILED,
  BAT_UPDATE_WATCH_BROWSER,
  BAT_UPDATE_BROWSER_MENU
} from '../actions/BrowserActions';
import {
  BT_WATCH_LIST,
  BT_SWEDEN_STAT_ALL,
  BT_NORWAY_STAT_ALL,
  BT_FINLAND_STAT_ALL,
  BT_DENMARK_STAT_ALL,
  BT_IRELAND_STAT_ALL
} from '../../constants/BrowserType';

import RouterBrowser from './RouterBrowser';

import RouterItemOption from '../../components/zhn-select/RouterItemOption';
import RouterBrowserItem from '../../components/browser-items/RouterBrowserItem';


const _crBrowserWatchList = (Comp) => createElement(Comp, {
   key: BT_WATCH_LIST,
   browserType: BT_WATCH_LIST,
   caption: "Watch List",
   isInitShow: true,
   store: ChartStore,
   showAction: BAT_SHOW_BROWSER_DYNAMIC,
   updateAction: BAT_UPDATE_WATCH_BROWSER
})

const _crBrowserDynamic = (Comp, option) => {
   const {
         browserType, caption='Source Browser' , sourceMenuUrl,
         chartContainerType,
         modalDialogType, itemOptionType, itemType, descrUrl, dfProps
       } = option
    , ItemOptionComp = itemOptionType
          ? RouterItemOption[itemOptionType] || RouterBrowserItem.DF
          : RouterBrowserItem.DF
    , ItemComp = itemType
          ? RouterBrowserItem[itemType] || RouterBrowserItem.DEFAULT
          : void 0
    , onClickInfo = typeof ItemComp !== "undefined"
         ? CA.showDescription
         : void 0
    //for Type2
    , onShowLoadDialog = chartContainerType
         ? item => CA.showModalDialog(modalDialogType, {
             item, browserType, chartContainerType,
             onShow: ChartActions[CHAT_SHOW].bind(null, chartContainerType, browserType)
           })
        : void 0;

   return createElement(Comp , {
     dfProps,
     key: browserType,
     browserType: browserType,
     store: ChartStore,
     isInitShow: true,
     caption,
     ItemOptionComp,
     ItemComp,
     descrUrl,
     onClickInfo,
     showAction: BAT_SHOW_BROWSER_DYNAMIC,
     loadedAction: BAT_LOAD_BROWSER_DYNAMIC_COMPLETED,
     failedAction: BAT_LOAD_BROWSER_FAILED,
     updateAction: BAT_UPDATE_BROWSER_MENU, //for Type
     onLoadMenu: BA.loadBrowserDynamic.bind(null, { browserType, caption, sourceMenuUrl }),
     onShowLoadDialog //for Type2
   });
 }

const STAT_ALL_TYPES = [
  BT_SWEDEN_STAT_ALL,
  BT_NORWAY_STAT_ALL,
  BT_FINLAND_STAT_ALL,
  BT_DENMARK_STAT_ALL,
  BT_IRELAND_STAT_ALL
];
const _isStatAll = browserType => STAT_ALL_TYPES
  .indexOf(browserType) !== -1;

const fBrowser = {
  crAsyncBrowser(option) {
    const bT = option.browserType;
    if (bT === BT_WATCH_LIST) {
      return RouterBrowser[BT_WATCH_LIST]
        .then(_crBrowserWatchList);
    }
    if (_isStatAll(bT)) {
      return RouterBrowser.STAT_ALL
        .then(Comp => _crBrowserDynamic(Comp, option));
    }
    return Promise.resolve(
       _crBrowserDynamic(
         RouterBrowser[bT] || RouterBrowser.DEFAULT,
         option
       )
    );
  }
};

export default fBrowser
