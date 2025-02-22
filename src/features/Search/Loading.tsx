import { Placeholder } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import { DuckLoadingLottie } from '@/shared/ui'

export async function Loading() {
    const t = await getTranslations('search.Loading')

    return (
        <Placeholder
            header={t('title')}
            description={t('description')}
        >
            <DuckLoadingLottie />
        </Placeholder>
    )
}
