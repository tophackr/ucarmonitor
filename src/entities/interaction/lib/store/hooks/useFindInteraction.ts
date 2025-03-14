'use client'

import { useMemo } from 'react'
import { findById } from '@/shared/lib/id'
import type { IInteraction } from '../../../model/Interaction'
import { useInteractions } from './useInteractions'

export function useFindInteraction(
    interactionId: string
): IInteraction | undefined {
    const { interactions } = useInteractions()

    return useMemo(
        () => findById(interactions, interactionId),
        [interactionId, interactions]
    )
}
