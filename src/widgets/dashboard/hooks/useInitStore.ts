'use client'

import { getCars, useCars } from '@/entities/car'
import { getInteractions, useInteractions } from '@/entities/interaction'
import { useClientOnce } from '@/shared/hooks'

export function useInitStore() {
    const { setCars } = useCars()
    const { setInteractions } = useInteractions()

    useClientOnce(() => {
        getCars().then(setCars)
        getInteractions().then(setInteractions)
    })
}
