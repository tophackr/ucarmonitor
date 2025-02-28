'use client'

import { use } from 'react'
import { type CarSlugProps, useCarContext } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'

export function CarSlugPage({ params }: ParamsProps<CarSlugProps>) {
    const { slug } = use(params)
    const { car } = useCarContext()

    const [category, action] = slug

    if (!action) {
        return (
            <h1>
                Категория: {category} для автомобиля {car.id}
            </h1>
        )
    }

    if (action === 'new') {
        return (
            <h1>
                Создание нового {category} для автомобиля {car.id}
            </h1>
        )
    }

    return (
        <h1>
            Просмотр {category}, ID: {action} для автомобиля {car.id}
        </h1>
    )
}
