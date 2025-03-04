import { List } from '@telegram-apps/telegram-ui'
import { CarActionButtons } from '@/features/CarActionButtons'
import type { CarProps } from '@/entities/cars'
import { CarPreview } from '@/entities/cars'
import { ActivitySection } from './ActivitySection'
import { EditCarButton } from './EditCarButton'
import { LabelsTemp } from './LabelsTemp'

export function CarWidget({ car }: CarProps) {
    return (
        <>
            <EditCarButton car={car} />

            <CarPreview car={car}>
                <LabelsTemp />
            </CarPreview>

            <List>
                <CarActionButtons />

                <ActivitySection car={car} />
            </List>
        </>
    )
}
