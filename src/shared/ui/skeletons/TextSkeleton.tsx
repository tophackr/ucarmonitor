import clsx from 'clsx'
import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export function TextSkeleton({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={twMerge(clsx('rounded-full h-4 w-48', className))}
            {...props}
        />
    )
}
