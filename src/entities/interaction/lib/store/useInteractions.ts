import { useCallback } from 'react'
import { useActions, useAppSelector } from '@/shared/lib'
import type { IInteraction } from '../../model/Interaction'
import { setInteractions as setInteractionsCloud } from './interaction'
import {
    interactionsSliceActions,
    selectInteractions
} from './interaction.slice'

export function useInteractions() {
    const interactions = useAppSelector(selectInteractions)
    const { setInteractions } = useActions(interactionsSliceActions)

    const setInteractionWithCloud = useCallback(
        async (items: IInteraction[]) => {
            setInteractions(items)
            await setInteractionsCloud(items)
        },
        [setInteractions]
    )

    return {
        interactions,
        setInteractions,
        setInteractionWithCloud
    }
}
