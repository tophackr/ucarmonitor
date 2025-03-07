import type { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { type ElementType, memo } from 'react'
import type { LucideIconName } from './LucideIconName'

interface LucideIconProps extends LucideProps {
    name: LucideIconName
}

const IconsMap = LucideIcons

export const LucideIcon = memo(function LucideIcon({
    name,
    ...props
}: LucideIconProps) {
    const IconComponent =
        (IconsMap[name] as ElementType) || LucideIcons.HelpCircle

    return <IconComponent {...props} />
})
