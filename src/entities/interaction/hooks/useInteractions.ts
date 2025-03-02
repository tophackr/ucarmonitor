import { useActions, useAppSelector } from '@/shared/store'
import { setInteractions as setInteractionsCloud } from '../store/interaction'
import {
    interactionsSliceActions,
    selectInteractions
} from '../store/interaction.slice'
import type { IInteraction } from '../types'

export function useInteractions() {
    const interactions = useAppSelector(selectInteractions)
    const { setInteractions } = useActions(interactionsSliceActions)

    const setInteractionWithCloud = async (items: IInteraction[]) => {
        setInteractions(items)
        await setInteractionsCloud(items)
    }

    return {
        interactions,
        setInteractions,
        setInteractionWithCloud
    }
}
