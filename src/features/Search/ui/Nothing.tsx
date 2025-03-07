'use client'

import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type ReactNode, memo } from 'react'
import { DuckFlashbackLottie } from '@/shared/ui'

interface NothingProps {
    title?: ReactNode
    description?: ReactNode
}

export const Nothing = memo(function Nothing({
    title,
    description
}: NothingProps) {
    const t = useTranslations('Search.Nothing')

    return (
        <Placeholder
            header={title ?? t('title')}
            description={description ?? t('description')}
        >
            <DuckFlashbackLottie className={'size-36'} />
        </Placeholder>
    )
})
