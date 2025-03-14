import { Avatar, type AvatarProps } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { type JSX, memo } from 'react'
import { twMerge } from 'tailwind-merge'

export const AvatarSkeleton = memo(function AvatarSkeleton({
    className,
    ...props
}: AvatarProps): JSX.Element {
    return (
        <Avatar
            className={twMerge(clsx('bg-secondary', className))}
            {...props}
        />
    )
})
