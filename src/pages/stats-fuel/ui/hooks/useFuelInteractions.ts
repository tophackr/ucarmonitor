import { useMemo } from 'react'
import { useCarContext } from '@/entities/car'
import {
    InteractionCategory,
    useSortedInteractions
} from '@/entities/interaction'

export function useFuelInteractions() {
    const { car } = useCarContext()
    const interactions = useSortedInteractions({ carId: car.id })

    return useMemo(
        () =>
            interactions.filter(
                interaction => interaction.type === InteractionCategory.fuel
            ),
        [interactions]
    )
}
