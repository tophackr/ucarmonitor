import { type HTMLAttributes, type JSX, memo } from 'react'
import { cx } from '@/shared/lib/dom'

export const TextSkeleton = memo(function TextSkeleton({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div
            className={cx('bg-content rounded-full h-4 w-32', className)}
            {...props}
        />
    )
})
