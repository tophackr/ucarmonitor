'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'
import type { LottieProps } from '../types/LottieProps'
import DuckFlashback from './DuckFlashback.json'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export const DuckFlashbackLottie = memo(function DuckFlashbackLottie(
    props: LottieProps
) {
    return (
        <LottieLazy
            animationData={DuckFlashback}
            loop={true}
            {...props}
        />
    )
})
