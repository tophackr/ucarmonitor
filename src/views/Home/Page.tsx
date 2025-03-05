'use client'

import { useMemo } from 'react'
import { CarCell, useCars } from '@/entities/car'
import { CreateCarButton } from './ui/CreateCarButton'

export function Page() {
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
