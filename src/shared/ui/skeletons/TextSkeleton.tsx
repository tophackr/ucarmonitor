import clsx from 'clsx'
import { type HTMLAttributes, memo } from 'react'
import { twMerge } from 'tailwind-merge'

export const TextSkeleton = memo(function TextSkeleton({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={twMerge(
                clsx('bg-content rounded-full h-4 w-32', className)
            )}
            {...props}
        />
    )
})
