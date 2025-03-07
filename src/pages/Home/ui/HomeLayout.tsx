import { type PropsWithChildren, memo } from 'react'
import { ListSection } from '@/shared/ui'

export const HomeLayout = memo(function HomeLayout({
    children
}: PropsWithChildren) {
    return <ListSection>{children}</ListSection>
})
