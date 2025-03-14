import { type JSX, memo } from 'react'
import { StatsList, StatsParts } from '@/widgets/stats-list'
import { StatsCategory, type StatsCategoryProps } from '@/entities/stat'
import type { ParamsProps } from '@/shared/lib/dom'
import { BackButton } from '@/shared/ui/tma'

export const StatsPage = memo(async function StatsPage({
    params
}: ParamsProps<StatsCategoryProps>): Promise<JSX.Element> {
    const { category } = await params

    const components: Record<StatsCategory, () => JSX.Element> = {
        [StatsCategory.cost]: StatsList,
        [StatsCategory.list]: StatsList,
        [StatsCategory.fuel]: StatsList,
        [StatsCategory.parts]: StatsParts,
        [StatsCategory.tripCost]: StatsList
    }

    const SelectedComponent = components[category]

    return (
        <>
            <BackButton />

            <SelectedComponent />
        </>
    )
})
