'use client'

import { type MainButtonState, mainButton } from '@telegram-apps/sdk-react'
import { memo, useEffect } from 'react'

interface State extends Partial<MainButtonState> {
    onClick: () => void
}

export const MainButton = memo(function MainButton(updates: State) {
    const { onClick, ...params } = updates

    useEffect(() => {
        mainButton.mount()
        mainButton.setParams(params)
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
    }, [onClick, params])

    return <></>
})
