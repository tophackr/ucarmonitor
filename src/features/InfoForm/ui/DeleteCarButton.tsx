'use client'

import { memo } from 'react'
import type { CarIdProps } from '@/entities/car'
import { useButtonClick } from '@/shared/lib'
import { pagesRoute } from '@/shared/routes'
import { DeleteButton } from '@/shared/ui'
import { useDeleteCar } from './hooks/useDeleteCar'

export const DeleteCarButton = memo(function DeleteCarButton({
    carId
}: CarIdProps) {
    const { deleteCallback } = useDeleteCar(carId)

    const props = useButtonClick({
        route: pagesRoute.home,
        callback: deleteCallback
    })

    return <DeleteButton {...props} />
})
