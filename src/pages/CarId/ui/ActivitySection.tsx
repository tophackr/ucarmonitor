import { Section } from '@telegram-apps/telegram-ui'
import { useMemo } from 'react'
import type { CarProps } from '@/entities/car'
import {
    InteractionCell,
    getInteractions,
    useInteractions
} from '@/entities/interaction'
import { useClientOnce } from '@/shared/hooks'

export function ActivitySection({ car }: CarProps) {
    const { interactions, setInteractions } = useInteractions()

    useClientOnce(() => getInteractions().then(setInteractions))

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
