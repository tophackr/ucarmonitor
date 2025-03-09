'use client'

import { InfoForm } from '@/features/InfoForm'
import { useCarContext } from '@/entities/car'
import { useBackButton } from '@/shared/ui/tma'

export function CarEditPage() {
    const { car } = useCarContext()

    useBackButton()

    return <InfoForm car={car} />
}
