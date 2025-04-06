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
                <Section>
                    <CellSkeleton before={<IconSkeleton />} />
                </Section>

                <Section header={<TextSkeleton className={'mt-4 mb-2 w-24'} />}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CellSkeleton
                            key={index}
                            before={<IconSkeleton />}
                        />
                    ))}
                </Section>

                <Section header={<TextSkeleton className={'mt-4 mb-2 w-24'} />}>
                    {Array.from({ length: 2 }).map((_, index) => (
                        <CellSkeleton
                            key={index}
                            before={<IconSkeleton />}
                        />
                    ))}
                </Section>

                <Section header={<TextSkeleton className={'mt-4 mb-2 w-24'} />}>
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
