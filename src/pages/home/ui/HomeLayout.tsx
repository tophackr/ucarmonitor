import { type JSX, type PropsWithChildren, memo } from 'react'
import { ListSection } from '@/shared/ui'

export const HomeLayout = memo(function HomeLayout({
    children
}: PropsWithChildren): JSX.Element {
    return <ListSection>{children}</ListSection>
})
