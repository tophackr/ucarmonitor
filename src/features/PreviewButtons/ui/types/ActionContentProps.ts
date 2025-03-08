import type { InteractionCategory } from '@/entities/interaction'
import type { IconBeforeCellProps } from '@/shared/ui/cell'

export interface ActionContentData extends IconBeforeCellProps {
    name: InteractionCategory
}

export interface ActionContentProps extends IconBeforeCellProps {
    href: string
    name: string
}
