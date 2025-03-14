'use client'

import dynamic from 'next/dynamic'
import { type JSX, memo } from 'react'
import type { LottieProps } from '../types/LottieProps'
import DuckFlashback from './DuckFlashback.json'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export const DuckFlashbackLottie = memo(function DuckFlashbackLottie(
    props: LottieProps
): JSX.Element {
    return (
        <LottieLazy
            animationData={DuckFlashback}
            loop={true}
            {...props}
        />
    )
})
