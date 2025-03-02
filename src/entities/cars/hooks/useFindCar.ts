'use client'

import { useMemo } from 'react'
import { findById } from '@/shared/utils'
import { useCars } from './useCars'

export function useFindCar(carId: string) {
    const { cars } = useCars()

    return useMemo(() => findById(cars, carId), [carId, cars])
}
