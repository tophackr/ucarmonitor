import { Placeholder } from '@telegram-apps/telegram-ui'
import {
    AvatarSkeleton,
    ListSection,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui'

export function CarPreviewSkeleton() {
    return (
        <ListSection>
            <PulseSkeletonLayout>
                <Placeholder
                    header={<TextSkeleton className={'bg-hint'} />}
                    description={
                        <TextSkeleton className={'bg-secondary w-40'} />
                    }
                >
                    <AvatarSkeleton size={96} />
                </Placeholder>
            </PulseSkeletonLayout>
        </ListSection>
    )
}
