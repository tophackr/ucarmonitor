import type { InteractionCategory } from '@/entities/interaction'
import type { BackgroundColor } from '@/shared/lib/dom'
import type { LucideIconName } from '@/shared/ui'

interface BaseActionContent {
    icon: LucideIconName
    bgColor: BackgroundColor
}

export interface ActionContentData extends BaseActionContent {
    name: InteractionCategory
}

export interface ActionContentProps extends BaseActionContent {
    href: string
    name: string
}
