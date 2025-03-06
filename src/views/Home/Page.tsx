'use client'

import { useMemo } from 'react'
import { CarCell, getCars, useCars } from '@/entities/car'
import { useClientOnce } from '@/shared/hooks'
import { CreateCarButton } from './ui/CreateCarButton'

export function Page() {
    const { cars, setCars } = useCars()

    useClientOnce(() => getCars().then(setCars))

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
