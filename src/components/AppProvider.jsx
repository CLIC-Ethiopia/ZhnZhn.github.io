
import HotKeysProvider from './hotkeys/HotKeysProvider';
import ThemeProvider from './styles/ThemeProvider';

import { ComponentActionTypes as CAT } from '../flux/actions/ComponentActions';
import has from './has';

const ENABLE_HOT_KEYS = !has.touch;

const AppProvider = ({ children }) => (
  <HotKeysProvider is={ENABLE_HOT_KEYS}>
    <ThemeProvider actionChangeTheme={CAT.CHANGE_THEME}>
      {children}
    </ThemeProvider>
  </HotKeysProvider>
);

export default AppProvider