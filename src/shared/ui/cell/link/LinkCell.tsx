'use client'

import { Cell as TGUICell } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { callMultiple, useButtonClick } from '@/shared/lib/dom'
import { ChevronAfterCell } from '../chevron-after/ChevronAfterCell'
import { IconBeforeCell } from '../icon/IconBeforeCell'
import type {
    LinkCellProps,
    OptionalIconBeforeCellProps
} from './LinkCellProps'

export const LinkCell = memo(function LinkCell({
    children,
    href,
    icon,
    bgColor,
    text,
    onClick,
    ...props
}: LinkCellProps & OptionalIconBeforeCellProps): JSX.Element {
    const { disabled, onClick: onClickHref } = useButtonClick({ route: href })

    return (
        <TGUICell
            Component={'label'}
            before={
                icon &&
                bgColor && (
                    <IconBeforeCell
                        icon={icon}
                        bgColor={bgColor}
                    />
                )
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
