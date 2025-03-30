'use client'

import {
    initDataUser,
    settingsButton,
    useSignal
} from '@telegram-apps/sdk-react'
import { Avatar } from '@telegram-apps/telegram-ui'
import { type JSX, useCallback, useEffect } from 'react'
import { usePathname, useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'

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

    const user = initDataUser()

    return (
        isVisible && (
            <Avatar
                src={user?.photo_url}
                acronym={user?.first_name.charAt(0)}
                onClick={onClick}
            />
        )
    )
}
