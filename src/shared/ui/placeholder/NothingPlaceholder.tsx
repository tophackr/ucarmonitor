'use client'

import { Placeholder, type PlaceholderProps } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { DuckFlashbackLottie } from '@/shared/ui/lottie'

export const NothingPlaceholder = memo(function NothingPlaceholder({
    header,
    description,
    ...props
}: PlaceholderProps): JSX.Element {
    const t = useTranslations('Placeholder.Nothing')

    return (
        <Placeholder
            header={header ?? t('title')}
            description={description ?? t('description')}
            {...props}
        >
            <DuckFlashbackLottie className={'size-36'} />
        </Placeholder>
    )
})
