import type { AvailableChartColorsKeys } from '../types/AvailableChartColorsKeys'

export function constructCategoryColors(
    categories: string[],
    colors: AvailableChartColorsKeys[]
): Map<string, AvailableChartColorsKeys> {
    const categoryColors = new Map<string, AvailableChartColorsKeys>()

    categories.forEach((category, index) => {
        categoryColors.set(category, colors[index % colors.length])
    })

    return categoryColors
}
