import { useCallback } from 'react'
import { useCars } from '@/entities/cars'

export function useDeleteCar(carId: string) {
    const { cars, setCarsWithCloud } = useCars()

    const deleteCallback = useCallback(() => {
        const updatedCars = cars.filter(car => car.id !== carId)

        return setCarsWithCloud(updatedCars)
    }, [carId, cars, setCarsWithCloud])

    return { deleteCallback }
}
