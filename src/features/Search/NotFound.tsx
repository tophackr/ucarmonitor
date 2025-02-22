import { Placeholder } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import { DuckNotFoundImage } from '@/shared/ui'

export async function NotFound() {
    const t = await getTranslations('search.NotFound')

    return (
        <Placeholder
            header={t('title')}
            description={t('description')}
        >
            <DuckNotFoundImage />
        </Placeholder>
    )
}
