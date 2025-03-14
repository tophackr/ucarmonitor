import { Select, type SelectProps } from '@telegram-apps/telegram-ui'
import { type JSX, memo } from 'react'
import { IconBeforeCell, type IconBeforeCellProps } from '@/shared/ui/cell'

export const IconSelect = memo(function IconSelect({
    icon,
    bgColor,
    ...props
}: IconBeforeCellProps & SelectProps): JSX.Element {
    return (
        <Select
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
