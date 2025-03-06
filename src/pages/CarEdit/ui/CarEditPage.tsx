'use client'

import { InfoForm } from '@/features/InfoForm'
import { useCarContext } from '@/entities/car'
import { BackButton } from '@/shared/ui'

export function CarEditPage() {
    const { car } = useCarContext()

    return (
        <>
            <BackButton />

            <InfoForm car={car} />
        </>
    )
}
