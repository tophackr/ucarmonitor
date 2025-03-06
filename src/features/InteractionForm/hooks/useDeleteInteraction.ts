import { useCallback } from 'react'
import { useInteractions } from '@/entities/interaction'

export function useDeleteInteraction(id: string, carId: string) {
    const { interactions, setInteractionWithCloud } = useInteractions()

    const callback = useCallback(() => {
        const updatedCars = interactions.filter(
            inter => !(inter.id === id && inter.carId === carId)
        )

        return setInteractionWithCloud(updatedCars)
    }, [carId, id, interactions, setInteractionWithCloud])

    return { callback }
}
