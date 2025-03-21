import { Cell, type CellProps } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { IconBeforeCell } from './icon/IconBeforeCell'
import type { IconBeforeCellProps } from './icon/IconBeforeCellProps'

export const IconCell = memo(function IconCell({
    icon,
    bgColor,
    ...props
}: IconBeforeCellProps & CellProps): JSX.Element {
    return (
        <Cell
            before={
                <IconBeforeCell
                    icon={icon}
                    bgColor={bgColor}
                />
            }
            {...props}
        />
    )
})
