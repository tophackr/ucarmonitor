'use client'

import clsx from 'clsx'
import { type HTMLAttributes, memo } from 'react'
import { twMerge } from 'tailwind-merge'
import type { BackgroundColor } from '@/shared/lib/dom'
import { isAppleClient } from '@/shared/lib/telegram'

interface IconSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    color?: BackgroundColor
}

export const IconSkeleton = memo(function IconSkeleton({
    color,
    className,
    ...props
}: IconSkeletonProps) {
    const isApple = isAppleClient()

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
