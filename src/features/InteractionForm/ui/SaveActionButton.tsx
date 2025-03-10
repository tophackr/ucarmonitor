'use client'

import { memo } from 'react'
import { useCarContext } from '@/entities/car'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { SaveButton, useVisibleSaveButton } from '@/shared/ui/action'
import { useSaveAction } from './hooks/useSaveAction'

export const SaveActionButton = memo(function SaveActionButton() {
    const { car } = useCarContext()

    const { saveCallback } = useSaveAction()

    const props = useButtonClick({
        route: pagesRoute.carId(car.id),
        callback: saveCallback
    })

    const { isVisible } = useVisibleSaveButton(true)

    return (
        <SaveButton
            {...props}
            isVisible={isVisible}
        />
    )
})
