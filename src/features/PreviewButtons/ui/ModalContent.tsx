'use client'

import clsx from 'clsx'
import { memo } from 'react'
import { isAppleClient } from '@/shared/lib'
import { LinkCell } from '@/shared/ui'
import type { ActionContentProps } from './types/ActionContentProps'

interface ModalContentProps {
    content: ActionContentProps[]
}

export const ModalContent = memo(function ModalContent({
    content
}: ModalContentProps) {
    const isApple = isAppleClient()

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
})
