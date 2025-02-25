'use client'

import { notFound } from 'next/navigation'
import { use, useMemo } from 'react'
import { CarWidget } from '@/widgets/car'
import { type CarIdProps, useCars } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export function CarIdPage({ params }: ParamsProps<CarIdProps>) {
    const { carId } = use(params)
    const { cars } = useCars()

    const car = useMemo(() => cars.find(car => car.id === carId), [carId, cars])

    if (!car) {
        notFound()
    }

    return <CarWidget car={car} />
}
