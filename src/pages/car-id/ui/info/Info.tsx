import { List } from '@telegram-apps/telegram-ui'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import { PreviewButtons } from '@/features/preview-buttons'
import { type SegmentProps, Segments } from '@/features/preview-segment'
import { CarPreview, useCarContext } from '@/entities/car'
import { CarEditButton } from './CarEditButton'

const DynamicInteractionList = dynamic(
    () => import('@/entities/interaction').then(mod => mod.InteractionList),
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

                <DynamicInteractionList
                    car={car}
                    slice={10}
                />
            </List>
        </>
    )
})
