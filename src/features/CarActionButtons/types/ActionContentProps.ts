import type { BackgroundColor } from '@/shared/types'
import type { LucideIconName } from '@/shared/ui'
import type { CarCategory } from './CarCategories'

interface BaseActionContent {
    icon: LucideIconName
    bgColor: BackgroundColor
}

export interface ActionContentData extends BaseActionContent {
    name: CarCategory
}

export interface ActionContentProps extends BaseActionContent {
    href: string
    name: string
}
