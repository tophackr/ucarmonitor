'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'
import type { LottieProps } from '../types/LottieProps'
import DuckLoading from './DuckLoading.json'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export const DuckLoadingLottie = memo(function DuckLoadingLottie(
    props: LottieProps
) {
    return (
        <LottieLazy
            animationData={DuckLoading}
            loop={true}
            {...props}
        />
    )
})
