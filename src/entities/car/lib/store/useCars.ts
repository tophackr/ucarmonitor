import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useCallback } from 'react'
import { useActions, useAppSelector } from '@/shared/lib/store'
import type { ICar } from '../../model/Car'
import { setCars as setCarsCloud } from './cars'
import { carsSliceActions, selectCars } from './cars.slice'

interface UseCarsReturn {
    cars: ICar[]
    setCars: ActionCreatorWithPayload<ICar[], 'cars/setCars'>
    setCarsWithCloud: (cars: ICar[]) => Promise<void>
}

export function useCars(): UseCarsReturn {
    const cars = useAppSelector(selectCars)
    const { setCars } = useActions(carsSliceActions)

    const setCarsWithCloud = useCallback(
        async (cars: ICar[]) => {
            setCars(cars)
            await setCarsCloud(cars)
        },
        [setCars]
    )

    return {
        cars,
        setCars,
        setCarsWithCloud
    }
}
