import type { CellProps } from '@telegram-apps/telegram-ui'
import type { ChevronCellProps } from '../ChevronCell'
import type { IconCellProps } from '../icon/IconCellProps'

type PickedIconCellProps = Pick<IconCellProps, 'icon' | 'bgColor'>

export interface LinkCellProps
    extends PickedIconCellProps,
        ChevronCellProps,
        CellProps {
    href: string
}
