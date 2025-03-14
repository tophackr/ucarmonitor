import { useCallback } from 'react'
import { useCars } from '@/entities/car'

interface UseDeleteCarReturn {
    deleteCallback: () => Promise<void>
}

export function useDeleteCar(carId: string): UseDeleteCarReturn {
    const { cars, setCarsWithCloud } = useCars()

    const deleteCallback = useCallback(() => {
        const updatedCars = cars.filter(car => car.id !== carId)

        return setCarsWithCloud(updatedCars)
    }, [carId, cars, setCarsWithCloud])

    return { deleteCallback }
}
