import type { CarProps } from '@/entities/car'
import { useEditButton } from '@/entities/edit'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'

export function useEditCarButton({ car }: CarProps) {
    const props = useButtonClick({ route: pagesRoute.carEdit(car.id) })

    useEditButton(props)
}
