'use client'

import { Placeholder } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'
import { Header } from '@/features/Header'
import { EditContextProvider } from '@/entities/edit'
import { useInitStore } from '../hooks/useInitStore'

export function DashboardLayout({ children }: PropsWithChildren) {
    useInitStore()

    return (
        <EditContextProvider>
            <Header />

            {children}

            <Placeholder />
        </EditContextProvider>
    )
}
