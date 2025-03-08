import { InlineButtons } from '@telegram-apps/telegram-ui'
import type { InlineButtonsItemProps } from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { LucideIcon } from '@/shared/ui'
import type { ActionButtonProps } from './types/ActionButtonProps'

export const ActionButton = memo(function ActionButton({
    icon,
    name,
    ...props
}: ActionButtonProps & InlineButtonsItemProps) {
    const t = useTranslations('CarActionButtons')

    return (
        <InlineButtons.Item
            text={t(name)}
            {...props}
        >
            <LucideIcon name={icon} />
        </InlineButtons.Item>
    )
})
