'use client'

import clsx from 'clsx'
import { memo } from 'react'
import { Icon } from '@/shared/ui/icon'
import { isAppleClient } from '@/shared/ui/tma'
import styles from './IconBeforeCell.module.css'
import type {
    IconBeforeCellProps,
    LucideIconBeforeCellProps
} from './IconBeforeCellProps'

export const IconBeforeCell = memo(function IconBeforeCell({
    icon,
    bgColor,
    className,
    ...props
}: IconBeforeCellProps & LucideIconBeforeCellProps) {
    const isApple = isAppleClient()

    return (
        <Icon
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
})
