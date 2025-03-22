import { Placeholder, SegmentedControl } from '@telegram-apps/telegram-ui'
import { type JSX, memo, useState } from 'react'
import { type SegmentProps } from './types/Segment'

export const Segments = memo(function Segments({
    segments,
    defaultSegment
}: SegmentProps): JSX.Element {
    const [segment, setSegment] = useState<string>(defaultSegment)

    const SegmentItem = segments.find(({ key }) => key === segment)

    return (
        <>
            <Placeholder>
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
            </Placeholder>

            {SegmentItem && <SegmentItem.Component />}
        </>
    )
})
