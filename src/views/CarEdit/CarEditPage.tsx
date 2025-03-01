'use client'

import { CarInfoForm } from '@/features/CarInfoForm'
import { useCarContext } from '@/entities/cars'
import { BackButton } from '@/shared/ui'

export function CarEditPage() {
    const { car } = useCarContext()

    return (
        <>
            <BackButton />

            <CarInfoForm car={car} />
        </>
    )
}
