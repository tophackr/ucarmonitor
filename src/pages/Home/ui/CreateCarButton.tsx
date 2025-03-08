'use client'

import { useTranslations } from 'next-intl'
import { useButtonClick } from '@/shared/lib'
import { pagesRoute } from '@/shared/routes'
import { MainButton } from '@/shared/ui'

export function CreateCarButton() {
    const t = useTranslations('Home')

    const { disabled, onClick } = useButtonClick<void>({
        route: pagesRoute.carNew
    })

    return (
        <MainButton
            isVisible={true}
            text={t('add')}
            isLoaderVisible={disabled}
            isEnabled={disabled}
            onClick={onClick}
        />
    )
}
