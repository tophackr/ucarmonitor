'use client'

import { useState } from 'react'
import { getCars, useCars } from '@/entities/car'
import { useClientOnce } from '@/shared/hooks'
import { CarsContent } from './CarsContent'
import { CreateCarButton } from './CreateCarButton'

export function HomePage() {
    const { setCars } = useCars()

    const [isLoading, setIsLoading] = useState(false)

    useClientOnce(() => {
        setIsLoading(true)

        getCars().then(setCars)

        setIsLoading(false)
    })

    return (
        <>
            <CarsContent isLoading={isLoading} />

            <CreateCarButton />
        </>
    )
}
