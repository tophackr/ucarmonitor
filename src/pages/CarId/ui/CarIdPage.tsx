'use client'

import { List } from '@telegram-apps/telegram-ui'
import dynamic from 'next/dynamic'
import { PreviewButtons } from '@/features/PreviewButtons'
import { CarPreview, useCarContext } from '@/entities/car'
import { pagesRoute } from '@/shared/routes'
import { BackButton } from '@/shared/ui/tma'
import { CarEditButton } from './CarEditButton'
import { LabelsTemp } from './LabelsTemp'

const DynamicActivitySection = dynamic(
    () => import('./ActivitySection').then(mod => mod.ActivitySection),
    { ssr: false }
)

export function CarIdPage() {
    const { car } = useCarContext()

    return (
        <>
            <BackButton route={pagesRoute.home} />
            <CarEditButton car={car} />

            <CarPreview car={car}>
                <LabelsTemp />
            </CarPreview>

            <List>
                <PreviewButtons />

                <DynamicActivitySection car={car} />
            </List>
        </>
    )
}
