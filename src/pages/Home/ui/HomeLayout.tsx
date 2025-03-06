import type { PropsWithChildren } from 'react'
import { ListSection } from '@/shared/ui'

export function HomeLayout({ children }: PropsWithChildren) {
    return <ListSection>{children}</ListSection>
}
