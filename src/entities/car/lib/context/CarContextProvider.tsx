'use client'

import { notFound } from 'next/navigation'
import { type PropsWithChildren, memo, use } from 'react'
import {
    InteractionCategory,
    useSortedInteractions
} from '@/entities/interaction/@x/car'
import type { ParamsProps } from '@/shared/lib/dom'
import type { CarIdProps } from '../../model/Props'
import { CarContext } from './CarContext'
import { useFindCar } from './hooks/useFindCar'

export const CarContextProvider = memo(function CarContextProvider({
    children,
    params
}: PropsWithChildren<ParamsProps<CarIdProps>>) {
    const { carId } = use(params)

    const car = useFindCar(carId)

    if (!car) {
        notFound()
    }

    const sortedInteractions = useSortedInteractions()
    const lastMileage = sortedInteractions.find(
        i => i.carId === car.id && i.type === InteractionCategory.mileage
    )

    const mileage = lastMileage ? lastMileage.mileage : car.mileage

    return (
        <CarContext.Provider value={{ car, mileage }}>
            {children}
        </CarContext.Provider>
    )
})
