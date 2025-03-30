'use client'

import { LargeTitle, List, Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import { useCarContext } from '@/entities/car'
import { InteractionList, useInteractions } from '@/entities/interaction'
import { useIntlCurrency } from '@/shared/i18n'
import { reduceSumItems } from '@/shared/lib/number'

export function StatsList(): JSX.Element {
    const t = useTranslations('StatsCategoryName')

    const { car } = useCarContext()
    const { interactions } = useInteractions()

    const interactionsFilter = [...interactions].filter(
        inter => inter.carId === car.id
    )

    const sumAmount = reduceSumItems(interactionsFilter, 'amount')

    const currency = useIntlCurrency().format(sumAmount)

    return (
        <List>
            <Placeholder description={t('list')}>
                <LargeTitle>{currency}</LargeTitle>
            </Placeholder>

            <InteractionList car={car} />
        </List>
    )
}
