'use client'

import dynamic from 'next/dynamic'
import type { LottieProps } from '../types/LottieProps'
import DuckNotFound from './DuckNotFound.json'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export function DuckNotFoundLottie(props: LottieProps) {
    return (
        <LottieLazy
            animationData={DuckNotFound}
            loop={true}
            {...props}
        />
    )
}
