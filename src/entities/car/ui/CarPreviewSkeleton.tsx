import { Placeholder } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { ListSection } from '@/shared/ui'
import {
    AvatarSkeleton,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui/skeleton'

export function CarPreviewSkeleton(): JSX.Element {
    return (
        <ListSection>
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
        </ListSection>
    )
}
