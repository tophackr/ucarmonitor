'use client'

import type { JSX } from 'react'
import { BackButton } from '@/shared/ui/tma'
import { CarCreateButton } from './CarCreateButton'
import { CarsContent } from './CarsContent'

export function HomePage(): JSX.Element {
    return (
        <>
            <BackButton hide={true} />

            <CarsContent />

            <CarCreateButton />
        </>
    )
}
