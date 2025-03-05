'use client'

import { List } from '@telegram-apps/telegram-ui'
import { PreviewButtons } from '@/features/PreviewButtons'
import { CarPreview, useCarContext } from '@/entities/car'
import { BackButton } from '@/shared/ui'
import { ActivitySection } from './ui/ActivitySection'
import { EditCarButton } from './ui/EditCarButton'
import { LabelsTemp } from './ui/LabelsTemp'

export function Page() {
    const { car } = useCarContext()

    return (
        <>
            <BackButton />
            <EditCarButton car={car} />

            <CarPreview car={car}>
                <LabelsTemp />
            </CarPreview>

            <List>
                <PreviewButtons />

                <ActivitySection car={car} />
            </List>
        </>
    )
}
