import { List, Section } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import {
    CellSkeleton,
    IconSkeleton,
    PulseSkeletonLayout,
    TextSkeleton
} from '@/shared/ui/skeleton'

export function FormSkeleton(): JSX.Element {
    return (
        <List>
            <PulseSkeletonLayout>
                <Section header={<TextSkeleton className={'mb-2 w-24'} />}>
                    {Array.from({ length: 3 }, (_, index) => (
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
