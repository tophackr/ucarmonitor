'use client'

import { useMemo } from 'react'
import { findById } from '@/shared/lib/id'
import type { ICar } from '../../../model/Car'
import { useCars } from '../../store/useCars'

export function useFindCar(carId: string): ICar | undefined {
    const { cars } = useCars()

    return useMemo(() => findById(cars, carId), [carId, cars])
}
