import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import type { CarProps } from '@/entities/car/@x/interaction'
import { useIntlDateTime } from '@/shared/i18n'
import { NothingPlaceholder } from '@/shared/ui/placeholder'
import { InteractionCell } from './InteractionCell'
import { InteractionSumFooter } from './InteractionSumFooter'
import { useListInteractions } from './hooks/useListInteractions'

interface InteractionListProps {
    slice?: number
}

export const InteractionList = memo(function InteractionList({
    car,
    slice
}: CarProps & InteractionListProps): JSX.Element {
    const t = useTranslations('Car')

    const intlDateTime = useIntlDateTime({
        year: 'numeric',
        month: 'long'
    })

    const interactions = useListInteractions(car.id, slice)

    return (
        <>
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
                        header={intlDateTime.format(new Date(date))}
                        footer={
                            <InteractionSumFooter
                                interactions={interactions[date]}
                            />
                        }
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
                <Section>
                    <NothingPlaceholder />
                </Section>
            )}
        </>
    )
})
