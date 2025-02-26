'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { CarWidget } from '@/widgets/car'
import { type CarIdProps, useFindCar } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export function CarIdPage({ params }: ParamsProps<CarIdProps>) {
    const { carId } = use(params)
    const car = useFindCar(carId)

    if (!car) {
        notFound()
    }

    return <CarWidget car={car} />
}
