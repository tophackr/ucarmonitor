import { Cell, List, Placeholder, Section } from '@telegram-apps/telegram-ui'
import { memo } from 'react'
import { type SegmentProps, Segments } from '@/features/PreviewSegment'

export const Stats = memo(function Stats(segmentProps: SegmentProps) {
    return (
        <>
            <List>
                <Placeholder>
                    <Segments {...segmentProps} />
                </Placeholder>

                <Section>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Cell key={index}>{index}</Cell>
                    ))}
                </Section>
            </List>
        </>
    )
})
