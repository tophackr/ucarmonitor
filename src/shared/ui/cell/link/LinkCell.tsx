'use client'

import { Cell as TGUICell } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { callMultiple, useButtonClick } from '@/shared/lib/dom'
import { ChevronAfterCell } from '../ChevronAfterCell'
import { IconBeforeCell } from '../icon/IconBeforeCell'
import type { LinkCellProps } from './LinkCellProps'

export const LinkCell = memo(function LinkCell({
    children,
    icon,
    bgColor,
    href,
    text,
    onClick,
    ...props
}: LinkCellProps): JSX.Element {
    const { disabled, onClick: onClickHref } = useButtonClick({ route: href })

    return (
        <TGUICell
            Component={'label'}
            before={
                <IconBeforeCell
                    icon={icon}
                    bgColor={bgColor}
                />
            }
            after={<ChevronAfterCell text={text} />}
            disabled={disabled}
            onClick={callMultiple(onClickHref, onClick)}
            {...props}
        >
            {children}
        </TGUICell>
    )
})
