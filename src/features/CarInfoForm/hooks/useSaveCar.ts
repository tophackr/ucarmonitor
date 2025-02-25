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

    const saveCallback = (data: ICar) => {
        const emptyData = removeEmptyValues(data)

        emptyData['id'] = uuid()

        setCarsWithCloud([...cars, emptyData])

        router.push(pagesRoute.carId(emptyData.id))
    }

    return { callback: saveCallback }
}
