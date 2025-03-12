import { Placeholder } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren, memo } from 'react'
import { Header } from '@/features/header'
import { EditContextProvider } from '@/entities/edit'

export const DashboardLayout = memo(function DashboardLayout({
    children
}: PropsWithChildren) {
    return (
        <EditContextProvider>
            <Header />

            {children}

            <Placeholder />
        </EditContextProvider>
    )
})
