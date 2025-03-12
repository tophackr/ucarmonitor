'use client'

import { useMemo } from 'react'
import { findById } from '@/shared/lib/id'
import { useCars } from '../../store/useCars'

export function useFindCar(carId: string) {
    const { cars } = useCars()

    return useMemo(() => findById(cars, carId), [carId, cars])
}
