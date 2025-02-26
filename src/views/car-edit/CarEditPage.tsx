'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { CarInfoForm } from '@/features/CarInfoForm'
import { type CarIdProps, useFindCar } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export function CarEditPage({ params }: ParamsProps<CarIdProps>) {
    const { carId } = use(params)
    const car = useFindCar(carId)

    if (!car) {
        notFound()
    }

    return <CarInfoForm car={car} />
}
