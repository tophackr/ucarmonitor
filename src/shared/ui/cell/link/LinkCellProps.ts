import type { CellProps } from '@telegram-apps/telegram-ui'
import type { ChevronAfterCellProps } from '../ChevronAfterCell'
import type { IconBeforeCellProps } from '../icon/IconBeforeCellProps'

export interface LinkCellProps
    extends IconBeforeCellProps,
        ChevronAfterCellProps,
        CellProps {
    href: string
}
