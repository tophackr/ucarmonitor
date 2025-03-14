import clsx from 'clsx'
import { type HTMLAttributes, type JSX, memo } from 'react'
import { twMerge } from 'tailwind-merge'

export const IconSkeleton = memo(function IconSkeleton({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div
            className={twMerge(
                clsx('bg-subtitle w-8 h-8 rounded-lg', className)
            )}
            {...props}
        />
    )
})
