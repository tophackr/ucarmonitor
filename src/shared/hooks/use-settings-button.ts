'use client'

import { settingsButton, useSignal } from '@telegram-apps/sdk-react'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { pagesRoute } from '@shared/routes/pages.route'

function visibleOnSettingsPage(
    visible: boolean,
    pathname: string | null
): boolean {
    return visible && pathname === pagesRoute.settings
}

function notVisibleOnPage(visible: boolean, pathname: string | null): boolean {
    return !visible && pathname !== pagesRoute.settings
}

export function useSettingsButton() {
    const router = useRouter()
    const pathname = usePathname()
    const isVisible = useSignal(settingsButton.isVisible)

    const onButtonClick = useCallback(() => {
        router.push(pagesRoute.settings)
    }, [router])

    useEffect(() => {
        const offClick = settingsButton.onClick(onButtonClick)

        return () => {
            offClick()
        }
    }, [onButtonClick])

    useEffect(() => {
        if (visibleOnSettingsPage(isVisible, pathname)) {
            settingsButton.hide()
        } else if (notVisibleOnPage(isVisible, pathname)) {
            settingsButton.show()
        }
    }, [isVisible, pathname])
}
