'use client'

import { IconButton } from '@telegram-apps/telegram-ui'
import { Settings } from 'lucide-react'
import { useButtonClick } from '@/shared/hooks'
import { pagesRoute } from '@/shared/routes'

export function SettingsButton() {
    const props = useButtonClick(pagesRoute.settings)

    return (
        <IconButton
            size={'m'}
            {...props}
        >
            <Settings />
        </IconButton>
    )
}
