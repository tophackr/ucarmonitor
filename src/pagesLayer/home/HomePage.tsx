'use client'

import { useMemo } from 'react'
import { CarCell, carsMock } from '@/entities/cars'
import { HomeMainButton } from './HomeMainButton'

export function HomePage() {
    const renderCars = useMemo(
        () =>
            carsMock.map(car => (
                <CarCell
                    key={car.id}
                    car={car}
                />
            )),
        []
    )

    return (
        <>
            {renderCars}

            <HomeMainButton />
        </>
    )
}
