'use client'

import { useMemo } from 'react'
import { findById } from '@/shared/utils'
import { useInteractions } from './useInteractions'

export function useFindInteraction(interactionId: string) {
    const { interactions } = useInteractions()

    return useMemo(
        () => findById(interactions, interactionId),
        [interactionId, interactions]
    )
}
