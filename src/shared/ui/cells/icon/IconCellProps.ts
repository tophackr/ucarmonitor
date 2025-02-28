import type { LucideProps } from 'lucide-react'
import type { BackgroundColor } from '@/shared/types'
import type { LucideIconName } from '@/shared/ui'

type OmittedLucideIconProps = Omit<LucideProps, 'name'>

export interface IconCellProps extends OmittedLucideIconProps {
    icon: LucideIconName
    bgColor: BackgroundColor
}
