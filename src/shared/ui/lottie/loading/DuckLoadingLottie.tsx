import { type JSX, memo } from 'react'
import { DynamicLottie } from '../DynamicLottie'
import type { LottieProps } from '../types/LottieProps'
import DuckLoading from './DuckLoading.json'

export const DuckLoadingLottie = memo(function DuckLoadingLottie(
    props: LottieProps
): JSX.Element {
    return (
        <DynamicLottie
            animationData={DuckLoading}
            loop={true}
            {...props}
        />
    )
})
