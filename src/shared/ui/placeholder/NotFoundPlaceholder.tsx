'use client'

import { Placeholder, type PlaceholderProps } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { DuckNotFoundLottie } from '@/shared/ui/lottie'

export const NotFoundPlaceholder = memo(function NotFoundPlaceholder({
    header,
    description,
    ...props
}: PlaceholderProps): JSX.Element {
    const t = useTranslations('Placeholder.NotFound')

    return (
        <Placeholder
            header={header ?? t('title')}
            description={description ?? t('description')}
            {...props}
        >
            <DuckNotFoundLottie className={'size-36'} />
        </Placeholder>
    )
})
