import ModalDialog from '../zhn-moleculs/ModalDialog';
import { S_DIALOG_ROW } from '../styles/DialogStyles';
import crModalDialog from './fns/crModalDialog';

const S_CAPTION = {
  width: 400,
  paddingLeft: 10,
  color: '#a487d4',
  lineHeight: 2,
  fontSize: '18px',
  fontWeight: 'bold'
},
S_DESCR = {
  color: 'grey',
  width: 400,
  paddingLeft: 10,
  lineHeight: 1.4,
  fontWeight: 'bold',
  whiteSpace: 'pre'
};

const InfoDialog = crModalDialog(({
  isShow,
  data,
  onClose
}) => {
  const { caption, descr } = data;
  return (
    <ModalDialog
      caption="Information"
      isShow={isShow}
      onClose={onClose}
    >
       <div style={S_DIALOG_ROW}>
          <p style={S_CAPTION}>
            {caption}
          </p>
       </div>
       <div style={S_DIALOG_ROW}>
          <p style={S_DESCR}>{descr}</p>
       </div>
    </ModalDialog>
  );
});

export default InfoDialog
