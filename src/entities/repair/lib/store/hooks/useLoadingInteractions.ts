'use client'

import { useCallback, useState } from 'react'
import { useEffectOnce } from '@/shared/lib/dom'
import { defaultRepair } from '../constants/default'
import { getRepairs } from '../repair'
import { useRepairs } from './useRepairs'

interface UseLoadingInteractionsReturn {
    isLoading: boolean
}

export function useLoadingRepairs(): UseLoadingInteractionsReturn {
    const { setRepairs } = useRepairs()

    const [isLoading, setIsLoading] = useState(false)

    const loadingRepairs = useCallback(async () => {
        setIsLoading(true)

        const repairs = await getRepairs()

        setRepairs(defaultRepair) //, repairs)

        setIsLoading(false)
    }, [setRepairs])

    useEffectOnce(loadingRepairs)

    return { isLoading }
}
