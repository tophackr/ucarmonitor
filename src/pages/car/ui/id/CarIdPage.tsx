'use client'

import { useTranslations } from 'next-intl'
import { type JSX } from 'react'
import { type ISegment, Segments } from '@/features/segment'
import { pagesRoute } from '@/shared/routes'
import { BackButton } from '@/shared/ui/tma'
import { Info } from './info/Info'
import { Stats } from './stats/Stats'
import { SegmentKey } from './types/SegmentKey'

export function CarIdPage(): JSX.Element {
    const t = useTranslations('PreviewSegment')

    const segments: ISegment[] = [
        { key: SegmentKey.info, label: t('info'), Component: <Info /> },
        { key: SegmentKey.stats, label: t('stats'), Component: <Stats /> }
    ]

    return (
        <>
            <BackButton route={pagesRoute.home} />

            <Segments
                segments={segments}
                defaultSegment={SegmentKey.info}
            />
        </>
    )
}
