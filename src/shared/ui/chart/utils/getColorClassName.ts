import { chartColors } from '../constants/chartColors'
import type { AvailableChartColorsKeys } from '../types/AvailableChartColorsKeys'
import type { ColorUtility } from '../types/ColorUtility'

export function getColorClassName(
    color: AvailableChartColorsKeys,
    type: ColorUtility
): string {
    const fallbackColor = {
        bg: 'bg-gray-500',
        stroke: 'stroke-gray-500',
        fill: 'fill-gray-500',
        text: 'text-gray-500'
    }

    return chartColors[color]?.[type] ?? fallbackColor[type]
}
