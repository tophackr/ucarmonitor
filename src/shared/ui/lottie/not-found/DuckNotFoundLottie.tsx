'use client'

import dynamic from 'next/dynamic'
import { type JSX, memo } from 'react'
import type { LottieProps } from '../types/LottieProps'
import DuckNotFound from './DuckNotFound.json'

const LottieLazy = dynamic(() => import('lottie-react'), { ssr: false })

export const DuckNotFoundLottie = memo(function DuckNotFoundLottie(
    props: LottieProps
): JSX.Element {
    return (
        <LottieLazy
            animationData={DuckNotFound}
            loop={true}
            {...props}
        />
    )
})
