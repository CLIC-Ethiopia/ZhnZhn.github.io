const CL_ROW = 'row__pane-topic not-selected'

const _addItemTo = (arr, comp, { name, onClick, isClose }) => {
  if (onClick) {
    arr.push({
      cn: CL_ROW,
      onClick: onClick.bind(comp),
      name, isClose
   })
  }
};

const crMenuMore = (comp, {
  toggleToolBar,
  onAbout
}) => {
  const p0 = [];
  _addItemTo(p0, comp, {
    name: 'Toggle ToolBar',
    onClick: toggleToolBar,
    isClose: true
  })
  _addItemTo(p0, comp, {
    name: 'About Datasource',
    onClick: onAbout,
    isClose: true
  })

  return {
      baseTitleCl: CL_ROW,
      pageWidth: 175,
      maxPages: 1,
      p0: p0
    };
  }

export default crMenuMore
