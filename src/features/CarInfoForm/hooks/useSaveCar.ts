import { useCallback } from 'react'
import { v7 as uuid } from 'uuid'
import { type ICar, useCars } from '@/entities/cars'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { removeEmptyValues } from '@/shared/utils'

interface UseSaveCarProps {
    callback: (data: ICar) => void
}

export function useSaveCar(): UseSaveCarProps {
    const { cars, setCarsWithCloud } = useCars()
    const router = useRouter()

    const saveCallback = useCallback(
        (data: ICar) => {
            const emptyData = removeEmptyValues(data)

            if (!cars.length) {
                emptyData['default'] = true
            }

            if ('id' in emptyData) {
                const updatedCars = cars.map(car =>
                    car.id === emptyData.id ? emptyData : car
                )

                setCarsWithCloud(updatedCars)
            } else {
                Object.assign(emptyData, { id: uuid() })

                setCarsWithCloud([...cars, emptyData])
            }

            router.push(pagesRoute.carId(emptyData.id))
        },
        [cars, router, setCarsWithCloud]
    )

    return { callback: saveCallback }
}
