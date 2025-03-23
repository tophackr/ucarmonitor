import type { IInteraction, InteractionCategory } from '@/entities/interaction'
import type { InteractionDataProps } from '../types/InteractionData'

export function calcInteractionData(
    interactions: IInteraction[]
): InteractionDataProps {
    const categoryCount = interactions.reduce(
        (acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + (item.amount ?? 0)
            return acc
        },
        {} as Record<InteractionCategory, number>
    )
    const totalCount = Object.values(categoryCount).reduce(
        (acc, value) => acc + value,
        0
    )

    const data = Object.entries(categoryCount).sort(
        ([, valueA], [, valueB]) => valueB - valueA
    )

    return { totalCount, data }
}
