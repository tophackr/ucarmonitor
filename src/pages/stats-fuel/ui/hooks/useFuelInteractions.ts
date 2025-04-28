import { useMemo } from 'react'
import { useCarContext } from '@/entities/car'
import {
    type FuelInteractionData,
    InteractionCategory,
    useFindAllInteractionsQuery
} from '@/entities/interaction'

export function useFuelInteractions(): FuelInteractionData[] {
    const { car } = useCarContext()
    const {
        data: interactions,
        isError,
        error
    } = useFindAllInteractionsQuery({
        carId: car.id
    })

    if (isError) console.error('useFuelInteractions', error)

    return useMemo(
        () =>
            (interactions ?? []).filter(
                interaction => interaction.type === InteractionCategory.fuel
            ) as unknown as FuelInteractionData[],
        [interactions]
    )
}
