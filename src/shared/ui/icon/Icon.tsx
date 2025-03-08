import type { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { type ElementType, memo } from 'react'
import type { IconName } from './IconName'

interface IconProps extends LucideProps {
    name: IconName
}

const IconsMap = LucideIcons

export const Icon = memo(function Icon({ name, ...props }: IconProps) {
    const IconComponent =
        (IconsMap[name] as ElementType) || LucideIcons.HelpCircle

    return <IconComponent {...props} />
})
