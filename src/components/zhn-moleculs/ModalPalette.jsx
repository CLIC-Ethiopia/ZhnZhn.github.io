import React from 'react';

import ModalPopup from './ModalPopup';
import CellColorPane from './CellColorPane'

const S = {
  SHOW_HIDE: {
    zIndex: 1010,
    position: 'absolute',
    top: 35,
    left: -10,
    backgroundColor: 'inherit',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0 0 0 5px'
  }
};

const ModalPalette = ({ isShow, model, onClickCell, onClose }) => (
  <ModalPopup
    style={S.SHOW_HIDE}
    isShow={isShow}
    onClose={onClose}
  >
    <CellColorPane
       model={model}
       onClickCell={onClickCell}
    />
  </ModalPopup>
);

export default ModalPalette
