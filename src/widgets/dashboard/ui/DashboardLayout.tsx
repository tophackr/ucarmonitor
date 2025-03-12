import { Placeholder } from '@telegram-apps/telegram-ui'
import { type PropsWithChildren, memo } from 'react'
import { Header } from '@/features/header'
import { CarsInitContextProvider } from '@/entities/car'
import { EditContextProvider } from '@/entities/edit'

export const DashboardLayout = memo(function DashboardLayout({
    children
}: PropsWithChildren) {
    return (
        <CarsInitContextProvider>
            <EditContextProvider>
                <Header />

                {children}

                <Placeholder />
            </EditContextProvider>
        </CarsInitContextProvider>
    )
})
