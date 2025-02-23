import type { PropsWithChildren } from 'react'
import { Header } from '@/features/Header'

export function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />

            {children}
        </>
    )
}
