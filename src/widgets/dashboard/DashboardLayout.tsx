'use client'

import type { PropsWithChildren } from 'react'
import { Header } from '@/features/Header'
import { useInitStore } from './useInitStore'

export function DashboardLayout({ children }: PropsWithChildren) {
    useInitStore()

    return (
        <>
            <Header />

            {children}
        </>
    )
}
