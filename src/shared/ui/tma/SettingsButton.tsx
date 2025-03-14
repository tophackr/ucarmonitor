'use client'

import { settingsButton, useSignal } from '@telegram-apps/sdk-react'
import { IconButton } from '@telegram-apps/telegram-ui'
import { type JSX, useCallback, useEffect } from 'react'
import { usePathname, useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { Icon } from '@/shared/ui/icon'

function visibleOnSettingsPage(
    visible: boolean,
    pathname: string | null
): boolean {
    return visible && pathname === pagesRoute.settings
}

function notVisibleOnPage(visible: boolean, pathname: string | null): boolean {
    return !visible && pathname !== pagesRoute.settings
}

export function SettingsButton(): JSX.Element | false {
    const router = useRouter()
    const pathname = usePathname()

    const isVisible = useSignal(settingsButton.isVisible)

    const onClick = useCallback(
        () => router.push(pagesRoute.settings),
        [router]
    )

    useEffect(() => {
        const offClick = settingsButton.onClick(onClick)

        return () => {
            offClick()
        }
    }, [onClick])

    useEffect(() => {
        if (visibleOnSettingsPage(isVisible, pathname)) {
            settingsButton.hide()
        } else if (notVisibleOnPage(isVisible, pathname)) {
            settingsButton.show()
        }
    }, [isVisible, pathname])

    return (
        isVisible && (
            <IconButton
                size={'m'}
                onClick={onClick}
            >
                <Icon name={'Settings'} />
            </IconButton>
        )
    )
}
