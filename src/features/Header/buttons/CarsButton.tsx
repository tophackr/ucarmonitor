'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'
import { LucideIcon } from '@/shared/ui'

export function CarsButton() {
    const props = useButtonClick({ route: pagesRoute.home })

    return (
        <IconButton
            size={'m'}
            {...props}
        >
            <LucideIcon name={'Car'} />
        </IconButton>
    )
}
