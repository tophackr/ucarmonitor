import { Cell, List, Section } from '@telegram-apps/telegram-ui'
import { CarActionButtons } from '@/features/CarActionButtons'
import type { CarProps } from '@/entities/cars'
import { CarPreview } from '@/entities/cars'
import { useInteractions } from '@/entities/interaction'
import { EditCarButton } from './EditCarButton'
import { LabelsTemp } from './LabelsTemp'

export function CarWidget({ car }: CarProps) {
    const { interactions } = useInteractions()

    return (
        <>
            <EditCarButton car={car} />

            <CarPreview car={car}>
                <LabelsTemp />
            </CarPreview>

            <List>
                <CarActionButtons />

                <Section footer={'footer'}>
                    {interactions.map(i => (
                        <Cell
                            key={i.id}
                            after={String(i.date)}
                            subhead={i.id}
                            subtitle={i.mileage}
                            description={
                                '#' + i.amount + ' desc: ' + i.description
                            }
                            multiline
                        >
                            {i.type}
                        </Cell>
                    ))}
                </Section>
            </List>
        </>
    )
}
