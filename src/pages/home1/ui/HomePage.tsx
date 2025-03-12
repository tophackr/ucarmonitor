'use client'

import { BackButton } from '@/shared/ui/tma'
import { CarCreateButton } from './CarCreateButton'
import { CarsContent } from './CarsContent'
import { useLoadingCars } from './hooks/useLoadingCars'

export function HomePage() {
    const { isLoading } = useLoadingCars()

    return (
        <>
            <BackButton hide={true} />

            <CarsContent isLoading={isLoading} />

            <CarCreateButton />
        </>
    )
}
