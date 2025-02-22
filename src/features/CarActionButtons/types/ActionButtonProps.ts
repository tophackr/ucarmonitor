import type { NestedTranslationClient, Translation } from '@/shared/i18n'
import type { LucideIconName } from '@/shared/ui'
import type { ActionContentProps } from './ActionContentProps'

export interface ActionButtonProps {
    icon: LucideIconName
    name: string & keyof Translation['CarActionButtons']
    link?: string
}

export interface ActionButtonContentProps extends ActionButtonProps {
    content: (
        id: string,
        t: NestedTranslationClient<'CarActionContents'>
    ) => ActionContentProps[]
}

export interface ActionButtonLinkProps extends ActionButtonProps {
    link: string
}

export type ActionModalProps = ActionButtonContentProps | ActionButtonLinkProps
