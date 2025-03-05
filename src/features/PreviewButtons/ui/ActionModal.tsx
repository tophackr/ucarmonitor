import { Icon28Close } from '@telegram-apps/telegram-ui/dist/icons/28/close'
import { type PropsWithChildren, type ReactNode } from 'react'
import { ListSection, Modal } from '@/shared/ui'

interface SubtaskModalProps {
    trigger: ReactNode
}

export function ActionModal({
    trigger,
    children
}: PropsWithChildren<SubtaskModalProps>) {
    return (
        <Modal
            trigger={<div className={'flex'}>{trigger}</div>}
            header={
                <Modal.Header
                    after={
                        <Modal.Close>
                            <Icon28Close />
                        </Modal.Close>
                    }
                />
            }
        >
            <ListSection>{children}</ListSection>
        </Modal>
    )
}
