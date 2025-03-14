'use client'

import { Placeholder, type PlaceholderProps } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { DuckLoadingLottie } from '@/shared/ui/lottie'

export const LoadingPlaceholder = memo(function LoadingPlaceholder({
    header,
    description,
    ...props
}: PlaceholderProps): JSX.Element {
    const t = useTranslations('Placeholder.Loading')

    return (
        <Placeholder
            header={header ?? t('title')}
            description={description ?? t('description')}
            {...props}
        >
            <DuckLoadingLottie className={'size-36'} />
        </Placeholder>
    )
})
