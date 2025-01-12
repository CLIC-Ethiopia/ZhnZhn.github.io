import { useMemo } from '../uiApi';

import { NO_RESULT } from './InputSelectFn';

import OptionList from './OptionList';
import OptionsFooter from './OptionsFooter';

import {
  CL_OPTIONS,
  CL_OPTIONS_DIV,
  CL_OPTIONS_ROW
} from './CL';

const _crFooterIndex = (
  options
) => options[0] && (options[0].value !== NO_RESULT)
  ? options.length
  : 0;

const OptionsView = ({
  widthStyle,

  optionsStyle,
  propCaption,
  ItemOptionComp,
  noFooterBts,

  options,
  nAll,

  refOptionsComp,
  refOptionNode,
  refIndexNode,
  indexActive,

  onClickItem,
  onClear
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _optionListEl = useMemo(() => (
    <OptionList
      options={options}
      refOptionNode={refOptionNode}
      className={CL_OPTIONS_ROW}
      selectedIndex={indexActive}
      propCaption={propCaption}
      onClick={onClickItem}
      ItemComp={ItemOptionComp}
    />
  ), [options])
  // indexActive
  /*eslint-enable react-hooks/exhaustive-deps */
  , _nFiltered = _crFooterIndex(
      options
   );

  return (
    <div
       className={CL_OPTIONS}
       style={widthStyle}
       data-scrollable={true}
       tabIndex="-1"
     >
      <div
         ref={refOptionsComp}
         className={CL_OPTIONS_DIV}
         style={{...optionsStyle, ...widthStyle}}
         tabIndex="-1"
       >
        {_optionListEl}
      </div>
      <OptionsFooter
         ref={refIndexNode}
         noFooterBts={noFooterBts}
         indexActiveOption={indexActive}
         nAll={nAll}
         nFiltered={_nFiltered}
         onClear={onClear}
      />
    </div>
  );
}

export default OptionsView
