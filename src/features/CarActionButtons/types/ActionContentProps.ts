import type { CarActionCategory } from '@/entities/cars'
import type { BackgroundColor } from '@/shared/types'
import type { LucideIconName } from '@/shared/ui'

interface BaseActionContent {
    icon: LucideIconName
    bgColor: BackgroundColor
}

export interface ActionContentData extends BaseActionContent {
    name: CarActionCategory
}

export interface ActionContentProps extends BaseActionContent {
    href: string
    name: string
}
