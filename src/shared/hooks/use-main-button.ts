import { type RGB, mainButton } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'

interface State {
    backgroundColor?: RGB
    hasShineEffect: boolean
    isEnabled: boolean
    isLoaderVisible: boolean
    isVisible: boolean
    text: string
    textColor?: RGB
    onClick: () => void
}

export function useMainButton(updates: Partial<State>) {
    const { onClick, ...otherUpdates } = updates

    useEffect(() => {
        mainButton.setParams(otherUpdates)

        return () => {
            if (mainButton.isVisible()) {
                mainButton.setParams({ isVisible: false })
            }
        }
    }, [otherUpdates])

    useEffect(() => {
        if (onClick) {
            const offClick = mainButton.onClick(onClick)

            return () => {
                offClick()
            }
        }
    }, [onClick])
}
