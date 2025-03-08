import { useCallback } from 'react'
import { useActions, useAppSelector } from '@/shared/lib'
import type { ICar } from '../../model/Car'
import { setCars as setCarsCloud } from './cars'
import { carsSliceActions, selectCars } from './cars.slice'

export function useCars() {
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
