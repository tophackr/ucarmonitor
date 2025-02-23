'use client'

import { useMemo } from 'react'
import { CarCell, carsMock } from '@/entities/cars'

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

    return renderCars
}
