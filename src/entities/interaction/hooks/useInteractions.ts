import { useActions, useAppSelector } from '@/shared/lib'
import { setInteractions as setInteractionsCloud } from '../lib/store/interaction'
import {
    interactionsSliceActions,
    selectInteractions
} from '../lib/store/interaction.slice'
import type { IInteraction } from '../model'

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
