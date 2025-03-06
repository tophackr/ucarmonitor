import { Placeholder } from '@telegram-apps/telegram-ui'
import type { PropsWithChildren } from 'react'
import { Header } from '@/features/Header'
import { EditContextProvider } from '@/entities/edit'

export function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <EditContextProvider>
            <Header />

            {children}

            <Placeholder />
        </EditContextProvider>
    )
}
