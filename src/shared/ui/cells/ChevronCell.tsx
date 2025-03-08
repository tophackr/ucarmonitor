'use client'

import { Text } from '@telegram-apps/telegram-ui'
import { Icon16Chevron } from '@telegram-apps/telegram-ui/dist/icons/16/chevron'
import { memo } from 'react'
import { isAppleClient } from '@/shared/lib'

export interface ChevronCellProps {
    text?: string
}

export const ChevronCell = memo(function ChevronCell({
    text
}: ChevronCellProps) {
    const isApple = isAppleClient()

    return (
        <>
            {text && <Text className={'text-hint'}>{text}</Text>}

            {isApple && <Icon16Chevron className={'text-subtitle ml-1'} />}
        </>
    )
})
