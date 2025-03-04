'use client'

import { useTranslations } from 'next-intl'

export function useIntlCurrency(
    locale: string,
    value?: number
): string | undefined {
    const t = useTranslations('Locale')

    if (!value) {
        return undefined
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: t('currency')
    }).format(value)
}
