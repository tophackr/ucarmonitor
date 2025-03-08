import { Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo, useMemo } from 'react'
import type { CarProps } from '@/entities/car'
import {
    InteractionCell,
    getInteractions,
    useInteractions
} from '@/entities/interaction'
import { useClientOnce } from '@/shared/lib'

export const ActivitySection = memo(function ActivitySection({
    car
}: CarProps) {
    const t = useTranslations('Car')

    const { interactions, setInteractions } = useInteractions()

    useClientOnce(() => getInteractions().then(setInteractions))

    const interactionsSorted = useMemo(
        () =>
            [...interactions]
                .filter(inter => inter.carId === car.id)
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .slice(0, 10),
        [car.id, interactions]
    )

    return (
        <Section header={t('last_activity')}>
            {interactionsSorted.map(i => (
                <InteractionCell
                    key={i.id}
                    interaction={i}
                    car={car}
                />
            ))}
        </Section>
    )
})
