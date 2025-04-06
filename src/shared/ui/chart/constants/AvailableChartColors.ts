import type { AvailableChartColorsKeys } from '../types/AvailableChartColorsKeys'
import { chartColors } from './chartColors'

export const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
    chartColors
) as Array<AvailableChartColorsKeys>
