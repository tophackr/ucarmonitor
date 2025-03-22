import { Placeholder } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import {
    AvatarSkeleton,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui/skeleton'

export function CarPreviewSkeleton(): JSX.Element {
    return (
        <PulseSkeletonLayout>
            <Placeholder
                header={<TextSkeleton className={'bg-hint m-auto'} />}
                description={
                    <TextSkeleton className={'bg-secondary m-auto w-40'} />
                }
            >
                <AvatarSkeleton size={96} />
            </Placeholder>
        </PulseSkeletonLayout>
    )
}
