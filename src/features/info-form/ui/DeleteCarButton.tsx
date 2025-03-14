'use client'

import { type JSX, memo } from 'react'
import type { CarIdProps } from '@/entities/car'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { DeleteButton } from '@/shared/ui/action'
import { useDeleteCar } from './hooks/useDeleteCar'

export const DeleteCarButton = memo(function DeleteCarButton({
    carId
}: CarIdProps): JSX.Element {
    const { deleteCallback } = useDeleteCar(carId)

    const props = useButtonClick({
        route: pagesRoute.home,
        callback: deleteCallback
    })

    return <DeleteButton {...props} />
})
