'use client'

import { backButton } from '@telegram-apps/sdk-react'
import { useCallback, useEffect } from 'react'
import { useRouter } from '@/shared/i18n'
import type { BackButtonProps } from '../types/BackButtonProps'

export function useBackButton(props?: BackButtonProps) {
    const router = useRouter()

    const onBackButtonClick = useCallback(
        () => (props?.route ? router.push(props?.route) : router.back()),
        [props?.route, router]
    )

    useEffect(() => {
        if (!backButton.isVisible() && !props?.hide) {
            backButton.show()
        } else if (backButton.isVisible() && props?.hide) {
            backButton.hide()
        }
    }, [props?.hide])

    useEffect(() => {
        const offClick = backButton.onClick(onBackButtonClick)

        return () => {
            offClick()
        }
    }, [onBackButtonClick])
}
