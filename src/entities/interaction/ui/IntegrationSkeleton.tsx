import { List, Section } from '@telegram-apps/telegram-ui'
import {
    CellSkeleton,
    IconSkeleton,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui/skeleton'

export function InteractionSkeleton() {
    return (
        <List>
            <PulseSkeletonLayout>
                <Section header={<TextSkeleton className={'w-24 mb-2'} />}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CellSkeleton
                            key={index}
                            before={<IconSkeleton />}
                        />
                    ))}
                </Section>
            </PulseSkeletonLayout>
        </List>
    )
}
