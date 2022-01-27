
import { useEffect } from 'react';

import LocationSearch from '../flux/logic/LocationSearch';
import ChartStore from '../flux/stores/ChartStore';

import CA, { ComponentActionTypes as CAT } from '../flux/actions/ComponentActions';
import { BAT_INIT_BROWSER_DYNAMIC } from '../flux/actions/BrowserActions';
import { CHAT_INIT_AND_SHOW } from '../flux/actions/ChartActions';

import AppProvider from './AppProvider';
import HeaderBar from './header/HeaderBar';
import BrowserContainer from './browser-container/BrowserContainer';
import About from './about/About';
import CompContainer from './zhn-containers/CompContainer';
import DialogContainer from './dialogs/DialogContainer';

import checkBuild from './checkBuild';

const BUILD_DATE = '27-01-2022'
, CL_COMP_CONTAINER = "component-container";

const showSettings = CA.showSettings
 .bind(null, ChartStore.exportSettingFn())

const AppErc = () => {

  useEffect(()=>{
    LocationSearch.load();
    checkBuild(BUILD_DATE, CA.showReload)
  }, [])

  return (
    <AppProvider>
      <HeaderBar showSettings={showSettings} />
      <div className={CL_COMP_CONTAINER}>
         <BrowserContainer
            initBrowserAction={BAT_INIT_BROWSER_DYNAMIC}
            showDialogAction={CAT.SHOW_DIALOG}
            onCloseDialog={CA.closeDialog}
         />
         <About />
         <CompContainer addAction={CHAT_INIT_AND_SHOW} />
       </div>
       <DialogContainer />
    </AppProvider>
  );
};

export default AppErc
