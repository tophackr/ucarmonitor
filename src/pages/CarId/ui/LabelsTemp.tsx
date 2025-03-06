'use client'

import { SegmentedControl } from '@telegram-apps/telegram-ui'
import { useState } from 'react'

export function LabelsTemp() {
    const [selected, setSelected] = useState<string>()

    return (
        <SegmentedControl>
            <SegmentedControl.Item
                onClick={() => setSelected('label-1')}
                selected={selected === 'label-1'}
            >
                Label
            </SegmentedControl.Item>
            <SegmentedControl.Item
                onClick={() => setSelected('label-2')}
                selected={selected === 'label-2'}
            >
                Label 2
            </SegmentedControl.Item>
        </SegmentedControl>
    )
}
