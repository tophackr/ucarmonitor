import { memo } from 'react'
import type { CarProps } from '@/entities/car'
import { EditButton } from '@/entities/edit'
import { useButtonClick } from '@/shared/lib'
import { pagesRoute } from '@/shared/routes'

export const EditCarButton = memo(function EditCarButton({ car }: CarProps) {
    const props = useButtonClick({ route: pagesRoute.carEdit(car.id) })

    return <EditButton {...props} />
})
