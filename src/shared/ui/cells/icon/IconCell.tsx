'use client'

import clsx from 'clsx'
import { useIsAppleClient } from '@/shared/hooks'
import { LucideIcon } from '../../lucide-icon'
import styles from './IconCell.module.css'
import type { IconCellProps } from './IconCellProps'

export function IconCell({
    icon,
    bgColor,
    className,
    ...props
}: IconCellProps) {
    const isApple = useIsAppleClient()

    return (
        <LucideIcon
            name={icon}
            className={clsx(
                isApple ? styles['apple-icon'] : 'text-hint',
                className
            )}
            style={
                isApple
                    ? {
                          backgroundColor: bgColor,
                          color: '#fff'
                      }
                    : undefined
            }
            {...props}
        />
    )
}
