import {
    List,
    type ListProps,
    Section,
    type SectionProps
} from '@telegram-apps/telegram-ui'
import { type PropsWithChildren, memo } from 'react'

interface ListSectionProps {
    listProps?: ListProps
    sectionProps?: SectionProps
}

export const ListSection = memo(function ListSection({
    children,
    listProps,
    sectionProps
}: PropsWithChildren<ListSectionProps>) {
    return (
        <List {...listProps}>
            <Section {...sectionProps}>{children}</Section>
        </List>
    )
})
