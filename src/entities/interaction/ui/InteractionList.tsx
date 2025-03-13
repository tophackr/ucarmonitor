import { Section } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { useFormatter, useTranslations } from 'next-intl'
import { memo } from 'react'
import type { CarProps } from '@/entities/car/@x/interactions'
import { NothingPlaceholder } from '@/shared/ui/placeholder'
import { isAppleClient } from '@/shared/ui/tma'
import { InteractionCell } from './InteractionCell'
import { useListInteractions } from './hooks/useListInteractions'

interface InteractionListProps {
    slice?: number
    title?: string
}

export const InteractionList = memo(function InteractionList({
    car,
    slice,
    title
}: CarProps & InteractionListProps) {
    const t = useTranslations('Car')

    const formatter = useFormatter()

    const isApple = isAppleClient()

    const interactions = useListInteractions(car.id, slice)

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

            {interactions instanceof Array ? (
                <Section header={t('last_activity')}>
                    {interactions.length ? (
                        interactions.map(i => (
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
            ) : Object.keys(interactions).length ? (
                Object.keys(interactions).map(date => (
                    <Section
                        key={date}
                        header={formatter.dateTime(new Date(date), {
                            year: 'numeric',
                            month: 'long'
                        })}
                    >
                        {interactions[date].map(i => (
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
