import type { NestedTranslationClient, Translation } from '@/shared/i18n'
import type { IconName } from '@/shared/ui/icon'
import type { ActionContentProps } from './ActionContentProps'

export interface ActionButtonProps {
    icon: IconName
    name: string & keyof Translation['CarActionButtons']
    link?: string
}

export interface ActionButtonContentProps extends ActionButtonProps {
    content: (
        id: string,
        t: NestedTranslationClient<'CarCategoryName'>
    ) => ActionContentProps[]
}

export interface ActionButtonLinkProps extends ActionButtonProps {
    link: string
}

export type ActionModalProps = ActionButtonContentProps | ActionButtonLinkProps
