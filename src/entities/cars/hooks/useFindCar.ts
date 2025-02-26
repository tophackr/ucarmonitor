'use client'

import { useMemo } from 'react'
import { findCar } from '../utils/findCar'
import { useCars } from './useCars'

export function useFindCar(carId: string) {
    const { cars } = useCars()

    return useMemo(() => findCar(cars, carId), [carId, cars])
}
