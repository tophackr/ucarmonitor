import { List, Placeholder } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import type { JSX } from 'react'
import { DuckNotFoundLottie } from '@/shared/ui/lottie'
import { BackButton } from '@/shared/ui/tma'
import { ReturnHomeButton } from './ReturnHomeButton'

export async function NotFound(): Promise<JSX.Element> {
    const t = await getTranslations('NotFound')

    return (
        <>
            <BackButton />

            <List className={'min-h-screen content-center'}>
                <Placeholder
                    header={t('title')}
                    description={t('description')}
                    action={<ReturnHomeButton>{t('button')}</ReturnHomeButton>}
                >
                    <DuckNotFoundLottie className={'size-36'} />
                </Placeholder>
            </List>
        </>
    )
}
