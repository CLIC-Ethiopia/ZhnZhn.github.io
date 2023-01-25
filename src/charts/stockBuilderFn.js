import pipe from '../utils/pipe';

import {
  COLOR_S_OPEN,
  COLOR_S_HIGH,
  COLOR_S_LOW
} from '../constants/Color';

import {
  crType
} from './Chart';
import {
  crAreaConfig,
  setSeriaDataTo
} from './ChartConfigFn';
import {
  tooltipValueTdmyIf
} from './Tooltip';
import {
  crMiniVolumeConfig,
  crMiniATHConfig
} from './IndicatorConfigFn';

import {
  fAddTooltip,
  fAddMinMax,
  _addMini
} from './configBuilderFn';

export const fAddMiniVolume = (
  option
) => config => _addMini(
  option.dVolume,
  option,
  crMiniVolumeConfig,
  config
);

export const fAddMiniATH = (
  option
) => config => _addMini(
  option.data,
  option,
  crMiniATHConfig,
  config
);

const _crSeriaOption = (
  color,
  lineWidth
) => ({
  type: 'line',
  visible: false,
  color,
  lineWidth,
  marker: {
    radius: 3,
    symbol: "circle"
  }
});

export const _fSetStockSerias = (
  seriaType,
  lineWidth,
  dC,
  dH,
  dL,
  dO
) => config => {
  const type = crType(seriaType, 'area');
  setSeriaDataTo(config, dC, 0, 'Close', {
    type, lineWidth
  })
  setSeriaDataTo(config, dH, 1, 'High',
    _crSeriaOption(COLOR_S_HIGH, lineWidth)
  )
  setSeriaDataTo(config, dL, 2, 'Low',
    _crSeriaOption(COLOR_S_LOW, lineWidth)
  )
  setSeriaDataTo(config, dO, 3, 'Open',
    _crSeriaOption(COLOR_S_OPEN, lineWidth)
  )
  return config;
};

export const crStockConfig = (
  id,
  option
) => {
  const {
    isNotZoomToMinMax,
    isDrawDeltaExtrems,
    seriaType,
    seriaWidth,
    dC, dH, dL, dO,
    minClose,
    maxClose,
    dVc, dV,
    dATH
  } = option;
  return pipe(
     crAreaConfig({ spacingTop: 25 }),
     fAddTooltip(tooltipValueTdmyIf),
     fAddMinMax(dC, {
        minY: minClose,
        maxY: maxClose,
        isNotZoomToMinMax,
        isDrawDeltaExtrems
     }),
     fAddMiniVolume({ id, dColumn: dVc, dVolume: dV }),
     fAddMiniATH({ id, data: dATH }),
     _fSetStockSerias(seriaType, seriaWidth, dC, dH, dL, dO)
  );
}
