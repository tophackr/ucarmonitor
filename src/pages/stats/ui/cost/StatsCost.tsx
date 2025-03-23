'use client'

import { useMemo } from 'react'
import { type ISegment, Segments } from '@/features/segment'
import { useCarContext } from '@/entities/car'
import { InteractionCategory, useInteractions } from '@/entities/interaction'
import { CostData } from './CostData'
import { CostKeys } from './types/CostKeys'
import { calcInteractionData } from './utils/calcInteractionData'

const oneDayInMs = 24 * 60 * 60 * 1000

export function StatsCost() {
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

    const now = useMemo(() => new Date(), [])
    const startDateLastYear = useMemo(() => {
        const date = new Date(now)
        date.setFullYear(now.getFullYear() - 1)
        date.setHours(0, 0, 0, 0)
        return date
    }, [now])
    const endDateLastYear = useMemo(() => {
        const date = new Date(now)
        date.setHours(0, 0, 0, 0)
        return date
    }, [now])

    const last30Days = useMemo(
        () =>
            interactionsCarFilter.filter(item => {
                const itemDate = new Date(item.date)

                return (
                    itemDate >= new Date(now.getTime() - 30 * oneDayInMs) &&
                    itemDate <= now
                )
            }),
        [interactionsCarFilter, now]
    )

    const last90Days = useMemo(
        () =>
            interactionsCarFilter.filter(item => {
                const itemDate = new Date(item.date)

                return (
                    itemDate >= new Date(now.getTime() - 90 * oneDayInMs) &&
                    itemDate <= now
                )
            }),
        [interactionsCarFilter, now]
    )
    const lastYearData = useMemo(
        () =>
            interactionsCarFilter.filter(item => {
                const itemDate = new Date(item.date)

                return (
                    itemDate >= startDateLastYear && itemDate < endDateLastYear
                )
            }),
        [endDateLastYear, interactionsCarFilter, startDateLastYear]
    )

    const data: ISegment[] = [
        {
            key: CostKeys.thirtyDays,
            label: '30 days',
            Component: <CostData {...calcInteractionData(last30Days)} />
        },
        {
            key: CostKeys.ninetyDays,
            label: '90 days',
            Component: <CostData {...calcInteractionData(last90Days)} />
        },
        {
            key: CostKeys.oneYear,
            label: '1 year',
            Component: <CostData {...calcInteractionData(lastYearData)} />
        },
        {
            key: CostKeys.allTime,
            label: 'All time',
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
