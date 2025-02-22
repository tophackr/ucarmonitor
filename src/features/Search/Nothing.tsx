import { Placeholder } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import { DuckFlashbackImage } from '@/shared/ui'

interface NothingProps {
    title?: ReactNode
    description?: ReactNode
}

export async function Nothing({ title, description }: NothingProps) {
    const t = await getTranslations('search.Nothing')

    return (
        <Placeholder
            header={title ?? t('title')}
            description={description ?? t('description')}
        >
            <DuckFlashbackImage />
        </Placeholder>
    )
}
