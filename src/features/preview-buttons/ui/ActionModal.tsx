'use client'

import { type JSX, type PropsWithChildren, type ReactNode, memo } from 'react'
import { ListSection } from '@/shared/ui'
import { Modal } from '@/shared/ui/modal'

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
            header={<Modal.Header />}
        >
            <ListSection>{children}</ListSection>
        </Modal>
    )
})
