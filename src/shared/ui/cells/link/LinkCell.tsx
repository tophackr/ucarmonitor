'use client'

import { Cell as TGUICell } from '@telegram-apps/telegram-ui'
import { useCallback } from 'react'
import { useRouter } from '@/shared/i18n'
import { callMultiple } from '@/shared/utils'
import { ChevronCell } from '../ChevronCell'
import { IconCell } from '../icon/IconCell'
import type { LinkCellProps } from './LinkCellProps'

export function LinkCell({
    children,
    icon,
    bgColor,
    href,
    text,
    onClick,
    ...props
}: LinkCellProps) {
    const router = useRouter()

    const onClickHref = useCallback(() => router.push(href), [router, href])

    return (
        <TGUICell
            Component={'label'}
            before={
                <IconCell
                    icon={icon}
                    bgColor={bgColor}
                />
            }
            after={<ChevronCell text={text} />}
            onClick={callMultiple(onClickHref, onClick)}
            interactiveAnimation={'opacity'}
            {...props}
        >
            {children}
        </TGUICell>
    )
}
