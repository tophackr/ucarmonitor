import { useAppSelector } from '@/shared/store'
import { setCars as setCarsCloud } from '../store/cars'
import { selectCars } from '../store/cars.slice'
import type { ICar } from '../types/Car'
import { useCarsActions } from './useCarsActions'

export function useCars() {
    const cars = useAppSelector(selectCars)
    const { setCars } = useCarsActions()

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
