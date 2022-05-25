import { Component } from 'react';

import {
  MDT_EDIT_WATCH_GROUP,
  MDT_EDIT_WATCH_LIST,
  MDT_LOAD_ITEM
} from '../../constants/ModalDialogType';
import { ComponentActions } from '../../flux/actions/ComponentActions';
import { WatchActions } from '../../flux/actions/WatchActions';

import A from '../Comp'

import EditBar from './EditBar';
import WatchItem from './WatchItem';

import withWatchDnD from './decorators/withWatchDnD';

const CL_SCROLL = 'scroll-container-y scroll-watch'
, CL_WATCH_ITEM = 'row__type2-topic not-selected'

, C_GROUP_OPEN = '#1b75bb'
, C_LIST_OPEN = '#80c040'

, S_BROWSER = { paddingRight: 0 }
, S_BT_CIRCLE = {
  position: 'relative',
  top: -4,
  marginLeft: 20
}
, S_GROUP_DIV = { lineHeight: 2 }
, S_LIST_DIV = {
  marginLeft: 8,
  paddingLeft: 2,
  borderLeftStyle: 'solid',
  borderLeftWidth: 2,
  borderLeftColor: 'inherit',
  lineHeight: 2
}
, S_MR_10 = { marginRight: 10 };


const DRAG = {
  GROUP: 'GROUP',
  C_GROUP_ENTER: C_GROUP_OPEN,
  LIST: 'LIST',
  C_LIST_ENTER: C_LIST_OPEN,
  ITEM: 'ITEM'
};

@withWatchDnD
class WatchBrowser extends Component {

  constructor(props){
    super(props)

    this._bindDnDGroup(DRAG, WatchActions)
    this._bindDnDList(DRAG, WatchActions)
    this._bindDnDItem(DRAG, WatchActions)

    this.state = {
      isShow : !!props.isInitShow,
      isModeEdit : false,
      watchList : props.store.getWatchList()
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }
  _onStore = (actionType, data) => {
     const { browserType, showAction, updateAction } = this.props;
     if (actionType === showAction && data === browserType ){
      this._handlerShow()
    } else if (actionType === updateAction) {
      this.setState({ watchList: data })
    }
  }

  _handlerHide = () => {
     this.setState({ isShow : false })
  }
  _handlerShow = () => {
     this.setState({ isShow : true })
  }

  _handlerSaveWatch() {
    WatchActions.saveWatch()
  }
  _handlerToggleEditMode = () => {
    this.setState({ isModeEdit : !this.state.isModeEdit })
  }

  _handlerEditGroup() {
    ComponentActions.showModalDialog(MDT_EDIT_WATCH_GROUP)
  }
  _handlerEditList() {
    ComponentActions.showModalDialog(MDT_EDIT_WATCH_LIST)
  }

  _renderWatchList = (watchList) => {
     const { isModeEdit } = this.state;
     return watchList.groups.map((group, index) => {
       const {caption, lists} = group;
       return (
               <A.OpenClose2
                  key={index}
                  style={S_GROUP_DIV}
                  //openColor={C_GROUP_OPEN}
                  caption={caption}
                  isDraggable={isModeEdit}
                  option={{ caption }}
                  onDragStart={this._hDragStartGroup}
                  onDragEnter={this._hDragEnterGroup}
                  onDragOver={this._hDragOverGroup}
                  onDragLeave={this._hDragLeaveGroup}
                  onDrop={this._hDropGroup}
                >
                {lists && this._renderLists(lists, caption)}
              </A.OpenClose2>
              );
     });
  }

  _renderLists = (lists, groupCaption) => {
    const { isModeEdit } = this.state;
    return lists.map((list, index) => {
      const {caption, items} = list;
      return (
        <A.OpenClose2
           key={index}
           style={S_LIST_DIV}
           notSelectedStyle={S_MR_10}
           openColor={C_LIST_OPEN}
           caption={caption}
           isDraggable={isModeEdit}
           option={{ groupCaption, caption }}
           onDragStart={this._hDragStartList}
           onDragEnter={this._hDragEnterList}
           onDragOver={this._hDragOverList}
           onDragLeave={this._hDragLeaveList}
           onDrop={this._hDropList}
        >
         {items && this._renderItems(items, groupCaption, caption)}
       </A.OpenClose2>
      );
    });
  }

  _handlerClickItem(item) {
    ComponentActions.showModalDialog(MDT_LOAD_ITEM, item)
  }
  _handlerRemoveItem(option, event) {
    event.stopPropagation()
    WatchActions.removeItem(option)
  }

  _renderItems = (items, groupCaption, listCaption) => {
      const {isModeEdit} = this.state;
      return items.map((item, index) => {
        const { id, caption } = item;
        return (
            <WatchItem
               key={id}
               className={CL_WATCH_ITEM}
               isModeEdit={isModeEdit}
               item={item}
               option={{ groupCaption, listCaption, caption }}
               onClick={this._handlerClickItem}
               onClose={this._handlerRemoveItem}
               onDragStart={this._hDragStartItem}
               onDragOver={this._hDragOverItem}
               onDragEnter={this._hDragEnterItem}
               onDragLeave={this._hDragLeaveItem}
               onDrop={this._hDropItem}
            />
        );
      });
    }

  render(){
    const { caption } = this.props
        , { isShow, isModeEdit, watchList } = this.state
        , _captionEV = isModeEdit ? 'V' : 'E';
    return (
       <A.Browser isShow={isShow} style={S_BROWSER}>
          <A.BrowserCaption
            caption={caption}
            onClose={this._handlerHide}
          >
           <A.ButtonCircle
             caption="S"
             title="Save to LocalStorage"
             style={S_BT_CIRCLE}
             onClick={this._handlerSaveWatch}
           />
           <A.ButtonCircle
              caption={_captionEV}
              title="Toggle Edit Mode: E/V"
              style={S_BT_CIRCLE}
              onClick={this._handlerToggleEditMode}
           />
         </A.BrowserCaption>
         <EditBar
            isShow={isModeEdit}
            onClickGroup={this._handlerEditGroup}
            onClickList={this._handlerEditList}
         />
         <A.ScrollPane className={CL_SCROLL}>
           {watchList && this._renderWatchList(watchList)}
         </A.ScrollPane>
      </A.Browser>
    )
  }
}

export default WatchBrowser
