'use client'

import type { CarIdProps } from '@/entities/cars'
import { DeleteButton } from '@/shared/ui'
import { useDeleteCar } from '../hooks/useDeleteCar'

export function DeleteCarButton({ carId }: CarIdProps) {
    const deleteCallback = useDeleteCar(carId)

    return <DeleteButton callback={deleteCallback} />
}
