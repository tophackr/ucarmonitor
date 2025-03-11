'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { type ISegment } from '@/features/PreviewSegment'
import { Info } from './info/Info'
import { Stats } from './stats/Stats'
import { SegmentKey } from './types/SegmentKey'

export function CarIdPage() {
    const t = useTranslations('PreviewSegment')

    const segments: ISegment[] = [
        { key: SegmentKey.info, label: t('info') },
        { key: SegmentKey.stats, label: t('stats') }
    ]

    const [segment, setSegment] = useState<string>(SegmentKey.info)

    return segment === SegmentKey.info ? (
        <Info
            segment={segment}
            setSegment={setSegment}
            segments={segments}
        />
    ) : (
        <Stats
            segment={segment}
            setSegment={setSegment}
            segments={segments}
        />
    )
}
