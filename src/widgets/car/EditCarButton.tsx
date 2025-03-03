import type { CarProps } from '@/entities/cars'
import { EditButton } from '@/entities/edit'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'

export function EditCarButton({ car }: CarProps) {
    const props = useButtonClick({ route: pagesRoute.carEdit(car.id) })

    return <EditButton {...props} />
}
