import type { PropsWithChildren } from 'react'
import { ListSection } from '@/shared/ui'

export function Layout({ children }: PropsWithChildren) {
    return <ListSection>{children}</ListSection>
}
