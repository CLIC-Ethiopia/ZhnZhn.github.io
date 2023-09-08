import { forwardRef } from '../uiApi';
import {
  crDialogCn,
  crShowHide
} from '../styleFn';

import useToggle from '../hooks/useToggle';
import useKeyEscape from '../hooks/useKeyEscape';
import useTheme from '../hooks/useTheme';
import useXYMovable from '../hooks/useXYMovable';
import useDialogFocus from './useDialogFocus';

import SvgClose from '../zhn/SvgClose';
import FlatButton from '../zhn-m/FlatButton';

import MenuMore from './MenuMore';

import {
  S_ROOT_DIV,
  S_CAPTION_DIV,
  S_COMMAND_DIV,
  S_BT,
  S_BT_LOAD,
  S_SVG_CLOSE
} from './Dialog.Style';

const TH_ID = 'DRAGGABLE_DIALOG'

, CL_DRAGGABLE_DIALOG = crDialogCn("draggable-dialog")
, CL_NOT_SELECTED = "not-selected"
, S_DIALOG_DIV = {
  ...S_ROOT_DIV,
  position: 'absolute',
  top: 30,
  left: 50,
  zIndex: 10
};

const _isFn = fn => typeof fn === 'function';

const CommandButtons = ({
  buttons,
  onLoad,
  onShow,
  onClose
}) => (
  <div style={S_COMMAND_DIV}>
    {buttons}
    {
      _isFn(onLoad) && <FlatButton
        key="load"
        style={S_BT_LOAD}
        caption="Load"
        title="Load item"
        onClick={onLoad}
      />
    }
    {
      _isFn(onShow) && <FlatButton
        key="show"
        timeout={0}
        style={S_BT}
        caption="Show"
        title="Show items"
        onClick={onShow}
      />
    }
    <FlatButton
      key="close"
      timeout={0}
      style={S_BT}
      caption="Close"
      title="Close dialog"
      onClick={onClose}
    />
  </div>
);

const FN_NOOP = () => {};

const DraggableDialog = forwardRef(({
  isShow,
  style,
  menuModel,
  caption,
  children,
  commandButtons,
  toTopLayer,
  onLoad,
  onShow,
  onClose=FN_NOOP
}, ref) => {
  const [
    refRoot,
    refBtMore
  ] = useDialogFocus(ref, isShow)
  , _hKeyDown = useKeyEscape(onClose)
  , [
    isMore,
    toggleIsMore
  ] = useToggle(false)
  , TS = useTheme(TH_ID)
  , [
    _className,
    _showHideStyle
  ] = crShowHide(
    isShow,
    CL_DRAGGABLE_DIALOG
  );

  useXYMovable(refRoot)

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    <div
      ref={refRoot}
      role="dialog"
      tabIndex="-1"
      aria-label={caption}
      aria-hidden={!isShow}
      className={_className}
      style={{
        ...style,
        ...S_DIALOG_DIV,
        ..._showHideStyle                
      }}
      onClick={toTopLayer}
      onKeyDown={_hKeyDown}
     >
    {/*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/}
      <div style={{...S_CAPTION_DIV, ...TS.EL}}>
        <MenuMore
          ref={refBtMore}
          isMore={isMore}
          menuModel={menuModel}
          TS={TS}
          toggle={toggleIsMore}
        />
        <span className={CL_NOT_SELECTED}>
          {caption}
        </span>
        <SvgClose
           style={S_SVG_CLOSE}
           onClose={onClose}
        />
      </div>
      <div>
         {children}
      </div>
      <CommandButtons
         buttons={commandButtons}
         onLoad={onLoad}
         onShow={onShow}
         onClose={onClose}
      />
    </div>
  );
})

export default DraggableDialog
