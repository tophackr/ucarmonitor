import { type PropsWithChildren, memo } from 'react'
import { Toaster } from 'sonner'
import { I18nProvider } from '@/shared/i18n'
import { SettingsButton } from '@/shared/ui'
import { StoreProvider } from '../store'
import { TelegramProvider } from '../tma'

export const Providers = memo(function Providers({
    children
}: PropsWithChildren) {
    return (
        <StoreProvider>
            <TelegramProvider>
                <SettingsButton />
                <I18nProvider>{children}</I18nProvider>
                <Toaster />
            </TelegramProvider>
        </StoreProvider>
    )
})
