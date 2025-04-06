import {
    Button,
    InlineButtons,
    List,
    Placeholder
} from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import {
    AvatarSkeleton,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui/skeleton'

export function CarPreviewSkeleton(): JSX.Element {
    return (
        <PulseSkeletonLayout className={'mt-16'}>
            <Placeholder
                header={<TextSkeleton className={'bg-content m-auto'} />}
                description={<TextSkeleton className={'bg-hint m-auto w-40'} />}
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
}
