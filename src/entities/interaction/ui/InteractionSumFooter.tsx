import { useTranslations } from 'next-intl'
import { useIntlCurrency } from '@/shared/i18n'
import { reduceSumItems } from '@/shared/lib/number'
import type { InteractionsProps } from '../model/Props'

export function InteractionSumFooter({
    interactions
}: InteractionsProps): string {
    const t = useTranslations('Stats')

    const sumAmount = reduceSumItems([...interactions], 'amount')

    const currency = useIntlCurrency().format(sumAmount)

    return `${t('total')}: ${currency}`
}
