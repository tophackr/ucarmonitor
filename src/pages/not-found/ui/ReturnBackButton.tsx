'use client'

import type { SecondaryButtonState } from '@telegram-apps/sdk-react'
import { type JSX, memo } from 'react'
import { useRouter } from '@/shared/i18n'
import { useButtonClick } from '@/shared/lib/dom'
import { SecondaryButton } from '@/shared/ui/tma'

type ReturnBackButtonProps = Pick<SecondaryButtonState, 'text'>

export const ReturnBackButton = memo(function ReturnBackButton({
    text
}: ReturnBackButtonProps): JSX.Element {
    const router = useRouter()

    const { disabled, onClick } = useButtonClick<void>({
        callback: () => router.back()
    })

    return (
        <SecondaryButton
            text={text}
            isLoaderVisible={disabled}
            isEnabled={!disabled}
            onClick={onClick}
        />
    )
})
