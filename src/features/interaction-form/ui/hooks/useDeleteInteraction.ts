import { useCallback } from 'react'
import { useInteractions } from '@/entities/interaction'

interface UseDeleteInteractionReturn {
    callback: () => Promise<void>
}

export function useDeleteInteraction(
    id: string,
    carId: string
): UseDeleteInteractionReturn {
    const { interactions, setInteractionWithCloud } = useInteractions()

    const callback = useCallback(() => {
        const updatedCars = interactions.filter(
            inter => !(inter.id === id && inter.carId === carId)
        )

        return setInteractionWithCloud(updatedCars)
    }, [carId, id, interactions, setInteractionWithCloud])

    return { callback }
}
