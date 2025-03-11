import { List } from '@telegram-apps/telegram-ui'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import { PreviewButtons } from '@/features/PreviewButtons'
import { type SegmentProps, Segments } from '@/features/PreviewSegment'
import { CarPreview, useCarContext } from '@/entities/car'
import { CarEditButton } from './CarEditButton'

const DynamicActivitySection = dynamic(
    () => import('./ActivitySection').then(mod => mod.ActivitySection),
    { ssr: false }
)

export const Info = memo(function Info(segmentProps: SegmentProps) {
    const { car } = useCarContext()

    return (
        <>
            <CarEditButton car={car} />

            <CarPreview car={car}>
                <Segments {...segmentProps} />
            </CarPreview>

            <List>
                <PreviewButtons />

                <DynamicActivitySection car={car} />
            </List>
        </>
    )
})
