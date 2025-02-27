import { useCallback } from 'react'
import { useCars } from '@/entities/cars'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'

export function useDeleteCar(carId: string) {
    const { cars, setCarsWithCloud } = useCars()
    const router = useRouter()

    const deleteCallback = useCallback(() => {
        const updatedCars = cars.filter(car => car.id !== carId)

        setCarsWithCloud(updatedCars).then(() => router.push(pagesRoute.home))
    }, [carId, cars, router, setCarsWithCloud])

    return deleteCallback
}
