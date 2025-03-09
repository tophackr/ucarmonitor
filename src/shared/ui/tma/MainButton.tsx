'use client'

import { type MainButtonState, mainButton } from '@telegram-apps/sdk-react'
import { memo, useEffect } from 'react'

interface MainButtonProps extends Partial<MainButtonState> {
    onClick: () => void
}

export const MainButton = memo(function MainButton({
    onClick,
    isVisible = true,
    ...params
}: MainButtonProps) {
    useEffect(() => {
        mainButton.mount()
        mainButton.setParams({ isVisible, ...params })
        const offClick = mainButton.onClick(onClick)

        return () => {
            mainButton.setParams({
                hasShineEffect: false,
                isEnabled: true,
                isLoaderVisible: false,
                isVisible: false
            })
            offClick()
            mainButton.unmount()
        }
    }, [isVisible, onClick, params])

    return null
})
