'use client'

import { notFound } from 'next/navigation'
import { use } from 'react'
import { type CarIdProps, type CarSlugProps, useFindCar } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export function CarSlugPage({
    params
}: ParamsProps<CarIdProps & CarSlugProps>) {
    const { carId, slug } = use(params)
    const car = useFindCar(carId)

    if (!car) {
        notFound()
    }

    const [category, action] = slug

    if (!action) {
        return (
            <h1>
                Категория: {category} для автомобиля {carId}
            </h1>
        )
    }

    if (action === 'new') {
        return (
            <h1>
                Создание нового {category} для автомобиля {carId}
            </h1>
        )
    }

    return (
        <h1>
            Просмотр {category}, ID: {action} для автомобиля {carId}
        </h1>
    )
}
