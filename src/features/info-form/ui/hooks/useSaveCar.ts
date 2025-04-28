import { useCallback } from 'react'
import {
    type CarReqData,
    type CarResData,
    useCreateCarMutation,
    useUpdateCarMutation
} from '@/entities/car'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'

interface UseSaveCarReturns {
    saveCallback: (data: CarReqData | CarResData) => void
}

export function useSaveCar(): UseSaveCarReturns {
    const [createMutation] = useCreateCarMutation()
    const [updateMutation] = useUpdateCarMutation()
    const router = useRouter()

    const saveCallback = useCallback(
        (body: CarReqData | CarResData) => {
            return (
                'id' in body
                    ? updateMutation({ carId: body.id, body })
                    : createMutation({ body })
            ).then(({ data, error }) => {
                if (data?.id) {
                    router.push(pagesRoute.carId(data.id))
                }
                if (error) console.error('useSaveCar', error)
            })
        },
        [createMutation, router, updateMutation]
    )

    return { saveCallback }
}
