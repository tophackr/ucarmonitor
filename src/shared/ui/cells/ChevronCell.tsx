'use client'

import { Text } from '@telegram-apps/telegram-ui'
import { Icon16Chevron } from '@telegram-apps/telegram-ui/dist/icons/16/chevron'
import { useIsAppleClient } from '@/shared/hooks'

export interface ChevronCellProps {
    text?: string
}

export function ChevronCell({ text }: ChevronCellProps) {
    const isApple = useIsAppleClient()

    return (
        <>
            {text && <Text className={'text-subtitle'}>{text}</Text>}

            {isApple && <Icon16Chevron className={'text-secondary ml-1'} />}
        </>
    )
}
