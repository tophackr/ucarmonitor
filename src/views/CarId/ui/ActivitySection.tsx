import { Section } from '@telegram-apps/telegram-ui'
import { useMemo } from 'react'
import type { CarProps } from '@/entities/car'
import { InteractionCell, useInteractions } from '@/entities/interaction'

export function ActivitySection({ car }: CarProps) {
    const { interactions } = useInteractions()

    const interactionsSorted = useMemo(
        () =>
            [...interactions]
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .slice(0, 10),
        [interactions]
    )

    return (
        <Section>
            {interactionsSorted.map(i => (
                <InteractionCell
                    key={i.id}
                    interaction={i}
                    car={car}
                />
            ))}
        </Section>
    )
}
