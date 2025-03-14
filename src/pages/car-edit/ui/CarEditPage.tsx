'use client'

import type { JSX } from 'react'
import { InfoForm } from '@/features/info-form'
import { useCarContext } from '@/entities/car'
import { BackButton } from '@/shared/ui/tma'

export function CarEditPage(): JSX.Element {
    const { car, mileage } = useCarContext()

    return (
        <>
            <BackButton />

            <InfoForm
                car={car}
                mileage={mileage}
            />
        </>
    )
}
