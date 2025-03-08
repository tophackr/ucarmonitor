'use client'

import { Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { DuckNotFoundLottie } from '@/shared/ui/lottie'

export function NotFound() {
    const t = useTranslations('Search.NotFound')

    return (
        <Placeholder
            header={t('title')}
            description={t('description')}
        >
            <DuckNotFoundLottie className={'size-36'} />
        </Placeholder>
    )
}
