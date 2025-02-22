import type { PropsWithChildren } from 'react'
import { Header } from '@/features/Header'

export function HomeLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />

            {children}
        </>
    )
}
