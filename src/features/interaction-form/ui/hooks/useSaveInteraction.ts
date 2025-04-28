import { useCallback } from 'react'
import { useCarContext } from '@/entities/car'
import {
    type InteractionReqData,
    type InteractionResData,
    useCreateInteractionMutation,
    useUpdateInteractionMutation
} from '@/entities/interaction'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'

interface UseSaveInteractionReturn {
    saveCallback: (data: InteractionReqData | InteractionResData) => void
}

export function useSaveInteraction(): UseSaveInteractionReturn {
    const router = useRouter()

    const [createMutation] = useCreateInteractionMutation()
    const [updateMutation] = useUpdateInteractionMutation()

    const { car } = useCarContext()

    const saveCallback = useCallback(
        (body: InteractionReqData | InteractionResData) =>
            ('id' in body
                ? updateMutation({
                      carId: car.id,
                      interactionId: body.id,
                      body
                  })
                : createMutation({ carId: car.id, body })
            ).then(({ data, error }) => {
                if (data?.id) {
                    router.push(pagesRoute.carId(car.id))
                }
                if (error) console.error('useSaveInteraction', error)
            }),
        [car.id, createMutation, router, updateMutation]
    )

    return { saveCallback }
}
