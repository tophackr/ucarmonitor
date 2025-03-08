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
                    {['OrangeRed', 'MediumPurple', 'Orange'].map(color => (
                        <CellSkeleton
                            key={color}
                            before={<IconSkeleton color={color} />}
                        />
                    ))}
                </Section>
            </PulseSkeletonLayout>
        </List>
    )
}
