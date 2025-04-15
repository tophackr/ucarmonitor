import {
    Button,
    InlineButtons,
    List,
    Placeholder
} from '@telegram-apps/telegram-ui'
import { type JSX, type ReactNode, memo } from 'react'
import {
    AvatarSkeleton,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui/skeleton'

interface CarPreviewSkeletonProps {
    segments: ReactNode
}

export const CarPreviewSkeleton = memo(function CarPreviewSkeleton({
    segments
}: CarPreviewSkeletonProps): JSX.Element {
    return (
        <PulseSkeletonLayout>
            {segments}

            <Placeholder
                header={<TextSkeleton className={'bg-content m-auto'} />}
                description={
                    <TextSkeleton
                        className={'bg-hint m-auto'}
                        long
                    />
                }
            >
                <AvatarSkeleton size={96} />
            </Placeholder>

            <List>
                <InlineButtons
                    mode={'bezeled'}
                    className={'grid! grid-cols-3'}
                >
                    <Button
                        mode={'bezeled'}
                        className={'col-span-full'}
                    />

                    <>
                        {Array.from({ length: 6 }, (_, i) => (
                            <InlineButtons.Item key={i} />
                        ))}
                    </>
                </InlineButtons>
            </List>
        </PulseSkeletonLayout>
    )
})
