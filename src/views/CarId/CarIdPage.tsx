'use client'

import { CarWidget } from '@/widgets/car'
import { useCarContext } from '@/entities/cars'

export function CarIdPage() {
    const { car } = useCarContext()

    return <CarWidget car={car} />
}
