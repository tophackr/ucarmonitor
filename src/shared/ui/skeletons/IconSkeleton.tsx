'use client'

import clsx from 'clsx'
import { type HTMLAttributes, memo } from 'react'
import { twMerge } from 'tailwind-merge'
import { useIsAppleClient } from '@/shared/hooks'
import type { BackgroundColor } from '@/shared/types'

interface IconSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    color?: BackgroundColor
}

export const IconSkeleton = memo(function IconSkeleton({
    color,
    className,
    ...props
}: IconSkeletonProps) {
    const isApple = useIsAppleClient()

    return (
        <div
            style={isApple && color ? { backgroundColor: color } : undefined}
            className={twMerge(
                clsx('w-8 h-8 rounded-lg', className, !isApple && 'bg-subtitle')
            )}
            {...props}
        />
    )
})
