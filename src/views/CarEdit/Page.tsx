'use client'

import { InfoForm } from '@/features/InfoForm'
import { useCarContext } from '@/entities/car'
import { BackButton } from '@/shared/ui'

export function Page() {
    const { car } = useCarContext()

    return (
        <>
            <BackButton />

            <InfoForm car={car} />
        </>
    )
}
