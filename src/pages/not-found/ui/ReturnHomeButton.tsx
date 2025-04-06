'use client'

import type { MainButtonState } from '@telegram-apps/sdk-react'
import { type JSX, memo } from 'react'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { MainButton } from '@/shared/ui/tma'

type ReturnHomeButtonProps = Pick<MainButtonState, 'text'>

export const ReturnHomeButton = memo(function ReturnHomeButton({
    text
}: ReturnHomeButtonProps): JSX.Element {
    const { disabled, onClick } = useButtonClick<void>({
        route: pagesRoute.home
    })

    return (
        <MainButton
            text={text}
            isLoaderVisible={disabled}
            isEnabled={!disabled}
            onClick={onClick}
        />
    )
})
