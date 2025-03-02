import { useActions, useAppSelector } from '@/shared/store'
import { setCars as setCarsCloud } from '../store/cars'
import { carsSliceActions, selectCars } from '../store/cars.slice'
import type { ICar } from '../types/Car'

export function useCars() {
    const cars = useAppSelector(selectCars)
    const { setCars } = useActions(carsSliceActions)

    const setCarsWithCloud = async (cars: ICar[]) => {
        setCars(cars)
        await setCarsCloud(cars)
    }

    return {
        cars,
        setCars,
        setCarsWithCloud
    }
}
