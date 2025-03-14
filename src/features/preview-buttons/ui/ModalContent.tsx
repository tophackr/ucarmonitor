'use client'

import clsx from 'clsx'
import { type JSX, memo } from 'react'
import type { IMenu } from '@/shared/lib/link-menu'
import { LinkCell } from '@/shared/ui/cell'
import { isAppleClient } from '@/shared/ui/tma'

interface ModalContentProps {
    content: IMenu[]
}

export const ModalContent = memo(function ModalContent({
    content
}: ModalContentProps): JSX.Element[] {
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
