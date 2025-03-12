'use client'

import { useButtonClick } from '@/shared/lib/dom'
import { SaveButton, useVisibleSaveButton } from '@/shared/ui/action'
import { useSaveCar } from './hooks/useSaveCar'

export function SaveCarButton() {
    const { saveCallback } = useSaveCar()

    const props = useButtonClick({ callback: saveCallback })

    const { isVisible } = useVisibleSaveButton()

    return (
        <SaveButton
            {...props}
            isVisible={isVisible}
        />
    )
}
