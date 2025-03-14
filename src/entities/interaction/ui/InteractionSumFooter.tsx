import { useTranslations } from 'next-intl'
import { useIntlCurrency } from '@/shared/i18n'
import { reduceSumItems } from '@/shared/lib/number'
import type { IInteraction } from '../model/Interaction'

interface InteractionSumFooterProps {
    interactions: IInteraction[]
}

export function InteractionSumFooter({
    interactions
}: InteractionSumFooterProps): string {
    const t = useTranslations('Stats')

    const sumAmount = reduceSumItems([...interactions], 'amount')

    const currency = useIntlCurrency(sumAmount)

    return `${t('total')}: ${currency}`
}
