'use client'

import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useRouter } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { MainButton } from '@/shared/ui'

export function HomeMainButton() {
    const t = useTranslations('Home')
    const router = useRouter()

    const onButtonClick = useCallback(
        () => router.push(pagesRoute.carNew),
        [router]
    )

    return (
        <MainButton
            isVisible={true}
            text={t('add')}
            onClick={onButtonClick}
        />
    )
}
