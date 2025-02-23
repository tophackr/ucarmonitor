import { Avatar, type AvatarProps } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function AvatarSkeleton({ className, ...props }: AvatarProps) {
    return (
        <Avatar
            className={twMerge(clsx('bg-secondary', className))}
            {...props}
        />
    )
}
