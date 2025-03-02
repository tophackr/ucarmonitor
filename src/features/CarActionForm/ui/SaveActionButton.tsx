'use client'

import { useCarContext } from '@/entities/cars'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'
import { SaveButton } from '@/shared/ui'
import { useSaveAction } from '../hooks/useSaveAction'

export function SaveActionButton() {
    const { car } = useCarContext()

    const { saveCallback } = useSaveAction()

    const props = useButtonClick({
        route: pagesRoute.carId(car.id),
        callback: saveCallback
    })

    return <SaveButton {...props} />
}
