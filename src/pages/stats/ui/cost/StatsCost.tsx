'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { type ISegment, Segments } from '@/features/segment'
import { useCarContext } from '@/entities/car'
import { InteractionCategory, useInteractions } from '@/entities/interaction'
import { CostData } from './CostData'
import { useLastDayFilter } from './hooks/useLastDayFilter'
import { CostKeys } from './types/CostKeys'
import { calcInteractionData } from './utils/calcInteractionData'

export function StatsCost() {
    const t = useTranslations('StatsCostSegment')

    const { interactions } = useInteractions()
    const { car } = useCarContext()

    const interactionsCarFilter = useMemo(
        () =>
            [...interactions].filter(
                i =>
                    i.carId === car.id && i.type !== InteractionCategory.mileage
            ),
        [car.id, interactions]
    )

    const { last30DaysFilter, last90DaysFilter, lastYearFilter } =
        useLastDayFilter()

    const last30Days = useMemo(
        () => interactionsCarFilter.filter(last30DaysFilter),
        [interactionsCarFilter, last30DaysFilter]
    )
    const last90Days = useMemo(
        () => interactionsCarFilter.filter(last90DaysFilter),
        [interactionsCarFilter, last90DaysFilter]
    )
    const lastYear = useMemo(
        () => interactionsCarFilter.filter(lastYearFilter),
        [interactionsCarFilter, lastYearFilter]
    )

    const data: ISegment[] = [
        {
            key: CostKeys.thirtyDays,
            label: t('thirty_days'),
            Component: <CostData {...calcInteractionData(last30Days)} />
        },
        {
            key: CostKeys.ninetyDays,
            label: t('ninety_days'),
            Component: <CostData {...calcInteractionData(last90Days)} />
        },
        {
            key: CostKeys.oneYear,
            label: t('one_year'),
            Component: <CostData {...calcInteractionData(lastYear)} />
        },
        {
            key: CostKeys.allTime,
            label: t('all_time'),
            Component: (
                <CostData {...calcInteractionData(interactionsCarFilter)} />
            )
        }
    ]

    return (
        <Segments
            segments={data}
            defaultSegment={CostKeys.thirtyDays}
        />
    )
}
