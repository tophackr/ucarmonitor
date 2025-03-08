'use client'

import { Cell as TGUICell } from '@telegram-apps/telegram-ui'
import { memo } from 'react'
import { callMultiple, useButtonClick } from '@/shared/lib'
import { ChevronCell } from '../ChevronCell'
import { IconCell } from '../icon/IconCell'
import type { LinkCellProps } from './LinkCellProps'

export const LinkCell = memo(function LinkCell({
    children,
    icon,
    bgColor,
    href,
    text,
    onClick,
    ...props
}: LinkCellProps) {
    const { disabled, onClick: onClickHref } = useButtonClick({ route: href })

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
            disabled={disabled}
            onClick={callMultiple(onClickHref, onClick)}
            interactiveAnimation={'opacity'}
            {...props}
        >
            {children}
        </TGUICell>
    )
})
