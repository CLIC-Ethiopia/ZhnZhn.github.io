import ShowHide from '../zhn/ShowHide';
import ToolbarButtonCircle from '../zhn/ToolbarButtonCircle';

const Toolbar = ({
  isShow,
  buttons
}) => (
  <ShowHide
    isShow={isShow}
    withoutAnimation={true}
  >
    <ToolbarButtonCircle
       buttons={buttons}
    />
  </ShowHide>
);

export default Toolbar
