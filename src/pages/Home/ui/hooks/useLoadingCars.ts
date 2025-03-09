'use client'

import { useCallback, useState } from 'react'
import { getCars, useCars } from '@/entities/car'
import { useEffectOnce } from '@/shared/lib/dom'

export function useLoadingCars() {
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
