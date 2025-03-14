import { Input, type InputProps } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { IconBeforeCell, type IconBeforeCellProps } from '@/shared/ui/cell'

export const IconInput = memo(function IconInput({
    icon,
    bgColor,
    ...props
}: IconBeforeCellProps & InputProps): JSX.Element {
    return (
        <Input
            before={
                <IconBeforeCell
                    icon={icon}
                    bgColor={bgColor}
                />
            }
            {...props}
        />
    )
})
