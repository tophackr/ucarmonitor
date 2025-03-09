'use client'

import { useBackButton } from '@/shared/ui/tma'
import { CarsContent } from './CarsContent'
import { useCarCreateButton } from './hooks/useCarCreateButton'
import { useLoadingCars } from './hooks/useLoadingCars'

export function HomePage() {
    const { isLoading } = useLoadingCars()

    useBackButton({ hide: true })

    useCarCreateButton()

    return <CarsContent isLoading={isLoading} />
}
