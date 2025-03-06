'use client'

import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { DuckLoadingLottie } from '@/shared/ui'

export function Loading() {
    const t = useTranslations('Search.Loading')

    return (
        <Placeholder
            header={t('title')}
            description={t('description')}
        >
            <DuckLoadingLottie className={'size-36'} />
        </Placeholder>
    )
}
