'use client'

import clsx from 'clsx'
import { memo } from 'react'
import { useIsAppleClient } from '@/shared/hooks'
import { LinkCell } from '@/shared/ui'
import type { ActionContentProps } from '../model/ActionContentProps'

interface ModalContentProps {
    content: ActionContentProps[]
}

export const ModalContent = memo(function ModalContent({
    content
}: ModalContentProps) {
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
})
