'use client'

import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useCallback } from 'react'
import { useActions, useAppSelector } from '@/shared/lib/store'
import type { IInteraction } from '../../../model/Interaction'
import { setInteractions as setInteractionsCloud } from '../interaction'
import {
    interactionsSliceActions,
    selectInteractions
} from '../interaction.slice'

interface UseInteractionsReturn {
    interactions: IInteraction[]
    setInteractions: ActionCreatorWithPayload<
        IInteraction[],
        'interaction/setInteractions'
    >
    setInteractionWithCloud: (items: IInteraction[]) => Promise<void>
}

export function useInteractions(): UseInteractionsReturn {
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
