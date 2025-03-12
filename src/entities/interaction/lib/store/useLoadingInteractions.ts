'use client'

import { useCallback, useState } from 'react'
import { useEffectOnce } from '@/shared/lib/dom'
import { getInteractions } from './interaction'
import { useInteractions } from './useInteractions'

export function useLoadingInteractions() {
    const { setInteractions } = useInteractions()

    const [isLoading, setIsLoading] = useState(false)

    const loadingInteractions = useCallback(async () => {
        setIsLoading(true)

        const interactions = await getInteractions()

        setInteractions(interactions)

        setIsLoading(false)
    }, [setInteractions])

    useEffectOnce(loadingInteractions)

    return { isLoading }
}
