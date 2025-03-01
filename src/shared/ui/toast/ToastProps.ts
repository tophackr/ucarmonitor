import type { LinkProps } from '@telegram-apps/telegram-ui'
import type { JSXElementConstructor, ReactElement, ReactNode } from 'react'

export interface ToastProps {
    id: string | number
    icon?: ReactNode
    title: string
    description: string
    button?: {
        label: string
        onClick: () => void
    }
    link?: ReactElement<LinkProps, string | JSXElementConstructor<unknown>>
    duration?: number
    onClose?: () => void
}
