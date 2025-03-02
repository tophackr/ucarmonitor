'use client'

import { SaveButton } from '@/shared/ui'
import { useSaveCar } from '../hooks/useSaveCar'

export function SaveCarButton() {
    const { saveCallback } = useSaveCar()

    return <SaveButton callback={saveCallback} />
}
