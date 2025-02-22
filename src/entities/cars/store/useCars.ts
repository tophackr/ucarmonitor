import { useActions, useAppSelector } from '@/shared/store'
import type { ICar } from '../types/Car'
import { setCars as setCarsCloud } from './cars'
import { selectCars } from './cars.slice'

export function useCars() {
    const cars = useAppSelector(selectCars)
    const { setCars } = useActions()

    const setCarsWithCloud = (cars: ICar[]) => {
        setCars(cars)
        setCarsCloud(cars)
    }

    return {
        cars,
        setCars,
        setCarsWithCloud
    }
}
