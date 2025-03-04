'use client'

import { useFormatter, useTranslations } from 'next-intl'

export function useIntlCurrency(value?: number): string | undefined {
    const t = useTranslations('Locale')
    const format = useFormatter()

    if (!value) {
        return undefined
    }

    return format.number(value, {
        style: 'currency',
        currency: t('currency')
    })
}
