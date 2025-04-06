'use client'

import {
    type SecondaryButtonState,
    mountSecondaryButton,
    onSecondaryButtonClick,
    setSecondaryButtonParams,
    unmountSecondaryButton
} from '@telegram-apps/sdk-react'
import { memo, useEffect } from 'react'

export interface SecondaryButtonProps extends Partial<SecondaryButtonState> {
    onClick: () => void
}

export const SecondaryButton = memo(function SecondaryButton({
    onClick,
    isVisible = true,
    ...params
}: SecondaryButtonProps) {
    useEffect(() => {
        mountSecondaryButton()

        return () => {
            setSecondaryButtonParams({
                hasShineEffect: false,
                isEnabled: true,
                isLoaderVisible: false,
                isVisible: false
            })
            unmountSecondaryButton()
        }
    }, [])

    useEffect(() => {
        setSecondaryButtonParams({ isVisible, ...params })
    }, [isVisible, params])

    useEffect(() => {
        const offClick = onSecondaryButtonClick(onClick)

        return () => {
            offClick()
        }
    }, [onClick])

    return null
})
