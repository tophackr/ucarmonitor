import { VisuallyHidden } from '@telegram-apps/telegram-ui'
import {
    type ModalProps,
    Modal as TGUIModal
} from '@telegram-apps/telegram-ui/dist/components/Overlays/Modal/Modal'
import { Drawer } from '@xelene/vaul-with-scroll-fix'
import { memo } from 'react'

export const Modal = memo(function Modal({ children, ...props }: ModalProps) {
    return (
        <TGUIModal
            {...props}
            aria-describedby={undefined}
        >
            <VisuallyHidden>
                <Drawer.Title />
            </VisuallyHidden>

            {children}
        </TGUIModal>
    )
})
