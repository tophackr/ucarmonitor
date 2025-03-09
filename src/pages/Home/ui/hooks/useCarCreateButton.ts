'use client'

import { useTranslations } from 'next-intl'
import { useButtonClick } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { useMainButton } from '@/shared/ui/tma'

export function useCarCreateButton() {
    const t = useTranslations('Home')

    const { disabled, onClick } = useButtonClick<void>({
        route: pagesRoute.carNew
    })

    useMainButton({
        text: t('add'),
        isLoaderVisible: disabled,
        isEnabled: !disabled,
        onClick
    })
}
