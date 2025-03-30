import type { CellProps } from '@telegram-apps/telegram-ui'
import type { ChevronAfterCellProps } from '../chevron-after/ChevronAfterCellProps'
import type { IconBeforeCellProps } from '../icon/IconBeforeCellProps'

type RequireBothOrNeither<T, K extends keyof T> =
    | (Required<Pick<T, K>> & Omit<T, K>)
    | (Partial<Record<K, never>> & Omit<T, K>)

export type OptionalIconBeforeCellProps = RequireBothOrNeither<
    IconBeforeCellProps,
    'icon' | 'bgColor'
>

export interface LinkCellProps extends ChevronAfterCellProps, CellProps {
    href: string
}
