'use client'

import { useMemo } from 'react'
import { useInteractions } from '../../store/useInteractions'

export function useSortedInteractions() {
    const { interactions } = useInteractions()

    return useMemo(
        () =>
            [...interactions].sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
        [interactions]
    )
}
