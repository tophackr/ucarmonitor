import {
    List,
    type ListProps,
    Section,
    type SectionProps
} from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'

interface ListSectionProps {
    listProps?: ListProps
    sectionProps?: SectionProps
}

export function ListSection({
    children,
    listProps,
    sectionProps
}: PropsWithChildren<ListSectionProps>) {
    return (
        <List {...listProps}>
            <Section {...sectionProps}>{children}</Section>
        </List>
    )
}
