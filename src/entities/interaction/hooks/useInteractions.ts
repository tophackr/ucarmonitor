import { useCallback } from 'react'
import { useActions, useAppSelector } from '@/shared/lib'
import { setInteractions as setInteractionsCloud } from '../lib/store/interaction'
import {
    interactionsSliceActions,
    selectInteractions
} from '../lib/store/interaction.slice'
import type { IInteraction } from '../model/Interaction'

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
