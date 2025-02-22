import { useAppSelector } from '@/shared/store'
import type { ICar } from '../types/Car'
import { setCars as setCarsCloud } from './cars'
import { selectCars } from './cars.slice'
import { useCarsActions } from './useCarsActions'

export function useCars() {
    const cars = useAppSelector(selectCars)
    const { setCars } = useCarsActions()

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
