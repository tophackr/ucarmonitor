import { useCallback } from 'react'
import { useCarContext } from '@/entities/car'
import { type IInteraction, useInteractions } from '@/entities/interaction'
import { generateUniqueId, removeEmptyValues } from '@/shared/lib'

export function useSaveAction() {
    const { interactions, setInteractionWithCloud } = useInteractions()

    const { car } = useCarContext()

    const saveCallback = useCallback(
        (data: IInteraction) => {
            const structureInteractions = structuredClone(interactions)

            const emptyData = removeEmptyValues(data, true)

            emptyData['carId'] = car.id

            if ('id' in emptyData) {
                const updatedInteractions = structureInteractions.map(
                    interaction =>
                        interaction.id === emptyData.id
                            ? emptyData
                            : interaction
                )

                setInteractionWithCloud(updatedInteractions)
            } else {
                Object.assign(emptyData, { id: generateUniqueId() })

                setInteractionWithCloud([...structureInteractions, emptyData])
            }
        },
        [car.id, interactions, setInteractionWithCloud]
    )

    return { saveCallback }
}
