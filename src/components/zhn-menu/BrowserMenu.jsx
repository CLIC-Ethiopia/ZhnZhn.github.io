import { crScrollYCn } from '../styleFn';

import useBrowserShow from '../hooks/useBrowserShow';
import useLoadMenu from './useLoadMenu';
import useBrowserMenu from './useBrowserMenu';

import Comp from '../Comp';
import MenuTopicList from './MenuTopicList';

const {
  Browser,
  BrowserCaption,
  ScrollPane,
  SpinnerLoading
} = Comp;

const CL_SCROLL_MENU = crScrollYCn('scroll-menu');

const BrowserMenu = (props) => {
  const {
    caption,
    browserType,
    useMsBrowserLoad,
    onLoadMenu,
    children
  } = props
  , [
    isShow,
    hideBrowser,
    hKeyDown
  ] = useBrowserShow(props)
  , [
    isLoading,
    menu
  ] = useLoadMenu(
    isShow,
    onLoadMenu,
    useMsBrowserLoad,
    browserType
  )
  , refFirstItem = useBrowserMenu(
     isShow,
     menu
  );

  return (
    <Browser
       isShow={isShow}      
       onKeyDown={hKeyDown}
    >
      <BrowserCaption
         caption={caption}
         onClose={hideBrowser}
      />
      <ScrollPane className={CL_SCROLL_MENU}>
         {isLoading && <SpinnerLoading />}
         <MenuTopicList
            menu={menu}
            refFirstItem={refFirstItem}
         />
         {children}
      </ScrollPane>
    </Browser>
  );
};

export default BrowserMenu
