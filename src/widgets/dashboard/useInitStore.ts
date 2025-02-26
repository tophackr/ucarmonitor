'use client'

import { getCars, useCars } from '@/entities/cars'
import { useClientOnce } from '@/shared/hooks'

export function useInitStore() {
    const { setCars } = useCars()

    useClientOnce(() => {
        getCars().then(setCars)
    })
}
