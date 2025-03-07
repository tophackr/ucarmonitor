'use client'

import { useCarContext } from '@/entities/car'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { SaveButton } from '@/shared/ui/action'
import { useSaveAction } from './hooks/useSaveAction'

export function SaveActionButton() {
    const { car } = useCarContext()

    const { saveCallback } = useSaveAction()

    const props = useButtonClick({
        route: pagesRoute.carId(car.id),
        callback: saveCallback
    })

    return <SaveButton {...props} />
}
