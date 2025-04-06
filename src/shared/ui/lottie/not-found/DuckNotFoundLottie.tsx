import { type JSX, memo } from 'react'
import { DynamicLottie } from '../DynamicLottie'
import type { LottieProps } from '../types/LottieProps'
import DuckNotFound from './DuckNotFound.json'

export const DuckNotFoundLottie = memo(function DuckNotFoundLottie(
    props: LottieProps
): JSX.Element {
    return (
        <DynamicLottie
            animationData={DuckNotFound}
            loop={true}
            {...props}
        />
    )
})
