'use client'

import type { CarIdProps } from '@/entities/cars'
import { DeleteButton as DB } from '@/shared/ui'
import { useDeleteCar } from '../hooks/useDeleteCar'

export function DeleteButton({ carId }: CarIdProps) {
    const deleteCallback = useDeleteCar(carId)

    return <DB callback={deleteCallback} />
}
