'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'
import { LucideIcon } from '@/shared/ui'

export function SettingsButton() {
    const props = useButtonClick(pagesRoute.settings)

    return (
        <IconButton
            size={'m'}
            {...props}
        >
            <LucideIcon name={'Settings'} />
        </IconButton>
    )
}
