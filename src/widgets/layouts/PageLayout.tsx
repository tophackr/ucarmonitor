import { List } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'

export function PageLayout({ children }: PropsWithChildren) {
    return <List>{children}</List>
}
