
import fnDnD from './fnDnD';

const _crDragStartItem = (DRAG) => {
  return function({groupCaption, listCaption, caption}, ev){
    this.dragStartWithDnDStyle(ev, [DRAG.LIST, DRAG.ITEM])
    fnDnD.setTransferTo({
      event: ev,
      dragId: `${groupCaption};${listCaption};${caption}`,
      xType: DRAG.ITEM
    })
  };
};

const _crDropItem = (DRAG, WatchActions) => {
  return function({ groupCaption, listCaption, caption }, ev){
     this.dropWithDnDStyle(ev)
     const data = JSON.parse(ev.dataTransfer.getData("text"))
         , { xType, dragId } = data
         , dropId = `${groupCaption};${listCaption};${caption}`;

     if (xType === DRAG.ITEM) {
       if ( dragId !== dropId) {
         ev.preventDefault()
         WatchActions.dragDropItem({
           dragId : dragId,
           dropId : dropId
         })
      } else {
        return undefined;
      }
    }
  };
};

const _crDragEnterItem = (DRAG) => {
  return function(ev){
    ev.preventDefault()
    this.dragEnterWithDnDStyle(ev, DRAG.ITEM)
 };
};

const _hDragOverItem = function(ev){
   ev.preventDefault()
};

const _hDragLeaveItem = function(ev){
   ev.preventDefault()
   this.dragLeaveWithDnDStyle(ev)
};

const withDnDItem = (DRAG, WatchActions) => {
  return (target) => {
    Object.assign(target.prototype, {
      _hDragStartItem: _crDragStartItem(DRAG),
      _hDropItem: _crDropItem(DRAG, WatchActions),
      _hDragEnterItem: _crDragEnterItem(DRAG),
      _hDragOverItem,
      _hDragLeaveItem
    })
  };
}

export default withDnDItem
