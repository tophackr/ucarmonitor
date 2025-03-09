'use client'

import { mainButton } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'
import type { MainButtonProps } from '../types/MainButtonProps'

export function useMainButton({
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
}
