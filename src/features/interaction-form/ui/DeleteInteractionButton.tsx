'use client'

import { type JSX, memo } from 'react'
import type { CarIdProps } from '@/entities/car'
import type { InteractionIdProps } from '@/entities/interaction'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { DeleteButton } from '@/shared/ui/action'
import { useDeleteInteraction } from './hooks/useDeleteInteraction'

export const DeleteInteractionButton = memo(function DeleteInteractionButton({
    carId,
    interactionId
}: CarIdProps & InteractionIdProps): JSX.Element {
    const { callback } = useDeleteInteraction(interactionId, carId)

    const props = useButtonClick({
        route: pagesRoute.carId(carId),
        callback
    })

    return <DeleteButton {...props} />
})
