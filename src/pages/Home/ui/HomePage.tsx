'use client'

import { useCallback, useState } from 'react'
import { getCars, useCars } from '@/entities/car'
import { useClientOnce } from '@/shared/lib'
import { CarsContent } from './CarsContent'
import { CreateCarButton } from './CreateCarButton'

export function HomePage() {
    const { setCars } = useCars()

    const [isLoading, setIsLoading] = useState(false)

    const loadingCars = useCallback(async () => {
        setIsLoading(true)

        const cars = await getCars()

        setCars(cars)

        setIsLoading(false)
    }, [setCars])

    useClientOnce(() => loadingCars())

    return (
        <>
            <CarsContent isLoading={isLoading} />

            <CreateCarButton />
        </>
    )
}
