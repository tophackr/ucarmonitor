'use client'

import { Placeholder, type PlaceholderProps } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { DuckNotFoundLottie } from '@/shared/ui/lottie'

export const NotFoundPlaceholder = memo(function NotFoundPlaceholder({
    header,
    description,
    ...props
}: PlaceholderProps) {
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
