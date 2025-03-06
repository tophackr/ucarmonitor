import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import type { BackgroundColor } from '@/shared/types'

interface IconSkeletonProps extends HTMLAttributes<HTMLDivElement> {
    color?: BackgroundColor
}

export function IconSkeleton({
    color,
    className,
    ...props
}: IconSkeletonProps) {
    return (
        <div
            style={color && { backgroundColor: color }}
            className={twMerge(clsx('w-8 h-8 rounded-lg', className))}
            {...props}
        />
    )
}
