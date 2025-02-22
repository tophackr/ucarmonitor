import { List, Placeholder } from '@telegram-apps/telegram-ui'
import { getTranslations } from 'next-intl/server'
import { BackButton, DuckNotFoundImage } from '@/shared/ui'
import { ReturnHomeButton } from './ReturnHomeButton'

export async function NotFound() {
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
                    <DuckNotFoundImage style={{ width: 256, height: 256 }} />
                </Placeholder>
            </List>
        </>
    )
}
