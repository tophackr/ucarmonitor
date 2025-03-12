'use client'

import { BackButton } from '@/shared/ui/tma'
import { CarCreateButton } from './CarCreateButton'
import { CarsContent } from './CarsContent'

export function HomePage() {
    return (
        <>
            <BackButton hide={true} />

            <CarsContent />

            <CarCreateButton />
        </>
    )
}
