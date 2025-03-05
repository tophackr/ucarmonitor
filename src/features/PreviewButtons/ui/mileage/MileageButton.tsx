import { Button } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'

export function MileageButton() {
    const t = useTranslations('CarActionButtons')

    return (
        <Button
            mode={'bezeled'}
            className={'col-span-3'}
        >
            {t('add')}
        </Button>
    )
}
