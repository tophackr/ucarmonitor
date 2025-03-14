import clsx from 'clsx'
import { type HTMLAttributes, type JSX, memo } from 'react'
import { twMerge } from 'tailwind-merge'

export const TextSkeleton = memo(function TextSkeleton({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div
            className={twMerge(
                clsx('bg-content rounded-full h-4 w-32', className)
            )}
            {...props}
        />
    )
})
