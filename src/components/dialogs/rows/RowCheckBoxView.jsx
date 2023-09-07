import { useCallback } from '../../uiApi';
import { crStyle2 } from '../../styleFn';

import Button from '../../zhn/Button';
import SvgCheckBox from '../../zhn/SvgCheckBox';

const CL_BT_CHB = 'bt-chb'
, COLOR = '#1b2836'
, S_ROOT = {
  padding: '6px 0 0 16px'
};

const RowCheckBoxView = ({
  style,
  value,
  caption,
  captionStyle,
  color=COLOR,
  hCheck,
  hUnCheck
}) => {
  const _hToggle = useCallback(() => {
     if (value) {
       hUnCheck()
     } else {
       hCheck()
     }
   }, [value, hCheck, hUnCheck])
  , _captionStyle = crStyle2(
     captionStyle,
     value && { color }
  );
  
  return (
    <div style={{...S_ROOT, ...style}}>
      <SvgCheckBox
        value={value}
        color={color}
        onCheck={hCheck}
        onUnCheck={hUnCheck}
      />
      {
        caption && (
          <Button
            tabIndex="-1"
            className={CL_BT_CHB}
            style={_captionStyle}
            onClick={_hToggle}
          >
            {caption}
          </Button>
        )
      }
    </div>
  );
};

export default RowCheckBoxView
