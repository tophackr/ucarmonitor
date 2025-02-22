'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { Car } from 'lucide-react'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'

export function CarsButton() {
    const props = useButtonClick(pagesRoute.cars)

    return (
        <IconButton
            size={'m'}
            {...props}
        >
            <Car />
        </IconButton>
    )
}
