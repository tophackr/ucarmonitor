import { SegmentedControl } from '@telegram-apps/telegram-ui'
import { memo } from 'react'
import { type SegmentProps } from './types/Segment'

export const Segments = memo(function Segments({
    segment,
    setSegment,
    segments
}: SegmentProps) {
    return (
        <SegmentedControl>
            {segments.map(({ key, label }) => (
                <SegmentedControl.Item
                    key={key}
                    onClick={() => setSegment(key)}
                    selected={segment === key}
                >
                    {label}
                </SegmentedControl.Item>
            ))}
        </SegmentedControl>
    )
})
