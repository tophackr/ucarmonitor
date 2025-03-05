import { useCallback } from 'react'
import { type ICar, useCars } from '@/entities/car'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { generateUniqueId, removeEmptyValues } from '@/shared/utils'

interface UseSaveCarReturns {
    saveCallback: (data: ICar) => void
}

export function useSaveCar(): UseSaveCarReturns {
    const { cars, setCarsWithCloud } = useCars()
    const router = useRouter()

    const saveCallback = useCallback(
        (data: ICar) => {
            let structureCar = structuredClone(cars)

            const emptyData = removeEmptyValues(data)

            if (!structureCar.length) {
                emptyData['default'] = true
            }

            if (emptyData.default) {
                structureCar = structureCar.map(car =>
                    car.default && car.id !== emptyData.id
                        ? removeEmptyValues({ ...car, default: undefined })
                        : car
                )
            }

            if ('id' in emptyData) {
                const updatedCars = structureCar.map(car =>
                    car.id === emptyData.id ? emptyData : car
                )

                setCarsWithCloud(updatedCars)
            } else {
                Object.assign(emptyData, { id: generateUniqueId() })

                setCarsWithCloud([...structureCar, emptyData])
            }

            router.push(pagesRoute.carId(emptyData.id))
        },
        [cars, router, setCarsWithCloud]
    )

    return { saveCallback }
}
