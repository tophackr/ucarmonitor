import { type HTMLAttributes, type JSX, memo } from 'react'
import { cx } from '@/shared/lib/dom'

export const IconSkeleton = memo(function IconSkeleton({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
    return (
        <div
            className={cx('bg-subtitle w-8 h-8 rounded-lg', className)}
            {...props}
        />
    )
})
