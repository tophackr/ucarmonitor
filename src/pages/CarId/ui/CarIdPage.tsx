'use client'

import { List } from '@telegram-apps/telegram-ui'
import dynamic from 'next/dynamic'
import { PreviewButtons } from '@/features/PreviewButtons'
import { CarPreview, useCarContext } from '@/entities/car'
import { pagesRoute } from '@/shared/routes'
import { useBackButton } from '@/shared/ui/tma'
import { LabelsTemp } from './LabelsTemp'
import { useEditCarButton } from './hooks/useEditCarButton'

const DynamicActivitySection = dynamic(
    () => import('./ActivitySection').then(mod => mod.ActivitySection),
    { ssr: false }
)

export function CarIdPage() {
    const { car } = useCarContext()

    useBackButton({ route: pagesRoute.home })

    useEditCarButton({ car })

    return (
        <>
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
