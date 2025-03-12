import { Section } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { useFormatter, useTranslations } from 'next-intl'
import { memo, useMemo } from 'react'
import type { CarProps } from '@/entities/car/@x/interactions'
import { NothingPlaceholder } from '@/shared/ui/placeholder'
import { isAppleClient } from '@/shared/ui/tma'
import { useInteractions } from '../lib/store/useInteractions'
import type { IInteraction } from '../model/Interaction'
import { InteractionCell } from './InteractionCell'

interface InteractionListProps {
    slice?: number
    title?: string
}

interface GroupedItems {
    [month: string]: IInteraction[]
}

export const InteractionList = memo(function InteractionList({
    car,
    slice,
    title
}: CarProps & InteractionListProps) {
    const t = useTranslations('Car')

    const { interactions } = useInteractions()
    const formatter = useFormatter()

    const isApple = isAppleClient()

    const interactionsSorted = useMemo(() => {
        const filterSortInteractions = [...interactions]
            .filter(inter => inter.carId === car.id)
            .sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
            )

        return slice
            ? filterSortInteractions.slice(0, slice)
            : filterSortInteractions.reduce<GroupedItems>((acc, item) => {
                  const date = new Date(item.date)
                  const monthKey = `${date.getFullYear()}-${(
                      date.getMonth() + 1
                  )
                      .toString()
                      .padStart(2, '0')}`

                  if (!acc[monthKey]) {
                      acc[monthKey] = []
                  }

                  acc[monthKey].push(item)

                  return acc
              }, {})
    }, [car.id, interactions, slice])

    return (
        <>
            {title && (
                <Section.Header
                    large
                    className={clsx(isApple && '!pb-0 !pt-4 !mb-0')}
                >
                    {title}
                </Section.Header>
            )}

            {slice ? (
                <Section header={t('last_activity')}>
                    {interactionsSorted.length ? (
                        (interactionsSorted as IInteraction[]).map(i => (
                            <InteractionCell
                                key={i.id}
                                interaction={i}
                                car={car}
                            />
                        ))
                    ) : (
                        <NothingPlaceholder />
                    )}
                </Section>
            ) : Object.keys(interactionsSorted).length ? (
                Object.keys(interactionsSorted).map(date => (
                    <Section
                        key={date}
                        header={formatter.dateTime(new Date(date), {
                            year: 'numeric',
                            month: 'long'
                        })}
                    >
                        {(interactionsSorted as GroupedItems)[date].map(i => (
                            <InteractionCell
                                key={i.id}
                                interaction={i}
                                car={car}
                            />
                        ))}
                    </Section>
                ))
            ) : (
                <NothingPlaceholder />
            )}
        </>
    )
})
