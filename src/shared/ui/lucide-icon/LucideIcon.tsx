import * as LucideIcons from 'lucide-react'
import type { ElementType } from 'react'
import type { LucideIconName } from './LucideIconName'

interface LucideIconProps extends LucideIcons.LucideProps {
    name: LucideIconName
}

export function LucideIcon({ name, ...props }: LucideIconProps) {
    const IconComponent =
        (LucideIcons[name] as ElementType) || LucideIcons.HelpCircle

    return <IconComponent {...props} />
}
