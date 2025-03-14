'use client'

import { useCallback, useState } from 'react'
import { useEffectOnce } from '@/shared/lib/dom'
import { getCars } from './cars'
import { useCars } from './useCars'

interface UseLoadingCarsReturn {
    isLoading: boolean
}

export function useLoadingCars(): UseLoadingCarsReturn {
    const { setCars } = useCars()

    const [isLoading, setIsLoading] = useState(false)

    const loadingCars = useCallback(async () => {
        setIsLoading(true)

        const cars = await getCars()

        setCars(cars)

        setIsLoading(false)
    }, [setCars])

    useEffectOnce(loadingCars)

    return { isLoading }
}
