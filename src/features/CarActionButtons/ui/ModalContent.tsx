'use client'

import clsx from 'clsx'
import { useIsAppleClient } from '@/shared/hooks'
import { LinkCell } from '@/shared/ui'
import type { ActionContentProps } from '../types/ActionContentProps'

interface ModalContentProps {
    content: ActionContentProps[]
}

export function ModalContent({ content }: ModalContentProps) {
    const isApple = useIsAppleClient()

    return content.map(({ href, icon, bgColor, name }, index) => (
        <LinkCell
            key={index}
            href={href}
            icon={icon}
            bgColor={bgColor}
            className={clsx(isApple && 'bg-secondary')}
        >
            {name}
        </LinkCell>
    ))
}
