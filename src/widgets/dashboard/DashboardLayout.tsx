'use client'

import type { PropsWithChildren } from 'react'
import { Header } from '@/features/Header'
import { EditContextProvider } from '@/entities/edit'
import { useInitStore } from './useInitStore'

export function DashboardLayout({ children }: PropsWithChildren) {
    useInitStore()

    return (
        <EditContextProvider>
            <Header />

            {children}
        </EditContextProvider>
    )
}
