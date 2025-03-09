'use client'

import { backButton } from '@telegram-apps/sdk-react'
import { memo, useCallback, useEffect } from 'react'
import { useRouter } from '@/shared/i18n'

interface BackButtonProps {
    hide?: boolean
    route?: string
}

export const BackButton = memo(function BackButton({
    hide,
    route
}: BackButtonProps) {
    const router = useRouter()

    const onBackButtonClick = useCallback(
        () => (route ? router.push(route) : router.back()),
        [route, router]
    )

    useEffect(() => {
        if (!backButton.isVisible() && !hide) {
            backButton.show()
        } else if (backButton.isVisible() && hide) {
            backButton.hide()
        }
    }, [hide])

    useEffect(() => {
        const offClick = backButton.onClick(onBackButtonClick)

        return () => {
            offClick()
        }
    }, [onBackButtonClick])

    return null
})
