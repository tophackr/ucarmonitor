'use client'

import { useMemo } from 'react'
import { CarCell, useCars } from '@/entities/cars'
import { CreateCarButton } from './CreateCarButton'

export function HomePage() {
    const { cars } = useCars()

    const renderCars = useMemo(
        () =>
            cars.map(car => (
                <CarCell
                    key={car.id}
                    car={car}
                />
            )),
        [cars]
    )

    return (
        <>
            {renderCars}

            <CreateCarButton />
        </>
    )
}
