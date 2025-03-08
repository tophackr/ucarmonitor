import { Cell, type CellProps } from '@telegram-apps/telegram-ui'
import { IconBeforeCell } from './icon/IconBeforeCell'
import type { IconBeforeCellProps } from './icon/IconBeforeCellProps'

export function IconCell({
    icon,
    bgColor,
    ...props
}: IconBeforeCellProps & CellProps) {
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
}
