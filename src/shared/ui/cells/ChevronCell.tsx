'use client'

import { Text } from '@telegram-apps/telegram-ui'
import { Icon16Chevron } from '@telegram-apps/telegram-ui/dist/icons/16/chevron'
import { memo } from 'react'
import { useIsAppleClient } from '@/shared/hooks'

export interface ChevronCellProps {
    text?: string
}

export const ChevronCell = memo(function ChevronCell({
    text
}: ChevronCellProps) {
    const isApple = useIsAppleClient()

    return (
        <>
            {text && <Text className={'text-hint'}>{text}</Text>}

            {isApple && <Icon16Chevron className={'text-subtitle ml-1'} />}
        </>
    )
})
