import { Modal as TGUIModal } from '@telegram-apps/telegram-ui'
import { Icon28Close } from '@telegram-apps/telegram-ui/dist/icons/28/close'
import { type JSX, type PropsWithChildren, type ReactNode, memo } from 'react'
import { ListSection, Modal } from '@/shared/ui'

interface SubtaskModalProps {
    trigger: ReactNode
}

export const ActionModal = memo(function ActionModal({
    trigger,
    children
}: PropsWithChildren<SubtaskModalProps>): JSX.Element {
    return (
        <Modal
            trigger={<div className={'flex'}>{trigger}</div>}
            header={
                <TGUIModal.Header
                    after={
                        <TGUIModal.Close>
                            <Icon28Close />
                        </TGUIModal.Close>
                    }
                />
            }
        >
            <ListSection>{children}</ListSection>
        </Modal>
    )
})
