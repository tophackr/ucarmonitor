'use client'

import { use } from 'react'
import { useCarContext } from '@/entities/car'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/types'

export function Page({ params }: ParamsProps<CategoryProps>) {
    const { category } = use(params)
    const { car } = useCarContext()

    /* if (action === 'new') {
        return <CarActionForm />
    } */

    return (
        <h1>
            Просмотр {category}, ID: для автомобиля {car.id}
        </h1>
    )
}
