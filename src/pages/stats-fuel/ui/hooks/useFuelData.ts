'use client'

import { useMemo } from 'react'
import type { IBaseInteraction, IFuelInteraction } from '@/entities/interaction'
import type { FuelData } from '../types/FuelData'
import { useFuelInteractions } from './useFuelInteractions'

interface UseFuelDataReturn {
    fuelData: FuelData
}

export function useFuelData(): UseFuelDataReturn {
    const interactions = useFuelInteractions()

    const fuelData = useMemo(() => {
        let previousMileage: number = 0

        return interactions.reduce(
            (acc, interaction) => {
                const { capacity, amount, mileage } =
                    interaction as IBaseInteraction & IFuelInteraction

                if (previousMileage === 0) {
                    previousMileage = mileage
                } else if (mileage) {
                    acc.distance += previousMileage - mileage

                    if (capacity) acc.fuel += Number(capacity)
                    if (amount) acc.cost += Number(amount)
                }

                return acc
            },
            { distance: 0, fuel: 0, cost: 0 } as FuelData
        )
    }, [interactions])

    return { fuelData }
}
