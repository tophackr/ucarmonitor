'use client'

import {
    type MainButtonState,
    mountMainButton,
    onMainButtonClick,
    setMainButtonParams,
    unmountMainButton
} from '@telegram-apps/sdk-react'
import { memo, useEffect } from 'react'

export interface MainButtonProps extends Partial<MainButtonState> {
    onClick: () => void
}

export const MainButton = memo(function MainButton({
    onClick,
    isVisible = true,
    ...params
}: MainButtonProps) {
    useEffect(() => {
        mountMainButton()

        return () => {
            setMainButtonParams({
                hasShineEffect: false,
                isEnabled: true,
                isLoaderVisible: false,
                isVisible: false
            })
            unmountMainButton()
        }
    }, [])

    useEffect(() => {
        setMainButtonParams({ isVisible, ...params })
    }, [isVisible, params])

    useEffect(() => {
        const offClick = onMainButtonClick(onClick)

        return () => {
            offClick()
        }
    }, [onClick])

    return null
})
