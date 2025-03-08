'use client'

import { type MainButtonState, mainButton } from '@telegram-apps/sdk-react'
import { memo, useEffect } from 'react'

interface State extends MainButtonState {
    onClick: () => void
}

export const MainButton = memo(function MainButton(updates: Partial<State>) {
    const { onClick, ...params } = updates

    useEffect(() => {
        mainButton.setParams(params)

        return () => {
            if (mainButton.isVisible()) {
                mainButton.setParams({
                    isVisible: false,
                    isLoaderVisible: false,
                    isEnabled: true
                })
            }
        }
    }, [params])

    useEffect(() => {
        if (onClick) {
            const offClick = mainButton.onClick(onClick)

            return () => {
                offClick()
            }
        }
    }, [onClick])

    return <></>
})
