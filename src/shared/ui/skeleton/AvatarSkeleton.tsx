import { Avatar, type AvatarProps } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

export const AvatarSkeleton = memo(function AvatarSkeleton({
    className,
    ...props
}: AvatarProps) {
    return (
        <Avatar
            className={twMerge(clsx('bg-secondary', className))}
            {...props}
        />
    )
})
