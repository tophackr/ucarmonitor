'use client'

import { CarWidget } from '@/widgets/car'
import { useCarContext } from '@/entities/cars'
import { BackButton } from '@/shared/ui'

export function CarIdPage() {
    const { car } = useCarContext()

    return (
        <>
            <BackButton />

            <CarWidget car={car} />
        </>
    )
}
