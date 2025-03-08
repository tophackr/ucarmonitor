'use client'

import { useButtonClick } from '@/shared/lib'
import { SaveButton } from '@/shared/ui'
import { useSaveCar } from './hooks/useSaveCar'

export function SaveCarButton() {
    const { saveCallback } = useSaveCar()

    const props = useButtonClick({ callback: saveCallback })

    return <SaveButton {...props} />
}
