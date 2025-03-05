'use client'

import type { CarIdProps } from '@/entities/car'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'
import { DeleteButton } from '@/shared/ui'
import { useDeleteCar } from '../hooks/useDeleteCar'

export function DeleteCarButton({ carId }: CarIdProps) {
    const { deleteCallback } = useDeleteCar(carId)

    const props = useButtonClick({
        route: pagesRoute.home,
        callback: deleteCallback
    })

    return <DeleteButton {...props} />
}
