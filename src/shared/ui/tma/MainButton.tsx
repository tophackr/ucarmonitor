'use client'

import { type MainButtonState, mainButton } from '@telegram-apps/sdk-react'
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
        mainButton.mount()

        return () => {
            mainButton.setParams({
                hasShineEffect: false,
                isEnabled: true,
                isLoaderVisible: false,
                isVisible: false
            })
            mainButton.unmount()
        }
    }, [])

    useEffect(() => {
        mainButton.setParams({ isVisible, ...params })
    }, [isVisible, params])

    useEffect(() => {
        const offClick = mainButton.onClick(onClick)

        return () => {
            offClick()
        }
    }, [onClick])

    return null
})
