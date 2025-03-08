'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { Icon } from '@/shared/ui/icon'

export function CarsButton() {
    const props = useButtonClick({ route: pagesRoute.home })

    return (
        <IconButton
            size={'m'}
            {...props}
        >
            <Icon name={'Car'} />
        </IconButton>
    )
}
