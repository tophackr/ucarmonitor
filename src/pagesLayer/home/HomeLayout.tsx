import { List, Section } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'

export function HomeLayout({ children }: PropsWithChildren) {
    return (
        <List>
            <Section>{children}</Section>
        </List>
    )
}
