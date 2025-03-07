'use client'

import { memo, use } from 'react'
import { useCarContext } from '@/entities/car'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/types'

export const CategoryPage = memo(function CategoryPage({
    params
}: ParamsProps<CategoryProps>) {
    const { category } = use(params)
    const { car } = useCarContext()

    return (
        <h1>
            Просмотр {category}, ID: для автомобиля {car.id}
        </h1>
    )
})
