import {
    Input,
    type InputProps as TGUIInputProps
} from '@telegram-apps/telegram-ui'
import type { BackgroundColor } from '../types'
import { IconCell } from './cells'
import type { LucideIconName } from './lucide-icon'

interface InputProps extends TGUIInputProps {
    icon: LucideIconName
    bgColor: BackgroundColor
}

export function IconInput({
    icon,
    bgColor,
    header,
    placeholder,
    ...props
}: InputProps) {
    return (
        <Input
            before={
                <IconCell
                    icon={icon}
                    bgColor={bgColor}
                />
            }
            header={header ?? placeholder}
            placeholder={placeholder ?? String(header)}
            {...props}
        />
    )
}
