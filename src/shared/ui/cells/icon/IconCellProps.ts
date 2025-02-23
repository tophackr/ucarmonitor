import type { LucideProps } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { LucideIconName } from '../../lucide-icon'

type OmittedLucideIconProps = Omit<LucideProps, 'name'>

export interface IconCellProps extends OmittedLucideIconProps {
    icon: LucideIconName
    bgColor: CSSProperties['backgroundColor']
}
