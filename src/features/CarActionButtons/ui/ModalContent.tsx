import { LinkCell, LucideIcon } from '@/shared/ui'
import type { ActionContentProps } from '../types/ActionContentProps'

interface ModalContentProps {
    content: ActionContentProps[]
}

export function ModalContent({ content }: ModalContentProps) {
    return content.map(({ href, icon, bgColor, name }, index) => (
        <LinkCell
            key={index}
            href={href}
            Icon={<LucideIcon name={icon} />}
            bgColor={bgColor}
        >
            {name}
        </LinkCell>
    ))
}
