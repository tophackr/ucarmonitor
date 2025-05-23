'use client'

import { LargeTitle, List, Placeholder } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, useMemo } from 'react'
import { useCarContext } from '@/entities/car'
import {
    InteractionCategory,
    InteractionList,
    useFindAllInteractionsQuery
} from '@/entities/interaction'
import { useIntlCurrency } from '@/shared/i18n'
import { reduceSumItems } from '@/shared/lib/number'
import { ListSkeleton } from './ListSkeleton'

export function StatsList(): JSX.Element {
    const t = useTranslations('StatsCategoryName')

    const { car } = useCarContext()
    const {
        data: interactions,
        isLoading,
        isError,
        error
    } = useFindAllInteractionsQuery({
        carId: car.id
    })

    if (isError) console.error('StatsList', error)

    const filteredInteractions = useMemo(
        () =>
            [...(interactions ?? [])].filter(
                inter => inter.type !== InteractionCategory.mileage
            ),
        [interactions]
    )

    const sumAmount = reduceSumItems(filteredInteractions, 'amount')

    const currency = useIntlCurrency().format(sumAmount)

    if (isLoading) return <ListSkeleton />

    return (
        <List>
            <Placeholder description={t('list')}>
                <LargeTitle>{currency}</LargeTitle>
            </Placeholder>

            <InteractionList car={car} />
        </List>
    )
}
