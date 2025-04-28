'use client'

import { type JSX, memo, useCallback } from 'react'
import { type CarIdProps, useDeleteCarMutation } from '@/entities/car'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { DeleteButton } from '@/shared/ui/action'

export const DeleteCarButton = memo(function DeleteCarButton({
    carId
}: CarIdProps): JSX.Element {
    const [deleteMutation] = useDeleteCarMutation()

    const deleteCallback = useCallback(
        () => deleteMutation({ carId }),
        [carId, deleteMutation]
    )

    const props = useButtonClick({
        route: pagesRoute.home,
        callback: deleteCallback
    })

    return <DeleteButton {...props} />
})
