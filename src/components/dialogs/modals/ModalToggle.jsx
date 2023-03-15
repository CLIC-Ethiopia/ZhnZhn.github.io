import ModalPopup from '../../zhn-moleculs/ModalPopup';
import ItemStack from '../../zhn/ItemStack';
import RowCheckBox1 from '../rows/RowCheckBox1';
import RowCheckBox2 from '../rows/RowCheckBox2';
import {
  CL_POPUP_MENU,
  S_MODAL_POPUP,
  S_ROW_CHB,
  TOGGLE_INPUT_CHECKBOX_COLOR,
  TOGGLE_CAPTION_CHECKBOX_COLOR
} from './Style';

const S_ROW = {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: 3
}
, S_CAPTION = {
  maxWidth: 150,
  paddingBottom: 2,
  textAlign: 'left',
  verticalAlign: 'middle'
}
, S_CHB_TOGGLE = {
  ...S_ROW_CHB,
  display: 'inline-block'
}
, S_CHB_CAPTION = {
  display: 'inline-block',
  paddingTop: 2,
  paddingLeft: 40
};

const _crChbToggleInitValue = isRow =>
  typeof isRow === 'boolean' ? isRow : true;

const _crCheckBoxItem = (
  item,
  index, {
    crIsId,
    onToggle,
    onCheckCaption,
    onUnCheckCaption
  }
) => (
  <div style={S_ROW} key={item.id}>
    <RowCheckBox2
      initialValue={_crChbToggleInitValue(item.isRow)}
      style={S_CHB_TOGGLE}
      color={TOGGLE_INPUT_CHECKBOX_COLOR}
      caption={item.caption}
      captionStyle={S_CAPTION}
      onToggle={() => onToggle(crIsId(item.id))}
    />
    <RowCheckBox1
      initValue={index === 0}
      style={S_CHB_CAPTION}
      color={TOGGLE_CAPTION_CHECKBOX_COLOR}
      onCheck={() => onCheckCaption(index)}
      onUnCheck={() => onUnCheckCaption(index)}
    />
  </div>
);

const ModalToggle = ({
  isShow,
  style,
  className=CL_POPUP_MENU,
  selectProps,
  isFd,
  isShowFd,
  isCh,
  isShowDate,
  isShowChart,
  crIsId,
  onToggle,
  onCheckCaption,
  onUnCheckCaption,
  onToggleFd,
  onToggleChart,
  onClose
}) => (
  <ModalPopup
    isShow={isShow}
    style={{...S_MODAL_POPUP, ...style}}
    className={className}
    onClose={onClose}
  >
    <ItemStack
      items={selectProps}
      crItem={_crCheckBoxItem}
      crIsId={crIsId}
      onToggle={onToggle}
      onCheckCaption={onCheckCaption}
      onUnCheckCaption={onUnCheckCaption}
    />
    { isFd && <RowCheckBox1
        key="isShowFd"
        value={isShowFd}
        style={S_ROW_CHB}
        color={TOGGLE_INPUT_CHECKBOX_COLOR}
        caption="From Date"
        onToggle={onToggleFd}
      />
    }
    { isCh && onToggleChart && <RowCheckBox1
        key="isShowChart"
        value={isShowChart}
        style={S_ROW_CHB}
        color={TOGGLE_INPUT_CHECKBOX_COLOR}
        caption="Chart"
        onToggle={onToggleChart}
      />
    }
  </ModalPopup>
);


export default ModalToggle
