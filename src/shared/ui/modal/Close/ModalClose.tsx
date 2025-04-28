import { Drawer } from '@xelene/vaul-with-scroll-fix'
import type { ReactNode } from 'react'

export interface ModalCloseProps {
    children?: ReactNode
}

export const ModalClose = (props: ModalCloseProps) => (
    <Drawer.Close
        asChild
        {...props}
    />
)
