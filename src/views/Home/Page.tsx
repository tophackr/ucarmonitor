'use client'

import { useState } from 'react'
import { getCars, useCars } from '@/entities/car'
import { useClientOnce } from '@/shared/hooks'
import { CreateCarButton } from './ui/CreateCarButton'
import { HomeContent } from './ui/HomeContent'

export function Page() {
    const { setCars } = useCars()

    const [isLoading, setIsLoading] = useState(false)

    useClientOnce(() => {
        setIsLoading(true)

        getCars().then(setCars)

        setIsLoading(false)
    })

    return (
        <>
            <HomeContent isLoading={isLoading} />

            <CreateCarButton />
        </>
    )
}
