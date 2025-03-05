import { useActions, useAppSelector } from '@/shared/lib'
import { setCars as setCarsCloud } from '../lib/store/cars'
import { carsSliceActions, selectCars } from '../lib/store/cars.slice'
import type { ICar } from '../model/Car'

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
