'use client'

import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { ReactNode } from 'react'
import { DuckFlashbackLottie } from '@/shared/ui'

interface NothingProps {
    title?: ReactNode
    description?: ReactNode
}

export function Nothing({ title, description }: NothingProps) {
    const t = useTranslations('Search.Nothing')

    return (
        <Placeholder
            header={title ?? t('title')}
            description={description ?? t('description')}
        >
            <DuckFlashbackLottie className={'size-36'} />
        </Placeholder>
    )
}
