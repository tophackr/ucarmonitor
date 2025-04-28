import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { useIntlCurrency } from '@/shared/i18n'
import { reduceSumItems } from '@/shared/lib/number'
import { InteractionCategory } from '../model/InteractionDto'
import type { InteractionsProps } from '../model/Props'

export function InteractionSumFooter({
    interactions
}: InteractionsProps): string {
    const t = useTranslations('Stats')

    const filteredInteractions = useMemo(
        () =>
            [...interactions].filter(
                inter => inter.type !== InteractionCategory.mileage
            ),
        [interactions]
    )
    const sumAmount = reduceSumItems(filteredInteractions, 'amount')

    const currency = useIntlCurrency().format(sumAmount)

    return `${t('total')}: ${currency}`
}
