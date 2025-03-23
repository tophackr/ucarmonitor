import { Avatar, type AvatarProps } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { cx } from '@/shared/lib/dom'

export const AvatarSkeleton = memo(function AvatarSkeleton({
    className,
    ...props
}: AvatarProps): JSX.Element {
    return (
        <Avatar
            className={cx('bg-secondary', className)}
            {...props}
        />
    )
})
