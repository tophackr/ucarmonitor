'use client'

import { notFound } from 'next/navigation'
import { use, useMemo } from 'react'
import { type CarIdProps, type CarSlugProps, useCars } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export function CarSlugPage({
    params
}: ParamsProps<CarIdProps & CarSlugProps>) {
    const { carId, slug } = use(params)
    const { cars } = useCars()

    const car = useMemo(() => cars.find(car => car.id === carId), [carId, cars])

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
