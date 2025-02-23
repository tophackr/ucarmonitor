'use client'

import clsx from 'clsx'
import {
    type CSSProperties,
    type HTMLAttributes,
    type ReactElement,
    cloneElement
} from 'react'
import { useIsAppleClient } from '@/shared/hooks'
import styles from './IconCell.module.css'

export interface IconCellProps {
    Icon: ReactElement<HTMLAttributes<SVGElement>>
    bgColor: CSSProperties['backgroundColor']
}

export function IconCell({ Icon, bgColor }: IconCellProps) {
    const isApple = useIsAppleClient()

    return cloneElement(Icon, {
        className: clsx(
            Icon.props.className,
            isApple ? styles['apple-icon'] : 'text-hint'
        ),
        style: isApple
            ? {
                  backgroundColor: bgColor,
                  color: '#fff'
              }
            : undefined
    })
}
